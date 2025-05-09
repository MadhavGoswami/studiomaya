import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';

// Dummy imports for structure
// Replace with your actual data
// import { Project, projectData, categories } from './your-data-source';

// Define the Project type
const categories = ['All', 'Residential', 'Commercial', 'Hospitality', 'Institutional', 'Competition'];

type Project = {
  id: number;
  category: string;
  title: string;
  description: string;
  images: string[];
};

const projectData: Project[] = [
  { id: 18, category: 'Commercial', title: 'Neel David Salon', description: 'Refined Elegance Meets Urban Chic', images: ['assets/ProjectImages/Commercial/Neeldavid Salon/1.jpg','assets/ProjectImages/Commercial/Neeldavid Salon/2.jpg','/assets/ProjectImages/Commercial/Neeldavid Salon/3.jpg','assets/ProjectImages/Commercial/Neeldavid Salon/4.jpg','assets/ProjectImages/Commercial/Neeldavid Salon/5.jpg','assets/ProjectImages/Commercial/Neeldavid Salon/6.jpg'] },
  { id: 19, category: 'Commercial', title: 'V Law Attorney', description: 'Objection Overruled: V Law Attorneys Redefine the Verdict on Modern Office Design', images: ['assets/ProjectImages/Commercial/V Law Attorney/1.jpg','assets/ProjectImages/Commercial/V Law Attorney/2.jpg','assets/ProjectImages/Commercial/V Law Attorney/3.jpg','assets/ProjectImages/Commercial/V Law Attorney/4.jpg','assets/ProjectImages/Commercial/V Law Attorney/5.jpg','assets/ProjectImages/Commercial/V Law Attorney/6.jpg','assets/ProjectImages/Commercial/V Law Attorney/7.jpg','assets/ProjectImages/Commercial/V Law Attorney/8.jpg','assets/ProjectImages/Commercial/V Law Attorney/9.jpg'] },
  { id: 13, category: 'Residential', title: 'Oklahoma Housing: Elevated Living', description: 'A Vision for Urban Green Architecture', images: ['assets/ProjectImages/Residential/Okhlahoma Housing/1.jpg','assets/ProjectImages/Residential/Okhlahoma Housing/Shartel Tower Concept Design.gif'] },
  { id: 11, category: 'Residential', title: 'Kalkaji Residence: Kalkaji Residence', description: 'A Fusion of Earthy Tradition and Modern Steadiness', images: ['assets/ProjectImages/Residential/Kalkaji Residence/1.jpg','assets/ProjectImages/Residential/Kalkaji Residence/2.jpg','assets/ProjectImages/Residential/Kalkaji Residence/Bedroom 1 Toilet 1.jpg','assets/ProjectImages/Residential/Kalkaji Residence/Bedroom 2 1.jpg','assets/ProjectImages/Residential/Kalkaji Residence/Bedroom 2 2.jpg','assets/ProjectImages/Residential/Kalkaji Residence/Bedroom 2.jpg','assets/ProjectImages/Residential/Kalkaji Residence/Common Toilet.jpg','assets/ProjectImages/Residential/Kalkaji Residence/Kitchen Cum Dining.jpg'] },
  { id: 15, category: 'Commercial', title: 'Banquet Hall:', description: 'A Classical Affair in Punjab', images: ['assets/ProjectImages/Commercial/Banquet Hall/2.jpg','assets/ProjectImages/Commercial/Banquet Hall/1.jpg','assets/ProjectImages/Commercial/Banquet Hall/3.jpg','assets/ProjectImages/Commercial/Banquet Hall/4.jpg','assets/ProjectImages/Commercial/Banquet Hall/5.jpg','assets/ProjectImages/Commercial/Banquet Hall/6.jpg','assets/ProjectImages/Commercial/Banquet Hall/t1.jpg'] },
  { id: 2, category: 'Residential', title: 'The Aurelia Estate:', description: 'Neo-Classical Charm Reimagined', images: ['assets/ProjectImages/Residential/Patna Residence/1.jpg','assets/ProjectImages/Residential/Patna Residence/2.jpg','assets/ProjectImages/Residential/Patna Residence/3.jpg'] },
  { id: 1, category: 'Residential', title: 'Aashirwad:', description: 'A Bespoke Haven of Timeless Elegance', images: ['assets/ProjectImages/Residential/Aashirwad/1.jpg', 'assets/ProjectImages/Residential/Aashirwad/2.jpg','assets/ProjectImages/Residential/Aashirwad/3.jpg','assets/ProjectImages/Residential/Aashirwad/4.jpg','assets/ProjectImages/Residential/Aashirwad/5.jpg'] },
  { id: 20, category: 'Commercial', title: 'FWS Office- Delhi', description: 'Elevating Commercial Design: A Contemporary Architectural Statement Integrating Functionality and Urban Identity', images: ['assets/ProjectImages/Commercial/FWS Office - Delhi/1.jpg','assets/ProjectImages/Commercial/FWS Office - Delhi/2.jpg','assets/ProjectImages/Commercial/FWS Office - Delhi/3.jpg','assets/ProjectImages/Commercial/FWS Office - Delhi/4 (2).jpg','assets/ProjectImages/Commercial/FWS Office - Delhi/5 (2).jpg','assets/ProjectImages/Commercial/FWS Office - Delhi/6 (2).jpg','assets/ProjectImages/Commercial/FWS Office - Delhi/7.jpg','assets/ProjectImages/Commercial/FWS Office - Delhi/8.jpg','assets/ProjectImages/Commercial/FWS Office - Delhi/9.jpg','assets/ProjectImages/Commercial/FWS Office - Delhi/10.jpg','assets/ProjectImages/Commercial/FWS Office - Delhi/11.jpg','assets/ProjectImages/Commercial/FWS Office - Delhi/12.jpg','assets/ProjectImages/Commercial/FWS Office - Delhi/13.jpg','assets/ProjectImages/Commercial/FWS Office - Delhi/14.jpg','assets/ProjectImages/Commercial/FWS Office - Delhi/15.jpg','assets/ProjectImages/Commercial/FWS Office - Delhi/16.jpg'] },
  { id: 5, category: 'Residential', title: 'The Courtyard House:', description: 'Courtyard-Centric Living in Urban Housing', images: ['/assets/ProjectImages/Residential/The Courtyard House/The Courtyard House-page-001 (1).jpg','/assets/ProjectImages/Residential/The Courtyard House/The Courtyard House-page-002.jpg','/assets/ProjectImages/Residential/The Courtyard House/The Courtyard House-page-003.jpg','/assets/ProjectImages/Residential/The Courtyard House/The Courtyard House-page-004.jpg','/assets/ProjectImages/Residential/The Courtyard House/The Courtyard House-page-005.jpg','/assets/ProjectImages/Residential/The Courtyard House/The Courtyard House-page-006.jpg','/assets/ProjectImages/Residential/The Courtyard House/The Courtyard House-page-007.jpg'] },
  { id: 6, category: 'Residential', title: 'Ghaziabad Farm:', description: 'A Modern Oasis of Elegance and Tranquility', images: ['/assets/ProjectImages/Residential/Ghaziabad Farm/1.jpg','/assets/ProjectImages/Residential/Ghaziabad Farm/2.jpg','/assets/ProjectImages/Residential/Ghaziabad Farm/3.jpg','/assets/ProjectImages/Residential/Ghaziabad Farm/4.jpg','/assets/ProjectImages/Residential/Ghaziabad Farm/5.jpg'] },
  { id: 7, category: 'Residential', title: 'Frame House: 240 Nirvana:', description: 'A Neo-Classical Statement', images: ['assets/ProjectImages/Residential/Frame House/Facade.gif','assets/ProjectImages/Residential/Frame House/1.jpg'] },
  { id: 8, category: 'Residential', title: 'Apartment 81: ', description: 'Serenity in Symmetry: A Modern Indian Home Interior', images: ['assets/ProjectImages/Residential/Apartment 81/1.jpg','assets/ProjectImages/Residential/Apartment 81/2.jpg','assets/ProjectImages/Residential/Apartment 81/Bedroom.jpg','assets/ProjectImages/Residential/Apartment 81/Common Toilet.jpg','assets/ProjectImages/Residential/Apartment 81/Kitchen.jpg','assets/ProjectImages/Residential/Apartment 81/Toilet.jpg'] },
  { id: 9, category: 'Residential', title: 'Aashiyana Gurugram:', description: 'AASHIYANA: A Refined Expression of Modern Living', images: ['assets/ProjectImages/Residential/Aashiyana - Gurgaon Residence/1.jpg','assets/ProjectImages/Residential/Aashiyana - Gurgaon Residence/2.jpg','assets/ProjectImages/Residential/Aashiyana - Gurgaon Residence/3.jpg','assets/ProjectImages/Residential/Aashiyana - Gurgaon Residence/4.jpg','assets/ProjectImages/Residential/Aashiyana - Gurgaon Residence/5.jpg','assets/ProjectImages/Residential/Aashiyana - Gurgaon Residence/6.jpg','assets/ProjectImages/Residential/Aashiyana - Gurgaon Residence/7.jpg'] },
  { id: 10, category: 'Residential', title: '150 Kalyan Vihar:', description: 'A Modern 3BHK Haven in North Delhi', images: ['/assets/ProjectImages/Residential/150 Kalyan Vihar/1.jpg','/assets/ProjectImages/Residential/150 Kalyan Vihar/2.jpg'] },
  { id: 4, category: 'Residential', title: 'Retirement Retreat:', description: 'A Symphony of Geometry and Warmth', images: ['assets/ProjectImages/Residential/Retirement Retreat/5.jpg','assets/ProjectImages/Residential/Retirement Retreat/2.jpg','assets/ProjectImages/Residential/Retirement Retreat/3.jpg','assets/ProjectImages/Residential/Retirement Retreat/1C.jpg'] },
  { id: 12, category: 'Residential', title: 'Ghaziabad Residence:', description: ' A Regal Retreat: Timeless Luxury in Contemporary Form', images: ['assets/ProjectImages/Residential/Ghaziabad Residence/1.jpg','assets/ProjectImages/Residential/Ghaziabad Residence/2.jpg','assets/ProjectImages/Residential/Ghaziabad Residence/3.jpg','assets/ProjectImages/Residential/Ghaziabad Residence/Dining.jpg','assets/ProjectImages/Residential/Ghaziabad Residence/parents bedroom.jpg'] },
  { id: 3, category: 'Residential', title: 'Contemporary Enclave: ', description: '“A Modernist Retreat Framed by Nature’s Elegance".', images: ['/assets/1920x1080/5.jpg','/assets/ProjectImages/Residential/Rajnagar Residence/View 1.jpg',] },
  { id: 16, category: 'Commercial', title: 'FWS Office Aerocity:', description: 'Refined Functionality in Focus', images: ['assets/ProjectImages/Commercial/FWS Office, Aerocity/1.jpg','assets/ProjectImages/Commercial/FWS Office, Aerocity/2.jpg','assets/ProjectImages/Commercial/FWS Office, Aerocity/1.jpg'] },
  { id: 17, category: 'Commercial', title: 'J R Office', description: ' Sophisticated Simplicity in Workspace Design', images: ['assets/ProjectImages/Commercial/JR Office/1.jpg','assets/ProjectImages/Commercial/JR Office/2.jpg'] },
  { id: 14, category: 'Residential', title: 'Bijwasan Residence', description: 'A sophisticated residential design.', images: ['assets/ProjectImages/Residential/Bijwasan Residence/1.jpg','assets/ProjectImages/Residential/Bijwasan Residence/2.jpg','assets/ProjectImages/Residential/Bijwasan Residence/3.jpg','assets/ProjectImages/Residential/Bijwasan Residence/4.jpg','assets/ProjectImages/Residential/Bijwasan Residence/5.jpg','assets/ProjectImages/Residential/Bijwasan Residence/6.jpg','assets/ProjectImages/Residential/Bijwasan Residence/7.jpg'] },
  { id: 22, category: 'Hospitality', title: 'Base Lounge:', description: 'Timeless Indulgence: The Club Lounge Experience', images: ['assets/ProjectImages/Hospitatlity/Base Lounge/1.jpg','assets/ProjectImages/Hospitatlity/Base Lounge/final v2.jpg','assets/ProjectImages/Hospitatlity/Base Lounge/Presentation1.PNG'] },
  { id: 21, category: 'Hospitality', title: 'Nilyam Guest House:', description: 'In quiet contemplation, learning the art of Stillness.', images: ['assets/ProjectImages/Hospitatlity/निलयम - Guest House/M1.1c.jpg','assets/ProjectImages/Hospitatlity/निलयम - Guest House/M2.2c.jpg','assets/ProjectImages/Hospitatlity/निलयम - Guest House/C2.2.jpg','assets/ProjectImages/Hospitatlity/निलयम - Guest House/C1.1.jpg'] },
  { id: 23, category: 'Institutional', title: 'Aarambh Primary School:', description: '"Aarambh: A Cultural Canvas in Motion"', images: ['assets/ProjectImages/Institutional/आरम्भ - Primary School/1.jpg','assets/ProjectImages/Institutional/आरम्भ - Primary School/2.jpg','assets/ProjectImages/Institutional/आरम्भ - Primary School/3.jpg'] },
  { id: 24, category: 'Competition', title: 'CPDI:"', description: '"Nyubu: A Harmonious Blend of Tradition, Modernism, and Feminine Power in Design', images: ['assets/ProjectImages/Competition/CPDI/c1.jpg','assets/ProjectImages/Competition/CPDI/c2.jpg'] },
];

const attentionVariant = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 15,
      duration: 0.6,
    },
  },
};

const overlayVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const ProjectPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(8);
  const [isPaused, setIsPaused] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const filteredProjects =
    activeCategory === 'All'
      ? projectData
      : projectData.filter((project) => project.category === activeCategory);

  const displayedProjects = filteredProjects.slice(0, visibleCount);

  const openProjectSlider = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeSlider = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const handlePrevImage = useCallback(() => {
    if (!selectedProject) return;
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : selectedProject.images.length - 1
    );
  }, [selectedProject]);

  const handleNextImage = useCallback(() => {
    if (!selectedProject) return;
    setCurrentImageIndex((prevIndex) =>
      prevIndex < selectedProject.images.length - 1 ? prevIndex + 1 : 0
    );
  }, [selectedProject]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProject) return;
      if (e.key === 'ArrowLeft') handlePrevImage();
      else if (e.key === 'ArrowRight') handleNextImage();
      else if (e.key === 'Escape') closeSlider();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, handlePrevImage, handleNextImage]);

  useEffect(() => {
    const imgElement = imgRef.current;
    if (!imgElement) return;

    imgElement.style.opacity = '0';
    imgElement.style.transition = 'opacity 0.5s ease';

    const timeout = setTimeout(() => {
      imgElement.style.opacity = '1';
    }, 50);

    return () => clearTimeout(timeout);
  }, [currentImageIndex]);

  const handleLoadMore = () => setVisibleCount((prev) => prev + 8);

  useEffect(() => {
    setVisibleCount(8);
  }, [activeCategory]);

  useEffect(() => {
    if (!selectedProject || isPaused) return;

    const interval = setInterval(() => {
      handleNextImage();
    }, 2000);

    return () => clearInterval(interval);
  }, [selectedProject, handleNextImage, isPaused]);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNextImage,
    onSwipedRight: handlePrevImage,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <motion.h2
        initial="hidden"
        animate="visible"
        variants={attentionVariant}
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 mr-[30px] mt-[50px]"
      >
        Projects
      </motion.h2>

      <div className="text-center mb-6">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category, index) => {
            const isActive = activeCategory === category;
            return (
              <motion.div
                key={category}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={attentionVariant}
                transition={{ delay: index * 0.25, duration: 1.2 }}
                onClick={() => setActiveCategory(category)}
                className={`relative cursor-pointer w-32 md:w-52 h-12 md:h-14 flex items-center justify-center text-base md:text-xl font-semibold border border-black rounded-xl overflow-hidden group ${
                  isActive ? 'bg-black text-white' : ''
                }`}
              >
                {!isActive && (
                  <span className="absolute inset-0 translate-x-full group-hover:translate-x-0 bg-black transition-transform duration-300 ease-in-out rounded-xl"></span>
                )}
                <span
                  className={`relative z-10 transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-black group-hover:text-white'
                  }`}
                >
                  {category}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {displayedProjects.map((project, index) => (
          <motion.div
            key={project.id}
            onClick={() => openProjectSlider(project)}
            className="relative overflow-hidden cursor-pointer w-full aspect-[3/2] rounded-lg border-2 border-gray-300 shadow-lg hover:shadow-xl transition"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={attentionVariant}
            transition={{ delay: index * 0.1 }}
          >
            <img
              src={project.images[0]}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover rounded-lg"
            />
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition flex flex-col items-center justify-center text-center p-6 rounded-lg"
              initial="hidden"
              whileHover="visible"
              variants={overlayVariant}
            >
              <motion.h3 className="text-3xl font-bold text-white mb-4">
                {project.title}
              </motion.h3>
              <motion.p className="text-2xl text-gray-200 px-[60px]">
                {project.description}
              </motion.p>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {visibleCount < filteredProjects.length && (
        <motion.div
          className="flex justify-center mt-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={attentionVariant}
        >
          <button
            onClick={handleLoadMore}
            className="relative overflow-hidden w-52 h-14 text-lg font-semibold text-black border border-black rounded-xl group"
          >
            <span className="absolute inset-0 translate-x-full group-hover:translate-x-0 bg-black transition-transform duration-300 ease-in-out rounded-xl"></span>
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              Load More
            </span>
          </button>
        </motion.div>
      )}

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <motion.div
            className="relative w-full h-full max-h-screen flex items-center justify-center"
            initial="hidden"
            animate="visible"
            variants={attentionVariant}
          >
            <button
              onClick={closeSlider}
              className="absolute top-4 right-6 text-white text-3xl font-bold"
            >
              &times;
            </button>

            <div
              className="relative w-full flex items-center justify-center"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <button
                onClick={handlePrevImage}
                className="absolute top-1/2 -translate-y-1/2 text-white p-3 text-4xl font-bold rounded-full transition left-4 lg:left-8"
              >
                &#8249;
              </button>

              <div {...swipeHandlers}>
                <motion.img
                  ref={imgRef}
                  src={selectedProject.images[currentImageIndex]}
                  alt={`${selectedProject.title} ${currentImageIndex + 1}`}
                  className="w-auto max-h-[80vh] object-contain rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                />
              </div>

              <button
                onClick={handleNextImage}
                className="absolute top-1/2 -translate-y-1/2 text-white p-3 text-4xl font-bold rounded-full transition right-4 lg:right-8"
              >
                &#8250;
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ProjectPage;
