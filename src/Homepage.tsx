import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar';

const images = [
  '/assets/ProjectImages/Main Page/1 (2).jpg',
  '/assets/ProjectImages/Main Page/1.0.jpg',
  '/assets/ProjectImages/Main Page/1.2.jpg',
  
];

const Homepage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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
            preload="auto"
            src="/assets/out4mb.mp4"
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
            preload="auto"
            src="/assets/In4mb.mp4"
          />
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-4xl md:text-6xl font-extrabold hover:scale-110 transition-transform duration-300">
              Interior Design
            </h1>
          </div>
        </div>
      </div>

      {/* Large screens - Image slider instead of video */}
      <div className="hidden lg:block absolute inset-0 overflow-hidden">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </div>
    </div>
  );
};

export default Homepage;
