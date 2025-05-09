import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Homepage from "./Homepage";
import AboutUs from "./AboutUs";
import CategoriesPage from "./Projects";
import JoinOurTeam from "./Careers";
import PublicationPage from './PublicationPage';
import ContactUs from './ContactUs';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2600);
    return () => clearTimeout(timer);
  }, []);

  // Disable right click
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-white z-50">
        <img 
          src="https://res.cloudinary.com/dmlvb18zu/image/upload/v1746876406/bilkulfinalloading_wu80gu.gif" 
          alt="Loading animation" 
          className="w-[450px] h-[450px]"
        />
      </div>
    );
  }

  return (
    <div className={`relative ${menuOpen ? "overflow-hidden h-screen" : ""}`}>
      <Navbar setMenuOpen={setMenuOpen} />
      <div id="home"><Homepage /></div>
      <div id="about"><AboutUs /></div>
      <div id="projects"><CategoriesPage /></div>
      <div id="publications"><PublicationPage /></div>
      <div id="careers"><JoinOurTeam /></div>
      <div id="contact"><ContactUs /></div>
    </div>
  );
}

export default App;
