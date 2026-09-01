'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x05070a, 0.025);

    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 200);
    camera.position.set(0, 0, 9);

    // Eclipse Group
    const eclipseGroup = new THREE.Group();
    scene.add(eclipseGroup);

    const eclipseGeo = new THREE.PlaneGeometry(16, 16);
    const eclipseMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uOpacity: { value: 1.0 },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform float uOpacity;
        varying vec2 vUv;

        void main() {
            vec2 uv = (vUv - 0.5) * 2.0;
            float r = length(uv);
            float angle = atan(uv.y, uv.x);
            
            float R = 0.55;
            float isCore = 1.0 - smoothstep(R - 0.01, R + 0.005, r);
            float coreMask = smoothstep(R, R + 0.01, r);
            
            float ring = 0.003 / (abs(r - R) + 0.001);
            ring *= coreMask;
            
            float corona = exp(-(r - R) * 25.0) * 0.35;
            corona *= coreMask;
            
            float crescent = smoothstep(-1.0, 1.0, sin(angle - uTime * 0.4)) * 0.8 + 0.4;
            float totalLight = (ring + corona) * crescent;
            vec3 col = vec3(1.0, 1.0, 1.0) * totalLight;
            float alpha = clamp(max(isCore, totalLight), 0.0, 1.0) * uOpacity;
            
            gl_FragColor = vec4(col, alpha);
        }
      `,
      transparent: true,
      blending: THREE.NormalBlending,
      depthWrite: false,
    });

    const eclipseMesh = new THREE.Mesh(eclipseGeo, eclipseMat);
    eclipseGroup.add(eclipseMesh);

    // Starfield
    const STAR_COUNT = 1500;
    const starPos = new Float32Array(STAR_COUNT * 3);
    for (let i = 0; i < STAR_COUNT; i++) {
      starPos[i * 3] = (Math.random() - 0.5) * 150;
      starPos[i * 3 + 1] = (Math.random() - 0.5) * 150;
      starPos[i * 3 + 2] = (Math.random() - 0.5) * 80 - 40;
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    const starMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.015,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const starField = new THREE.Points(starGeo, starMat);
    scene.add(starField);

    let mouseX = 0;
    let mouseY = 0;
    const handlePointerMove = (e: PointerEvent) => {
      mouseX = e.clientX / window.innerWidth - 0.5;
      mouseY = e.clientY / window.innerHeight - 0.5;
    };
    window.addEventListener('pointermove', handlePointerMove);

    const desktopBaseY = 0.0;
    const mobileBaseY = -3.5;

    const updateLayout = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);

      if (window.innerWidth > 800) {
        eclipseGroup.scale.setScalar(1.2);
        eclipseGroup.position.set(4.5, desktopBaseY, 0);
      } else {
        eclipseGroup.scale.setScalar(0.75);
        eclipseGroup.position.set(0, mobileBaseY, -2.0);
      }
    };
    window.addEventListener('resize', updateLayout);
    updateLayout();

    const clock = new THREE.Clock();
    let animId: number;

    const loop = () => {
      const t = clock.getElapsedTime();
      const fadeDistance = window.innerHeight * 1.4;
      const p = fadeDistance > 0 ? Math.min(1, Math.max(0, window.scrollY / fadeDistance)) : 0;

      eclipseMat.uniforms.uTime.value = t;
      starField.rotation.y = -t * 0.008;

      const isDesktop = window.innerWidth > 800;
      const baseY = isDesktop ? desktopBaseY : mobileBaseY;
      eclipseGroup.position.y = baseY + p * 8.0;

      eclipseMat.uniforms.uOpacity.value = Math.max(0.0, 1.0 - p * 1.5);

      const targetX = mouseX * 1.2;
      const targetY = -mouseY * 1.2;

      camera.position.x += (targetX - camera.position.x) * 0.03;
      camera.position.y += (targetY - camera.position.y) * 0.03;
      camera.lookAt(0, camera.position.y, 0);

      renderer.render(scene, camera);
      animId = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('resize', updateLayout);
      cancelAnimationFrame(animId);
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} id="scene" className="fixed inset-0 z-0 pointer-events-none" />;
}