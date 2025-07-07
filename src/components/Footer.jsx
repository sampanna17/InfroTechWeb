
import { Headphones, ChevronRight } from "lucide-react";
import footer1 from '../assets/footer1.png';
import footer2 from '../assets/footer2.png';
import footer3 from '../assets/footer3.jpg';
import footer4 from '../assets/footer4.jpg';

export default function Footer() {
  const blogPosts = [
    {
      id: 1,
      title: "Web Design Company in Nepal",
      date: "12 Jul 2024",
      image: footer1,
    },
    {
      id: 2,
      title: "How To Develop Your AI Strategy in 2024",
      date: "19 Jun 2024",
      image: footer2,
    },
    {
      id: 3,
      title: "Increase Domain Authority: Step-by-Step Explained",
      date: "07 May 2024",
      image: footer3,
    },
    {
      id: 4,
      title: "The Five Most Important Pages of Your Website",
      date: "23 Jan 2024",
      image: footer4,
    },
  ];

  const renderLinkItem = (text) => (
    <li className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors" >
      <ChevronRight size={16} />
      <a href="#">{text}</a>
    </li>
  );

  return (
    <footer className="text-white py-16 px-6 relative" style={{ backgroundColor: "#070b3b" }}
    >

      <div className="max-w-7xl mx-auto">
        {/* 4-Column Grid with Horizontal Gap */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-12 gap-x-10">
          {/* Left Section - Company Info */}
          <div>
            <p className="text-gray-300 leading-relaxed mb-8 text-justify">
              We always wanted to be recognized as a global brand so, we based our headquarter at Germany, Stuttgart and
              all our venture companies at Australia but having all the development activities from Nepal.
            </p>

            {/* Contact Support Box */}
            <div className="bg-white text-gray-800 rounded-2xl p-6 flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-lg mb-1">Talk to Our Support</h3>
                <p className="text-gray-600">014547324, 9704000000</p>
              </div>
              <div className="text-blue-600">
                <Headphones size={32} />
              </div>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                "About Us",
                "Our Dedicated Team",
                "Our Clients",
                "Our Services",
                "Our Projects",
                "Blogs",
              ].map(renderLinkItem)}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Useful Links</h3>
            <ul className="space-y-3">
              {[
                "About Us",
                "Contact Us",
                "Our Dedicated Team",
                "Our Clients",
                "Payment Gateway",
                "Our Services",
                "Careers",
              ].map(renderLinkItem)}
            </ul>
          </div>

          {/* Our Blog */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Our Blog</h3>
            <div className="space-y-4">
              {blogPosts.map((post) => (
                <div key={post.id} className="flex gap-3">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h4 className="text-white font-medium text-sm leading-tight mb-1">
                      {post.title}
                    </h4>
                    <p className="text-red-400 text-xs">{post.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-700 mt-12 pt-8">
          <p className="text-center text-gray-400">© 2025 Paradise IT Solutions.</p>
        </div>
      </div>
    </footer>
  );
}
