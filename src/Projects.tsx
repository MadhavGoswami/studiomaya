import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';

// Dummy imports for structure
// Replace with your actual data
// import { Project, projectData, categories } from './your-data-source';


const projectData: Project[] = [
  {
  id: 18,
  category: 'Commercial',
  title: 'Neel David Salon',
  description: 'Refined Elegance Meets Urban Chic',
  images: [
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876423/1_vlvun9.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876424/2_egpkvc.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876424/3_ombrba.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876425/4_qxge42.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876425/5_fxvraz.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876426/6_xpgfit.jpg'
  ]
},
 {
  id: 19,
  category: 'Commercial',
  title: 'V Law Attorney',
  description: 'Objection Overruled: V Law Attorneys Redefine the Verdict on Modern Office Design',
  images: [
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876429/1_csnp5j.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876430/2_iihkze.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876430/3_hsoxzc.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876431/4_fm3wl2.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876431/5_dlvcud.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876432/6_hou7jn.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876433/7_lxuzvv.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876433/8_gukysx.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876434/9_hfkpvb.jpg'
  ]
},

 {
  id: 13,
  category: 'Residential',
  title: 'Oklahoma Housing: Elevated Living',
  description: 'A Vision for Urban Green Architecture',
  images: [
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876529/1_zdbm9t.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/v1747031757/250512_gif_3_az89wk.gif',
  ]
},

 {
  id: 11,
  category: 'Residential',
  title: 'Kalkaji Residence',
  description: 'A Fusion of Earthy Tradition and Modern Steadiness',
  images: [
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876519/1_m3cjow.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876520/2_hnqcz8.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876520/Bedroom_1_Toilet_1_rqprip.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876524/Bedroom_2_1_eujt8i.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876524/Bedroom_2_2_ihyzcd.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876525/Bedroom_2_zbsgjw.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876528/Common_Toilet_unscxx.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876528/Kitchen_Cum_Dining_bgxdhv.jpg'
  ]
},

 {
  id: 15,
  category: 'Commercial',
  title: 'Banquet Hall',
  description: 'A Classical Affair in Punjab',
  images: [
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876408/2_tqkbfg.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876408/1_rambzr.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876408/3_xbutfq.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876409/4_poz4en.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876409/5_qhqsz3.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876409/6_mb8scg.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876409/t1_kktf4j.jpg'
  ]
},

 {
  id: 2,
  category: 'Residential',
  title: 'The Aurelia Estate',
  description: 'Neo-Classical Charm Reimagined',
  images: [
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876530/1_rxx3ko.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876533/2_rpshpt.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876533/3_o8uqzz.jpg'
  ]
},

  {
  id: 1,
  category: 'Residential',
  title: 'Aashirwad',
  description: 'A Bespoke Haven of Timeless Elegance',
  images: [
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876472/1_h5snyk.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876473/2_b2tlbk.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876474/3_fotvhi.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876476/4_ke1gw1.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876481/5_as8glb.jpg'
  ]
},
{
  id: 20,
  category: 'Commercial',
  title: 'FWS Office- Delhi',
  description: 'Elevating Commercial Design: A Contemporary Architectural Statement Integrating Functionality and Urban Identity',
  images: [
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876410/1_jr7ebe.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876415/2_zvp0ys.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876416/3_pz7a1k.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876416/4_2_yq3wfa.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876417/5_2_jseo4c.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876417/6_2_elej4p.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876418/7_gtxdsn.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876419/8_hxhtp4.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876420/9_khssev.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876415/16_lruf4h.jpg'
  ]
},

  {
  id: 6,
  category: 'Residential',
  title: 'Ghaziabad Farm',
  description: 'A Modern Oasis of Elegance and Tranquility',
  images: [
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876505/1_cveyeo.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876509/2_um0s4w.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876509/3_eejjaf.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876510/4_exikiq.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876510/5_ewpjbr.jpg'
  ]
},
{
  id: 7,
  category: 'Residential',
  title: 'Frame House: 240 Nirvana',
  description: 'A Neo-Classical Statement',
  images: [
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876504/Facade_olhw1q.gif',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876504/1_rcecmr.jpg'
  ]
},

 {
  id: 8,
  category: 'Residential',
  title: 'Apartment 81 ',
  description: 'Serenity in Symmetry: A Modern Indian Home Interior',
  images: [
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876489/1_j5olv7.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876490/2_kixabh.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876490/Bedroom_ktqgnq.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876490/Common_Toilet_klaioo.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876491/Kitchen_pcngci.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876493/Toilet_fxgoqa.jpg'
  ]
},
{
  id: 9,
  category: 'Residential',
  title: 'Aashiyana Gurugram',
  description: 'AASHIYANA: A Refined Expression of Modern Living',
  images: [
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876481/1_dmmfug.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876482/2_ixwyew.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876483/3_itapv6.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876484/4_gf5ssu.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876485/5_xi3yg2.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876486/6_c32ufm.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876487/7_kw6vl2.jpg'
  ]
},

 {
  id: 10,
  category: 'Residential',
  title: '150 Kalyan Vihar',
  description: 'A Modern 3BHK Haven in North Delhi',
  images: [
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876470/1_bwwzbz.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876470/2_bpim7r.jpg'
  ]
},
{
  id: 4,
  category: 'Residential',
  title: 'Retirement Retreat',
  description: 'A Symphony of Geometry and Warmth',
  images: [
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876541/5_ummwn9.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876537/2_cjihf9.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876540/3_seq8q7.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876537/1C_vsrjkt.jpg'
  ]
},
{
  id: 12,
  category: 'Residential',
  title: 'Ghaziabad Residence',
  description: ' A Regal Retreat: Timeless Luxury in Contemporary Form',
  images: [
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876514/1_ulkekg.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876514/2_nmyu6s.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876515/Dining_mygcdm.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876515/3_zhfplg.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876519/parents_bedroom_kclivq.jpg'
  ]
},

  {
  id: 3,
  category: 'Residential',
  title: 'Contemporary Enclave',
  description: '“A Modernist Retreat Framed by Nature’s Elegance".',
  images: [
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876536/View_1_yh2yet.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876536/View_2_tiv5w1.jpg'
  ]
},
{
  id: 16,
  category: 'Commercial',
  title: 'FWS Office Aerocity',
  description: 'Refined Functionality in Focus',
  images: [
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876420/1_adwt8a.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876421/2_i7i5yu.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876422/3_i1tpwl.jpg'
  ]
},
{
  id: 17,
  category: 'Commercial',
  title: 'J R Office',
  description: 'Sophisticated Simplicity in Workspace Design',
  images: [
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876422/1_x54c0f.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876422/2_ov71dv.jpg'
  ]
},

{
  id: 14,
  category: 'Residential',
  title: 'Bijwasan Residence',
  description: 'A sophisticated residential design.',
  images: [
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876494/1_db5yhz.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876495/2_iuvlld.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876496/3_t92cay.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876496/4_rw04gg.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876500/5_wklu4i.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876500/6_xutvmq.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876500/7_wkedey.jpg'
  ]
},
{
  id: 22,
  category: 'Hospitality',
  title: 'Base Lounge',
  description: 'Timeless Indulgence: The Club Lounge Experience',
  images: [
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876436/1_sndmo9.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876437/final_v2_an5qgs.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876438/Presentation1_lzeygc.png'
  ]
},
 
 {
  id: 21,
  category: 'Hospitality',
  title: 'Nilyam Guest House',
  description: 'In quiet contemplation, learning the art of Stillness.',
  images: [
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876438/C1.1_vy0arq.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876438/C2.2_ztcphk.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876440/M2.2c_espm2k.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876438/C1.1_vy0arq.jpg'
  ]
},
{
  id: 23,
  category: 'Institutional',
  title: 'Aarambh Primary School',
  description: '"Aarambh: A Cultural Canvas in Motion"',
  images: [
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876440/1_vv1iri.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876440/2_qijvev.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876441/3_cz6uz2.jpg'
  ]
},
{
  id: 24,
  category: 'Competition',
  title: 'CPDI',
  description: '"Nyubu: A Harmonious Blend of Tradition, Modernism, and Feminine Power in Design',
  images: [
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876434/c1_g4sr2o.jpg',
    'https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876435/c2_zlv4ev.jpg'
  ]
}

];
const categories = ['All', 'Residential', 'Commercial', 'Hospitality', 'Institutional', 'Competition'];

type Project = {
  id: number;
  category: string;
  title: string;
  description: string;
  images: string[];
};

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
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const isThrottling = useRef(false);

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
    if (!selectedProject || isThrottling.current) return;
    isThrottling.current = true;
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : selectedProject.images.length - 1
    );
    setTimeout(() => (isThrottling.current = false), 500);
  }, [selectedProject]);

  const handleNextImage = useCallback(() => {
    if (!selectedProject || isThrottling.current) return;
    isThrottling.current = true;
    setCurrentImageIndex((prevIndex) =>
      prevIndex < selectedProject.images.length - 1 ? prevIndex + 1 : 0
    );
    setTimeout(() => (isThrottling.current = false), 500);
  }, [selectedProject]);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    if (!selectedProject) return;
    const img = new Image();
    img.src = selectedProject.images[(currentImageIndex + 1) % selectedProject.images.length];
  }, [currentImageIndex, selectedProject]);

  const handleLoadMore = () => setVisibleCount((prev) => prev + 8);

  useEffect(() => {
    setVisibleCount(8);
  }, [activeCategory]);

  useEffect(() => {
    const isLargeScreen = window.innerWidth >= 768;
    if (!selectedProject || isPaused || !isLargeScreen) return;
    const interval = setInterval(() => {
      handleNextImage();
    }, 1000);
    return () => clearInterval(interval);
  }, [selectedProject, handleNextImage, isPaused]);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleNextImage(),
    onSwipedRight: () => handlePrevImage(),
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
  className={`
    absolute inset-0 rounded-lg
    ${isLargeScreen ? 'flex flex-col items-center justify-center text-center p-4 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition' : 'bg-black bg-opacity-20'}
  `}
  initial="hidden"
  whileHover={isLargeScreen ? 'visible' : undefined}
  animate={!isLargeScreen ? 'visible' : undefined}
  variants={overlayVariant}
>
  {isLargeScreen ? (
    <>
      <motion.h3 className="font-bold text-white text-3xl mb-4">
        {project.title}
      </motion.h3>
      <motion.p className="text-gray-200 text-2xl px-[60px]">
        {project.description}
      </motion.p>
    </>
  ) : (
    <div className="absolute bottom-[10px] w-full flex justify-center">
      <motion.h3
  className="font-bold text-white text-2xl text-center px-4"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={attentionVariant}
>
  {project.title}
</motion.h3>

    </div>
  )}
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
  <div
    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
    onClick={closeSlider} // Tap outside to close
  >
    <motion.div
      className="relative w-full h-full max-h-screen flex items-center justify-center"
      initial="hidden"
      animate="visible"
      variants={attentionVariant}
      onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside
    >
      <button
        onClick={closeSlider}
        className="absolute top-4 right-6 text-white text-3xl font-bold z-10"
      >
        &times;
      </button>

      <div
        className="relative w-full flex items-center justify-center"
        onMouseEnter={() => isLargeScreen && setIsPaused(true)}
        onMouseLeave={() => isLargeScreen && setIsPaused(false)}
      >
        {selectedProject.id !== 13 && (
          <button
            onClick={handlePrevImage}
            className="absolute top-1/2 -translate-y-1/2 text-white p-3 text-4xl font-bold rounded-full transition left-4 lg:left-8"
          >
            &#8249;
          </button>
        )}

        <div {...(selectedProject.id !== 13 ? swipeHandlers : {})}>
          <motion.img
            ref={imgRef}
            src={
              selectedProject.id === 13
                ? selectedProject.images[1]
                : selectedProject.images[currentImageIndex]
            }
            alt={`${selectedProject.title} ${currentImageIndex + 1}`}
            loading="eager"
            className="object-contain w-[90vw] h-[80vh] rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {selectedProject.id !== 13 && (
          <button
            onClick={handleNextImage}
            className="absolute top-1/2 -translate-y-1/2 text-white p-3 text-4xl font-bold rounded-full transition right-4 lg:right-8"
          >
            &#8250;
          </button>
        )}
      </div>
    </motion.div>
  </div>
)}


    </div>
  );
};

export default ProjectPage;