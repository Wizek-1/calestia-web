import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const LightningPath = () => {
    const { scrollYProgress } = useScroll();
    const scale = useSpring(scrollYProgress, { stiffness: 200, damping: 50 });
    
    // Jagged path for high-end technical feel
    const points = [
        { x: 800, y: 0 },
        { x: 750, y: 400 },
        { x: 900, y: 800 },
        { x: 500, y: 1200 },
        { x: 200, y: 1400 },
        { x: 800, y: 1600 },
        { x: 500, y: 2200 },
        { x: 600, y: 3000 }
    ];

    const d = points.reduce((acc, p, i) => i === 0 ? `M${p.x} ${p.y}` : `${acc} L${p.x} ${p.y}`, "");

    return (
        <svg className="lightning-svg" viewBox="0 0 1000 3000" preserveAspectRatio="none">
            {/* Base shadow for visibility */}
            <path d={d} stroke="rgba(0, 112, 243, 0.05)" strokeWidth="1" fill="none" />
            
            {/* The Main Strike */}
            <motion.path
                d={d}
                stroke="var(--accent)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                fill="none"
                style={{ 
                    pathLength: scale,
                    filter: 'drop-shadow(0 0 10px var(--accent))'
                }}
            />
            
            {/* Core Energy Line */}
            <motion.path
                d={d}
                stroke="white"
                strokeWidth="0.5"
                fill="none"
                style={{ 
                    pathLength: scale,
                    opacity: 0.3
                }}
            />
        </svg>
    );
};

export default LightningPath;
