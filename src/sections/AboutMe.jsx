import React from 'react';
import { motion } from 'framer-motion';
import { INFLUENCER_DATA } from '../constants/assets';

const AboutMe = () => {
    return (
        <section id="about" className="section-spacing bg-[#0A0A0A] text-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

                    {/* Left: Cinematic Image with Floating Element */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative aspect-[3/4] overflow-hidden"
                    >
                        <img
                            src={INFLUENCER_DATA.media.aboutImage}
                            alt="Aditi Editorial"
                            className="w-full h-full object-cover grayscale brightness-50"
                        />
                        <div className="absolute inset-0 border-[20px] border-[#0A0A0A] z-10" />

                        {/* Vertical Text Over Image */}
                        <div className="absolute top-1/2 -right-10 -translate-y-1/2 transform rotate-90 z-20">
                            <p className="text-[10px] font-black tracking-[1em] whitespace-nowrap opacity-20 uppercase"></p>
                        </div>
                    </motion.div>

                    {/* Right: Experimental Typography */}
                    <div className="relative">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-[10px] tracking-[1.2em] font-black uppercase text-white/20 mb-8"
                        >
                            The Identity
                        </motion.p>
                        <h2 className="text-6xl md:text-9xl font-black italic mb-12 leading-none">
                            Digital <br /> <span className="not-italic text-white/5 uppercase">Muse.</span>
                        </h2>

                        <div className="flex flex-col gap-12">
                            <p className="text-xl md:text-2xl font-light leading-relaxed text-white/60 text-justify whitespace-pre-line">
                                {INFLUENCER_DATA.bio}
                            </p>

                            <div className="grid grid-cols-2 gap-12 pt-12 border-t border-white/10">
                                <div>
                                    <p className="text-[10px] font-black tracking-widest uppercase mb-4 text-white/40">Direction</p>
                                    <p className="text-xs font-bold">LIFESTYLE / FASHION</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-black tracking-widest uppercase mb-4 text-white/40">Location</p>
                                    <p className="text-xs font-bold">LUCKNOW / GLOBAL</p>
                                </div>
                            </div>
                        </div>

                        {/* Floating Decorative Barcode */}
                        <div className="absolute -bottom-24 right-0 w-32 h-16 barcode-detail opacity-10 hidden xl:block" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
