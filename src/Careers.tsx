import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 }, // slightly more vertical shift for extra smoothness
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.4,         // more delay between items
      duration: 1.2,          // slower fade-in
      ease: 'easeOut',
    },
  }),
};


const JoinOurTeam: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send('service_jsi2gwd', 'template_ktry3kn', templateParams, 'BP6qOrGk7VSmYtdwe')
      .then(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        setIsSubmitting(false);
        console.error('Failed to send email:', error);
      });
  };

  return (
    <div ref={ref} className="flex flex-col items-center min-h-screen bg-gray-100 px-4 py-12">
      <motion.h1
        className="text-gray-800 text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-10 text-center"
        variants={fadeInUp}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        custom={0}
      >
        Join our team
      </motion.h1>

      <motion.div
        className="flex flex-col md:flex-row w-full bg-white shadow-lg rounded-lg overflow-hidden"
        variants={fadeInUp}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        custom={0.2}
      >
       {/* Image Section */}
<div className="relative w-full md:w-1/2 h-64 md:h-auto group overflow-hidden">
  {/* Default Image */}
  <img
    src="/assets/ProjectImages/JoinMe2.png"
    alt="Default"
    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0"
  />

  {/* Hover Image */}
  <img
    src="/assets/ProjectImages/JoinMe1.jpg"
    alt="Hover"
    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
  />

  {/* Cursor PNG at bottom right */}
  <img
    src="/assets/pointer.png" // ✅ Make sure this path is correct
    alt="Cursor Icon"
    className="absolute bottom-3 right-3 w-12 h-12 z-20 pointer-events-none"
  />
</div>


        {/* Form Section */}
        <div className="w-full md:w-1/2 p-6 md:p-8 lg:p-10">
          <form className="mb-6 space-y-6" onSubmit={handleSubmit}>
            {['name', 'email', 'message'].map((field, i) => (
              <motion.div key={field} variants={fadeInUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.4 + i * 0.2}>
                <label className="block text-gray-700 text-xl font-semibold mb-2 capitalize">
                  {field}
                </label>
                {field === 'message' ? (
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-4 border rounded-lg text-base"
                    rows={5}
                    required
                  />
                ) : (
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    name={field}
                    value={formData[field as 'name' | 'email']}
                    onChange={handleChange}
                    className="w-full p-4 border rounded-lg text-base"
                    required
                  />
                )}
              </motion.div>
            ))}

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="bg-black text-white font-bold py-3 px-4 rounded-lg w-full text-lg hover:bg-gray-900 transition"
              variants={fadeInUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={1.2}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </form>

          {isSuccess && (
            <motion.p
              className="text-green-500 text-center font-semibold mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              Your message has been sent successfully!
            </motion.p>
          )}

          <motion.p
            className="text-gray-800 text-lg sm:text-xl lg:text-2xl leading-relaxed mt-6"
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={1.4}
          >
            At Studio Ma:Ya, we are constantly looking to enrich our studio with individuals from diverse
            backgrounds, such as Architecture, Interior Design, Planning, Graphic Design, and Product Design.
            Any interest towards design, or being highly motivated and organized, is welcome.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default JoinOurTeam;
