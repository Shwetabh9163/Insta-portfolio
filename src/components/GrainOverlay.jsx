import React from 'react';

const GrainOverlay = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden opacity-[0.015]">
            <div className="absolute inset-0 bg-transparent" style={{ backgroundImage: 'repeating-radial-gradient(#000 0 0.0001%, #fff 0 0.0002%)', backgroundSize: '250px 250px' }} />
        </div>
    );
};

export default GrainOverlay;
