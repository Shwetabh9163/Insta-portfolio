import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { INFLUENCER_DATA } from '../constants/assets';
import MagneticButton from '../components/MagneticButton';

const HeroSection = () => {
    const containerRef = useRef(null);

    // Mouse tracking for subtle 3D Tilt
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

    const handleMouseMove = (e) => {
        const rect = containerRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = (mouseX / width) - 0.5;
        const yPct = (mouseY / height) - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="min-h-screen bg-[#0A0A0A] text-white relative flex flex-col justify-center items-center overflow-hidden pt-20"
        >
            {/* Background Texture Detail */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div className="absolute top-1/2 left-0 w-full h-px bg-white" />
                <div className="absolute top-0 left-1/2 w-px h-full bg-white" />
            </div>

            {/* Background Typography */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                    className="text-[15vw] font-black uppercase tracking-widest leading-none opacity-[0.03]"
                >
                    {INFLUENCER_DATA.name}
                </motion.h1>
            </div>

            {/* Immersive Center Content */}
            <div className="relative z-10 flex flex-col items-center">
                <motion.div
                    style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                    className="relative w-[280px] md:w-[400px] aspect-[3/4] group"
                >
                    <div className="absolute inset-0 border border-white/20 z-20 pointer-events-none" />
                    <img
                        src={INFLUENCER_DATA.media.headshot}
                        alt="Aditi"
                    />
                </motion.div>


                {/* Sub-Typography */}
                <div className="mt-12 text-center max-w-xl px-6">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="text-[10px] tracking-[0.6em] font-black uppercase mb-8 text-white/40"
                    >

                    </motion.p>
                    <MagneticButton>
                        <a href="#contact" className="pill-button block">
                            Join the Experience
                        </a>
                    </MagneticButton>
                </div>
            </div>

            {/* Static Stats Footer */}
            <div className="absolute bottom-12 w-full max-w-4xl px-6 flex justify-between items-center opacity-20">
                {Object.entries(INFLUENCER_DATA.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                        <p className="text-[8px] font-black tracking-widest uppercase mb-1">{key}</p>
                        <p className="text-xs font-bold font-mono">{value}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HeroSection;
