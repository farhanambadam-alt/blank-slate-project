import { useGender } from '@/contexts/GenderContext';

const DOTS = [
  { cx: 55, cy: 65, r: 1.8 }, { cx: 195, cy: 110, r: 1.3 },
  { cx: 310, cy: 180, r: 1 }, { cx: 140, cy: 250, r: 1.8 },
  { cx: 350, cy: 330, r: 1.3 }, { cx: 80, cy: 420, r: 1.5 },
  { cx: 250, cy: 480, r: 1.1 }, { cx: 180, cy: 560, r: 1.6 },
  { cx: 320, cy: 620, r: 1.3 }, { cx: 60, cy: 700, r: 1.5 },
  { cx: 230, cy: 760, r: 1 }, { cx: 370, cy: 820, r: 1.3 },
  { cx: 110, cy: 150, r: 0.8 }, { cx: 280, cy: 260, r: 1.1 },
  { cx: 45, cy: 530, r: 1.3 }, { cx: 340, cy: 500, r: 0.8 },
  { cx: 200, cy: 380, r: 1.5 }, { cx: 160, cy: 680, r: 1 },
  { cx: 30, cy: 300, r: 1.2 }, { cx: 380, cy: 150, r: 1 },
  { cx: 120, cy: 850, r: 1.4 }, { cx: 270, cy: 50, r: 1.1 },
  { cx: 90, cy: 580, r: 0.9 }, { cx: 330, cy: 720, r: 1.3 },
  { cx: 170, cy: 40, r: 1 }, { cx: 50, cy: 180, r: 1.2 },
  { cx: 390, cy: 440, r: 0.9 }, { cx: 220, cy: 870, r: 1.1 },
];

const SPARKLES = [
  { x: 145, y: 95, s: 0.35 }, { x: 310, y: 280, s: 0.55 },
  { x: 230, y: 430, s: 0.4 }, { x: 80, y: 340, s: 0.3 },
  { x: 350, y: 550, s: 0.35 }, { x: 100, y: 620, s: 0.5 },
  { x: 270, y: 700, s: 0.35 }, { x: 55, y: 190, s: 0.28 },
  { x: 330, y: 80, s: 0.42 }, { x: 190, y: 600, s: 0.3 },
  { x: 360, y: 750, s: 0.35 }, { x: 70, y: 830, s: 0.42 },
  { x: 200, y: 170, s: 0.32 }, { x: 40, y: 470, s: 0.38 },
  { x: 300, y: 400, s: 0.45 }, { x: 160, y: 780, s: 0.33 },
  { x: 380, y: 250, s: 0.3 }, { x: 120, y: 500, s: 0.4 },
];

const SparklesSVG = () => (
  <>
    {DOTS.map((s, i) => (
      <circle key={`d-${i}`} cx={s.cx} cy={s.cy} r={s.r} fill="#fff" opacity={0.45 + (i % 3) * 0.12}>
        <animate attributeName="opacity" values={`${0.25};${0.65};${0.25}`} dur={`${3 + i * 0.35}s`} repeatCount="indefinite" />
      </circle>
    ))}
    {SPARKLES.map((sp, i) => (
      <g key={`s-${i}`} transform={`translate(${sp.x}, ${sp.y}) scale(${sp.s})`} style={{ filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.8))' }}>
        <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z" fill="#fff" opacity="0.7" />
        <animate attributeName="opacity" values="0.3;0.85;0.3" dur={`${2.5 + i * 0.45}s`} repeatCount="indefinite" />
      </g>
    ))}
  </>
);

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
    <SparklesSVG />
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
    <SparklesSVG />
  </svg>
);

const GenderBackground = () => {
  const { gender } = useGender();
  return gender === 'female' ? <FemaleBackground /> : <MaleBackground />;
};

export default GenderBackground;
