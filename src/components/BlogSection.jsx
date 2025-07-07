import { ChevronRight } from "lucide-react"
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.jpg";

export default function BlogSection() {

    const blogPosts = [
        {
            id: 1,
            title: "Web Design Company in Nepal",
            excerpt:
                "Nepal's digital landscape is rapidly evolving with increased internet penetration and the growing importance of online presence for bus...",
            image: blog1,
            date: "12",
            month: "Jul",
            readMoreLink: "#",
        },
        {
            id: 2,
            title: "How To Develop Your AI Strategy in 2024",
            excerpt:
                "In today's digital landscapes, artificial intelligence (AI) is changing industries and creating new opportunities for new innovation....",
            image: blog2,
            date: "19",
            month: "Jun",
            readMoreLink: "#",
        },
        {
            id: 3,
            title: "Increase Domain Authority: Step-by-Step Explained",
            excerpt:
                "No matter how experienced you are in digital marketing or how new you are to SEO, you have probably heard about Domain Authority (DA). ...",
            image: blog3,
            date: "07",
            month: "May",
            readMoreLink: "#",
        },
    ]

    return (
        <section className="bg-gray-50 py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    {/* Section Label */}
                    <div className=" mb-4">
                        <span className="text-blue-900 font-semibold text-lg sm:text-xl">Latest Blog</span>
                    </div>

                    {/* Main Heading */}
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight">
                        Let's Check Some Latest Blog
                    </h2>
                </div>

                {/* Blog Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6">
                    {blogPosts.map((post) => (
                        <article
                            key={post.id}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-xl group"
                        >
                            {/* Image Container */}
                            <div className="relative">
                                <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-64 object-cover" />
                                {/* Date Badge */}
                                <div
                                    className="absolute top-56 right-6 text-white px-3 py-5 rounded-lg text-center min-w-[60px]"
                                    style={{ backgroundColor: "#d24950" }}
                                >
                                    <div className="text-lg font-semibold leading-none">{post.date}</div>
                                    <div className="text-sm leading-none">{post.month}</div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 lg:p-8 mt-4">
                                {/* Title */}
                                <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4 leading-tight transition-colors duration-300 group-hover:text-[#d24950]">
                                    {post.title}
                                </h3>


                                {/* Excerpt */}
                                <p className="text-gray-600 text-justify leading-relaxed mb-6">{post.excerpt}</p>

                                {/* Read More Link */}
                                <a
                                    href={post.readMoreLink}
                                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                                >
                                    Read More
                                    <ChevronRight size={16} />
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
