import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);

    const mouseX = useSpring(0, { stiffness: 500, damping: 28 });
    const mouseY = useSpring(0, { stiffness: 500, damping: 28 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('.interactive')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className="custom-cursor"
            style={{
                left: mouseX,
                top: mouseY,
                x: '-50%',
                y: '-50%',
            }}
            animate={{
                scale: isHovering ? 1.5 : 1,
                width: isHovering ? 40 : 10,
                height: isHovering ? 40 : 10,
                backgroundColor: isHovering ? 'rgba(212, 175, 55, 0.4)' : 'rgba(255, 255, 255, 1)',
                borderWidth: isHovering ? 2 : 0,
                borderColor: '#D4AF37',
            }}
        />
    );
};

export default CustomCursor;
