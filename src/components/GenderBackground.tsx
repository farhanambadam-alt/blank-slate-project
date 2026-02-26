import { useGender } from '@/contexts/GenderContext';

const FemaleBackground = () => (
  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="fem-base" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#F5B8E8" />
        <stop offset="100%" stopColor="#F0B0E0" />
      </linearGradient>
      <radialGradient id="fem-glow" cx="50%" cy="45%" r="45%">
        <stop offset="0%" stopColor="#D8C0F0" stopOpacity="0.7" />
        <stop offset="60%" stopColor="#E0B8F0" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#F5B8E8" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="400" height="900" fill="url(#fem-base)" />
    <rect width="400" height="900" fill="url(#fem-glow)" />
    {/* Micro dot particles */}
    {[
      { cx: 55, cy: 65, r: 2 }, { cx: 195, cy: 110, r: 1.5 },
      { cx: 310, cy: 180, r: 1.2 }, { cx: 140, cy: 250, r: 2.2 },
      { cx: 350, cy: 330, r: 1.5 }, { cx: 80, cy: 420, r: 1.8 },
      { cx: 250, cy: 480, r: 1.3 }, { cx: 180, cy: 560, r: 2 },
      { cx: 320, cy: 620, r: 1.5 }, { cx: 60, cy: 700, r: 1.8 },
      { cx: 230, cy: 760, r: 1.2 }, { cx: 370, cy: 820, r: 1.5 },
      { cx: 110, cy: 150, r: 1 }, { cx: 280, cy: 260, r: 1.3 },
      { cx: 45, cy: 530, r: 1.5 }, { cx: 340, cy: 500, r: 1 },
      { cx: 200, cy: 380, r: 1.8 }, { cx: 160, cy: 680, r: 1.2 },
    ].map((s, i) => (
      <circle key={`d-${i}`} cx={s.cx} cy={s.cy} r={s.r} fill="#fff" opacity={0.5 + (i % 3) * 0.15}>
        <animate attributeName="opacity" values={`${0.3};${0.7};${0.3}`} dur={`${3 + i * 0.4}s`} repeatCount="indefinite" />
      </circle>
    ))}
    {/* 4-point cross sparkles */}
    {[
      { x: 145, y: 95, s: 5 }, { x: 310, y: 280, s: 8 },
      { x: 230, y: 430, s: 6 }, { x: 80, y: 340, s: 4 },
      { x: 350, y: 550, s: 5 }, { x: 100, y: 620, s: 7 },
      { x: 270, y: 700, s: 5 }, { x: 55, y: 190, s: 4 },
      { x: 330, y: 80, s: 6 }, { x: 190, y: 600, s: 4 },
      { x: 360, cy: 750, s: 5 }, { x: 70, y: 830, s: 6 },
    ].map((sp, i) => (
      <g key={`s-${i}`} transform={`translate(${sp.x}, ${sp.y || 0})`}>
        <line x1={-sp.s} y1="0" x2={sp.s} y2="0" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
        <line x1="0" y1={-sp.s} x2="0" y2={sp.s} stroke="#fff" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
        <animate attributeName="opacity" values="0.3;0.8;0.3" dur={`${2.5 + i * 0.5}s`} repeatCount="indefinite" />
      </g>
    ))}
  </svg>
);

const MaleBackground = () => (
  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="male-base" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#90C0F0" />
        <stop offset="100%" stopColor="#88B8E8" />
      </linearGradient>
      <radialGradient id="male-glow" cx="50%" cy="45%" r="45%">
        <stop offset="0%" stopColor="#A0C8F8" stopOpacity="0.7" />
        <stop offset="60%" stopColor="#B8D4F8" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#90C0F0" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="400" height="900" fill="url(#male-base)" />
    <rect width="400" height="900" fill="url(#male-glow)" />
    {/* Micro dot particles */}
    {[
      { cx: 60, cy: 70, r: 2 }, { cx: 200, cy: 120, r: 1.5 },
      { cx: 320, cy: 190, r: 1.2 }, { cx: 130, cy: 260, r: 2.2 },
      { cx: 340, cy: 340, r: 1.5 }, { cx: 75, cy: 430, r: 1.8 },
      { cx: 260, cy: 490, r: 1.3 }, { cx: 175, cy: 570, r: 2 },
      { cx: 310, cy: 630, r: 1.5 }, { cx: 55, cy: 710, r: 1.8 },
      { cx: 240, cy: 770, r: 1.2 }, { cx: 365, cy: 830, r: 1.5 },
      { cx: 120, cy: 160, r: 1 }, { cx: 290, cy: 270, r: 1.3 },
      { cx: 50, cy: 540, r: 1.5 }, { cx: 350, cy: 510, r: 1 },
      { cx: 210, cy: 390, r: 1.8 }, { cx: 155, cy: 690, r: 1.2 },
    ].map((s, i) => (
      <circle key={`d-${i}`} cx={s.cx} cy={s.cy} r={s.r} fill="#fff" opacity={0.5 + (i % 3) * 0.15}>
        <animate attributeName="opacity" values={`${0.3};${0.7};${0.3}`} dur={`${3 + i * 0.4}s`} repeatCount="indefinite" />
      </circle>
    ))}
    {/* 4-point cross sparkles */}
    {[
      { x: 150, y: 100, s: 5 }, { x: 300, y: 290, s: 8 },
      { x: 220, y: 440, s: 6 }, { x: 85, y: 350, s: 4 },
      { x: 345, y: 560, s: 5 }, { x: 95, y: 630, s: 7 },
      { x: 280, y: 710, s: 5 }, { x: 50, y: 200, s: 4 },
      { x: 325, y: 85, s: 6 }, { x: 185, y: 610, s: 4 },
      { x: 355, y: 760, s: 5 }, { x: 75, y: 840, s: 6 },
    ].map((sp, i) => (
      <g key={`s-${i}`} transform={`translate(${sp.x}, ${sp.y})`}>
        <line x1={-sp.s} y1="0" x2={sp.s} y2="0" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
        <line x1="0" y1={-sp.s} x2="0" y2={sp.s} stroke="#fff" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
        <animate attributeName="opacity" values="0.3;0.8;0.3" dur={`${2.5 + i * 0.5}s`} repeatCount="indefinite" />
      </g>
    ))}
  </svg>
);

const GenderBackground = () => {
  const { gender } = useGender();
  return gender === 'female' ? <FemaleBackground /> : <MaleBackground />;
};

export default GenderBackground;
