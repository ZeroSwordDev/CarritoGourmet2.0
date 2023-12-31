"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "Siempre fresca y siempre crujiente y siempre caliente",
    image: "/sliderCarrito.webp",
  },
  {
    id: 2,
    title: " Entregamos tu pedido dondequiera que estés",
    image: "/slidercarrito2.webp",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50 relative">
      {/* TEXT CONTAINER */}
      <div className="w-full flex-1 ">
        <Image
          src={data[currentSlide].image}
          alt=""
          fill
          className="object-cover"
        />
        {/* IMAGE CONTAINER */}
        <div className="flex flex-col items-center justify-center bg-black/30 w-full h-full absolute">
          <h1 className="text-5xl text-white text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl">
            {data[currentSlide].title}
          </h1>
          <button className="bg-red-500 text-white py-4 px-8">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
