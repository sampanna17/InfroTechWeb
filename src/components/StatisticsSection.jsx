import CustomerServed from "../assets/CustomerServed1.png";
import Consulting from "../assets/Consulting1.png";
import Launched from "../assets/Launched1.png";
import ProjectCompleted from "../assets/ProjectCompleted1.png";

export default function StatisticsSection() {
    const stats = [
        {
            image: CustomerServed,
            number: "250+",
            label: "Customer Served",
        },
        {
            image: Consulting,
            number: "15+",
            label: "IT Consulting",
        },
        {
            image: Launched,
            number: "50+",
            label: "Fully Launched",
        },
        {
            image: ProjectCompleted,
            number: "65+",
            label: "Project Completed",
        },
    ];

    return (
        <section className="bg-white py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Content */}
                <div className="text-center mb-16">
                    {/* Section Label */}
                    <span className="text-blue-900 font-semibold text-lg sm:text-xl mb-4 block">
                        Numbers Are Talking
                    </span>

                    {/* Main Heading */}
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight mb-8">
                        Let's Check Our Business Growth
                        <br />
                        and Success Story
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
                        Paradise IT Solution in Nepal stands out as a beacon of technological innovation and expertise in the
                        region. Their commitment to delivering cutting-edge solutions is evident in the diverse range of services
                        they offer, spanning software development, IT consulting, and digital transformation.
                    </p>
                </div>

                {/* Statistics Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center">
                            {/* Combined Number and Icon Container */}
                            <div className="flex items-center justify-center gap-4 mb-4">
                                <div className="w-20 h-20 flex items-center justify-center">
                                    <img
                                        src={stat.image}
                                        alt={stat.label}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                {/* Number */}
                                <div className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900">
                                    {stat.number}
                                    {/* Label */}
                                    <div className="text-gray-600 font-medium text-base sm:text-lg text-center">
                                        {stat.label}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}