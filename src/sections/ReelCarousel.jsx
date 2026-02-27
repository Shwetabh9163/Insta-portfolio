import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ReelCarousel = () => {
    const [selectedId, setSelectedId] = useState(null);

    const reels = [
        { id: 1, title: 'Summer Look', color: 'bg-zinc-800' },
        { id: 2, title: 'Paris Trip', color: 'bg-zinc-700' },
        { id: 3, title: 'Night Out', color: 'bg-zinc-600' },
        { id: 4, title: 'Skincare', color: 'bg-zinc-500' },
        { id: 5, title: 'Sunset', color: 'bg-zinc-400' },
        { id: 6, title: 'Vintage', color: 'bg-zinc-300' },
    ];

    // Double the reels for infinite look
    const extendedReels = [...reels, ...reels];

    return (
        <section className="py-32 relative bg-obsidian overflow-hidden">
            <div className="container mx-auto px-6 mb-16">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Reel Showcase</h2>
                <p className="text-white/40 mt-4 max-w-md">A glimpse into an aesthetic world of luxury. Click to immerse.</p>
            </div>

            <div className="relative flex items-center">
                {/* Infinite Scroll Container */}
                <motion.div
                    className="flex gap-8 px-8"
                    animate={{ x: [0, -100 * (reels.length) + '%'] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 20,
                            ease: "linear",
                        },
                    }}
                    style={{ width: 'max-content' }}
                >
                    {extendedReels.map((reel, index) => (
                        <motion.div
                            key={`${reel.id}-${index}`}
                            onClick={() => setSelectedId(reel.id)}
                            whileHover={{ scale: 1.05, rotate: 0 }}
                            className={`w-64 h-96 ${reel.color} rounded-3xl relative overflow-hidden glass border-white/20 float-shadow cursor-pointer interactive transform -rotate-2 -skew-y-2 will-change-transform`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-6 left-6 text-white">
                                <p className="text-xs uppercase tracking-widest opacity-60 mb-1">Reel</p>
                                <h3 className="text-xl font-bold">{reel.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Lightbox / Zoom Effect */}
            <AnimatePresence>
                {selectedId && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[10001] bg-black/90 backdrop-blur-2xl flex items-center justify-center p-6"
                        onClick={() => setSelectedId(null)}
                    >
                        <motion.div
                            layoutId={selectedId}
                            className="w-full max-w-md aspect-[9/16] bg-zinc-800 rounded-[2rem] overflow-hidden float-shadow border border-white/10"
                            initial={{ scale: 0.8, y: 50 }}
                            animate={{ scale: 1, y: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="w-full h-full flex items-center justify-center text-white/20 uppercase tracking-[1em] text-sm">
                                Playing Reel {selectedId}
                            </div>
                            <button
                                className="absolute top-6 right-6 text-white/50 hover:text-white"
                                onClick={() => setSelectedId(null)}
                            >
                                Close
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default ReelCarousel;
