"use client";
import Sidebar from "../components/Sidebar";
import Image from "next/image";
import pcc from "../images/pcc.jpg";
import { useState, useRef, useEffect } from "react";

const sectionStyle =
  "h-screen w-screen text-white flex flex-col justify-center items-center snap-start bg-white";

export default function BHome() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement | null>(null);

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
        className="mr-auto overflow-auto snap-y snap-mandatory h-screen hide-scrollbar"
      >
        <section id="section0" className={`${sectionStyle}`}>
          <div className="flex h-full w-full">
            <div className="bg-white w-1/2 justify-items-center content-center">
              <h1 className="text-4xl mb-6 main-green-text">
                <b>HELLO!</b> I AM
                <b className="text-yellow-400"> GABRIEL!</b>
              </h1>
              <h1 className="text-4xl mb-6 main-green-text bg-yellow-400">
                <b>
                  <i>SOFTWARE ENGINEER</i>
                </b>
              </h1>
              <p className="mb-4 text-center main-green-text">
                I have 7 years of software development!
              </p>
            </div>
            <div className="w-1/2 justify-center content-center main-green-background">
              <Image src={pcc} alt="" className="w-full" />
            </div>
          </div>
        </section>
        <section id="section1" className={`${sectionStyle}`}>
          <div>
            <h1 className="text-4xl mb-6 text-black">About me</h1>
          </div>
          <div>
            <p className="mb-4 text-center text-black">
              I am Bocancea Gabriel Ionut, software engineer with 7 years of
              experience
            </p>
          </div>
          <div>
            <table className="table-auto">
              <tbody>
                <tr>
                  <td className="text-center text-black">
                    7+ years of experience
                  </td>
                  <td className="text-center text-black">sada2</td>
                </tr>
                <tr>
                  <td className="text-center text-black">sada3</td>
                  <td className="text-center text-black">sada4</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section id="section2" className={`${sectionStyle}`}>
          <h1 className="text-4xl mb-6 text-black">Section 3: Introduction</h1>
          <p className="mb-4 text-center text-black">
            Welcome to Section 1. This section serves as an introduction to our
            topic. Here we discuss the basics and provide some context. The goal
            is to give you a solid understanding of what we’ll cover in the
            upcoming sections.
          </p>
        </section>
        <section id="section3" className={`${sectionStyle}`}>
          <h1 className="text-4xl mb-6 text-black">Section 3: Introduction</h1>
          <p className="mb-4 text-center text-black">
            Welcome to Section 3. This section serves as an introduction to our
            topic. Here we discuss the basics and provide some context. The goal
            is to give you a solid understanding of what we’ll cover in the
            upcoming sections.
          </p>
        </section>
        <section id="section4" className={`${sectionStyle}`}>
          <h1 className="text-4xl mb-6 text-black">Section 4: Introduction</h1>
          <p className="mb-4 text-center text-black">
            Welcome to Section 4. This section serves as an introduction to our
            topic. Here we discuss the basics and provide some context. The goal
            is to give you a solid understanding of what we’ll cover in the
            upcoming sections.
          </p>
        </section>
        <section id="section5" className={`${sectionStyle}`}>
          <h1 className="text-4xl mb-6 text-black">Section 5: Introduction</h1>
          <p className="mb-4 text-center text-black">
            Welcome to Section 5. This section serves as an introduction to our
            topic. Here we discuss the basics and provide some context. The goal
            is to give you a solid understanding of what we’ll cover in the
            upcoming sections.
          </p>
        </section>
      </div>
      <div className="bg-transparent text-white right-0 h-full flex items-center justify-end fixed mr-4">
        <Sidebar
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </div>
    </div>
  );
}
