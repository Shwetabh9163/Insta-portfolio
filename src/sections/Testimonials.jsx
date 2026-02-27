import React from 'react';
import { motion } from 'framer-motion';
import MagneticButton from '../components/MagneticButton';
import { INFLUENCER_DATA } from '../constants/assets';

const Testimonials = () => {
    return (
        <section className="section-spacing bg-[#FDFBF7] text-[#1A1A1A] relative overflow-hidden">
            {/* Massive Background Quotation Mark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-serif text-[#1A1A1A] opacity-[0.02] pointer-events-none select-none italic">
                “
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    {INFLUENCER_DATA.testimonials.map((testimonial, index) => (
                        <div key={index} className="mb-24 last:mb-0">
                            <h2 className="text-3xl md:text-6xl font-light italic leading-tight mb-12">
                                "{testimonial.quote}"
                            </h2>
                            <div className="flex flex-col items-center">
                                <div className="w-12 h-px bg-black mb-6" />
                                <p className="text-[10px] font-black uppercase tracking-[0.4em]">
                                    {testimonial.author} / {testimonial.company}
                                </p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

const ContactCTA = () => {
    return (
        <section id="contact" className="section-spacing bg-[#0A0A0A] text-white flex flex-col items-center justify-center text-center overflow-hidden">
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-1/2 left-0 w-full h-px bg-white" />
                <div className="absolute top-0 left-1/2 w-px h-full bg-white" />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative z-10 px-6"
            >
                <h2 className="text-6xl md:text-[12rem] font-black leading-none mb-20 italic">
                    Let's Create <br /> <span className="not-italic text-white/5">Culture.</span>
                </h2>

                <MagneticButton>
                    <a href="mailto:shwetabhtripathi2006@gmail.com" className="pill-button px-20">
                        Initiate Contact
                    </a>
                </MagneticButton>

                <div className="mt-40 pt-10 border-t border-white/5 w-full flex flex-row justify-between items-center opacity-10">

                </div>
            </motion.div>
        </section>
    );
};

export { Testimonials, ContactCTA };
