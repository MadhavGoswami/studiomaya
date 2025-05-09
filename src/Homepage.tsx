import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar';

const imagesLarge = [
  '/assets/1920x1080/1.jpg',
  '/assets/1920x1080/2.jpg',
  '/assets/1920x1080/3.jpg',
  '/assets/ProjectImages/Main Page/View 2.jpg',
];

const topSliderImages = [
  '/assets/1920x1080/1.jpg',
  '/assets/1920x1080/2.jpg',
  '/assets/1920x1080/3.jpg',
];

const bottomSliderImages = [
  '/assets/1920x1080/9.jpg',
  '/assets/1920x1080/12.jpg',
  '/assets/1920x1080/13.jpg',
];

const Homepage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLarge, setCurrentLarge] = useState(0);
  const [currentTop, setCurrentTop] = useState(0);
  const [currentBottom, setCurrentBottom] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLarge((prev) => (prev + 1) % imagesLarge.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTop((prev) => (prev + 1) % topSliderImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBottom((prev) => (prev + 1) % bottomSliderImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <div className="relative z-20">
        <Navbar setMenuOpen={setIsMenuOpen} />
      </div>

      {/* Small Screens - Two Image Sliders with Zoom */}
      <div className="flex flex-col lg:hidden h-full">
        {/* Top Section */}
        <div className="relative w-full h-1/2 overflow-hidden">
        {topSliderImages.map((img, idx) => (
  <img
    key={idx}
    src={img}
    alt=""
    className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out transform ${
      idx === currentTop
        ? 'opacity-100 scale-100 z-10'
        : 'opacity-0 scale-100 z-0'
    }`}
  />
))}

          <div className="absolute inset-0 bg-black opacity-30" />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <h1 className="text-white text-4xl md:text-6xl font-extrabold drop-shadow-md hover:scale-110 transition-transform duration-300">
              Architecture
            </h1>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative w-full h-1/2 overflow-hidden">
        {bottomSliderImages.map((img, idx) => (
  <img
    key={idx}
    src={img}
    alt=""
    className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out transform ${
      idx === currentBottom
        ? 'opacity-100 scale-100 z-10'
        : 'opacity-0 scale-100 z-0'
    }`}
  />
))}

          <div className="absolute inset-0 bg-black opacity-30" />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <h1 className="text-white text-4xl md:text-6xl font-extrabold drop-shadow-md hover:scale-110 transition-transform duration-300">
              Interior Design
            </h1>
          </div>
        </div>

        {/* Center "&" */}
        {!isMenuOpen && (
          <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 flex items-center justify-center z-20">
            <h1 className="text-white text-5xl font-extrabold drop-shadow-md">&</h1>
          </div>
        )}
      </div>

      {/* Large Screens - Centered 16:9 Image Container with Zoom */}
      <div className="hidden lg:flex absolute inset-0 items-center justify-center bg-black">
        <div className="relative w-full max-w-screen aspect-[16/9] overflow-hidden">
        {imagesLarge.map((img, idx) => (
  <img
    key={idx}
    src={img}
    alt=""
    className={`absolute top-0 left-0 w-full h-full object-contain transition-all duration-1000 ease-in-out transform ${
      currentLarge === idx
        ? 'opacity-100 scale-100 z-10'
        : 'opacity-0 scale-100 z-0'
    }`}
  />
))}

          <div className="absolute inset-0 bg-black opacity-20 z-10" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
