import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";
import { ChevronRight } from "lucide-react";

const Service = () => {
    const services = [
        {
            title: "SEO and Digital Marketing",
            image: service1,
            desc: "Maximize your online presence and connect with your ideal customers through well-planned SEO and digital marketing strategies. Generate...",
        },
        {
            title: "Web Design and Development",
            image: service2,
            desc: "We have been crafting websites that are both visually stunning and highly functional, designed to fit the specific requirements of your...",
        },
        {
            title: "E-commerce Solutions",
            image: service3,
            desc: "Take your company to the highest possible level with our custom e-commerce solutions. We build safe, easy-to-navigate online stores tha...",
        },
        {
            title: "Branding",
            image: service4,
            desc: "From logo design to brand strategy, create a unique brand identity that speaks to your audience. This will ensure that your brand has a...",
        },
    ];


    return (
        <>
            {/* Services Section */}
            <div className="bg-white min-h-screen flex items-center justify-center">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        {/* Left content */}
                        <div className="lg:col-span-4 space-y-6 text-center lg:text-left">
                            <div>
                                <p className="text-[#0959a2] font-medium">Our Services</p>
                                <h2 className="mt-2 text-3xl font-semibold text-gray-900 sm:text-4xl">
                                    Searching for a Solution? We Provide Truly IT Solutions
                                </h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                We play a crucial role in enabling organizations to leverage technology for improved efficiency,
                                innovation, and competitive advantage. Our services include software development, network infrastructure
                                maintenance, cybersecurity, cloud computing solutions, and technical support.
                            </p>
                            <button className="bg-[#0959a2] hover:bg-blue-700 px-8 py-3 rounded-full text-white transition-colors duration-300">
                                View All Services
                            </button>
                        </div>

                        {/* Right content - Service Cards */}
                        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {services.map((service, idx) => (
                                <div
                                    key={idx}
                                    className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all  relative overflow-hidden"
                                >
                                    {/* Animated Semi-circle decoration (only 1st) */}
                                    <div
                                        className="absolute -bottom-16 -right-16 w-32 h-32 rounded-full bg-[#e6eef5] transition-all duration-1000 ease-in-out group-hover:scale-1000 group-hover:bg-[#0959a2]"
                                    ></div>

                                    {/* Second circle remains static */}
                                    <div
                                        className="absolute -bottom-12 -right-12 w-24 h-24 rounded-full bg-[#d0dfec] transition-all duration-1000 ease-in-out  group-hover:bg-[#0959a2]"
                                    ></div>

                                    {/* Card Content */}
                                    <div className="relative z-10">
                                        <div className="mb-4 flex items-center">
                                            <div className="h-12 w-12 rounded-lg overflow-hidden">
                                                <img
                                                    src={service.image}
                                                    alt={service.title}
                                                    className="w-12 h-12 object-contain"
                                                />
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-white transition-all duration-1000 ease-in-out ">{service.title}</h3>
                                        <p className="text-gray-600 text-base mb-4 group-hover:text-white transition-all duration-1000 ease-in-out">{service.desc}</p>
                                        <button className="text-[#0959a2] text-sm font-medium group-hover:text-white flex items-center transition-all duration-1000 ease-in-out">
                                            Learn More
                                            <ChevronRight size={16} className="ml-2" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Service

