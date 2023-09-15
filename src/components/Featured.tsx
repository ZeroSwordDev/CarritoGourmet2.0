"use client";
import { featuredProducts } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Featured = () => {
  return (
    <div className="w-full overflow-x-scroll text-gray-500 ">
      {/* WRAPPER */}
      <div className="w-max flex  ">
        <div
          key={featuredProducts[0].id}
          className="w-screen relative h-[60vh] flex flex-col items-center justify-around p-4  md:w-[50vw] xl:w-[33vw] xl:h-[90vh] "
        >
          {/* IMAGE CONTAINER */}
          <div className="absolute bg-white h-full  opacity-100 hover:opacity-0  transition-all duration-150 flex flex-col justify-evenly p-10 items-center">
            {featuredProducts[0].img && (
              <Image
                src={featuredProducts[0].img}
                alt=""
                width={400}
                height={400}
                className="object-contain"
              />
            )}
            {/* TEXT CONTAINER */}
            <div className=" flex-1 flex flex-col items-center justify-center text-center gap-4">
              <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">
                {featuredProducts[0].title}
              </h1>
              <p className="p-4 2xl:p-8">{featuredProducts[0].desc}</p>
            </div>
            <div className="flex w-full h-full  justify-around absolute bottom-10">
              <Link
                href={"/events/particulares"}
                className="w-full h-full opacity-0"
              >
                Envtos particulare
              </Link>
              <Link
                href={"/events/coorporativos"}
                className="w-full h-full opacity-0"
              >
                Envtos particulare
              </Link>
            </div>
          </div>
          <div className="flex  w-full h-full justify-between items-center">
            <div className="flex-1 flex flex-col items-center justify-center text-black h-full w-full ">
              {featuredProducts[0].img && (
                <Image
                  src={featuredProducts[0].img}
                  alt=""
                  width={200}
                  height={200}
                  className="object-contain"
                />
              )}
              <h1>Eventos Particulares</h1>
            </div>
            <div className="flex-1 flex  flex-col  items-center justify-center text-black h-full w-full">
              {featuredProducts[0].img && (
                <Image
                  src={featuredProducts[0].img}
                  alt=""
                  width={200}
                  height={200}
                  className="object-contain"
                />
              )}
              <h1>Eventos Coorporativos</h1>
            </div>
          </div>
        </div>

        {featuredProducts?.slice(1, 3).map((item) => (
          <div
            key={item.id}
            className="w-screen h-[60vh] flex flex-col items-center justify-around p-4  md:w-[50vw] xl:w-[33vw] xl:h-[90vh]"
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

              <button className="bg-red-500 text-white p-2 rounded-md">
                <Link href={`/${item.href}`}>Ver ahora</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
