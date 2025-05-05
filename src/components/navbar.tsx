import React, { useState } from 'react';
import Logo from './logo';
import { FiMenu, FiX } from 'react-icons/fi';

interface NavbarProps {
  setMenuOpen: (isOpen: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setMenuOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    const newState = !isMenuOpen;
    setIsMenuOpen(newState);
    setMenuOpen(newState); // Pass the new state to Homepage
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setMenuOpen(false);
  };

  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <div className="absolute top-0 left-0 w-full flex items-center justify-between px-4 lg:px-10 py-5 bg-transparent z-10">
         <div className="cursor-pointer">
  <Logo />
</div>

      {/* Menu Button for mobile */}
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-white text-3xl">
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Navbar links */}
      <div
        className={`lg:flex items-center lg:space-x-8 ${
          isMenuOpen
            ? 'flex flex-col bg-black w-full h-screen absolute top-0 left-0 z-20'
            : 'hidden lg:flex'
        }`}
      >
        {/* Links in mobile mode */}
        <div className="lg:hidden flex justify-between items-center p-5 w-full">
        <button onClick={() => handleScrollToSection('home')} className="focus:outline-none">
  <Logo />
</button>
          <button onClick={toggleMenu} className="text-white text-3xl">
            <FiX />
          </button>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center text-white text-2xl lg:text-lg font-semibold">
          <button
            onClick={() => handleScrollToSection('home')}
            className="py-4 lg:py-0 lg:mr-8 hover:text-gray-300"
          >
            Home
          </button>
          <button
            onClick={() => handleScrollToSection('about')}
            className="py-4 lg:py-0 lg:mr-8 hover:text-gray-300"
          >
            About
          </button>
          <button
            onClick={() => handleScrollToSection('projects')}
            className="py-4 lg:py-0 lg:mr-8 hover:text-gray-300"
          >
            Projects
          </button>
          <button
            onClick={() => handleScrollToSection('careers')}
            className="py-4 lg:py-0 lg:mr-8 hover:text-gray-300"
          >
            Careers
          </button>
          <button
            onClick={() => handleScrollToSection('publications')}
            className="py-4 lg:py-0 lg:mr-8 hover:text-gray-300"
          >
            Publications
          </button>
          <button
            onClick={() => handleScrollToSection('contact')}
            className="py-4 lg:py-0 hover:text-gray-300"
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
