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
            className="min-h-screen text-white relative flex flex-col justify-center items-center overflow-hidden pt-20"
        >
            {/* Decorative colorful blobs */}
            <div className="blob blob--pink pointer-events-none animate-bob" />
            <div className="blob blob--violet pointer-events-none animate-bob" style={{ animationDelay: '0.6s' }} />
            <div className="blob blob--teal pointer-events-none animate-bob" style={{ animationDelay: '1.2s' }} />
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
                    className="relative w-[280px] md:w-[420px] aspect-square group rounded-full overflow-hidden shadow-2xl"
                >
                    <div className="absolute inset-0 border border-white/10 z-20 pointer-events-none rounded-full" />
                    <img
                        src={INFLUENCER_DATA.media.headshot}
                        alt={INFLUENCER_DATA.name}
                        className="w-full h-full object-cover rounded-full transform transition-transform duration-500 group-hover:scale-105"
                    />
                </motion.div>


                {/* Sub-Typography */}
                <div className="mt-12 text-center max-w-xl px-6">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="text-[12px] tracking-[0.12em] font-black uppercase mb-6 text-white/70 max-w-lg mx-auto"
                    >
                        {INFLUENCER_DATA.tagline || "Creator • Storyteller • Collaborator"}

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
