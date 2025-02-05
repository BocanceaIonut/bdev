export default function Testimonials() {
    return (
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
                  <p className="text-gray-600 italic">&quot;Gabriel is an exceptional developer who consistently delivers high-quality solutions. His technical expertise and problem-solving abilities are outstanding.&quot;</p>
                  <div className="mt-4">
                    <div className="font-bold text-black">John Smith</div>
                    <div className="text-yellow-400">Tech Lead, ABC Corp</div>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 w-1/3 px-4 py-2">
                <div className="bg-white p-6 rounded-lg h-48 transition-transform duration-300 hover:scale-105 flex flex-col justify-center items-center text-center shadow-[0_0_15px_rgba(0,0,0,0.2)]">
                  <p className="text-gray-600 italic">&quot;Working with Gabriel was a pleasure. His attention to detail and commitment to excellence made our project a huge success.&quot;</p>
                  <div className="mt-4">
                    <div className="font-bold text-black">Sarah Johnson</div>
                    <div className="text-yellow-400">Project Manager, XYZ Inc</div>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 w-1/3 px-4 py-2">
                <div className="bg-white p-6 rounded-lg h-48 transition-transform duration-300 hover:scale-105 flex flex-col justify-center items-center text-center shadow-[0_0_15px_rgba(0,0,0,0.2)]">
                  <p className="text-gray-600 italic">&quot;Gabriel&apos;s innovative approach to problem-solving and deep technical knowledge made him an invaluable asset to our team.&quot;</p>
                  <div className="mt-4">
                    <div className="font-bold text-black">Michael Brown</div>
                    <div className="text-yellow-400">CTO, Tech Innovators</div>
                  </div>
                </div>
              </div>

              {/* Duplicate set for infinite scroll */}
              <div className="flex-shrink-0 w-1/3 px-4 py-2">
                <div className="bg-white p-6 rounded-lg h-48 transition-transform duration-300 hover:scale-105 flex flex-col justify-center items-center text-center shadow-[0_0_15px_rgba(0,0,0,0.2)]">
                  <p className="text-gray-600 italic">&quot;Gabriel is an exceptional developer who consistently delivers high-quality solutions. His technical expertise and problem-solving abilities are outstanding.&quot;</p>
                  <div className="mt-4">
                    <div className="font-bold text-black">John Smith</div>
                    <div className="text-yellow-400">Tech Lead, ABC Corp</div>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 w-1/3 px-4 py-2">
                <div className="bg-white p-6 rounded-lg h-48 transition-transform duration-300 hover:scale-105 flex flex-col justify-center items-center text-center shadow-[0_0_15px_rgba(0,0,0,0.2)]">
                  <p className="text-gray-600 italic">&quot;Working with Gabriel was a pleasure. His attention to detail and commitment to excellence made our project a huge success.&quot;</p>
                  <div className="mt-4">
                    <div className="font-bold text-black">Sarah Johnson</div>
                    <div className="text-yellow-400">Project Manager, XYZ Inc</div>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 w-1/3 px-4 py-2">
                <div className="bg-white p-6 rounded-lg h-48 transition-transform duration-300 hover:scale-105 flex flex-col justify-center items-center text-center shadow-[0_0_15px_rgba(0,0,0,0.2)]">
                  <p className="text-gray-600 italic">&quot;Gabriel&apos;s innovative approach to problem-solving and deep technical knowledge made him an invaluable asset to our team.&quot;</p>
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
    )
}