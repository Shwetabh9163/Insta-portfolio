import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Activity, Heart, Eye } from 'lucide-react';
import { INFLUENCER_DATA } from '../constants/assets';

const EnhancedShowcase = () => {
    const reels = INFLUENCER_DATA.media.reels;

    return (
        <section id="work" className="section-spacing bg-[#0A0A0A] text-white">
            <div className="container mx-auto px-6">
                <div className="mb-32">
                    <p className="text-[10px] tracking-[0.8em] font-black uppercase text-white/20 mb-6"></p>
                    <h2 className="text-6xl md:text-9xl leading-none font-black italic">Content <br /> <span className="not-italic text-white/10 uppercase">Experience.</span></h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-20">
                    {/* Oversized Main Reel */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-12 lg:col-span-7 relative group aspect-[9/16] md:aspect-video overflow-hidden border border-white/10 bg-zinc-900"
                    >
                        <video
                            src={reels[0].video}
                            muted
                            loop
                            className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                        />
                        <div className="absolute inset-0 p-12 flex flex-col justify-between pointer-events-none">
                            <div className="flex justify-between items-start">
                                <div className="glass px-6 py-2">
                                    <p className="text-[8px] font-black tracking-widest uppercase"></p>
                                </div>
                                <div className="p-4 rounded-full border border-white/20">
                                    <Play size={16} fill="white" />
                                </div>
                            </div>
                            <div className="max-w-lg">
                                <h3 className="text-4xl md:text-6xl mb-4 leading-none italic">{reels[0].title}</h3>
                                <div className="flex gap-8 border-t border-white/10 pt-6">
                                    <div className="flex items-center gap-2 text-[10px] font-black"><Heart size={14} /> {reels[0].likes}</div>
                                    <div className="flex items-center gap-2 text-[10px] font-black"><Eye size={14} /> {reels[0].views}</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Staggered Secondary Items */}
                    <div className="md:col-span-12 lg:col-span-5 flex flex-col gap-12 lg:-mt-32">
                        {reels.slice(1).map((reel, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="relative aspect-[3/4] overflow-hidden border border-white/10 group"
                            >
                                <img
                                    src={INFLUENCER_DATA.media.aboutImage}
                                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-105 transition-all duration-1000"
                                    alt={reel.title}
                                />
                                <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                    <p className="text-[10px] font-black tracking-widest text-white/60 mb-4">{reel.brand}</p>
                                    <h4 className="text-2xl font-black italic">{reel.title}</h4>
                                </div>

                                {/* Floating Engagement Overlay */}
                                <div className="absolute top-10 right-10 glass p-6 opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
                                    <div className="flex flex-col items-center gap-4">
                                        <Activity size={18} className="text-white/40" />
                                        <p className="text-[8px] font-black tracking-tighter transform rotate-90 whitespace-nowrap text-white/60"></p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {/* Minimal Quote Overlay Block */}
                        <div className="p-12 border border-white/5 bg-white/[0.01] flex flex-col justify-center items-center text-center">
                            <p className="text-xl md:text-2xl font-light italic text-white/40 leading-relaxed mb-8">
                                "Digital storytelling is the new high-fashion runway."
                            </p>
                            <div className="w-12 h-px bg-white/20" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EnhancedShowcase;
