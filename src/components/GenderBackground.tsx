import { useGender } from '@/contexts/GenderContext';

const FemaleBackground = () => (
  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="fem-grad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#F8E8F0" />
        <stop offset="45%" stopColor="#F0E0E8" />
        <stop offset="100%" stopColor="#E8D8E0" />
      </linearGradient>
    </defs>
    <rect width="400" height="900" fill="url(#fem-grad)" />
    {/* Micro star particles - tiny circular dots */}
    {[
      { cx: 45, cy: 80, r: 1.2 }, { cx: 320, cy: 140, r: 1 },
      { cx: 180, cy: 220, r: 1.4 }, { cx: 70, cy: 350, r: 1 },
      { cx: 350, cy: 420, r: 1.3 }, { cx: 130, cy: 510, r: 1.1 },
      { cx: 290, cy: 600, r: 1 }, { cx: 60, cy: 700, r: 1.2 },
      { cx: 220, cy: 780, r: 1 }, { cx: 370, cy: 260, r: 1.1 },
      { cx: 160, cy: 650, r: 1.3 }, { cx: 250, cy: 450, r: 1 },
    ].map((s, i) => (
      <circle key={`dot-${i}`} cx={s.cx} cy={s.cy} r={s.r} fill="#fff" opacity={0.35 + (i % 3) * 0.1}>
        <animate attributeName="opacity" values={`${0.2};${0.5};${0.2}`} dur={`${3 + i * 0.5}s`} repeatCount="indefinite" />
      </circle>
    ))}
    {/* 4-point sparkles */}
    {[
      { x: 100, y: 160, s: 3 }, { x: 310, y: 320, s: 2.5 },
      { x: 55, y: 500, s: 2 }, { x: 260, y: 680, s: 3 },
      { x: 340, y: 50, s: 2.5 }, { x: 190, y: 850, s: 2 },
    ].map((sp, i) => (
      <g key={`sparkle-${i}`} transform={`translate(${sp.x}, ${sp.y})`} opacity={0.3}>
        <line x1={-sp.s} y1="0" x2={sp.s} y2="0" stroke="#fff" strokeWidth="0.8" strokeLinecap="round" />
        <line x1="0" y1={-sp.s} x2="0" y2={sp.s} stroke="#fff" strokeWidth="0.8" strokeLinecap="round" />
        <animate attributeName="opacity" values="0.15;0.4;0.15" dur={`${2.5 + i * 0.6}s`} repeatCount="indefinite" />
      </g>
    ))}
  </svg>
);

const MaleBackground = () => (
  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="male-grad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#C7E3FE" />
        <stop offset="45%" stopColor="#BDD1F8" />
        <stop offset="100%" stopColor="#D5E5FA" />
      </linearGradient>
    </defs>
    <rect width="400" height="900" fill="url(#male-grad)" />
    {/* Micro star particles */}
    {[
      { cx: 60, cy: 100, r: 1.1 }, { cx: 300, cy: 170, r: 1 },
      { cx: 170, cy: 280, r: 1.3 }, { cx: 80, cy: 390, r: 1 },
      { cx: 340, cy: 460, r: 1.2 }, { cx: 140, cy: 550, r: 1.1 },
      { cx: 280, cy: 640, r: 1 }, { cx: 50, cy: 740, r: 1.2 },
      { cx: 230, cy: 820, r: 1 }, { cx: 360, cy: 300, r: 1.1 },
      { cx: 200, cy: 500, r: 1.3 }, { cx: 110, cy: 200, r: 1 },
    ].map((s, i) => (
      <circle key={`dot-${i}`} cx={s.cx} cy={s.cy} r={s.r} fill="#fff" opacity={0.3 + (i % 3) * 0.08}>
        <animate attributeName="opacity" values={`${0.18};${0.42};${0.18}`} dur={`${3.5 + i * 0.4}s`} repeatCount="indefinite" />
      </circle>
    ))}
    {/* 4-point sparkles */}
    {[
      { x: 90, y: 180, s: 2.5 }, { x: 320, y: 350, s: 2 },
      { x: 50, y: 530, s: 3 }, { x: 270, y: 720, s: 2.5 },
      { x: 350, y: 70, s: 2 }, { x: 180, y: 880, s: 2.5 },
    ].map((sp, i) => (
      <g key={`sparkle-${i}`} transform={`translate(${sp.x}, ${sp.y})`} opacity={0.25}>
        <line x1={-sp.s} y1="0" x2={sp.s} y2="0" stroke="#fff" strokeWidth="0.7" strokeLinecap="round" />
        <line x1="0" y1={-sp.s} x2="0" y2={sp.s} stroke="#fff" strokeWidth="0.7" strokeLinecap="round" />
        <animate attributeName="opacity" values="0.12;0.35;0.12" dur={`${3 + i * 0.5}s`} repeatCount="indefinite" />
      </g>
    ))}
  </svg>
);

const GenderBackground = () => {
  const { gender } = useGender();
  return gender === 'female' ? <FemaleBackground /> : <MaleBackground />;
};

export default GenderBackground;
