import React from 'react';

const Hero = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold text-yellow-100">MH SEBER</h1>
                    <p className="py-6">
                        Junior Programmer
                    </p>
                    <button className="btn btn-primary">Follow Me</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;