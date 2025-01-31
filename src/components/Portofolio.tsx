import { useState } from "react";

export default function Portofolio() {
    const [showDialog, setShowDialog] = useState<number | null>(null);
    return (
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
                        <h2 className="text-2xl font-bold text-yellow-400 mb-2">Decision Chat</h2>
                        <p className="text-gray-600">Slack like app</p>
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
                        <h2 className="text-2xl font-bold text-yellow-400 mb-2">Crafting Software Website</h2>
                        <p className="text-gray-600">Phoenix Framework</p>
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
                        <h2 className="text-2xl font-bold text-yellow-400 mb-2">B4 Project</h2>
                        <p className="text-gray-600">Vanilla JavaScript</p>
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
                        <h2 className="text-2xl font-bold text-yellow-400 mb-2">Localvore</h2>
                        <p className="text-gray-600">React Native</p>
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
                        <h2 className="text-2xl font-bold text-yellow-400 mb-2">Klarna</h2>
                        <p className="text-gray-600">Payment Gateway</p>
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
                        <h2 className="text-2xl font-bold text-yellow-400 mb-2">Ecomotive</h2>
                        <p className="text-gray-600">React Native</p>
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
                                        {showDialog === 1 && "Decision Chat"}
                                        {showDialog === 2 && "Crafting Software Website"}
                                        {showDialog === 3 && "B4 Project"}
                                        {showDialog === 4 && "Localvore"}
                                        {showDialog === 5 && "Klarna"}
                                        {showDialog === 6 && "Ecomotive"}
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
                                        {showDialog === 1 && "Developed a Slack like web aplication used for team communication, task management and decision making."}
                                        {showDialog === 2 && "Phoenix Framework"}
                                        {showDialog === 3 && "Built a cross-platform mobile application using React Native. Integrated with RESTful APIs and implemented offline-first functionality. The app has over 100,000 downloads with a 4.5-star rating."}
                                        {showDialog === 4 && "Integrated machine learning models for predictive analytics. Used TensorFlow and scikit-learn for data processing and model training. Improved business decision accuracy by 35% through AI-driven insights."}
                                        {showDialog === 5 && "Designed and implemented CI/CD pipelines using Jenkins and GitLab CI. Automated testing, building, and deployment processes. Reduced deployment time from hours to minutes and eliminated manual deployment errors."}
                                        {showDialog === 6 && "Architected a microservices-based API gateway using Node.js and Express. Implemented service discovery, load balancing, and caching. The system handles millions of requests per day with sub-second response times."}
                                    </p>
                                    <div className="mt-8">
                                        <h3 className="text-2xl font-bold text-yellow-400 mb-4">Technologies Used</h3>
                                        <ul className="list-disc list-inside text-lg space-y-2">
                                            {showDialog === 1 && <>
                                                <li>Elm, Elixir, Websockets</li>
                                            </>}
                                            {showDialog === 2 && <>
                                                <li>Phoenix Framework</li>
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
    )
}