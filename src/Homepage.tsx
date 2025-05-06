import React, { useState } from 'react';
import Navbar from './components/navbar';

const Homepage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="relative z-20">
        <Navbar setMenuOpen={setIsMenuOpen} />
      </div>

      {/* Small screens - Split videos */}
      <div className="flex flex-col lg:hidden h-full">
        {/* Top Video */}
        <div className="relative w-full h-1/2">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            src="/assets/out.mp4"
          />
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-4xl md:text-6xl font-extrabold hover:scale-110 transition-transform duration-300">
              Architecture
            </h1>
          </div>
        </div>

        {/* Center "&" */}
        {!isMenuOpen && (
          <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
            <h1 className="text-white text-5xl font-extrabold">&</h1>
          </div>
        )}

        {/* Bottom Video */}
        <div className="relative w-full h-1/2">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            src="/assets/In.mp4"
          />
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-4xl md:text-6xl font-extrabold hover:scale-110 transition-transform duration-300">
              Interior Design
            </h1>
          </div>
        </div>
      </div>

      {/* Large screens - Background video only */}
      <div className="hidden lg:block absolute inset-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src="/assets/250606 Home Page Video 13Mb_preview.webm"
        />
        <div className="absolute inset-0 bg-black opacity-20"></div>
        {/* No text on large screens */}
      </div>
    </div>
  );
};

export default Homepage;
