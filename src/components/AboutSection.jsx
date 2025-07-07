import hero3 from "../assets/hero3.png";

export default function AboutSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative" style={{ backgroundColor: "#f8f8f8" }} >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Illustration*/}
          <div className="flex justify-center lg:justify-start order-1">
            <div className="w-full max-w-2xl">
              <img
                src={hero3}
                alt="IT Solutions illustration showing people working with technology, laptops, servers, and data analytics"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Right Content*/}
          <div className="space-y-6 lg:space-y-8 order-2">
            {/* Section Label */}
            <div>
              <span className="text-blue-900 font-semibold text-lg sm:text-xl">
                About Paradise IT Solution
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Consider IT Solved...!!!
            </h2>

            {/* Content Paragraphs */}
            <div className="space-y-6 text-gray-600 text-base sm:text-lg leading-relaxed text-justify">
              <p>We are here to IT Solutions with many years of experience.</p>
              <p>
                We are young and very energetic entrepreneur in Nepal came from diversified background such in
                information technology.
              </p>
              <p>
                We always striving for grow our business through best customer service and quality products, our notion
                is customer satisfaction is our business success. Hence, we want long term business relationship, we
                want to serve you always, your success is our success.
              </p>
              <p>
                We always wanted to be recognized as a global brand so, we based our headquarter at Germany, Stuttgart
                and all our venture companies at Australia but having all the development activities from Nepal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

