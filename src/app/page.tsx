"use client";
import Sidebar from "../components/Sidebar";
import Image from "next/image";
import pcc from "../images/pcc.jpg";
import { useState, useRef, useEffect } from "react";
import AboutMeTable from "../components/AboutMeTable";
const sectionStyle =
  "h-screen w-screen text-white flex flex-col justify-center items-center snap-start bg-white";

export default function BHome() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [showDialog, setShowDialog] = useState<number | null>(null);

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
                <b className="text-yellow-400"> GABRIEL BOCANCEA!</b>
              </h1>
              <h1 className="text-4xl mb-6 main-green-text bg-yellow-400">
                <b>
                  <i>SOFTWARE ENGINEER</i>
                </b>
              </h1>
            </div>
            <div className="w-1/2 justify-center content-center main-green-background">
              <Image src={pcc} alt="" className="w-full h-full object-contain" />
            </div>
          </div>
        </section>
        <section id="section1" className={`${sectionStyle}`}>
          <div className="w-screen pr-32 pl-8">
            <div className="flex flex-col justify-center items-center w-full h-full">
              <h1 className="text-4xl mb-8 text-black font-bold">About Me</h1>
              <AboutMeTable />
            </div>
          </div>
        </section>
        <section id="section2" className={`${sectionStyle}`}>
          <div className="w-screen pr-32 pl-8">
            <div className="flex flex-col justify-center items-center w-full h-full">
              <h1 className="text-4xl mb-8 text-black font-bold">Resume</h1>
              <div className="grid grid-cols-2 gap-8 w-full">
                {/* Education Section */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-bold text-yellow-400 mb-4">Education</h2>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-black">Master of Science in Computer Science</h3>
                    <p className="text-black">University of Technology • 2018-2020</p>
                  </div>
                </div>

                {/* Work Experience Section */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-bold text-yellow-400 mb-4">Work Experience</h2>
                  <div className="ml-4">
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-black">Senior Software Engineer</h3>
                      <p className="text-black">Tech Solutions Inc. • 2020-Present</p>
                      <ul className="list-disc list-inside mt-2 text-black">
                        <li>Led development of enterprise-scale applications</li>
                        <li>Mentored junior developers and conducted code reviews</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-black">Full Stack Developer</h3>
                      <p className="text-black">Digital Innovations Co. • 2017-2020</p>
                      <ul className="list-disc list-inside mt-2 text-black">
                        <li>Developed and maintained multiple web applications</li>
                        <li>Optimized application performance</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Technical Skills Section */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-bold text-yellow-400 mb-4">Technical Skills</h2>
                  <div className="ml-4 space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-black">Frontend</h3>
                      <p className="text-black">React, Next.js, TypeScript, HTML5, CSS3</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-black">Backend</h3>
                      <p className="text-black">Node.js, Python, Java, SQL, MongoDB</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-black">DevOps</h3>
                      <p className="text-black">AWS, Docker, Kubernetes, CI/CD</p>
                    </div>
                  </div>
                </div>

                {/* Soft Skills Section */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-bold text-yellow-400 mb-4">Soft Skills</h2>
                  <div className="ml-4 grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-black">Leadership</h3>
                      <ul className="list-disc list-inside text-black">
                        <li>Team Management</li>
                        <li>Mentoring</li>
                        <li>Decision Making</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-black">Communication</h3>
                      <ul className="list-disc list-inside text-black">
                        <li>Technical Writing</li>
                        <li>Public Speaking</li>
                        <li>Collaboration</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="section3" className={`${sectionStyle}`}>
          <div className="w-screen pr-32 pl-8">
            <div className="flex flex-col justify-center items-center w-full h-full">
              <h1 className="text-4xl mb-8 text-black font-bold">Portofolio</h1>
              <div className="grid grid-cols-2 gap-8 w-full">
                {/* Project 1 */}
                <div
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = rect.left + rect.width / 2;
                    const y = rect.top + rect.height / 2;
                    setShowDialog(1);
                    document.documentElement.style.setProperty('--zoom-origin-x', `${x}px`);
                    document.documentElement.style.setProperty('--zoom-origin-y', `${y}px`);
                  }}
                  className="bg-white p-6 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-10 hover:scale-105"
                >
                  <h2 className="text-2xl font-bold text-yellow-400 mb-2">E-Commerce Platform</h2>
                  <p className="text-gray-600">Led development of a full-stack e-commerce solution</p>
                </div>

                {/* Project 2 */}
                <div
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = rect.left + rect.width / 2;
                    const y = rect.top + rect.height / 2;
                    setShowDialog(2);
                    document.documentElement.style.setProperty('--zoom-origin-x', `${x}px`);
                    document.documentElement.style.setProperty('--zoom-origin-y', `${y}px`);
                  }}
                  className="bg-white p-6 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-10 hover:scale-105"
                >
                  <h2 className="text-2xl font-bold text-yellow-400 mb-2">Cloud Migration</h2>
                  <p className="text-gray-600">Successfully migrated legacy systems to AWS</p>
                </div>

                {/* Project 3 */}
                <div
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = rect.left + rect.width / 2;
                    const y = rect.top + rect.height / 2;
                    setShowDialog(3);
                    document.documentElement.style.setProperty('--zoom-origin-x', `${x}px`);
                    document.documentElement.style.setProperty('--zoom-origin-y', `${y}px`);
                  }}
                  className="bg-white p-6 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-10 hover:scale-105"
                >
                  <h2 className="text-2xl font-bold text-yellow-400 mb-2">Mobile App</h2>
                  <p className="text-gray-600">Developed cross-platform mobile application</p>
                </div>

                {/* Project 4 */}
                <div
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = rect.left + rect.width / 2;
                    const y = rect.top + rect.height / 2;
                    setShowDialog(4);
                    document.documentElement.style.setProperty('--zoom-origin-x', `${x}px`);
                    document.documentElement.style.setProperty('--zoom-origin-y', `${y}px`);
                  }}
                  className="bg-white p-6 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-10 hover:scale-105"
                >
                  <h2 className="text-2xl font-bold text-yellow-400 mb-2">AI Integration</h2>
                  <p className="text-gray-600">Implemented ML models for data analysis</p>
                </div>

                {/* Project 5 */}
                <div
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = rect.left + rect.width / 2;
                    const y = rect.top + rect.height / 2;
                    setShowDialog(5);
                    document.documentElement.style.setProperty('--zoom-origin-x', `${x}px`);
                    document.documentElement.style.setProperty('--zoom-origin-y', `${y}px`);
                  }}
                  className="bg-white p-6 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-10 hover:scale-105"
                >
                  <h2 className="text-2xl font-bold text-yellow-400 mb-2">DevOps Pipeline</h2>
                  <p className="text-gray-600">Built automated CI/CD infrastructure</p>
                </div>

                {/* Project 6 */}
                <div
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = rect.left + rect.width / 2;
                    const y = rect.top + rect.height / 2;
                    setShowDialog(6);
                    document.documentElement.style.setProperty('--zoom-origin-x', `${x}px`);
                    document.documentElement.style.setProperty('--zoom-origin-y', `${y}px`);
                  }}
                  className="bg-white p-6 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-10 hover:scale-105"
                >
                  <h2 className="text-2xl font-bold text-yellow-400 mb-2">API Gateway</h2>
                  <p className="text-gray-600">Designed microservices architecture</p>
                </div>
              </div>

              {/* Dialog/Modal */}
              {showDialog && (
                <>
                  <div
                    className="fixed inset-0 bg-black bg-opacity-50"
                    style={{
                      animation: 'fadeIn 0.3s ease-out forwards'
                    }}
                  />
                  <div
                    className="fixed inset-0 flex justify-center items-center z-50"
                    onClick={(e) => {
                      if (e.target === e.currentTarget) {
                        const overlay = document.querySelector('.bg-black.bg-opacity-50') as HTMLElement;
                        const dialog = e.currentTarget.querySelector('.bg-white') as HTMLElement;
                        if (overlay && dialog) {
                          overlay.style.animation = 'fadeOut 0.3s ease-out forwards';
                          dialog.style.animation = 'zoomOut 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards';
                        }
                        setTimeout(() => setShowDialog(null), 300);
                      }
                    }}
                  >
                    <div className="bg-white p-12 rounded-lg w-3/4 h-3/4 m-4 overflow-auto"
                      style={{
                        transformOrigin: `var(--zoom-origin-x) var(--zoom-origin-y)`,
                        animation: 'zoomIn 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards'
                      }}>
                      <div className="flex justify-between items-center mb-6">
                        <h2 className="text-4xl font-bold text-yellow-400">
                          {showDialog === 1 && "E-Commerce Platform"}
                          {showDialog === 2 && "Cloud Migration"}
                          {showDialog === 3 && "Mobile App"}
                          {showDialog === 4 && "AI Integration"}
                          {showDialog === 5 && "DevOps Pipeline"}
                          {showDialog === 6 && "API Gateway"}
                        </h2>
                        <button
                          onClick={(e) => {
                            const overlay = document.querySelector('.bg-black.bg-opacity-50') as HTMLElement;
                            const dialog = e.currentTarget.closest('.bg-white') as HTMLElement;
                            if (overlay && dialog) {
                              overlay.style.animation = 'fadeOut 0.3s ease-out forwards';
                              dialog.style.animation = 'zoomOut 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards';
                            }
                            setTimeout(() => setShowDialog(null), 300);
                          }}
                          className="text-gray-500 hover:text-gray-700 text-3xl"
                        >
                          ✕
                        </button>
                      </div>
                      <div className="text-gray-600">
                        <p className="text-xl leading-relaxed mb-6">
                          {showDialog === 1 && "Developed a scalable e-commerce platform using React, Node.js, and MongoDB. Implemented features like shopping cart, payment processing, and inventory management. The platform handles thousands of concurrent users and processes hundreds of transactions daily."}
                          {showDialog === 2 && "Led the migration of legacy applications to AWS cloud infrastructure. Implemented containerization using Docker and orchestration with Kubernetes. Achieved 99.9% uptime and reduced operational costs by 40%."}
                          {showDialog === 3 && "Built a cross-platform mobile application using React Native. Integrated with RESTful APIs and implemented offline-first functionality. The app has over 100,000 downloads with a 4.5-star rating."}
                          {showDialog === 4 && "Integrated machine learning models for predictive analytics. Used TensorFlow and scikit-learn for data processing and model training. Improved business decision accuracy by 35% through AI-driven insights."}
                          {showDialog === 5 && "Designed and implemented CI/CD pipelines using Jenkins and GitLab CI. Automated testing, building, and deployment processes. Reduced deployment time from hours to minutes and eliminated manual deployment errors."}
                          {showDialog === 6 && "Architected a microservices-based API gateway using Node.js and Express. Implemented service discovery, load balancing, and caching. The system handles millions of requests per day with sub-second response times."}
                        </p>
                        <div className="mt-8">
                          <h3 className="text-2xl font-bold text-yellow-400 mb-4">Technologies Used</h3>
                          <ul className="list-disc list-inside text-lg space-y-2">
                            {showDialog === 1 && <>
                              <li>React & Redux for frontend</li>
                              <li>Node.js & Express for backend</li>
                              <li>MongoDB for database</li>
                              <li>Stripe for payment processing</li>
                            </>}
                            {showDialog === 2 && <>
                              <li>AWS (EC2, S3, RDS)</li>
                              <li>Docker & Kubernetes</li>
                              <li>Terraform for infrastructure</li>
                              <li>CloudWatch for monitoring</li>
                            </>}
                            {/* Add similar lists for other projects */}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              <style jsx>{`
                @keyframes fadeIn {
                  from {
                    opacity: 0;
                  }
                  to {
                    opacity: 1;
                  }
                }
                
                @keyframes fadeOut {
                  from {
                    opacity: 1;
                  }
                  to {
                    opacity: 0;
                  }
                }

                @keyframes zoomIn {
                  from {
                    transform: scale(0);
                    opacity: 0;
                  }
                  to {
                    transform: scale(1);
                    opacity: 1;
                  }
                }
                
                @keyframes zoomOut {
                  from {
                    transform: scale(1);
                    opacity: 1;
                  }
                  to {
                    transform: scale(0);
                    opacity: 0;
                  }
                }
              `}</style>
            </div>
          </div>
        </section>
        <section id="section4" className={`${sectionStyle}`}>
          <div className="w-screen pr-32 pl-8">
            <div className="flex flex-col justify-center items-center w-full h-full">
              <h1 className="text-4xl mb-8 text-black font-bold">Testimonials</h1>
              <div className="relative w-full overflow-visible h-64"> {/* Increased height and changed to overflow-visible */}
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    animation: "scroll 20s linear infinite",
                    animationPlayState: "running"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.animationPlayState = "paused"}
                  onMouseLeave={(e) => e.currentTarget.style.animationPlayState = "running"}
                >
                  {/* First set of testimonials */}
                  <div className="flex-shrink-0 w-1/3 px-4 py-2"> {/* Added vertical padding */}
                    <div className="bg-white p-6 rounded-lg h-48 transition-transform duration-300 hover:scale-105 flex flex-col justify-center items-center text-center shadow-[0_0_15px_rgba(0,0,0,0.2)]">
                      <p className="text-gray-600 italic">"Gabriel is an exceptional developer who consistently delivers high-quality solutions. His technical expertise and problem-solving abilities are outstanding."</p>
                      <div className="mt-4">
                        <div className="font-bold text-black">John Smith</div>
                        <div className="text-yellow-400">Tech Lead, ABC Corp</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-1/3 px-4 py-2">
                    <div className="bg-white p-6 rounded-lg h-48 transition-transform duration-300 hover:scale-105 flex flex-col justify-center items-center text-center shadow-[0_0_15px_rgba(0,0,0,0.2)]">
                      <p className="text-gray-600 italic">"Working with Gabriel was a pleasure. His attention to detail and commitment to excellence made our project a huge success."</p>
                      <div className="mt-4">
                        <div className="font-bold text-black">Sarah Johnson</div>
                        <div className="text-yellow-400">Project Manager, XYZ Inc</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-1/3 px-4 py-2">
                    <div className="bg-white p-6 rounded-lg h-48 transition-transform duration-300 hover:scale-105 flex flex-col justify-center items-center text-center shadow-[0_0_15px_rgba(0,0,0,0.2)]">
                      <p className="text-gray-600 italic">"Gabriel's innovative approach to problem-solving and deep technical knowledge made him an invaluable asset to our team."</p>
                      <div className="mt-4">
                        <div className="font-bold text-black">Michael Brown</div>
                        <div className="text-yellow-400">CTO, Tech Innovators</div>
                      </div>
                    </div>
                  </div>

                  {/* Duplicate set for infinite scroll */}
                  <div className="flex-shrink-0 w-1/3 px-4 py-2">
                    <div className="bg-white p-6 rounded-lg h-48 transition-transform duration-300 hover:scale-105 flex flex-col justify-center items-center text-center shadow-[0_0_15px_rgba(0,0,0,0.2)]">
                      <p className="text-gray-600 italic">"Gabriel is an exceptional developer who consistently delivers high-quality solutions. His technical expertise and problem-solving abilities are outstanding."</p>
                      <div className="mt-4">
                        <div className="font-bold text-black">John Smith</div>
                        <div className="text-yellow-400">Tech Lead, ABC Corp</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-1/3 px-4 py-2">
                    <div className="bg-white p-6 rounded-lg h-48 transition-transform duration-300 hover:scale-105 flex flex-col justify-center items-center text-center shadow-[0_0_15px_rgba(0,0,0,0.2)]">
                      <p className="text-gray-600 italic">"Working with Gabriel was a pleasure. His attention to detail and commitment to excellence made our project a huge success."</p>
                      <div className="mt-4">
                        <div className="font-bold text-black">Sarah Johnson</div>
                        <div className="text-yellow-400">Project Manager, XYZ Inc</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-1/3 px-4 py-2">
                    <div className="bg-white p-6 rounded-lg h-48 transition-transform duration-300 hover:scale-105 flex flex-col justify-center items-center text-center shadow-[0_0_15px_rgba(0,0,0,0.2)]">
                      <p className="text-gray-600 italic">"Gabriel's innovative approach to problem-solving and deep technical knowledge made him an invaluable asset to our team."</p>
                      <div className="mt-4">
                        <div className="font-bold text-black">Michael Brown</div>
                        <div className="text-yellow-400">CTO, Tech Innovators</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <style jsx>{`
                @keyframes scroll {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(-50%);
                  }
                }
              `}</style>
            </div>
          </div>
        </section>
        <section id="section5" className={`${sectionStyle}`}>
          <div className="w-screen pr-32 pl-8">
            <div className="flex flex-col justify-center items-center w-full h-full">
              <h1 className="text-4xl mb-8 text-black font-bold">Contact Me</h1>
              <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-yellow-400 p-4 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-black">Phone</h2>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-yellow-400 p-4 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-black">Email</h2>
                      <p className="text-gray-600">gabriel.bocancea@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-yellow-400 p-4 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-black">LinkedIn</h2>
                      <a href="https://linkedin.com/in/gabriel-bocancea" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">linkedin.com/in/gabriel-bocancea</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
