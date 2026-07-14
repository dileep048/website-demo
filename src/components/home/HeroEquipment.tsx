export type EquipmentVariant =
  | "rotocone-vacuum-dryer"
  | "syrup-manufacturing-plant"
  | "ointment-manufacturing-plant";

type HeroEquipmentProps = {
  variant: EquipmentVariant;
};

const STATUS: Record<EquipmentVariant, string> = {
  "rotocone-vacuum-dryer": "VACUUM DRYING",
  "syrup-manufacturing-plant": "LIQUID PROCESSING",
  "ointment-manufacturing-plant": "HOMOGENIZING",
};

export function HeroEquipment({ variant }: HeroEquipmentProps) {
  return (
    <div className="hero-equipment hero-equipment-enter relative flex h-full w-full items-center justify-center">
      <div className="hero-equip-ring hero-equip-ring-1 absolute rounded-full border border-white/10" />
      <div className="hero-equip-ring hero-equip-ring-2 absolute rounded-full border border-accent/20" />

      <svg
        viewBox="0 0 480 360"
        className="relative z-10 h-full w-full max-h-[320px]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <ellipse cx="240" cy="310" rx="150" ry="18" fill="rgba(249,115,22,0.12)" />
        <ellipse cx="240" cy="308" rx="120" ry="10" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />

        {variant === "rotocone-vacuum-dryer" && <RcvdMachine />}
        {variant === "syrup-manufacturing-plant" && <LiquidPlantMachine />}
        {variant === "ointment-manufacturing-plant" && <OintmentPlantMachine />}

        <g>
          <rect
            x="155"
            y="318"
            width="170"
            height="28"
            rx="14"
            fill="rgba(249,115,22,0.2)"
            stroke="rgba(249,115,22,0.5)"
            strokeWidth="1"
          />
          <text
            x="240"
            y="337"
            textAnchor="middle"
            fill="#fdba74"
            fontSize="11"
            fontFamily="system-ui, sans-serif"
            fontWeight="600"
          >
            {STATUS[variant]}
          </text>
        </g>

        <defs>
          <linearGradient id="machineBody" x1="140" y1="100" x2="340" y2="300" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="rgba(148,163,184,0.45)" />
            <stop offset="40%" stopColor="rgba(100,116,139,0.35)" />
            <stop offset="100%" stopColor="rgba(51,65,85,0.5)" />
          </linearGradient>
          <linearGradient id="tankBody" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(148,163,184,0.4)" />
            <stop offset="100%" stopColor="rgba(51,65,85,0.55)" />
          </linearGradient>
          <linearGradient id="liquidFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(56,189,248,0.35)" />
            <stop offset="100%" stopColor="rgba(14,165,233,0.55)" />
          </linearGradient>
          <linearGradient id="creamFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(251,146,60,0.35)" />
            <stop offset="100%" stopColor="rgba(249,115,22,0.5)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

/** Rotocone Vacuum Dryer — rotating diamond cone */
function RcvdMachine() {
  return (
    <g>
      <g stroke="rgba(255,255,255,0.35)" strokeWidth="3" strokeLinecap="round">
        <line x1="110" y1="290" x2="140" y2="160" />
        <line x1="370" y1="290" x2="340" y2="160" />
        <line x1="140" y1="160" x2="340" y2="160" />
        <line x1="110" y1="290" x2="370" y2="290" />
        <rect
          x="225"
          y="100"
          width="30"
          height="60"
          rx="4"
          fill="rgba(11,61,107,0.6)"
          stroke="rgba(255,255,255,0.4)"
        />
      </g>

      <g className="hero-equip-cone">
        <path
          d="M240 100 L340 200 L240 300 L140 200 Z"
          fill="url(#machineBody)"
          stroke="rgba(255,255,255,0.55)"
          strokeWidth="2"
        />
        <path
          d="M240 130 L310 200 L240 270 L170 200 Z"
          fill="rgba(8,45,79,0.35)"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="1.5"
        />
        <circle cx="240" cy="200" r="28" fill="rgba(249,115,22,0.25)" stroke="rgba(249,115,22,0.7)" strokeWidth="2" />
        <circle cx="240" cy="200" r="12" fill="rgba(249,115,22,0.5)" stroke="#f97316" strokeWidth="1.5" />
        <ellipse
          cx="280"
          cy="170"
          rx="14"
          ry="18"
          fill="rgba(56,189,248,0.2)"
          stroke="rgba(125,211,252,0.5)"
          strokeWidth="1.5"
        />
      </g>

      <g>
        <rect
          x="205"
          y="70"
          width="70"
          height="36"
          rx="6"
          fill="rgba(15,23,42,0.5)"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="2"
        />
        <rect x="215" y="78" width="20" height="8" rx="2" fill="rgba(249,115,22,0.7)" className="hero-equip-led" />
        <rect x="245" y="78" width="20" height="8" rx="2" fill="rgba(34,197,94,0.6)" className="hero-equip-led-alt" />
      </g>

      <g stroke="rgba(255,255,255,0.4)" strokeWidth="4" strokeLinecap="round">
        <path d="M80 180 H140" />
        <path d="M80 180 V140 H60" />
      </g>
      <circle cx="60" cy="140" r="10" fill="rgba(249,115,22,0.3)" stroke="#f97316" strokeWidth="2" />

      <g stroke="rgba(255,255,255,0.4)" strokeWidth="4" strokeLinecap="round">
        <path d="M340 200 H420" />
        <path d="M420 200 V240" />
      </g>
      <rect
        x="408"
        y="238"
        width="24"
        height="18"
        rx="3"
        fill="rgba(56,189,248,0.25)"
        stroke="rgba(125,211,252,0.5)"
        strokeWidth="1.5"
      />

      <circle className="hero-equip-flow-1" cx="90" cy="180" r="3.5" fill="#f97316" />
      <circle className="hero-equip-flow-2" cx="110" cy="180" r="2.5" fill="#fb923c" />
      <circle className="hero-equip-flow-3" cx="360" cy="200" r="3" fill="#38bdf8" />
      <circle className="hero-equip-flow-4" cx="390" cy="200" r="2.5" fill="#7dd3fc" />

      <g className="hero-equip-dust">
        <circle cx="200" cy="190" r="2" fill="rgba(255,255,255,0.5)" />
        <circle cx="260" cy="210" r="1.5" fill="rgba(249,115,22,0.6)" />
        <circle cx="220" cy="230" r="2" fill="rgba(56,189,248,0.5)" />
        <circle cx="275" cy="185" r="1.5" fill="rgba(255,255,255,0.4)" />
        <circle cx="195" cy="215" r="1.5" fill="rgba(249,115,22,0.5)" />
      </g>

      <g className="hero-equip-gear-lg">
        <Gear cx={90} cy={250} r={32} teeth={8} />
      </g>
      <g className="hero-equip-gear-sm">
        <Gear cx={390} cy={270} r={22} teeth={6} />
      </g>
    </g>
  );
}

/** Liquid Oral / Syrup Plant — tanks with agitator + transfer pipes */
function LiquidPlantMachine() {
  return (
    <g>
      {/* Main mixing tank */}
      <rect
        x="150"
        y="90"
        width="120"
        height="170"
        rx="12"
        fill="url(#tankBody)"
        stroke="rgba(255,255,255,0.5)"
        strokeWidth="2"
      />
      {/* Liquid level */}
      <rect
        x="158"
        y="160"
        width="104"
        height="90"
        rx="8"
        fill="url(#liquidFill)"
        className="hero-equip-liquid-level"
      />
      {/* Lid */}
      <rect
        x="145"
        y="78"
        width="130"
        height="18"
        rx="6"
        fill="rgba(15,23,42,0.6)"
        stroke="rgba(255,255,255,0.45)"
        strokeWidth="2"
      />
      {/* Motor */}
      <rect
        x="185"
        y="48"
        width="50"
        height="32"
        rx="5"
        fill="rgba(15,23,42,0.55)"
        stroke="rgba(255,255,255,0.4)"
        strokeWidth="2"
      />
      <rect x="195" y="56" width="12" height="6" rx="1" fill="rgba(249,115,22,0.8)" className="hero-equip-led" />
      <rect x="215" y="56" width="12" height="6" rx="1" fill="rgba(34,197,94,0.7)" className="hero-equip-led-alt" />

      {/* Agitator shaft + blades */}
      <line x1="210" y1="80" x2="210" y2="230" stroke="rgba(255,255,255,0.55)" strokeWidth="3" />
      <g className="hero-equip-agitator">
        <ellipse cx="210" cy="200" rx="48" ry="10" fill="rgba(249,115,22,0.35)" stroke="#f97316" strokeWidth="1.5" />
        <ellipse cx="210" cy="200" rx="10" ry="48" fill="rgba(249,115,22,0.25)" stroke="#fb923c" strokeWidth="1.5" />
      </g>

      {/* Secondary holding tank */}
      <rect
        x="320"
        y="140"
        width="80"
        height="120"
        rx="10"
        fill="url(#tankBody)"
        stroke="rgba(255,255,255,0.45)"
        strokeWidth="2"
      />
      <rect x="328" y="190" width="64" height="60" rx="6" fill="url(#liquidFill)" className="hero-equip-liquid-level-alt" />
      <rect
        x="315"
        y="130"
        width="90"
        height="14"
        rx="4"
        fill="rgba(15,23,42,0.55)"
        stroke="rgba(255,255,255,0.4)"
        strokeWidth="1.5"
      />

      {/* Transfer pipe */}
      <path
        d="M270 180 H300 V170 H320"
        stroke="rgba(255,255,255,0.45)"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M80 220 H150"
        stroke="rgba(255,255,255,0.45)"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="70" cy="220" r="12" fill="rgba(56,189,248,0.3)" stroke="#38bdf8" strokeWidth="2" />

      {/* Outlet */}
      <path
        d="M360 260 V290 H420"
        stroke="rgba(255,255,255,0.45)"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Bubbles in liquid */}
      <g className="hero-equip-bubbles">
        <circle cx="185" cy="210" r="3" fill="rgba(255,255,255,0.45)" />
        <circle cx="220" cy="195" r="2.5" fill="rgba(255,255,255,0.4)" />
        <circle cx="200" cy="230" r="2" fill="rgba(125,211,252,0.6)" />
        <circle cx="235" cy="215" r="2.5" fill="rgba(255,255,255,0.35)" />
        <circle cx="350" cy="220" r="2" fill="rgba(255,255,255,0.4)" />
      </g>

      <circle className="hero-equip-flow-1" cx="100" cy="220" r="3" fill="#38bdf8" />
      <circle className="hero-equip-flow-2" cx="120" cy="220" r="2.5" fill="#7dd3fc" />
      <circle className="hero-equip-flow-3" cx="290" cy="175" r="3" fill="#f97316" />
      <circle className="hero-equip-flow-4" cx="380" cy="290" r="2.5" fill="#38bdf8" />

      <g className="hero-equip-gear-sm">
        <Gear cx={100} cy={275} r={20} teeth={6} />
      </g>
    </g>
  );
}

/** Ointment Manufacturing Plant — jacketed vessel with homogenizer */
function OintmentPlantMachine() {
  return (
    <g>
      {/* Jacketed vessel outer */}
      <ellipse cx="240" cy="270" rx="90" ry="22" fill="rgba(15,23,42,0.4)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
      <path
        d="M150 140 C150 100 180 85 240 85 C300 85 330 100 330 140 L330 250 C330 275 290 290 240 290 C190 290 150 275 150 250 Z"
        fill="url(#tankBody)"
        stroke="rgba(255,255,255,0.5)"
        strokeWidth="2"
      />
      {/* Cream / ointment fill */}
      <path
        d="M165 175 C165 160 190 150 240 150 C290 150 315 160 315 175 L315 245 C315 265 285 275 240 275 C195 275 165 265 165 245 Z"
        fill="url(#creamFill)"
        className="hero-equip-cream-swirl"
      />

      {/* Jacket coils */}
      <path
        d="M155 160 Q240 145 325 160"
        stroke="rgba(56,189,248,0.45)"
        strokeWidth="2"
        fill="none"
        strokeDasharray="6 4"
        className="hero-equip-coil"
      />
      <path
        d="M155 200 Q240 185 325 200"
        stroke="rgba(56,189,248,0.35)"
        strokeWidth="2"
        fill="none"
        strokeDasharray="6 4"
        className="hero-equip-coil"
      />

      {/* Lid / cover */}
      <ellipse
        cx="240"
        cy="95"
        rx="95"
        ry="20"
        fill="rgba(15,23,42,0.55)"
        stroke="rgba(255,255,255,0.45)"
        strokeWidth="2"
      />

      {/* Homogenizer motor */}
      <rect
        x="215"
        y="40"
        width="50"
        height="40"
        rx="6"
        fill="rgba(15,23,42,0.6)"
        stroke="rgba(255,255,255,0.45)"
        strokeWidth="2"
      />
      <rect x="223" y="48" width="14" height="7" rx="1" fill="rgba(249,115,22,0.8)" className="hero-equip-led" />
      <rect x="243" y="48" width="14" height="7" rx="1" fill="rgba(34,197,94,0.7)" className="hero-equip-led-alt" />

      {/* Shaft */}
      <line x1="240" y1="80" x2="240" y2="210" stroke="rgba(255,255,255,0.6)" strokeWidth="3.5" />

      {/* Contra-rotary blades */}
      <g className="hero-equip-homogenizer">
        <path d="M240 200 L295 185 L295 215 Z" fill="rgba(249,115,22,0.55)" stroke="#f97316" strokeWidth="1.5" />
        <path d="M240 200 L185 185 L185 215 Z" fill="rgba(249,115,22,0.55)" stroke="#f97316" strokeWidth="1.5" />
        <circle cx="240" cy="200" r="10" fill="rgba(249,115,22,0.7)" stroke="#fb923c" strokeWidth="1.5" />
      </g>
      <g className="hero-equip-scraper">
        <path
          d="M175 160 Q170 200 175 240"
          stroke="rgba(125,211,252,0.6)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M305 160 Q310 200 305 240"
          stroke="rgba(125,211,252,0.6)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
      </g>

      {/* Inlet hopper */}
      <path
        d="M100 90 L130 90 L145 120 L85 120 Z"
        fill="rgba(148,163,184,0.3)"
        stroke="rgba(255,255,255,0.45)"
        strokeWidth="1.5"
      />
      <line x1="115" y1="120" x2="115" y2="160" stroke="rgba(255,255,255,0.4)" strokeWidth="4" />
      <line x1="115" y1="160" x2="155" y2="160" stroke="rgba(255,255,255,0.4)" strokeWidth="4" />

      {/* Discharge valve */}
      <line x1="240" y1="290" x2="240" y2="305" stroke="rgba(255,255,255,0.45)" strokeWidth="5" />
      <rect
        x="228"
        y="300"
        width="24"
        height="14"
        rx="3"
        fill="rgba(249,115,22,0.35)"
        stroke="#f97316"
        strokeWidth="1.5"
      />

      {/* Flow particles */}
      <circle className="hero-equip-flow-1" cx="115" cy="135" r="3" fill="#fb923c" />
      <circle className="hero-equip-flow-2" cx="115" cy="150" r="2.5" fill="#f97316" />

      {/* Cream swirls */}
      <g className="hero-equip-dust">
        <circle cx="200" cy="200" r="2.5" fill="rgba(255,255,255,0.45)" />
        <circle cx="260" cy="190" r="2" fill="rgba(254,215,170,0.6)" />
        <circle cx="230" cy="220" r="2" fill="rgba(255,255,255,0.4)" />
        <circle cx="250" cy="210" r="1.5" fill="rgba(251,146,60,0.55)" />
      </g>

      <g className="hero-equip-gear-lg">
        <Gear cx={80} cy={250} r={28} teeth={8} />
      </g>
      <g className="hero-equip-gear-sm">
        <Gear cx={400} cy={240} r={22} teeth={6} />
      </g>
    </g>
  );
}

function Gear({ cx, cy, r, teeth }: { cx: number; cy: number; r: number; teeth: number }) {
  const inner = r * 0.55;
  const hub = r * 0.25;
  const points: string[] = [];

  for (let i = 0; i < teeth * 2; i++) {
    const angle = (i * Math.PI) / teeth - Math.PI / 2;
    const radius = i % 2 === 0 ? r : r * 0.72;
    const x = cx + Math.cos(angle) * radius;
    const y = cy + Math.sin(angle) * radius;
    points.push(`${x},${y}`);
  }

  return (
    <g>
      <polygon
        points={points.join(" ")}
        fill="rgba(15,23,42,0.55)"
        stroke="rgba(249,115,22,0.65)"
        strokeWidth="1.5"
      />
      <circle cx={cx} cy={cy} r={inner} fill="rgba(11,61,107,0.6)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
      <circle cx={cx} cy={cy} r={hub} fill="rgba(249,115,22,0.5)" stroke="#f97316" strokeWidth="1.5" />
    </g>
  );
}
