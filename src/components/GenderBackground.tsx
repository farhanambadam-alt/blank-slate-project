import { useGender } from '@/contexts/GenderContext';

const FemaleBackground = () => (
  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="fem-grad" cx="50%" cy="0%" r="100%">
        <stop offset="0%" stopColor="#FFB6C1" stopOpacity="0.5" />
        <stop offset="40%" stopColor="#FADADD" stopOpacity="0.35" />
        <stop offset="70%" stopColor="#FFE5EC" stopOpacity="0.25" />
        <stop offset="100%" stopColor="#FFF5F7" stopOpacity="0.1" />
      </radialGradient>
      <radialGradient id="fem-glow" cx="50%" cy="15%" r="60%">
        <stop offset="0%" stopColor="#FFB6C1" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#FFB6C1" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="400" height="800" fill="url(#fem-grad)" />
    <rect width="400" height="800" fill="url(#fem-glow)" />
    {/* Light rays */}
    {[...Array(7)].map((_, i) => (
      <line
        key={i}
        x1="200"
        y1="0"
        x2={60 + i * 50}
        y2="800"
        stroke="#FFB6C1"
        strokeOpacity={0.06 + (i % 3) * 0.02}
        strokeWidth={15 + (i % 2) * 10}
      />
    ))}
    {/* Bokeh sparkles */}
    {[
      { cx: 80, cy: 120, r: 3 }, { cx: 320, cy: 80, r: 2 },
      { cx: 150, cy: 250, r: 2.5 }, { cx: 350, cy: 300, r: 1.5 },
      { cx: 50, cy: 400, r: 2 }, { cx: 280, cy: 180, r: 3 },
      { cx: 200, cy: 500, r: 1.8 }, { cx: 100, cy: 600, r: 2.5 },
      { cx: 300, cy: 550, r: 2 }, { cx: 180, cy: 350, r: 1.5 },
    ].map((s, i) => (
      <circle key={i} cx={s.cx} cy={s.cy} r={s.r} fill="#fff" opacity={0.3 + (i % 3) * 0.1}>
        <animate attributeName="opacity" values={`${0.2};${0.5};${0.2}`} dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
      </circle>
    ))}
  </svg>
);

const MaleBackground = () => (
  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="male-grad" cx="50%" cy="0%" r="100%">
        <stop offset="0%" stopColor="#B0D4F1" stopOpacity="0.4" />
        <stop offset="40%" stopColor="#DCEEFF" stopOpacity="0.3" />
        <stop offset="70%" stopColor="#EAF4FF" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#F5F9FF" stopOpacity="0.08" />
      </radialGradient>
      <radialGradient id="male-glow" cx="50%" cy="15%" r="55%">
        <stop offset="0%" stopColor="#A8CCE8" stopOpacity="0.18" />
        <stop offset="100%" stopColor="#A8CCE8" stopOpacity="0" />
      </radialGradient>
      {/* Vignette */}
      <radialGradient id="male-vig" cx="50%" cy="50%" r="70%">
        <stop offset="60%" stopColor="transparent" stopOpacity="0" />
        <stop offset="100%" stopColor="#1a2a3a" stopOpacity="0.04" />
      </radialGradient>
    </defs>
    <rect width="400" height="800" fill="url(#male-grad)" />
    <rect width="400" height="800" fill="url(#male-glow)" />
    <rect width="400" height="800" fill="url(#male-vig)" />
    {/* Subtle light rays */}
    {[...Array(6)].map((_, i) => (
      <line
        key={i}
        x1="200"
        y1="0"
        x2={70 + i * 55}
        y2="800"
        stroke="#B0D4F1"
        strokeOpacity={0.05 + (i % 2) * 0.02}
        strokeWidth={12 + (i % 3) * 8}
      />
    ))}
    {/* Glow particles */}
    {[
      { cx: 90, cy: 150, r: 2.5 }, { cx: 310, cy: 100, r: 2 },
      { cx: 160, cy: 280, r: 2 }, { cx: 340, cy: 320, r: 1.5 },
      { cx: 60, cy: 420, r: 1.8 }, { cx: 270, cy: 200, r: 2.5 },
      { cx: 190, cy: 520, r: 1.5 }, { cx: 120, cy: 620, r: 2 },
    ].map((s, i) => (
      <circle key={i} cx={s.cx} cy={s.cy} r={s.r} fill="#fff" opacity={0.25 + (i % 3) * 0.08}>
        <animate attributeName="opacity" values={`${0.15};${0.4};${0.15}`} dur={`${2.5 + i * 0.4}s`} repeatCount="indefinite" />
      </circle>
    ))}
  </svg>
);

const GenderBackground = () => {
  const { gender } = useGender();
  return gender === 'female' ? <FemaleBackground /> : <MaleBackground />;
};

export default GenderBackground;
