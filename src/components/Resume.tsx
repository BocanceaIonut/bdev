export default function Resume() {
    return (<div className="w-screen pr-32 pl-8">
        <div className="flex flex-col justify-center items-center w-full h-full">
            <h1 className="text-4xl mb-8 text-black font-bold">Resume</h1>
            <div className="grid grid-cols-2 gap-8 w-full">
                {/* Education Section */}
                <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-yellow-400">
                    <h2 className="text-2xl font-bold text-yellow-400 mb-4">Education</h2>
                    <div className="ml-4">
                        <h3 className="text-xl font-semibold text-black">Bachelor of Science in Computer Science</h3>
                        <p className="text-black">Technical University of Cluj-Napoca • 2014-2018</p>
                    </div>
                    <h2 className="text-2xl font-bold text-yellow-400 mb-4 mt-8">Conferences</h2>
                    <div className="ml-4">
                        <h3 className="text-xl font-semibold text-black">
                            <a href="https://www.elixirconf.eu" className="hover:text-yellow-400 transition-colors duration-300 underline">
                                ElixirConf EU
                            </a>
                            <span className="text-base font-normal"> - attended multiple years as participant</span>
                        </h3>
                    </div>
                    <div className="ml-4">
                        <h3 className="text-xl font-semibold text-black">ElixirConf EU 2019</h3>
                    </div>
                    <div className="ml-4">
                        <h3 className="text-xl font-semibold text-black">ElixirConf EU 2018</h3>
                    </div>
                </div>

                {/* Work Experience Section */}
                <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-yellow-400">
                    <h2 className="text-2xl font-bold text-yellow-400 mb-4">Work Experience</h2>
                    <div className="ml-4">
                        <div className="mb-4">
                            <h3 className="text-xl font-semibold text-black">Senior Software Engineer</h3>
                            <p className="text-black">Crafting Software Innovation. • 2021-Present</p>
                            <ul className="list-disc list-inside mt-2 text-black">
                                <li>Fintech project</li>
                                <li>Mobile app with React Native</li>
                                <li>Payment Gateway</li>
                                <li>Alternative Payment Gateway</li>
                            </ul>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-xl font-semibold text-black">Junior-Mid Software Engineer</h3>
                            <p className="text-black">Crafting Software Innovation. • 2018-2021</p>
                            <ul className="list-disc list-inside mt-2 text-black">
                                <li>Team lead position</li>
                                <li>Mobile app development using React Native, Fastlane, Firebase and Elixir for the backend API</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-black">Intern</h3>
                            <p className="text-black">Crafting Software Innovation • 2017-2018</p>
                            <ul className="list-disc list-inside mt-2 text-black">
                                <li>Functional Programming</li>
                                <li>Developed a Chat application with Elm, Elixir and Websockets</li>
                                <li>Developed a presentation website using Phoenix Framework</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Technical Skills Section */}
                <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-yellow-400">
                    <h2 className="text-2xl font-bold text-yellow-400 mb-4">Technical Skills</h2>
                    <div className="ml-4 space-y-4">
                        <div>
                            <h3 className="text-lg font-semibold mb-2 text-black">Frontend</h3>
                            <p className="text-black">React, React Native, Expo, Next.js, TypeScript, HTML5, CSS3, WebViews</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-2 text-black">Backend</h3>
                            <p className="text-black">Erlang, Elixir, Fastlane, Firebase, Postgres, DinamoDB</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-2 text-black">DevOps</h3>
                            <p className="text-black">AWS, Docker, CI/CD</p>
                        </div>
                    </div>
                </div>

                {/* Soft Skills Section */}
                <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-yellow-400">
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
                            <h3 className="text-lg font-semibold mb-2 text-black">Languages</h3>
                            <ul className="list-disc list-inside text-black">
                                <li>Romanian(native)</li>
                                <li>English(fluent)</li>
                                <li>German(A2.1) and learning</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}