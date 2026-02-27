import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, ArrowUpRight } from 'lucide-react';
import { INFLUENCER_DATA } from '../constants/assets';

const ContactCTA = () => {
    return (
        <section id="contact" className="section-spacing bg-black text-white text-center relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute inset-0 bg-white/[0.02] -z-10" />

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-[10px] tracking-[1em] font-bold text-white/40 mb-12 uppercase">Connect</p>
                    <h2 className="text-5xl sm:text-7xl md:text-[10rem] font-black leading-[0.85] mb-20 uppercase">
                        Let's Create <br /> <span className="text-white/20">Something</span> <br /> Iconic.
                    </h2>

                    <div className="flex flex-col items-center gap-12">
                        <a
                            href={`mailto:${INFLUENCER_DATA.socialLinks.email}`}
                            className="pill-button bg-white text-black hover:bg-gold hover:text-white flex items-center gap-4 px-12 py-6 text-xs"
                        >
                            Get in Touch <ArrowUpRight size={18} />
                        </a>

                        <div className="flex items-center gap-8 pt-12 border-t border-white/10 w-full max-w-sm justify-center">
                            <a href={INFLUENCER_DATA.socialLinks.instagram} target="_blank" className="flex items-center gap-2 group">
                                <Instagram size={16} className="text-white/40 group-hover:text-white transition-colors" />
                                <span className="text-[10px] font-bold tracking-widest text-white/40 group-hover:text-white transition-colors">{INFLUENCER_DATA.handle}</span>
                            </a>
                            <div className="w-px h-4 bg-white/10" />
                            <p className="text-[10px] font-bold tracking-widest text-white/20 uppercase">LUCKNOW/ Global</p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Graphic */}
            <div className="mt-40">
                <div className="barcode-detail w-full max-w-xl mx-auto opacity-20" />
            </div>
        </section>
    );
};

export default ContactCTA;
