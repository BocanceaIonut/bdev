export default function AboutMe() {
    return (
        <div className="w-screen px-4 sm:pr-32 sm:pl-8">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <h1 className="text-4xl mb-8 text-black font-bold">About Me</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 w-full h-full bg-black p-4 sm:p-8 md:p-16 relative gap-4 sm:gap-0">
                    <div className="relative group">
                        <div className="h-full p-2 sm:p-4 md:p-6 flex flex-col items-center justify-center text-center">
                            <div>
                                <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-yellow-400">Experience</h2>
                                <p className="text-gray-300">7+ years</p>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-95 bg-yellow-400 text-black p-2 sm:p-4 rounded-lg shadow-lg inset-0 flex flex-col justify-center z-10 text-center">
                            <p className="text-xs sm:text-sm">
                                • 2+ years as Senior Software Engineer<br />
                                • 2 years as Mid Software Engineer<br />
                                • 2 years as Junior Software Engineer<br />
                                • 1 year as Intern<br />
                            </p>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="h-full p-2 sm:p-4 md:p-6 flex flex-col items-center justify-center text-center">
                            <div>
                                <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-yellow-400">Projects</h2>
                                <p className="text-gray-300">9</p>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-95 bg-yellow-400 text-black p-2 sm:p-4 rounded-lg shadow-lg inset-0 flex flex-col justify-center z-10 text-center">
                            <p className="text-xs sm:text-sm">
                                • 5 React, React Native and JavaScript/TypeScript projects<br />
                                • 3 Elixir projects<br />
                                • 3 Erlang projects<br />
                                • 1 ELM project
                            </p>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="h-full p-2 sm:p-4 md:p-6 flex flex-col items-center justify-center text-center">
                            <div>
                                <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-yellow-400">Tech Stack</h2>
                                <p className="text-gray-300">10+</p>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-95 bg-yellow-400 text-black p-2 sm:p-4 rounded-lg shadow-lg inset-0 flex flex-col justify-center z-10 text-center">
                            <p className="text-xs sm:text-sm">
                                • <b>Frontend:</b> React, React Native, Expo, TypeScript, Webviews, Websockets<br />
                                • <b>Backend:</b> Erlang, Elixir<br />
                                • <b>Others:</b> AWS, Firebase, Docker, Postgres, DinamoDB, Fastlane 
                            </p>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="h-full p-2 sm:p-4 md:p-6 flex flex-col items-center justify-center text-center">
                            <div>
                                <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-yellow-400">Clients</h2>
                                <p className="text-gray-300">4</p>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-95 bg-yellow-400 text-black p-2 sm:p-4 rounded-lg shadow-lg inset-0 flex flex-col justify-center z-10 text-center">
                            <p className="text-xs sm:text-sm">
                                • Fintech<br />
                                • Food<br />
                                • Navigation<br />
                            </p>
                        </div>
                    </div>
                    {/* Cross overlay contained within the table - hidden on mobile */}
                    <div className="hidden sm:block absolute inset-0 pointer-events-none">
                        <div className="absolute left-1/2 top-[20%] bottom-[20%] w-0.5 bg-white" style={{ transform: 'translateX(-50%)' }}></div>
                        <div className="absolute top-1/2 left-[20%] right-[20%] h-0.5 bg-white" style={{ transform: 'translateY(-50%)' }}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}