import { featuredProducts } from "@/data";
import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div className="w-screen  text-gray-500">
      {/* WRAPPER */}
      <div className="w-max flex">
        {/* SINGLE ITEM */}
        <div className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]">
          <div className="relative flex-1 w-full ">
            <Image
              src="/Fotocategoriaeventosmasivos.webp"
              alt=""
              fill
              className="object-contain"
            />
          </div>

          {/* TEXT CONTAINER */}
          <div className=" flex-1 flex flex-col items-center justify-center text-center gap-4">
            <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">
              Eventos
            </h1>
            <p className="p-4 2xl:p-8">
              Ignite your taste buds with a fiery combination of spicy
              pepperoni, jalapeños, crushed red pepper flakes, and melted
              mozzarella cheese, delivering a kick with every bite.
            </p>
            <button className="bg-red-500 text-white p-2 rounded-md">
              Ver ahora
            </button>
          </div>
        </div>

        {featuredProducts.slice(0, 2).map((item) => (
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
              <button className="bg-red-500 text-white p-2 rounded-md">
                Ver ahora
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
