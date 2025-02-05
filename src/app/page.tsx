"use client";
import Sidebar from "../components/Sidebar";
import { useState, useRef, useEffect } from "react";
import AboutMe from "../components/AboutMe";
import Home from "../components/Home";
import Resume from "../components/Resume";
import Portofolio from "../components/Portofolio";
import ContactMe from "../components/ContactMe";
const sectionStyle =
  "min-h-screen w-screen text-white flex flex-col justify-center items-center snap-start bg-white";

export default function BHome() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleScroll = () => {
    const container = containerRef.current;

    if (container) {
      const sections = Array.from(container.querySelectorAll("section"));
      let currentIndex = 0;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= 0) {
          currentIndex = index;
        }
      });

      setSelectedIndex(currentIndex);
    }
  };

  // Add scroll event listener on component mount
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    // Cleanup scroll event listener on unmount
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="flex h-screen">
      <div
        ref={containerRef}
        className="w-full overflow-auto snap-y snap-mandatory h-screen hide-scrollbar"
      >
        <section id="section0" className={`${sectionStyle}`}>
          <Home />
        </section>
        <section id="section1" className={`${sectionStyle}`}>
          <AboutMe />
        </section>
        <section id="section2" className={`${sectionStyle}`}>
          <Resume />
        </section>
        <section id="section3" className={`${sectionStyle}`}>
          <Portofolio />
        </section>
        {/* <section id="section4" className={`${sectionStyle}`}>
          <Testimonials />
        </section> */}
        <section id="section4" className={`${sectionStyle}`}>
          <ContactMe />
        </section>
      </div>
      {!isMobile ? <div className="bg-transparent text-white right-0 h-full flex items-center justify-end fixed mr-4">
        <Sidebar
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </div> : <></>}
    </div>
  );
}

