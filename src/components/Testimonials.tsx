export default function Testimonials() {
  return (
    <div className="w-screen pr-32 pl-8">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <h1 className="text-4xl mb-8 text-black font-bold">Testimonials</h1>
        <div className="relative w-full overflow-visible h-64">
          {/* Increased height and changed to overflow-visible */}
          <div className="flex justify-center align-center">
            {/* First set of testimonials */}
            <div className="flex-shrink-0 w-1/2">
              {/* Added vertical padding */}
              <div className="bg-white p-6 rounded-lg transition-transform duration-300 hover:scale-105 flex flex-col justify-center items-center text-center shadow-[0_0_15px_rgba(0,0,0,0.2)]">
                <p className="text-gray-600 italic">
                  &quot;Sometimes as a product owner we would get a little over
                  our heads with ideas and wants for the app we were building.
                  Ionut was able to understand that and help us turn these ideas
                  into fully functional features that met and exceeded our
                  product goals. With his help we very quickly pivoted a basic
                  feature into a more fleshed out feature to meet a business
                  goal, and that helped us win a pivotal contract. It quickly
                  became a matter of ‘can you do this’ to ‘how much can you do’
                  on the business-side, and with his help out answer was “we can
                  scale as large as needed”. We are still in business and
                  pivoting to new features thanks to his hard work on our
                  feature set.&quot;
                </p>
                <div className="mt-4">
                  <div className="font-bold text-black">Michael Nedell</div>
                  <div className="text-yellow-400">Founder/COO, Localvore</div>
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
  );
}
