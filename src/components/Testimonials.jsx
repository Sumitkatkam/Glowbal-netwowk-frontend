import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

const imageMap = {
  "Sarah Johnson":
    "https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww",
  "John Miller":
    "https://st.depositphotos.com/1011643/4430/i/450/depositphotos_44309759-stock-photo-young-indian-man-outdoors.jpg",
  "Emily Carter":
    "https://imgcdn.stablediffusionweb.com/2024/12/3/80f18dc7-e45d-43fa-81b2-3048e4672cea.jpg",
};

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for prev, 1 for next

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ttg3671/glowbal_assignment/refs/heads/main/testimonials"
    )
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex(
      (prev) =>
        (prev + newDirection + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="px-4 md:px-20 pt-14 pb-20 bg-black text-white relative overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-semibold text-left mb-2">
        First-Hand Opinions Of Clients On <br /> Their Partnership Experience
      </h2>
      <p className="text-gray-400 text-xl leading-relaxed max-w-8xl mb-10 mt-6">
        We are a software and mobile application development company that
        ensures its expertise
        <br />
        extends to offer a seamlessly productive and growth-oriented
        partnerships to its clients.
      </p>

      <div className="absolute right-20 top-14 flex space-x-4 z-10">
        <Button
          onClick={() => paginate(-1)}
          variant="outline"
          className="rounded-full bg-transparent text-white hover:bg-[#126BFB] w-[70px] h-[70px] p-0"
        >
          <ChevronLeft className="w-[32px] h-[32px]" />
        </Button>
        <Button
          onClick={() => paginate(1)}
          variant="outline"
          className="rounded-full bg-transparent text-white hover:bg-[#126BFB] w-[70px] h-[70px] p-0"
        >
          <ChevronRight className="w-[32px] h-[32px]" />
        </Button>
      </div>

      <div className="relative flex justify-center items-center mt-6">
        {testimonials.length > 0 && (
          <div className="flex space-x-4 relative w-full max-w-6xl justify-center items-center">
            {/* Previous (preview) */}
            <div className="hidden md:block w-[300px] opacity-30 scale-90 blur-[1px] pointer-events-none transition-all duration-300">
              <TestimonialCard
                data={
                  testimonials[
                    (currentIndex - 1 + testimonials.length) %
                      testimonials.length
                  ]
                }
                preview
              />
            </div>

            {/* Current */}
            <TestimonialCard data={testimonials[currentIndex]} />

            {/* Next (preview) */}
            <div className="hidden md:block w-[300px] opacity-30 scale-90 blur-[1px] pointer-events-none transition-all duration-300">
              <TestimonialCard
                data={testimonials[(currentIndex + 1) % testimonials.length]}
                preview
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.9,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.9,
  }),
};

const TestimonialCard = ({ data, preview = false }) => {
  if (!data) return null;

  const imageUrl =
    imageMap[data.name] ||
    `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 60)}.jpg`;

  return (
    <div
      className={`rounded-xl border border-gray-700 backdrop-blur-md bg-transparent p-8 text-white shadow-lg max-w-3xl w-full ${
        preview ? "opacity-50 pointer-events-none" : ""
      }`}
    >
      <p className="text-lg leading-relaxed mb-8 text-gray-300">{data.testimonial}</p>
      <div className="flex items-center justify-between border-t border-gray-700 pt-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-md overflow-hidden bg-gray-300">
            <img src={imageUrl} alt={data.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <h4 className="font-semibold text-white">{data.name}</h4>
            <p className="text-sm text-gray-400">{data.position}</p>
            <p className="text-sm text-gray-400">rating: {data.rating}⭐</p>
          </div>
        </div>
        <div className="text-3xl font-bold text-white">{!preview && data.company}</div>
      </div>
    </div>
  );
};


export default Testimonials;
