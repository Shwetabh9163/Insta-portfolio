import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Zap, Star, Users } from 'lucide-react';
import { INFLUENCER_DATA } from '../constants/assets';

const ICONS = { Zap, Camera, Star, Users };

const ServicesOffer = () => {
    const services = INFLUENCER_DATA.services;
    return (
        <section id="services" className="section-spacing bg-[#0A0A0A] text-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="mb-32">
                    <p className="text-[10px] tracking-[0.8em] font-black uppercase text-white/20 mb-6"></p>
                    <h2 className="text-6xl md:text-9xl font-black italic">Strategic <br /> <span className="not-italic text-white/10 uppercase">Services.</span></h2>
                </div>

                <div className="flex flex-col">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            className="group border-t border-white/10 py-16 flex flex-col md:flex-row justify-between items-center gap-8 relative"
                        >
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-[0.02] transition-all duration-700" />

                            <div className="flex items-center gap-10 relative z-10 w-full md:w-auto">
                                <p className="text-xl font-black text-white/10">0{i + 1}</p>
                                <h3 className="text-4xl md:text-7xl font-black uppercase tracking-tighter group-hover:italic group-hover:translate-x-4 transition-all duration-700">
                                    {service.title}
                                </h3>
                            </div>

                            <div className="flex items-center gap-6 relative z-10 w-full md:w-auto justify-end">
                                <div className="text-right hidden md:block">
                                    <p className="text-[10px] font-black tracking-widest uppercase mb-1">{service.desc}</p>
                                </div>
                                <div className="p-6 rounded-full border border-white/10 group-hover:bg-white group-hover:text-black transition-all">
                                    {React.createElement(ICONS[service.icon] || Zap, { size: 24 })}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                    <div className="border-t border-white/10 w-full" />
                </div>
            </div>
        </section>
    );
};

export default ServicesOffer;
