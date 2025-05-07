import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar';

const architectureImages = [
  '/assets/ProjectImages/Main Page/1.0.jpg',
  '/assets/ProjectImages/Main Page/1.1.jpg',
  '/assets/ProjectImages/Main Page/1.2.jpg',
  // Add more if needed
];

const interiorImages = [
  '/assets/ProjectImages/Main Page/2.0.jpg',
  '/assets/ProjectImages/Main Page/1 (2).jpg',
  '/assets/ProjectImages/Main Page/final v2.jpg',
  // Add more if needed
];

const Homepage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [archIndex, setArchIndex] = useState(0);
  const [intIndex, setIntIndex] = useState(0);
  const [largeScreenIndex, setLargeScreenIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setArchIndex((prev) => (prev + 1) % architectureImages.length);
      setIntIndex((prev) => (prev + 1) % interiorImages.length);
      setLargeScreenIndex((prev) => (prev + 1) % architectureImages.length); // or reuse one set
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="relative z-20">
        <Navbar setMenuOpen={setIsMenuOpen} />
      </div>

      {/* Small screens - Two sliders */}
      <div className="flex flex-col lg:hidden h-full">
        {/* Top Slider - Architecture */}
        <div className="relative w-full h-1/2">
          {architectureImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Architecture ${index + 1}`}
              className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
                index === archIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
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

        {/* Bottom Slider - Interior Design */}
        <div className="relative w-full h-1/2">
          {interiorImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Interior ${index + 1}`}
              className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
                index === intIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-4xl md:text-6xl font-extrabold hover:scale-110 transition-transform duration-300">
              Interior Design
            </h1>
          </div>
        </div>
      </div>

      {/* Large screens - One full background slider */}
      <div className="hidden lg:block absolute inset-0 overflow-hidden">
        {architectureImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
              index === largeScreenIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </div>
    </div>
  );
};

export default Homepage;
