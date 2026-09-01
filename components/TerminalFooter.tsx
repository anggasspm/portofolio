'use client';
import { useEffect, useRef, useState } from 'react';

type LogItem = { text: string; isCommand?: boolean };

export default function TerminalFooter() {
  const [logs, setLogs] = useState<LogItem[]>([]);
  const [inputVal, setInputVal] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalBodyRef = useRef<HTMLDivElement>(null);
  
  // 1. Tambahkan useRef ini untuk mencegah eksekusi ganda di Strict Mode
  const hasBooted = useRef(false);

  useEffect(() => {
    // 2. Cek apakah boot sudah berjalan, jika ya, hentikan eksekusi
    if (hasBooted.current) return;
    hasBooted.current = true;

    const bootSequence = [
      'INITIALIZING SECURE KERNEL...',
      'ESTABLISHING CONNECTION PROTOCOLS...',
      'VULNERABILITY SCANNER: STANDBY',
      'SYSTEM ONLINE.',
      "TYPE 'help' TO EXPLORE DIRECTORY.",
    ];

    bootSequence.forEach((line, index) => {
      setTimeout(() => {
        setLogs((prev) => [...prev, { text: line, isCommand: false }]);
      }, 400 * (index + 1));
    });
  }, []);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [logs]);

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const cmd = inputVal.trim().toLowerCase();
      setInputVal('');
      if (!cmd) return;

      const newLogs: LogItem[] = [{ text: cmd, isCommand: true }];

      switch (cmd) {
        case 'help':
          newLogs.push(
            { text: 'AVAILABLE COMMANDS:' },
            { text: '  whoami     - Display user information' },
            { text: '  projects   - List active deployments' },
            { text: '  contact    - Display communication channels' },
            { text: '  download   - Download curriculum vitae' },
            { text: '  inspect    - Toggle UI wireframe X-Ray' },
            { text: '  clear      - Clear terminal output' }
          );
          break;
        case 'whoami':
          newLogs.push({ text: '> Anggas — Full-Stack Developer. Informatics Student at UPN Veteran Jakarta.' });
          break;
        case 'projects':
          newLogs.push({ text: '> 1. GitBrief\n> 2. Mary Forensic Platform\n> 3. Lost & Found Platform' });
          break;
        case 'contact':
          newLogs.push({ text: '> Email: anggasspm@gmail.com' });
          break;
        case 'download':
          newLogs.push({ text: '> Initiating secure file transfer...' });
          setTimeout(() => {
            const link = document.createElement('a');
            link.href = 'CV_Anggas.pdf';
            link.download = 'CV_Anggas_FullStackDev.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            setLogs((prev) => [...prev, { text: '> Transfer complete: CV_Anggas_FullStackDev.pdf downloaded.' }]);
          }, 800);
          break;
        case 'inspect':
          document.body.classList.toggle('xray-mode');
          newLogs.push({
            text: document.body.classList.contains('xray-mode')
              ? '> Developer X-Ray Mode: ENABLED.'
              : '> Developer X-Ray Mode: DISABLED.',
          });
          break;
        case 'clear':
          setLogs([]);
          return;
        default:
          newLogs.push({ text: `> Command not found: ${cmd}. Type 'help'.` });
      }

      setLogs((prev) => [...prev, ...newLogs]);
    }
  };

  return (
    <footer id="terminal-footer" className="relative px-[6vw] pt-[40px] pb-[32px] border-t border-line mt-[40px]">
      <div className="flex justify-center mb-[40px]">
        <div
          onClick={() => inputRef.current?.focus()}
          className="w-full max-w-[740px] h-[340px] md:h-[340px] bg-[#020305] border border-line rounded-[10px] font-mono text-[12.5px] text-text overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05)] flex flex-col cursor-text"
        >
          <div className="flex items-center justify-center p-[12px_16px] bg-white/3 border-b border-line relative">
            <div className="flex gap-[6px] absolute left-[16px]">
              <span className="w-[10px] h-[10px] rounded-full bg-[#444]" />
              <span className="w-[10px] h-[10px] rounded-full bg-line" />
              <span className="w-[10px] h-[10px] rounded-full bg-line" />
            </div>
            <div className="text-[11px] text-muted tracking-[0.05em]">anggas-os_v2.0.4</div>
          </div>

          <div ref={terminalBodyRef} className="p-[20px] overflow-y-auto flex-1 flex flex-col gap-[6px] scrollbar-thin scrollbar-thumb-[#333]">
            <div className="flex flex-col gap-[6px]">
              {logs.map((log, index) => (
                <div key={index} className={log.isCommand ? 'text-white' : 'text-muted'}>
                  {log.isCommand ? `guest@anggas-os:~$ ${log.text}` : log.text}
                </div>
              ))}
            </div>

            <div className="flex gap-[10px] items-center mt-[4px]">
              <span className="text-white font-semibold opacity-80">guest@anggas-os:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleCommand}
                autoComplete="off"
                spellCheck={false}
                placeholder="_"
                className="flex-1 bg-transparent border-none text-white font-mono text-[12.5px] outline-none caret-white placeholder:text-[#555]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-[12px] flex-wrap pt-[24px] font-mono text-[11px] text-muted tracking-[0.05em] flex-col md:flex-row text-center md:text-left">
        <span className="flex items-center gap-[8px] text-white">
          <span className="w-[6px] h-[6px] rounded-full bg-white shadow-[0_0_8px_#fff] animate-status-ping" />
          SYSTEM: ONLINE
        </span>
        <span className="hidden md:inline text-line">•</span>
        <span>ENCRYPTION: ACTIVE</span>
        <div className="flex-1 hidden md:block" />
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          data-hover
          aria-label="Back to top"
          className="inline-flex items-center justify-center w-[40px] h-[40px] rounded-full border border-line bg-panel text-white hover:border-accent hover:bg-white/10 transition-colors"
        >
          <svg className="w-[15px] h-[15px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </button>
      </div>
    </footer>
  );
}