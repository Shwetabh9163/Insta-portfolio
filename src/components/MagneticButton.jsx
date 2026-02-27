import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const MagneticButton = ({ children, className = "" }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const mouseMove = (e) => {
        const { clientX, clientY } = e;
        const { width, height, left, top } = ref.current.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        setPosition({ x, y });
    };

    const mouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={mouseMove}
            onMouseLeave={mouseLeave}
            animate={{ x: position.x * 0.28, y: position.y * 0.28, rotate: position.x * 0.002 }}
            transition={{ type: "spring", stiffness: 160, damping: 18, mass: 0.12 }}
            className={`inline-block ${className} neon`}
        >
            {children}
        </motion.div>
    );
};

export default MagneticButton;
