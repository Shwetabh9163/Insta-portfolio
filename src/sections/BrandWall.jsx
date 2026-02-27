import React from 'react';
import { INFLUENCER_DATA } from '../constants/assets';

const BrandWall = () => {
    return (
        <section id="brands" className="section-spacing bg-[#0A0A0A] border-y border-white/5">
            <div className="container mx-auto px-6">
                <div className="mb-20 text-center md:text-left">
                    
                    <h2 className="text-4xl md:text-7xl font-black italic">Selected <span className="not-italic text-white/5 uppercase">Brands.</span></h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {INFLUENCER_DATA.media.brandLogos.map((brand, i) => (
                        <div
                            key={i}
                            className="px-8 py-10 bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center group transition-all hover:bg-white/[0.05]"
                        >
                            <p className="text-[8px] font-black tracking-widest text-white/10 mb-3 uppercase">Campaign_0{i + 1}</p>
                            <h3 className="text-xl md:text-2xl font-black italic opacity-40 group-hover:opacity-100 transition-opacity uppercase text-center">{brand.name}</h3>
                        </div>
                    ))}
                </div>

                <div className="mt-20 flex justify-center opacity-5">
                    <div className="barcode-detail w-48 h-6" />
                </div>
            </div>
        </section>
    );
};

export default BrandWall;
