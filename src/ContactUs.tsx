import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Facebook,
  Instagram,
  MapPin,
  Linkedin,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.9,
      ease: "easeOut",
    },
  }),
};

export default function ContactUs() {
  return (
    <>
      <div className="bg-gray-100 text-gray-900 py-16 px-[18px]">
        <motion.h2
          className="text-gray-800 text-4xl sm:text-5xl lg:text-6xl font-extrabold mt-6 mb-10 text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          custom={0}
        >
          Contact Us
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-8 w-full items-stretch">
          <motion.div
            className="md:w-1/2 w-full rounded-2xl overflow-hidden shadow-md border border-gray-300 h-[600px]"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={1}
          >
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7000.608035826403!2d77.20355595!3d28.680551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd8efeab59d1%3A0xc8b9b3e80502ab39!2sKamla%20Nagar%2C%20Delhi%2C%20110007!5e0!3m2!1sen!2sin!4v1745860509441!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

          <div className="md:w-1/2 w-full h-[600px] flex flex-col">
            {[
              {
                icon: <Mail className="text-blue-500 w-6 h-6" />,
                text: "contact@studiomaya.in",
                href: "mailto:contact@studiomaya.in",
              },
              {
                icon: <Phone className="text-green-500 w-6 h-6" />,
                text: "9711731024, 8700218168",
                href: "tel:+1234567890",
              },
              {
                icon: <Instagram className="text-pink-500 w-6 h-6" />,
                text: "@studiomaya.in",
                href: "https://www.instagram.com/studiomaya.in/",
              },
              {
                icon: <Facebook className="text-blue-700 w-6 h-6" />,
                text: "/studiomaya.in",
                href: "https://www.facebook.com/studiomaya.in",
              },
              {
                icon: <Linkedin className="text-sky-500 w-6 h-6" />,
                text: "/company/studiomaya",
                href: "https://www.linkedin.com/company/studiomaya",
              },
              {
                icon: <MapPin className="text-red-500 w-6 h-6" />,
                text: "43-D, Kamla Nagar, Delhi 110007 | A-17, Ground Floor, Sector-53, Noida-201301",
                href: "https://goo.gl/maps/YZ7jZMxFGjU6wKxPA",
              },
            ].map(({ icon, text, href }, index, array) => (
              <motion.a
                key={index}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-5 bg-white rounded-xl hover:bg-gray-100 transition shadow-sm flex-1 ${
                  index !== array.length - 1 ? "mb-4" : ""
                }`}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={index + 2}
              >
                <div>{icon}</div>
                <div className="text-2xl break-words">{text}</div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <footer className="w-full bg-black text-white pt-12 pb-6">
        <motion.div
           className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center text-center lg:text-left gap-12 lg:items-start lg:ml-[50px] lg:mr-auto lg:pr-8"

          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={0}
        >
          <motion.div
            className="flex-shrink-0 text-center w-full lg:w-auto mb-8 lg:mb-0 mt-[20px] lg:mt-0"
            variants={fadeInUp}
            custom={1}
          >
           <a href="#home">
  <img
    src="/assets/ProjectImages/logowhite.png"
    alt="Studio Maya Logo"
    className="w-60 h-auto mb-3 mx-auto cursor-pointer"
  />
</a>
<p className="text-xl text-gray-300">
  Architecture | Interior | Planning
</p>

          </motion.div>

          <motion.div variants={fadeInUp} custom={2}>
            <h3 className="text-xl font-semibold mb-4">Our Company</h3>
            <ul className="space-y-2 text-lg">
              <li><a href="#home" className="hover:underline">Home</a></li>
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#projects" className="hover:underline">Projects</a></li>
              <li><a href="#careers" className="hover:underline">Careers</a></li>
              <li><a href="#publications" className="hover:underline">Publications</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp} custom={3}>
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-lg">
              <li>
                <a
                  href="https://www.linkedin.com/company/studiomaya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center gap-2"
                >
                  <Linkedin className="w-5 h-5 text-sky-500" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/studiomaya.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center gap-2"
                >
                  <Facebook className="w-5 h-5 text-blue-600" />
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/studiomaya.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center gap-2"
                >
                  <Instagram className="w-5 h-5 text-pink-500" />
                  Instagram
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full border-t border-gray-700 mt-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={4}
        />

        <motion.div
          className="text-center text-base text-gray-400 mt-6 px-4"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={5}
        >
          <p>© 2025 StudioMaya. All rights reserved.</p>
          <p className="mt-1">
            Powered by <span className="text-white font-medium">StudioMaya</span>
          </p>
        </motion.div>
      </footer>
    </>
  );
}
