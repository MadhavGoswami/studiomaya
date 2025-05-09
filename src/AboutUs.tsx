import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: 'easeOut',
    },
  }),
};

const AboutUs: React.FC = () => {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [isTeamCardOpen, setIsTeamCardOpen] = useState(false);

  const toggleCard = () => setIsCardOpen(!isCardOpen);
  const toggleTeamCard = () => setIsTeamCardOpen(!isTeamCardOpen);

  useEffect(() => {
    document.body.style.overflow = isCardOpen || isTeamCardOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isCardOpen, isTeamCardOpen]);

  return (
    <div className="flex flex-col justify-start min-h-screen w-full bg-gray-100 text-center relative lg:px-[250px]">
      <motion.div
        className="w-full py-8"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={0}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">About Us</h1>
      </motion.div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-start w-full gap-10 px-4 lg:px-0 text-left">
        <motion.div
          className="flex-shrink-0 pl-[20px]"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={1}
        >
          <img
            src="/assets/ProjectImages/Lead Architect Photo.jpg"
            alt="Ar Mayank Yadav"
            className="w-56 h-72 md:w-64 md:h-80 lg:w-72 lg:h-80 object-cover rounded-lg cursor-pointer transition-transform transform hover:scale-105"
            onClick={toggleCard}
          />
          <div className="mt-3 text-2xl font-semibold text-gray-800 text-center">
            Ar Mayank Yadav
          </div>
          <div className="text-gray-500 text-lg font-medium mt-1 text-center">
            Founder & Design Head
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col justify-start w-full pr-6"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={2}
        >
          <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-600 text-justify px-4 sm:px-6 lg:px-0 mb-10">
            At Studio Ma:Ya, we believe that every space has a story waiting to be told. Based in the heart of New Delhi, we are a multidisciplinary design studio specializing in architecture and interior design, dedicated to shaping environments that are innovative, sustainable, and deeply responsive to their context.

            Our approach blends functionality with elegance, tradition with modernity, and vision with detail. From concept to completion, we immerse ourselves in each project—be it residential, commercial, institutional, or hospitality—delivering spaces that are not only visually compelling but also deeply human-centered.
          </p>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-600 text-justify px-4 sm:px-6 lg:px-0">
            At Ma:Ya, our approach is collaborative, integrated, and focused on resource utilization and achieving global reach with a local touch. With our designers, consultants, engineers, and the entire <span
              className="font-bold uppercase text-black underline cursor-pointer mr-3 transition-transform duration-300 ease-in-out hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(0,0,0,0.4)]"
              onClick={toggleTeamCard}
            >
              TEAM
            </span>
            at our studio, we provide distinctive worldwide services as follows.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="flex flex-col w-full mt-5 text-left gap-10 px-5"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={3}
      >
        <div className="w-full text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-8">
            Services We Provide
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:flex lg:flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 px-[20px] sm:px-[40px] mt-6">
            {[
              "Architecture",
              "Interior Designing",
              "Urban Planning",
              "Landscaping",
              "Graphic Designing",
              "Product Designing",
            ].map((service, index) => (
              <motion.div
                key={index}
                className="group relative w-full max-w-[260px] overflow-hidden shadow-md rounded-xl text-center cursor-pointer transform transition-all duration-300 hover:scale-105 mx-auto"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={4 + index}
              >
                <span className="absolute inset-0 translate-x-full group-hover:translate-x-0 bg-black transition-transform duration-300 ease-in-out z-0"></span>
                <span className="relative z-10 block px-6 py-4 text-gray-800 text-base sm:text-lg md:text-xl lg:text-2xl font-normal group-hover:text-white transition-colors duration-300">
                  {service}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {isCardOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={toggleCard}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative bg-white p-4 md:p-8 shadow-lg rounded-lg w-[90%] md:w-3/4 lg:w-1/2 max-h-screen overflow-y-auto flex flex-col items-center gap-6"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={toggleCard}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-4xl font-bold"
            >
              &times;
            </button>

            <img
              src="/assets/ProjectImages/Lead Architect Photo.jpg"
              alt="Ar Mayank Yadav"
              className="w-48 h-64 md:w-56 md:h-72 lg:w-64 lg:h-80 object-cover rounded-lg"
            />

            <div className="flex flex-col space-y-4 px-2">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center">Mayank Yadav</h2>
              <p className="text-lg md:text-xl font-medium text-gray-600 text-center">Design Head & Principal Architect</p>
              <div className="text-gray-500 font-medium text-xl md:text-2xl text-center">Founder & Design Head</div>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 text-justify">
                Studio Ma:Ya is led by Mayank Yadav, the Founder, Design Head & Principal Architect, whose bold,
                innovative design sensibility forms the core of our creative direction. With a commitment to
                professionalism, transparency, and integrity, Mayank brings a client-centric approach to every
                project, striving to deliver unique, purpose-driven solutions while building lasting relationships.
                His leadership continues to shape the studio’s evolving vision across diverse design domains. Driven
                by curiosity and collaboration, we thrive on translating lifestyle aspirations into meaningful,
                enduring designs.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default AboutUs;
