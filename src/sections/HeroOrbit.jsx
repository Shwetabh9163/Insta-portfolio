import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const OrbitHero = () => {
    const containerRef = useRef(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useSpring(useTransform(mouseY, [-300, 300], [10, -10]));
    const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-10, 10]));

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            mouseX.set(x);
            mouseY.set(y);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    const niches = [
        { name: 'Fashion', color: '#D4AF37', delay: 0 },
        { name: 'Travel', color: '#E5E5E5', delay: 6.6 },
        { name: 'Lifestyle', color: '#FFFFFF', delay: 13.3 },
    ];

    return (
        <div ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden perspective-1000">
            <motion.div
                style={{ rotateX, rotateY }}
                className="relative flex items-center justify-center"
            >
                {/* Headshot Container */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10 z-10 glass float-shadow will-change-transform">
                    <img
                        src="/assets/headshot.png"
                        alt="Creator Headshot"
                        className="w-full h-full object-cover scale-110"
                    />
                </div>

                {/* Orbiting Planets */}
                {niches.map((niche, index) => (
                    <motion.div
                        key={niche.name}
                        className="absolute z-20"
                        animate={{
                            rotate: [0, 360],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                            delay: niche.delay,
                        }}
                        style={{
                            width: '100%',
                            height: '100%',
                        }}
                    >
                        <motion.div
                            className="absolute glass px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2 border-white/20 shadow-xl interactive"
                            style={{
                                top: '50%',
                                left: '50%',
                                translateX: '200px',
                                translateY: '-50%',
                                backgroundColor: niche.delay === 0 ? 'rgba(212, 175, 55, 0.2)' : 'rgba(255, 255, 255, 0.1)',
                            }}
                            animate={{
                                rotate: [0, -360],
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear",
                                delay: niche.delay,
                            }}
                        >
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: niche.color }} />
                            {niche.name}
                        </motion.div>
                    </motion.div>
                ))}

                {/* Subtle Background Glow */}
                <div className="absolute w-[500px] h-[500px] bg-gold/10 rounded-full blur-[120px] -z-10" />
            </motion.div>

            {/* Vibe Quote */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center">
                <p className="text-white/40 text-sm tracking-[0.5em] uppercase mb-2">Philosophy</p>
                <h2 className="text-3xl md:text-5xl font-serif italic tracking-tight font-light">"Authenticity is the new Luxury"</h2>
            </div>
        </div>
    );
};

export default OrbitHero;
