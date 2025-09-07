"use client";
import { useState } from "react";

const Dot = () => {
  const slides = [
    {
      title: "Let the right people know you’re open to work",
      desc: "With the Open To Work feature, you can privately tell recruiters or publicly share with the LinkedIn community that you are looking for new job opportunities.",
      img: "./landing-page-2.png",
    },
    {
      title: "Conversations today could lead to opportunity tomorrow",
      desc: "Sending messages to people you know is a great way to strengthen relationships as you take the next step in your career.",
      img: "./landing-page-3.png",
    },
    {
      title: "Stay up to date on your industry",
      desc: "From live videos, to stories, to newsletters and more, LinkedIn is full of ways to stay up to date on the latest discussions in your industry.",
      img: "./landing-page-4.png",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <>
      <section className="bg-[#f3f2f0]">
        <div className="relative w-[1200px] pl-[12px] py-[60px] mx-auto overflow-hidden ">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 grid grid-cols-[54%_auto] items-center p-6"
              >
                <div className="w-[564px]">
                  <h2 className="text-[32px] text-[#b24020] leading-[40px] pr-[16px]">{slide.title}</h2>
                  <p className="text-[20px] text-[#000000e6] my-[16px] pr-[8px]">{slide.desc}</p>
                </div>
                <div>
                  <img
                    src={slide.img}
                    alt="slide"
                    className=" h-[450px] object-cover pr-[42px] rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Prev Button */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-black/75 text-white text-center p-[14px] rounded-full"
          >
            <img className="w-[16px]" src="./left-arrow.svg" alt="" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 -translate-y-1/2 bg-black/75 text-white p-[14px] rounded-full"
          >
            <img className="w-[16px]" src="./right-arrow.svg" alt="" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, i) => (
              <span
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  current === i ? "bg-white" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Dot;
