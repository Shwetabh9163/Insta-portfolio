import React from 'react';

const Atmosphere = () => {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-2] bg-[#0A0A0A]">
            {/* Very Subtle Glows */}
            <div className="absolute top-[-10%] left-[-10%] w-[100%] h-[100%] bg-gradient-radial from-[#C5A059]/5 via-transparent to-transparent blur-[150px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[80%] h-[80%] bg-gradient-radial from-white/[0.02] via-transparent to-transparent blur-[180px]" />

            {/* Faint Grid Structure */}
            <div className="absolute inset-0 opacity-[0.01] bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:100px_100px]" />
        </div>
    );
};

export default Atmosphere;
