import { useState } from "react";

export default function Portofolio() {
    const [showDialog, setShowDialog] = useState<number | null>(null);
    return (
        <div className="w-screen px-2 sm:px-4 md:pr-32 md:pl-8">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <h1 className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 md:mb-8 text-black font-bold">Portofolio</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-8 w-full">
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
                        className="bg-white p-3 sm:p-4 md:p-6 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-10 hover:scale-105 border-2 border-yellow-400"
                    >
                        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-400">Decision Chat</h2>
                        <p className="text-gray-600 hidden md:block">Slack like app</p>
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
                        className="bg-white p-3 sm:p-4 md:p-6 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-10 hover:scale-105 border-2 border-yellow-400"
                    >
                        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-400">Crafting Software Website</h2>
                        <p className="text-gray-600 hidden md:block">Presentation website for a software company</p>
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
                        className="bg-white p-3 sm:p-4 md:p-6 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-10 hover:scale-105 border-2 border-yellow-400"
                    >
                        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-400">TurkUI</h2>
                        <p className="text-gray-600 hidden md:block">Word selection tool</p>
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
                        className="bg-white p-3 sm:p-4 md:p-6 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-10 hover:scale-105 border-2 border-yellow-400"
                    >
                        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-400">Localvore</h2>
                        <p className="text-gray-600 hidden md:block">React Native</p>
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
                        className="bg-white p-3 sm:p-4 md:p-6 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-10 hover:scale-105 border-2 border-yellow-400"
                    >
                        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-400">Klarna</h2>
                        <p className="text-gray-600 hidden md:block">Payment Gateway</p>
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
                        className="bg-white p-3 sm:p-4 md:p-6 rounded-lg shadow-lg cursor-pointer transform transition-transform duration-10 hover:scale-105 border-2 border-yellow-400"
                    >
                        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-400">Ecomotive</h2>
                        <p className="text-gray-600 hidden md:block">React Native</p>
                    </div>
                </div>

                {/* Dialog/Modal */}
                {showDialog && (
                    <>
                        <div
                            className="fixed inset-0 bg-black bg-opacity-50 z-[200]"
                            style={{
                                animation: 'fadeIn 0.3s ease-out forwards'
                            }}
                        />
                        <div
                            className="fixed inset-0 flex justify-center items-center z-[201] p-4"
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
                            <div className="bg-white p-6 md:p-12 rounded-lg w-full md:w-3/4 h-[90vh] md:h-3/4 overflow-auto"
                                style={{
                                    transformOrigin: `var(--zoom-origin-x) var(--zoom-origin-y)`,
                                    animation: 'zoomIn 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards'
                                }}>
                                <div className="flex justify-between items-center mb-4 md:mb-6">
                                    <h2 className="text-2xl md:text-4xl font-bold text-yellow-400">
                                        {showDialog === 1 && "Decision Chat"}
                                        {showDialog === 2 && "Crafting Software Website"}
                                        {showDialog === 3 && "TurkUI"}
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
                                        className="text-gray-500 hover:text-gray-700 text-2xl md:text-3xl"
                                    >
                                        ✕
                                    </button>
                                </div>
                                <div className="text-gray-600">
                                    {showDialog === 1 && (
                                        <p className="text-lg md:text-xl leading-relaxed mb-4 md:mb-6">
                                            Developed a Slack like web aplication used for team communication, task management and decision making.
                                        </p>
                                    )}
                                    {showDialog === 2 && (
                                        <p className="text-lg md:text-xl leading-relaxed mb-4 md:mb-6">
                                            Presentation website for a software company.
                                        </p>
                                    )}
                                    {showDialog === 3 && (
                                        <p className="text-lg md:text-xl leading-relaxed mb-4 md:mb-6">
                                            Web aplication that allows users to select words from a sentence, add the intent, entities and porperies of the selection.
                                        </p>
                                    )}
                                    {showDialog === 4 && (
                                        <p className="text-lg md:text-xl leading-relaxed mb-4 md:mb-6">
                                            Mobile application that consumes a RESTful API writen in Elixir and allows users to search for local restaurants.
                                        </p>
                                    )}
                                    {showDialog === 5 && (
                                        <div className="text-lg md:text-xl leading-relaxed mb-4 md:mb-6">
                                            <p>Worked on multiple projects:</p>
                                            <ul className="list-disc list-inside mt-2">
                                                <li>Mobile application for updates, news and posts</li>
                                                <li>Payment gateway service</li>
                                                <li>Alternative payment gateway service for Swedish, Dutch, and German markets</li>
                                            </ul>
                                        </div>
                                    )}
                                    {showDialog === 6 && (
                                        <p className="text-lg md:text-xl leading-relaxed mb-4 md:mb-6">
                                            Mobile application .
                                        </p>
                                    )}
                                    <div className="mt-6 md:mt-8">
                                        <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-3 md:mb-4">Technologies Used</h3>
                                        <ul className="list-disc list-inside text-base md:text-lg space-y-2">
                                            {showDialog === 1 && <>
                                                <li>Elm, Elixir, Websockets, PostgreSQL, AWS</li>
                                            </>}
                                            {showDialog === 2 && <>
                                                <li>Phoenix Framework, Elixir</li>
                                            </>}
                                            {showDialog === 3 && <>
                                                <li>Vanilla JavaScript</li>
                                            </>}
                                            {showDialog === 4 && <>
                                                <li>React Native, Redux, Elixir, Expo, Fastlane, Docker</li>
                                            </>}
                                            {showDialog === 5 && <>
                                                <li>React Native, Redux, React, WebView, Erlang, DynamoDB, AWS, C2C, Docker, CI/CD, Jenkins, Chaossearch, Splunk, Datadog</li>
                                            </>}
                                            {showDialog === 6 && <>
                                                <li>React-Native, Redux, Redux Toolkit, RTK Query, Expo, Webviews, d3.js</li>
                                            </>}
                                        </ul>
                                    </div>
                                    <div className="mt-6 md:mt-8">
                                        <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-3 md:mb-4">Main Achievements</h3>
                                        <ul className="list-disc list-inside text-base md:text-lg space-y-2">
                                            {showDialog === 1 && <>
                                                <li>Implementing real-time communication with WebSockets</li>
                                                <li>Managing state across multiple users and channels</li>
                                                <li>Building a responsive UI with Elm architecture</li>
                                            </>}
                                            {showDialog === 2 && <>
                                                <li>Use Phoenix Framework to build a responsive website.</li>
                                                <li>Use Ajax to update the UI.</li>
                                            </>}
                                            {showDialog === 3 && <>
                                                <li>Handling complex Vanilla JavaScript code</li>
                                                <li>Working with anchor nodes, focus nodes and mouse events</li>
                                            </>}
                                            {showDialog === 4 && <>
                                                <li>Team lead position being responsible of client communication, project management and team management.</li>
                                                <li>Using Animations API I managed to create custom component animations. Ex: Search text input that fades in on search icon press, preview screen slide in on map pin press
                                                with elixir on backend to create the API consumed by the mobile react-native app.</li>
                                                <li>Used Redux Store to manage the state of the application.</li>
                                                <li>Used Expo to build the mobile application.</li>
                                                <li>Used Fastlane to automate the deployment of the mobile application.</li>
                                                <li>Used Docker to containerize the mobile application.</li>
                                            </>}
                                            {showDialog === 5 && <>
                                                <li>For the mobile application an advanced text editor was needed. To be able to implement the complex text editor we used the WebView component and Vanilla JavaScript.</li>
                                                <li>Used Chaossearch, Splunk and Datadog to monitor the performance of the application and to find the root cause of the issues.</li>
                                                <li>Used Jenkins to automate the deployment of the services.</li>
                                            </>}
                                            {showDialog === 6 && <>
                                                <li>Creating multiple hand made component. Being not satisfied with the level of customisation of NPM packages I took matters in my own hands and built from scratch different components, from DatePicker to Charts inside a Webview using D3.js. For the Chart component the main achievement was performance, getting from a chart rendered with SVGs that supported a small amount of data, otherwise it will move slow or crash our app, to a chart that renders big amounts of data, is responsive, works smooth and has a 100% level of customisation. Got out of my comfort zone and, when needed, jumped in figma, and using a template I created an Android icon that was urgently needed for the app release.</li>
                                                <li>Used RTK Query to fetch data from the API and manage the state of the application.</li>
                                                <li>Used Webviews to render the React Native components inside the mobile application.</li>
                                            </>}
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