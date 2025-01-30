export default function AboutMeTable() {
    return (
        <div className="grid grid-cols-2 w-full h-full bg-black p-4 sm:p-8 md:p-16 relative">
            <div className="relative group">
                <div className="h-full p-2 sm:p-4 md:p-6 flex flex-col items-center justify-center text-center">
                    <div>
                        <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white text-yellow-400">Experience</h2>
                        <p className="text-gray-300">7+ years</p>
                    </div>
                </div>
                <div className="pointer-events-none absolute opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-95 bg-yellow-400 text-black p-2 sm:p-4 rounded-lg shadow-lg inset-0 flex flex-col justify-center z-10 text-center">
                    <h3 className="text-black font-bold mb-1 sm:mb-2 text-sm sm:text-base">Experience Details</h3>
                    <p className="text-xs sm:text-sm">
                        • 4 years as Senior Software Engineer<br />
                        • 3 years as Full Stack Developer<br />
                        • Expertise in Web Development & Cloud Architecture
                    </p>
                </div>
            </div>
            <div className="relative group">
                <div className="h-full p-2 sm:p-4 md:p-6 flex flex-col items-center justify-center text-center">
                    <div>
                        <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white text-yellow-400">Projects</h2>
                        <p className="text-gray-300">10+</p>
                    </div>
                </div>
                <div className="pointer-events-none absolute opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-95 bg-yellow-400 text-black p-2 sm:p-4 rounded-lg shadow-lg inset-0 flex flex-col justify-center z-10 text-center">
                    <h3 className="text-black font-bold mb-1 sm:mb-2 text-sm sm:text-base">Project Details</h3>
                    <p className="text-xs sm:text-sm">
                        • 5 Enterprise Applications<br />
                        • 3 Mobile Applications<br />
                        • 2 E-commerce Platforms
                    </p>
                </div>
            </div>
            <div className="relative group">
                <div className="h-full p-2 sm:p-4 md:p-6 flex flex-col items-center justify-center text-center">
                    <div>
                        <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white text-yellow-400">Tech Stack</h2>
                        <p className="text-gray-300">10+</p>
                    </div>
                </div>
                <div className="pointer-events-none absolute opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-95 bg-yellow-400 text-black p-2 sm:p-4 rounded-lg shadow-lg inset-0 flex flex-col justify-center z-10 text-center">
                    <h3 className="text-black font-bold mb-1 sm:mb-2 text-sm sm:text-base">Technology Details</h3>
                    <p className="text-xs sm:text-sm">
                        • Frontend: React, Next.js, TypeScript<br />
                        • Backend: Node.js, Python, Java<br />
                        • Cloud: AWS, Azure, Docker
                    </p>
                </div>
            </div>
            <div className="relative group">
                <div className="h-full p-2 sm:p-4 md:p-6 flex flex-col items-center justify-center text-center">
                    <div>
                        <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white text-yellow-400">Clients</h2>
                        <p className="text-gray-300">4+</p>
                    </div>
                </div>
                <div className="pointer-events-none absolute opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-95 bg-yellow-400 text-black p-2 sm:p-4 rounded-lg shadow-lg inset-0 flex flex-col justify-center z-10 text-center">
                    <h3 className="text-black font-bold mb-1 sm:mb-2 text-sm sm:text-base">Client Details</h3>
                    <p className="text-xs sm:text-sm">
                        • Fortune 500 Companies<br />
                        • Tech Startups<br />
                        • Government Organizations
                    </p>
                </div>
            </div>
            {/* Cross overlay contained within the table */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute left-1/2 top-[20%] bottom-[20%] w-0.5 bg-white" style={{ transform: 'translateX(-50%)' }}></div>
                <div className="absolute top-1/2 left-[20%] right-[20%] h-0.5 bg-white" style={{ transform: 'translateY(-50%)' }}></div>
            </div>
        </div>
    )
}