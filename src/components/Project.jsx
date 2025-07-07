// import { ArrowRight } from "lucide-react"
// import project1 from "../assets/project1.png";
// import project2 from "../assets/project2.png";
// import project3 from "../assets/project3.png";

// export default function Project() {
//     const projects = [
//         {
//             id: 1,
//             name: "Ajira Group",
//             image: project1,
//         },
//         {
//             id: 2,
//             name: "Expert Vision",
//             image: project2,
//         },
//         {
//             id: 3,
//             name: "Samari IT",
//             image: project3,
//         },
//     ]

//     return (
//         <section
//             className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
//             style={{
//                 background: "linear-gradient(to bottom, #070b3b 60%, #ffffff 40%)",
//             }}
//         >

//             <div className="max-w-7xl mx-auto">
//                 {/* Header */}
//                 <div className="text-center mb-16">
//                     {/* Section Label */}
//                     <span
//                         className="font-semibold text-lg sm:text-xl mb-4 block"
//                         style={{ color: "#0959a2" }}
//                     >
//                         Our Projects
//                     </span>

//                     {/* Main Heading */}
//                     <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white leading-tight">
//                         Introduce Our Projects and
//                         <br />
//                         Check Recent Work
//                     </h2>
//                 </div>

//                 {/* Projects Grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 px-10">
//                     {projects.map((project) => (
//                         <div
//                             key={project.id}
//                             className="group bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
//                         >
//                             {/* Project Image */}
//                             <div className="relative overflow-hidden">
//                                 <img
//                                     src={project.image}
//                                     alt={`${project.name} website screenshot`}
//                                     className="w-full h-62 sm:h-70 lg:h-78 object-cover group-hover:scale-105 transition-transform duration-300"
//                                 />
//                                 <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
//                             </div>

//                             {/* Project Info */}
//                             <div className="p-6 lg:p-8">
//                                 <div className="flex items-center justify-between">
//                                     <div>
//                                         <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">{project.name}</h3>

//                                     </div>

//                                     {/* Arrow Button */}
//                                     <a
//                                         href={project.link}
//                                         className="flex-shrink-0 w-12 h-12 bg-blue-100 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
//                                         aria-label={`View ${project.name} project`}
//                                     >
//                                         <ArrowRight className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-300" />
//                                     </a>
//                                 </div>
//                             </div>

//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     )
// }


import { ArrowRight } from "lucide-react"
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

export default function Project() {
    const projects = [
        {
            id: 1,
            name: "Ajira Group",
            image: project1,
            description: "At construction company in Kathmandu, Nepal"
        },
        {
            id: 2,
            name: "Expert Vision",
            image: project2,
            description: "Case study Experts!"
        },
        {
            id: 3,
            name: "Samari IT",
            image: project3,
            description: "IT Solutions Provider"
        },
    ]

    return (
        <section
            className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
            style={{
                background: "linear-gradient(to bottom, #070b3b 60%, #ffffff 40%)",
            }}
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="font-semibold text-lg sm:text-xl mb-4 block" style={{ color: "#0959a2" }}>
                        Our Projects
                    </span>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white leading-tight">
                        Introduce Our Projects and
                        <br />
                        Check Recent Work
                    </h2>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 px-4">
                    {projects.map((project) => (
                        <div key={project.id} className="group relative">
                            {/* Project Image Container */}
                            <div className="relative rounded-xl overflow-hidden shadow-xl">
                                <img
                                    src={project.image}
                                    alt={`${project.name} website screenshot`}
                                    className="w-full h-62 sm:h-70 lg:h-78 object-cover transition-transform duration-300"
                                />
                            </div>

                            {/* Project Name Overlay with Semicircle */}
                            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-4/5 z-10">
                                <div className="bg-white rounded-lg p-4 relative">
                                    <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-1">{project.name}</h3>

                                    {/* Semicircle Button with hover effects */}
                                    <div
                                        className="absolute top-6 right-0 w-10 h-10 rounded-tl-3xl flex items-center justify-center 
             bg-[#e6f1fc] group-hover:bg-blue-900 transition-all duration-300"
                                    >
                                        <ArrowRight
                                            size={16}
                                            className="text-gray-800 transition-colors duration-300 group-hover:text-white"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}