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

  // Improved loading effect
  useEffect(() => {
    let imgLoaded = false;
    let timeoutReached = false;

    const checkIfDone = () => {
      if (imgLoaded && timeoutReached) {
        setIsLoading(false);
      }
    };

    const img = new Image();
    img.src = "https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876406/bilkulfinalloading_wu80gu.gif";
    img.onload = () => {
      imgLoaded = true;
      checkIfDone();
    };

    const timer = setTimeout(() => {
      timeoutReached = true;
      checkIfDone();
    }, 2600);

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
          src="https://res.cloudinary.com/dmlvb18zu/image/upload/f_auto,q_auto/v1746876406/bilkulfinalloading_wu80gu.gif" 
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
