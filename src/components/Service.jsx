import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";

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
                                    className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden "
                                >
                                    {/* Semi-circle decorations */}
                                    <div className="absolute -bottom-22 -right-22 w-40 h-40 rounded-full" style={{ backgroundColor: "#e6eef5" }}></div>
                                    <div
                                        className="absolute -bottom-16 -right-16 w-30 h-30 rounded-full"
                                        style={{ backgroundColor: "#d0dfec" }}
                                    ></div>

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
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                                        <p className="text-gray-600 text-base mb-4">{service.desc}</p>
                                        <button className="text-[#0959a2] text-sm font-medium hover:text-blue-700 flex items-center">
                                            Learn More

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

