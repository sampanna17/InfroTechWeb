import HeroImage from "../assets/hero.png";

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6">
            {/* Top Label */}
            <span className="text-blue-900 font-semibold text-sm sm:text-base tracking-wide uppercase">
              SIMPLICITY OF TECHNOLOGIES
            </span>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Paradise IT Solution
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                 <span className="text-blue-900"> Consider </span> IT Solved...!!!
              </h2>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 text-justify">
              Say hello to technology, the best IT Company in Nepal. We are equipped with updated technical knowledge to
              serve our customers properly. We uplift your brand!!
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="bg-blue-800 hover:bg-blue-900 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Illustration with Bounce Animation */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[500px] sm:max-w-[600px] md:max-w-[700px]">
              <img
                src={HeroImage}
                alt="IT Solutions Illustration"
                className="w-full h-auto object-contain animate-float"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-40px);
          }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}