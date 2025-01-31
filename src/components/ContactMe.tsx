export default function ContactMe() {
    return (
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
    )
}