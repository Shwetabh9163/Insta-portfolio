import React from 'react';
import { motion } from 'framer-motion';
import { INFLUENCER_DATA } from '../constants/assets';
import { Target, Users, MapPin, TrendingUp } from 'lucide-react';

const AudienceInsights = () => {
    return (
        <section id="stats" className="section-spacing bg-[#0A0A0A] text-white">
            <div className="container mx-auto px-6">
                <div className="mb-32">
                    <p className="text-[10px] tracking-[0.8em] font-black uppercase text-white/20 mb-6"></p>
                    <h2 className="text-6xl md:text-9xl font-black italic">Audience <br /> <span className="not-italic text-white/10 uppercase">Insights.</span></h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Main Glass Card: Demographics */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-8 glass p-12 md:p-20 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-10 opacity-5">
                            <Target size={200} />
                        </div>

                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-20">
                            <div>
                                <div className="flex items-center gap-4 mb-12">
                                    <div className="p-4 rounded-full bg-white/5"><Users size={20} /></div>
                                    <h3 className="text-xl font-black uppercase tracking-widest">Gender Split</h3>
                                </div>
                                <div className="space-y-12">
                                    <div className="space-y-4">
                                        <div className="flex justify-between text-[10px] font-black tracking-widest uppercase">
                                            <span>Female</span>
                                            <span>68%</span>
                                        </div>
                                        <div className="h-px w-full bg-white/10 relative">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: '68%' }}
                                                viewport={{ once: true }}
                                                className="absolute h-full bg-white"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex justify-between text-[10px] font-black tracking-widest uppercase">
                                            <span>Male</span>
                                            <span>32%</span>
                                        </div>
                                        <div className="h-px w-full bg-white/10 relative">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: '32%' }}
                                                viewport={{ once: true }}
                                                className="absolute h-full bg-white/40"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center gap-4 mb-12">
                                    <div className="p-4 rounded-full bg-white/5"><TrendingUp size={20} /></div>
                                    <h3 className="text-xl font-black uppercase tracking-widest">Age Group</h3>
                                </div>
                                <div className="flex flex-wrap gap-4">
                                    {['18-24', '25-34', '35-44'].map((age, i) => (
                                        <div key={i} className="px-6 py-4 border border-white/10 bg-white/[0.02] flex flex-col items-center flex-1 min-w-[100px]">
                                            <p className="text-2xl font-black italic mb-1">{[42, 38, 20][i]}%</p>
                                            <p className="text-[8px] font-bold opacity-40 whitespace-nowrap">{age}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Secondary Glass Card: Locations */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-4 glass p-12 flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex items-center gap-4 mb-12">
                                <div className="p-4 rounded-full bg-white/5"><MapPin size={20} /></div>
                                <h3 className="text-xl font-black uppercase tracking-widest">Top Regions</h3>
                            </div>
                            <div className="space-y-8">
                                {['LUCKNOW', 'Delhi', 'Bangalore', 'Other'].map((loc, i) => (
                                    <div key={i} className="flex justify-between items-end border-b border-white/5 pb-4">
                                        <span className="text-[10px] font-black uppercase tracking-widest">{loc}</span>
                                        <span className="text-xs font-bold opacity-40 italic">{[35, 28, 22, 15][i]}%</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AudienceInsights;
