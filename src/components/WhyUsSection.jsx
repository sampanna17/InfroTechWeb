import { Shield, Clock, ChevronUp } from "lucide-react";
import whyus from "../assets/whyus.jpg";
import response from "../assets/response.png";
import service from "../assets/service.png";

export default function WhyUsSection() {
  const features = [
    {
      Image: response,
      title: "Reliability",
      description:
        "Understanding the critical nature of IT services, and our commitment to deliver high-quality, we serve reliable solutions.",
    },
    {
      Image: service,
      title: "Quick Support",
      description: "We've designed our Quick Support service to provide instant assistance precisely when you need it.",
    },
  ]

  return (
    <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative" style={{ backgroundColor: "#070b3b" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 lg:space-y-10">
            {/* Section Label */}
            <div>
              <span className="text-red-500 font-semibold text-lg sm:text-xl">Why Choose Us</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              We Provide Truly Prominent IT solutions.
            </h2>

            {/* Description */}
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              With a team of skilled professionals, we bring together a wealth of expertise in software development, IT
              consulting, cybersecurity, cloud solutions, and more.
            </p>

            {/* Features */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center">
                      <img
                        src={feature.Image}
                        alt={feature.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-2xl">
              <img
                src={whyus}
                alt="Professional team meeting in modern office environment with diverse colleagues collaborating"
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
