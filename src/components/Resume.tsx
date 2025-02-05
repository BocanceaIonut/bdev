import { useState } from "react";

export default function Resume() {
    const [showFullResume, setShowFullResume] = useState(false);

    const ResumeContent = () => (
        <div className="flex flex-col justify-center items-center w-full h-full my-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full">
                {/* Education Section */}
                <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg border-2 border-yellow-400">
                    <h2 className="text-xl md:text-2xl font-bold text-yellow-400 mb-3 md:mb-4">Education</h2>
                    <div className="ml-2 md:ml-4">
                        <h3 className="text-lg md:text-xl font-semibold text-black">Bachelor of Science in Computer Science</h3>
                        <p className="text-sm md:text-base text-black">Technical University of Cluj-Napoca • 2014-2018</p>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-yellow-400 mb-3 md:mb-4 mt-6 md:mt-8">Conferences</h2>
                    <div className="ml-2 md:ml-4">
                        <h3 className="text-lg md:text-xl font-semibold text-black">
                            <a href="https://www.elixirconf.eu" className="hover:text-yellow-400 transition-colors duration-300 underline">
                                ElixirConf EU
                            </a>
                            <span className="text-sm md:text-base font-normal"> - attended multiple years as participant</span>
                        </h3>
                    </div>
                    <div className="ml-2 md:ml-4">
                        <h3 className="text-lg md:text-xl font-semibold text-black">ElixirConf EU 2019</h3>
                    </div>
                    <div className="ml-2 md:ml-4">
                        <h3 className="text-lg md:text-xl font-semibold text-black">ElixirConf EU 2018</h3>
                    </div>
                </div>

                {/* Work Experience Section */}
                <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg border-2 border-yellow-400">
                    <h2 className="text-xl md:text-2xl font-bold text-yellow-400 mb-3 md:mb-4">Work Experience</h2>
                    <div className="ml-2 md:ml-4">
                        <div className="mb-4">
                            <h3 className="text-lg md:text-xl font-semibold text-black">Senior Software Engineer</h3>
                            <p className="text-sm md:text-base text-black">Crafting Software Innovation. • 2021-Present</p>
                            <ul className="list-disc list-inside mt-2 text-sm md:text-base text-black">
                                <li>Fintech project</li>
                                <li>Mobile app with React Native</li>
                                <li>Payment Gateway</li>
                                <li>Alternative Payment Gateway</li>
                            </ul>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-lg md:text-xl font-semibold text-black">Junior-Mid Software Engineer</h3>
                            <p className="text-sm md:text-base text-black">Crafting Software Innovation. • 2018-2021</p>
                            <ul className="list-disc list-inside mt-2 text-sm md:text-base text-black">
                                <li>Team lead position</li>
                                <li>Mobile app development using React Native, Fastlane, Firebase and Elixir for the backend API</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg md:text-xl font-semibold text-black">Intern</h3>
                            <p className="text-sm md:text-base text-black">Crafting Software Innovation • 2017-2018</p>
                            <ul className="list-disc list-inside mt-2 text-sm md:text-base text-black">
                                <li>Functional Programming</li>
                                <li>Developed a Chat application with Elm, Elixir and Websockets</li>
                                <li>Developed a presentation website using Phoenix Framework</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Technical Skills Section */}
                <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg border-2 border-yellow-400">
                    <h2 className="text-xl md:text-2xl font-bold text-yellow-400 mb-3 md:mb-4">Technical Skills</h2>
                    <div className="ml-2 md:ml-4 space-y-3 md:space-y-4">
                        <div>
                            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-black">Frontend</h3>
                            <p className="text-sm md:text-base text-black">React, React Native, Expo, Next.js, TypeScript, HTML5, CSS3, WebViews</p>
                        </div>
                        <div>
                            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-black">Backend</h3>
                            <p className="text-sm md:text-base text-black">Erlang, Elixir, Fastlane, Firebase, Postgres, DinamoDB</p>
                        </div>
                        <div>
                            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-black">DevOps</h3>
                            <p className="text-sm md:text-base text-black">AWS, Docker, CI/CD</p>
                        </div>
                    </div>
                </div>

                {/* Soft Skills Section */}
                <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg border-2 border-yellow-400">
                    <h2 className="text-xl md:text-2xl font-bold text-yellow-400 mb-3 md:mb-4">Soft Skills</h2>
                    <div className="ml-2 md:ml-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-black">Leadership</h3>
                            <ul className="list-disc list-inside text-sm md:text-base text-black">
                                <li>Team Management</li>
                                <li>Mentoring</li>
                                <li>Decision Making</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-black">Languages</h3>
                            <ul className="list-disc list-inside text-sm md:text-base text-black">
                                <li>Romanian(native)</li>
                                <li>English(fluent)</li>
                                <li>German(A2.1) and learning</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="w-screen px-4 md:px-8 lg:pr-32 lg:pl-8">
            {/* Mobile Preview */}
            <div className="md:hidden">
                <div 
                    className="bg-white p-4 rounded-lg shadow-lg border-2 border-yellow-400 cursor-pointer"
                    onClick={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const x = rect.left + rect.width / 2;
                        const y = rect.top + rect.height / 2;
                        document.documentElement.style.setProperty('--zoom-origin-x', `${x}px`);
                        document.documentElement.style.setProperty('--zoom-origin-y', `${y}px`);
                        setShowFullResume(true);
                    }}
                >
                    <h2 className="text-xl font-bold text-yellow-400 mb-3">Resume Preview</h2>
                    <p className="text-sm text-black">Tap to view Education, work experience, technical skills and soft skills</p>
                </div>

                {/* Full Resume Dialog */}
                {showFullResume && (
                    <div 
                        className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-transform duration-300 ease-in-out"
                        style={{
                            transformOrigin: 'var(--zoom-origin-x) var(--zoom-origin-y)',
                            animation: 'zoomIn 0.3s ease-in-out'
                        }}
                    >
                        <div className="h-screen flex flex-col">
                            {/* Fixed Header */}
                            <div className="bg-white p-4 border-b border-gray-200">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-xl font-bold text-yellow-400">Full Resume</h2>
                                    <button 
                                        className="text-black text-xl"
                                        onClick={() => {
                                            const dialog = document.querySelector('.fixed') as HTMLElement;
                                            if (dialog) {
                                                dialog.style.animation = 'zoomOut 0.4s ease-in-out';
                                                setTimeout(() => setShowFullResume(false), 400);
                                            }
                                        }}
                                    >
                                        ×
                                    </button>
                                </div>
                            </div>
                            
                            {/* Scrollable Content */}
                            <div className="flex-1 overflow-y-auto bg-white p-4">
                                <ResumeContent />
                            </div>
                        </div>
                    </div>
                )}

                <style jsx>{`
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

            {/* Desktop View */}
            <div className="hidden md:block">
                <ResumeContent />
            </div>
        </div>
    );
}