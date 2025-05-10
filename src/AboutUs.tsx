import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.9,
      ease: 'easeOut',
    },
  }),
};

const fadeInOnly = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.9,
      ease: 'easeOut',
    },
  }),
};

const teamMembers = [
  { name: 'Mayank Yadav', title: 'Founder & Design Head', img: 'https://res.cloudinary.com/dmlvb18zu/image/upload/v1746876402/1_juyqpn.png' },
  { name: 'Deeksha Goswami', title: 'Principal Architect | Planner', img: 'https://res.cloudinary.com/dmlvb18zu/image/upload/v1746876402/6_squt2y.png' },
  { name: 'Ravinder Singh', title: 'Structure Consultant', img: 'https://res.cloudinary.com/dmlvb18zu/image/upload/v1746876402/2_mj2y8y.png' },
  { name: 'Charan Bhandari', title: 'Structure Consultant', img: 'https://res.cloudinary.com/dmlvb18zu/image/upload/v1746876402/4_bvmu3p.png' },
  { name: 'Chanderpal Kumar', title: 'MEP Consultant', img: 'https://res.cloudinary.com/dmlvb18zu/image/upload/v1746876403/7_rcu035.png' },
  { name: 'Suraj', title: 'Architect', img: 'https://res.cloudinary.com/dmlvb18zu/image/upload/v1746876405/9_di7ufl.png' },
  { name: 'Pankaj Pal', title: 'Architect', img: 'https://res.cloudinary.com/dmlvb18zu/image/upload/v1746876402/1_juyqpn.png' },
  { name: 'Annu Garg', title: 'Architect', img: 'https://res.cloudinary.com/dmlvb18zu/image/upload/v1746876405/8_mtsfac.png' },
  { name: 'Ravi Gupta', title: 'Intern', img: 'https://res.cloudinary.com/dmlvb18zu/image/upload/v1746876402/4_bvmu3p.png' },
  { name: 'Siddhart', title: 'Intern', img: 'https://res.cloudinary.com/dmlvb18zu/image/upload/v1746876402/2_mj2y8y.png' },
];

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
          className="flex-shrink-0 flex flex-col items-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={1}
        >
          <img
            src="https://res.cloudinary.com/dmlvb18zu/image/upload/v1746876444/Lead_Architect_Photo_ea4wyu.jpg"
            alt="Ar Mayank Yadav"
            className="w-56 h-72 md:w-64 md:h-80 lg:w-72 lg:h-80 object-cover rounded-lg cursor-pointer transition-transform transform hover:scale-105"
            onClick={toggleCard}
          />
          <div className="mt-1 text-2xl font-semibold text-gray-800 text-center">Ar Mayank Yadav</div>
          <div className="text-gray-500 text-lg font-medium mt-1 text-center">Founder & Design Head</div>
        </motion.div>

        <motion.div
          className="flex flex-col justify-start w-full pr-6"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={2}
        >
         <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-600 text-justify pl-10 pr-4 sm:pl-12 sm:pr-6 lg:pl-0 lg:pr-0 mb-10">



            At Studio Ma:Ya, we believe that every space has a story waiting to be told. Based in the heart of New Delhi,
            we are a multidisciplinary design studio specializing in architecture and interior design, dedicated to shaping
            environments that are innovative, sustainable, and deeply responsive to their context. Our approach blends functionality with elegance, tradition with modernity, and vision with detail. From concept to completion, we immerse ourselves in each project—be it residential, commercial, institutional, or hospitality—delivering spaces that are not only visually compelling but also deeply human-centered.
          </p>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-600 text-justify pl-10 pr-4 sm:pl-12 sm:pr-6 lg:pl-0 lg:pr-0">


            At Ma:Ya, our approach is collaborative, integrated, and focused on resource utilization and achieving global
            reach with a local touch. With our designers, consultants, engineers, and the entire{' '}
            <span
              className="font-bold uppercase text-black underline cursor-pointer mr-3 transition-transform duration-300 ease-in-out hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(0,0,0,0.4)]"
              onClick={toggleTeamCard}
            >
              TEAM
            </span>{' '}
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
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-8">Services We Provide</h2>

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
                className="group relative w-full max-w-[260px] overflow-hidden shadow-md rounded-xl text-center cursor-pointer transform transition-all duration-500 hover:scale-105 mx-auto"
                variants={fadeInOnly}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={index}
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
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-4"
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
              src="https://res.cloudinary.com/dmlvb18zu/image/upload/v1746876444/Lead_Architect_Photo_ea4wyu.jpg"
              alt="Ar Mayank Yadav"
              className="w-48 h-64 md:w-56 md:h-72 lg:w-64 lg:h-80 object-cover rounded-lg"
            />

            <div className="flex flex-col space-y-4 px-2">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center">Ar Mayank Yadav</h2>
             
              <div className="text-gray-500 font-medium text-xl md:text-2xl text-center">Founder & Design Head</div>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 text-justify">
                Studio Ma:Ya is led by Mayank Yadav, the Founder, Design Head & Principal Architect, whose bold,
                innovative design sensibility forms the core of our creative direction. With a commitment to
                professionalism, transparency, and integrity, Mayank brings a client-centric approach to every project,
                striving to deliver unique, purpose-driven solutions while building lasting relationships. His
                leadership continues to shape the studio’s evolving vision across diverse design domains. Driven by
                curiosity and collaboration, we thrive on translating lifestyle aspirations into meaningful, enduring
                designs.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}

      {isTeamCardOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-2 sm:px-4"
          onClick={toggleTeamCard}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative bg-white p-4 sm:p-6 md:p-8 lg:p-10 shadow-lg rounded-lg w-[95%] sm:w-[90%] md:w-4/5 lg:w-3/4 max-h-screen overflow-hidden mx-auto"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={toggleTeamCard}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-4xl font-bold"
            >
              &times;
            </button>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-gray-800 mb-8 text-center">
              Our Team
            </h2>

            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 justify-items-center">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full object-cover mb-2"
                  />
                  <div className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-800 text-center">
                    {member.name}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-500 text-center">
                    {member.title}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default AboutUs;
