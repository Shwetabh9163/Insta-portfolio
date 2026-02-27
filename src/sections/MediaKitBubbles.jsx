import React from 'react';
import { motion } from 'framer-motion';

const MediaKitBubbles = () => {
    const stats = [
        { label: 'Followers', value: '120k', size: 'w-48 h-48', color: 'bg-gold/20', delay: 0 },
        { label: 'Engagement', value: '4.8%', size: 'w-40 h-40', color: 'bg-white/10', delay: 0.5 },
        { label: 'Reach', value: '2.1M', size: 'w-56 h-56', color: 'bg-white/5', delay: 0.2 },
        { label: 'Countries', value: '45+', size: 'w-36 h-36', color: 'bg-gold/10', delay: 0.7 },
    ];

    return (
        <section className="py-32 relative overflow-hidden min-h-[80vh] flex flex-col justify-center">
            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-white/20 text-7xl md:text-9xl font-bold uppercase tracking-tighter absolute -top-10 -left-10 select-none">Impact</h2>

                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 relative p-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="relative"
                        >
                            <motion.div
                                animate={{
                                    y: [0, -20, 0],
                                }}
                                transition={{
                                    duration: 4 + index,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: stat.delay,
                                }}
                                className={`${stat.size} rounded-full glass flex flex-col items-center justify-center text-center p-6 border-white/20 float-shadow backdrop-blur-3xl interactive will-change-transform`}
                            >
                                <span className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-1">{stat.value}</span>
                                <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/50">{stat.label}</span>

                                {/* Subtle Inner Glow */}
                                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Decor */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/5 rounded-full blur-[100px] -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-[80px]" />
        </section>
    );
};

export default MediaKitBubbles;
