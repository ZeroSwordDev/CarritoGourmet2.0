'use client'
import { hazloEnCasa, events, featuredProducts } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Featured = () => {
  return (

    <div className="w-full overflow-x-scroll text-gray-500">
      {/* WRAPPER */}
      <div className="w-max flex">
        {events.map((item) => (

          <div
            key={item.id}
            className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]"
          >
            {/* IMAGE CONTAINER */}
            {item.img && (
              <div className="relative flex-1 w-full">
                <Image src={item.img} alt="" fill className="object-contain" />
              </div>
            )}
            {/* TEXT CONTAINER */}
            <div className=" flex-1 flex flex-col items-center justify-center text-center gap-4">
              <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">
                {item.title}
              </h1>
              <p className="p-4 2xl:p-8">{item.desc}</p>

              <Link href={`/${item.slug}`} className="bg-red-500 text-white p-2 rounded-md">
                Ver eventos
              </Link>

            </div>
          </div>
        ))}
      
          <div
            key={hazloEnCasa.id}
            className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]"
          >
            {/* IMAGE CONTAINER */}
            {hazloEnCasa.img && (
              <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500">
                <Image src={hazloEnCasa.img} alt="" fill className="object-contain" />
              </div>
            )}
            {/* TEXT CONTAINER */}
            <div className=" flex-1 flex flex-col items-center justify-center text-center gap-4">
              <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">
                {hazloEnCasa.title}
              </h1>
              <p className="p-4 2xl:p-8">{hazloEnCasa.desc}</p>
              <Link href={hazloEnCasa.slug} className="bg-red-500 text-white p-2 rounded-md">
                Ver más
              </Link>
            </div>
          </div>
      
      </div>
    </div>
  );
};

export default Featured;
