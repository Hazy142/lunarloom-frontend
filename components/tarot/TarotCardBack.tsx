import React from 'react';

// Sub-component for the 4-pointed star shape
function Star({ x, y, size, color }: { x: number; y: number; size: number; color: string }) {
    // A 4-pointed star path (diamond with concave sides)
    const d = `
    M 0 -${size} 
    Q ${size * 0.2} -${size * 0.2} ${size} 0 
    Q ${size * 0.2} ${size * 0.2} 0 ${size} 
    Q -${size * 0.2} ${size * 0.2} -${size} 0 
    Q -${size * 0.2} -${size * 0.2} 0 -${size}
  `;

    return (
        <g transform={`translate(${x}, ${y})`}>
            <path d={d} fill={color} />
        </g>
    );
}

export default function TarotCardBack() {
    // Constants for the card dimensions and geometry
    const width = 340;
    const height = 580;
    const cx = width / 2;
    const cy = height / 2;

    // Colors
    const colors = {
        bg: "#241038", // Deep purple
        line: "#dcb978", // Gold/Bronze
        lineDim: "#8a6d45", // Darker gold for background details
        moon: "#fdf8d6", // Pale cream
        moonShadow: "#e8dcb5",
    };

    // Helper to generate the spirograph-like background lines
    // The pattern looks like long ellipses rotated around the center
    const renderBackgroundEllipses = () => {
        const ellipses = [];
        const count = 24; // Number of ellipses to create the dense web

        for (let i = 0; i < count; i++) {
            const angle = (i * 360) / count;
            ellipses.push(
                <ellipse
                    key={`bg-ellipse-${i}`}
                    cx={cx}
                    cy={cy}
                    rx={100}
                    ry={320}
                    fill="none"
                    stroke={colors.line}
                    strokeWidth="0.5"
                    strokeOpacity="0.4"
                    transform={`rotate(${angle}, ${cx}, ${cy})`}
                />
            );
        }
        return ellipses;
    };

    // Helper to generate the secondary intersecting arcs (the "fountain" look)
    const renderIntersectingArcs = () => {
        const arcs = [];
        const steps = 12;

        for (let i = 0; i < steps; i++) {
            // Top radiating curves
            arcs.push(
                <path
                    key={`arc-top-${i}`}
                    d={`M ${cx} -50 Q ${cx + (i - steps / 2) * 60} ${cy} ${cx + (i - steps / 2) * 120} ${height + 50}`}
                    fill="none"
                    stroke={colors.line}
                    strokeWidth="0.5"
                    strokeOpacity="0.3"
                />
            );
            // Bottom radiating curves (mirrored)
            arcs.push(
                <path
                    key={`arc-bottom-${i}`}
                    d={`M ${cx} ${height + 50} Q ${cx + (i - steps / 2) * 60} ${cy} ${cx + (i - steps / 2) * 120} -50`}
                    fill="none"
                    stroke={colors.line}
                    strokeWidth="0.5"
                    strokeOpacity="0.3"
                />
            );
        }
        return arcs;
    };

    // Helper to render the ring of crescents around the moon
    const renderCrescents = () => {
        const crescents = [];
        const count = 8;
        const radius = 55; // Distance from center

        for (let i = 0; i < count; i++) {
            const angle = (i * 360) / count;
            // A path representing a crescent moon shape
            // We draw it upright then rotate it
            crescents.push(
                <g key={`crescent-${i}`} transform={`rotate(${angle}, ${cx}, ${cy})`}>
                    <path
                        d={`M ${cx} ${cy - radius} 
               Q ${cx + 15} ${cy - radius - 25} ${cx} ${cy - radius - 50} 
               Q ${cx - 15} ${cy - radius - 25} ${cx} ${cy - radius}`}
                        fill={colors.bg} // Fill with bg color to mask lines behind
                        stroke={colors.line}
                        strokeWidth="1.5"
                    />
                    {/* Inner detail of crescent */}
                    <path
                        d={`M ${cx} ${cy - radius - 5} 
               Q ${cx + 8} ${cy - radius - 25} ${cx} ${cy - radius - 45} 
               Q ${cx - 8} ${cy - radius - 25} ${cx} ${cy - radius - 5}`}
                        fill="none"
                        stroke={colors.line}
                        strokeWidth="1"
                    />
                </g>
            );
        }
        return crescents;
    };

    // Helper to render stars at intersections
    const renderStars = () => {
        const stars = [];
        // Manually placing stars based on visual approximation of the grid intersections
        // In a real generative art piece, these would be calculated intersection points.

        // Ring 1 (Inner)
        const r1 = 90;
        for (let i = 0; i < 8; i++) {
            const angle = (i * 360) / 8 + 22.5; // Offset
            const rad = (angle * Math.PI) / 180;
            const x = cx + r1 * Math.cos(rad);
            const y = cy + r1 * Math.sin(rad);
            stars.push(<Star key={`star-1-${i}`} x={x} y={y} size={6} color={colors.line} />);
        }

        // Ring 2 (Mid)
        const r2 = 160;
        for (let i = 0; i < 12; i++) {
            const angle = (i * 360) / 12;
            const rad = (angle * Math.PI) / 180;
            const x = cx + r2 * Math.cos(rad);
            const y = cy + r2 * Math.sin(rad);
            stars.push(<Star key={`star-2-${i}`} x={x} y={y} size={8} color={colors.line} />);
        }

        // Vertical Axis Stars
        const vSteps = [-220, -160, 160, 220];
        vSteps.forEach((dy, i) => {
            stars.push(<Star key={`star-v-${i}`} x={cx} y={cy + dy} size={10} color={colors.line} />);
        });

        return stars;
    };

    return (
        <div
            className="relative rounded-[24px] shadow-[0_0_50px_rgba(46,16,71,0.6)] transition-transform hover:scale-[1.02] duration-500 ease-out"
            style={{ width: `${width}px`, height: `${height}px` }}
        >
            {/* Main SVG Canvas */}
            <svg
                width={width}
                height={height}
                viewBox={`0 0 ${width} ${height}`}
                className="w-full h-full rounded-[24px] bg-[#241038] overflow-hidden border-[3px] border-[#dcb978]"
            >
                <defs>
                    {/* Gradient for the central moon */}
                    <radialGradient id="moonGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                        <stop offset="0%" stopColor="#fffef0" />
                        <stop offset="80%" stopColor="#fdf8d6" />
                        <stop offset="100%" stopColor="#e8dcb5" />
                    </radialGradient>

                    {/* Gradient for the background vignette */}
                    <radialGradient id="bgVignette" cx="50%" cy="50%" r="70%">
                        <stop offset="0%" stopColor="#2e1a47" stopOpacity="0" />
                        <stop offset="100%" stopColor="#150824" stopOpacity="0.8" />
                    </radialGradient>
                </defs>

                {/* 1. Background Base */}
                <rect width={width} height={height} fill="#241038" />

                {/* 2. Geometric Web Pattern */}
                <g opacity="0.6">
                    {renderBackgroundEllipses()}
                    {renderIntersectingArcs()}
                </g>

                {/* 3. Vignette Overlay to darken edges */}
                <rect width={width} height={height} fill="url(#bgVignette)" />

                {/* 4. Inner Border Frame */}
                <rect
                    x="12"
                    y="12"
                    width={width - 24}
                    height={height - 24}
                    rx="16"
                    fill="none"
                    stroke={colors.line}
                    strokeWidth="1.5"
                />
                {/* Decorative corners for the inner border */}
                <path d={`M 12 40 L 12 12 L 40 12`} fill="none" stroke={colors.line} strokeWidth="3" />
                <path d={`M ${width - 12} 40 L ${width - 12} 12 L ${width - 40} 12`} fill="none" stroke={colors.line} strokeWidth="3" />
                <path d={`M 12 ${height - 40} L 12 ${height - 12} L 40 ${height - 12}`} fill="none" stroke={colors.line} strokeWidth="3" />
                <path d={`M ${width - 12} ${height - 40} L ${width - 12} ${height - 12} L ${width - 40} ${height - 12}`} fill="none" stroke={colors.line} strokeWidth="3" />

                {/* 5. Central Motif Group */}
                <g>
                    {/* Outer decorative ring lines */}
                    <circle cx={cx} cy={cy} r="90" fill="none" stroke={colors.line} strokeWidth="0.5" opacity="0.5" />
                    <circle cx={cx} cy={cy} r="85" fill="none" stroke={colors.line} strokeWidth="0.5" opacity="0.5" />

                    {/* Crescents */}
                    {renderCrescents()}

                    {/* Central Moon */}
                    <circle cx={cx} cy={cy} r="32" fill="url(#moonGradient)" stroke={colors.line} strokeWidth="2" />

                    {/* Moon Texture (Craters) */}
                    <g opacity="0.3" fill="#d4c59a">
                        <circle cx={cx - 8} cy={cy - 5} r="4" />
                        <circle cx={cx + 10} cy={cy + 8} r="6" />
                        <circle cx={cx + 5} cy={cy - 12} r="3" />
                    </g>
                </g>

                {/* 6. Stars Layer */}
                {renderStars()}

                {/* Extra Sparkles manually placed for aesthetic balance */}
                <Star x={40} y={40} size={12} color={colors.line} />
                <Star x={width - 40} y={40} size={12} color={colors.line} />
                <Star x={40} y={height - 40} size={12} color={colors.line} />
                <Star x={width - 40} y={height - 40} size={12} color={colors.line} />

            </svg>
        </div>
    );
}
