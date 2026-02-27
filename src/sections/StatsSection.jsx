import React from 'react';
import { motion } from 'framer-motion';
import { INFLUENCER_DATA } from '../constants/assets';

const stats = [
    { label: "Followers", value: INFLUENCER_DATA.stats.followers, detail: "Core Community" },
    { label: "Engagement", value: INFLUENCER_DATA.stats.engagement, detail: "Interaction Index" },
    { label: "Reach", value: INFLUENCER_DATA.stats.reach, detail: "Digital Impact" },
    { label: "Avg Views", value: INFLUENCER_DATA.stats.avgViews, detail: "Visual Retention" },
];

const StatsSection = () => {
    return (
        <section id="stats" className="py-40 bg-[#0A0A0A] border-y border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="text-center lg:text-left group"
                        >
                            <p className="text-[10px] font-black tracking-[0.4em] uppercase text-white/20 mb-4 group-hover:text-white transition-colors">{stat.label}</p>
                            <h3 className="text-4xl md:text-6xl font-black italic mb-2 tracking-tighter">{stat.value}</h3>
                            <p className="text-[8px] font-bold opacity-20 uppercase tracking-widest">{stat.detail}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
