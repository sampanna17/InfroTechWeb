import { ChevronLeft, ChevronRight, ChevronUp, Quote } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import Raj from '../assets/Raj.jpg';
import Rijal from '../assets/Rijal.jpg';
import Kandel from '../assets/Kandel.jpg';
import Rajput from '../assets/Rajput.jpg';

export default function Feedback() {
    const [currentPairIndex, setCurrentPairIndex] = useState(0)
    const [isAutoScrolling, setIsAutoScrolling] = useState(true)
    const trackRef = useRef(null)


    const testimonials = [
        {
            id: 1,
            name: "Pawan Singh Rajput",
            position: "Senior Coordinator - Wendy House School",
            image: Rajput,
            testimonial: `Firstly, I would like to thanks for doing a wonderful job. Working with Paradise It solution is very easy and friendly. Understanding the need of the customer is the most important thing and they understand our needs , and have designed website accordingly. Looking ahead to continue work with you in coming years too. Best Wishes for the success of your company`,
        },
        {
            id: 2,
            name: "Gaurab Raj Baral",
            position: "CEO - Trinity Education, Pokhara",
            image: Raj,
            testimonial: `Paradise-IT Solution is one the best IT companies in Nepal for all of our IT needs. Their Email Hosting services (Google Workspace) is really impressive. I am using their services for my 4 companies with 100% satisfaction. I would like to strongly recommend Paradise for anything related to IT.`,
        },
        {
            id: 3,
            name: "Rajindra Rijal",
            position: "CTO - KEIC",
            image: Rijal,
            testimonial: `I am really impressed by the quality of services I received from Paradise - IT Solution. You were right on schedule, charged reasonable prices, were professional and courteous in dealings, and delivered service well before time. I have received a very good support to scale up my website and emails system. `,
        },
        {
            id: 4,
            name: "Madhav Kumar Kandel",
            position: "CTO - Flights Gyani Pvt.Ltd.",
            image: Kandel,
            testimonial: `Outstanding service and professional approach. Paradise IT Solution delivered exactly what we needed within the timeline. Their technical expertise and customer support are exceptional. Highly recommended for any business looking for reliable IT solutions. My system security has increased because of you and I will definitely use your services again and would like to recommend others to take IT and email hosting solution.`,
        },
    ]

    // Create pairs of testimonials
    const testimonialPairs = []
    for (let i = 0; i < testimonials.length; i++) {
        const nextIndex = (i + 1) % testimonials.length
        testimonialPairs.push([testimonials[i], testimonials[nextIndex]])
    }

    const nextTestimonial = () => {
        setCurrentPairIndex(prev => (prev + 1) % testimonialPairs.length)
        setIsAutoScrolling(false)
        setTimeout(() => setIsAutoScrolling(true), 10000)
    }

    const prevTestimonial = () => {
        setCurrentPairIndex(prev => (prev - 1 + testimonialPairs.length) % testimonialPairs.length)
        setIsAutoScrolling(false)
        setTimeout(() => setIsAutoScrolling(true), 10000)
    }

    // Auto-scroll effect
    useEffect(() => {
        if (!isAutoScrolling) return

        const interval = setInterval(() => {
            setCurrentPairIndex(prev => (prev + 1) % testimonialPairs.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [isAutoScrolling, testimonialPairs.length])

    return (
        <section
            className="relative h-[700px] py-16 lg:py-20 px-6 sm:px-8 lg:px-10 overflow-hidden"
            style={{ backgroundColor: "#070b3b" }}
        >
            {/* Add custom sliding animation */}
            <style jsx global>{`
                .testimonials-track {
                    display: flex;
                    transition: transform 0.8s ease-in-out;
                    will-change: transform;
                }
                .testimonial-pair {
                    display: flex;
                    flex: 0 0 100%;
                    gap: 2rem;
                    padding: 0 1rem;
                }
                .testimonial-card {
                    flex: 1;
                    min-width: 0;
                }
                @media (max-width: 1023px) {
                    .testimonial-pair {
                        flex-direction: column;
                    }
                }
            `}</style>

            <div className="max-w-7xl mx-auto px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-blue-400 font-semibold text-lg sm:text-xl mb-4 block">Our Clients</span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-tight">Our Clients Feedback</h2>
                </div>

                {/* Testimonials Container */}
                <div className="relative">
                    {/* Navigation Arrows */}
                    <button
                        onClick={prevTestimonial}
                        className="group absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 w-12 h-12 rounded-full flex items-center justify-center text-white transition-colors duration-300"
                        aria-label="Previous testimonials"
                        style={{
                            border: "2px solid #0a5298",
                            backgroundColor: "transparent",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0a5298")}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                    >
                        <ChevronLeft size={20} className="text-[#0a5298] group-hover:text-white transition-colors duration-300" />
                    </button>

                    <button
                        onClick={nextTestimonial}
                        className="group absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 w-12 h-12 rounded-full flex items-center justify-center text-white transition-colors duration-300"
                        aria-label="Next testimonials"
                        style={{
                            border: "2px solid #0a5298",
                            backgroundColor: "transparent",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0a5298")}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                    >
                        <ChevronRight size={20} className="text-[#0a5298] group-hover:text-white transition-colors duration-300" />
                    </button>

                    {/* Testimonials Track */}
                    <div className="overflow-hidden">
                        <div 
                            className="testimonials-track"
                            ref={trackRef}
                            style={{
                                transform: `translateX(-${currentPairIndex * 100}%)`
                            }}
                        >
                            {testimonialPairs.map((pair, index) => (
                                <div key={index} className="testimonial-pair">
                                    {pair.map((testimonial) => (
                                        <div 
                                            key={testimonial.id}
                                            className="testimonial-card bg-white rounded-2xl p-8 lg:p-10 shadow-xl relative"
                                        >
                                            {/* Quote Icon */}
                                            <div className="absolute top-6 right-6">
                                                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                                                    <Quote className="w-6 h-6 text-white" />
                                                </div>
                                            </div>

                                            {/* Profile Section */}
                                            <div className="flex items-center gap-4 mb-6">
                                                <img
                                                    src={testimonial.image || "/placeholder.svg"}
                                                    alt={testimonial.name}
                                                    className="w-16 h-16 rounded-full object-cover"
                                                />
                                                <div>
                                                    <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                                                    <p className="text-gray-600 text-sm">{testimonial.position}</p>
                                                </div>
                                            </div>

                                            {/* Testimonial Text */}
                                            <div className="text-gray-700 text-justify leading-relaxed whitespace-pre-line">
                                                {testimonial.testimonial}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            
        </section>
    )
}


