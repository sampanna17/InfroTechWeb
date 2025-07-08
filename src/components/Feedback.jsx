import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Raj from "../assets/Raj.jpg";
import Rijal from "../assets/Rijal.jpg";
import Kandel from '../assets/kandel.jpg';

import Rajput from "../assets/Rajput.jpg";

export default function Feedback() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoScrolling, setIsAutoScrolling] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const trackRef = useRef(null);

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
            testimonial: `I am really impressed by the quality of services I received from Paradise - IT Solution. You were right on schedule, charged reasonable prices, were professional and courteous in dealings, and delivered service well before time. I have received a very good support to scale up my website and emails system.`,
        },
        {
            id: 4,
            name: "Madhav Kumar Kandel",
            position: "CTO - Flights Gyani Pvt.Ltd.",
            image: Kandel,
            testimonial: `Outstanding service and professional approach. Paradise IT Solution delivered exactly what we needed within the timeline. Their technical expertise and customer support are exceptional. Highly recommended for any business looking for reliable IT solutions. My system security has increased because of you and I will definitely use your services again and would like to recommend others to take IT and email hosting solution.`,
        },
    ];

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1024);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Auto-scroll effect
    const totalSlides = isMobile ? testimonials.length : Math.ceil(testimonials.length / 2);

    useEffect(() => {
        if (!isAutoScrolling) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % totalSlides);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoScrolling, isMobile, totalSlides]);


    const next = () => {
        const maxIndex = isMobile ? testimonials.length : Math.ceil(testimonials.length / 2);
        setCurrentIndex((prev) => (prev + 1) % maxIndex);
        setIsAutoScrolling(false);
        setTimeout(() => setIsAutoScrolling(true), 10000);
    };

    const prev = () => {
        const maxIndex = isMobile ? testimonials.length : Math.ceil(testimonials.length / 2);
        setCurrentIndex((prev) => (prev - 1 + maxIndex) % maxIndex);
        setIsAutoScrolling(false);
        setTimeout(() => setIsAutoScrolling(true), 10000);
    };

    // Group testimonials in pairs for desktop
    const testimonialGroups = isMobile
        ? testimonials.map((t) => [t])
        : (() => {
            const pairs = [];
            for (let i = 0; i < testimonials.length; i += 2) {
                pairs.push(testimonials.slice(i, i + 2));
            }
            return pairs;
        })();

    return (
        <section
            className="relative h-auto py-16 lg:py-20 px-6 sm:px-8 lg:px-10 overflow-hidden"
            style={{ backgroundColor: "#070b3b" }}
        >
            <style jsx global>{`
        .testimonials-track {
          display: flex;
          transition: transform 0.8s ease-in-out;
          will-change: transform;
        }
        .testimonial-group {
          display: flex;
          flex: 0 0 100%;
          gap: 2rem;
          padding: 0 1rem;
          justify-content: center;
        }
        .testimonial-card {
          flex: 1;
          min-width: 0;
        }
        @media (max-width: 1023px) {
          .testimonial-group {
            flex-direction: column;
          }
        }
      `}</style>

            <div className="max-w-7xl mx-auto px-8">
                <div className="text-center mb-16">
                    <span className="text-blue-400 font-semibold text-lg sm:text-xl mb-4 block">Our Clients</span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-tight">Our Clients Feedback</h2>
                </div>

                <div className="relative">
                    {/* Arrows */}
                    <button
                        onClick={prev}
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
                        onClick={next}
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

                    {/* Sliding Testimonials */}
                    <div className="overflow-hidden">
                        <div
                            className="testimonials-track"
                            ref={trackRef}
                            style={{
                                transform: `translateX(-${currentIndex * 100}%)`,
                            }}
                        >
                            {testimonialGroups.map((group, index) => (
                                <div key={index} className="testimonial-group">
                                    {group.map((testimonial) => (
                                        <div key={testimonial.id} className="testimonial-card bg-white rounded-2xl p-8 lg:p-10 shadow-xl relative max-w-xl mx-auto">
                                            <div className="absolute top-22 left-26">
                                                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                                                    <Quote className="w-5 h-5 text-white rotate-180" />
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-8 mb-6">
                                                <img
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    className="w-22 h-22 rounded-full object-cover"
                                                />
                                                <div>
                                                    <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                                                    <p className="text-gray-600 text-sm">{testimonial.position}</p>
                                                </div>
                                            </div>
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
    );
}



