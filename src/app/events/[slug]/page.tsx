import { events } from "@/data";
import Image from "next/image";
import Link from "next/link";

const EventPage = () => {
  const individuals =
    events.find((event) => event.slug === "individuals") 
  console.log(individuals);
  const corporatives =
    events.find((event) => event.slug === "corporatives") ;
  // como traer el parametro de la url?
  return (
    <div className="w-full h-full flex text-red-500 justify-center items-center">
      <div className="w-full h-full flex items-center justify-center">
        {individuals && (
          <div className="w-full border-r-2 border-b-2 border-red-500 lg:w-2/3 p-4 flex flex-col justify-between group odd:bg-fuchsia-50">
            {/* IMAGE CONTAINER */}
            {individuals.img && (
              <div className="self-center">
                <Image
                  src={individuals.img}
                  alt=""
                  height={500}
                  width={500}
                  className="object-contain"
                />
              </div>
            )}
            {/* TEXT CONTAINER */}
            <div className="flex flex-col items-center justify-between font-bold gap-y-4">
              <h1 className="text-2xl uppercase p-2">{individuals.title}</h1>
              <h2 className="text-lg"> {individuals.desc} </h2>
              <p className="text-sm">{individuals.fullDesc}</p>
              <div>
                {individuals.beneficts?.map((benefict) => (
                  <p className="text-sm" key={benefict.id}>
                    <span>{benefict.id}. </span>
                    {benefict.desc}
                  </p>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      {/* <div className="w-full">
        {corporatives && (
          <div className="w-full h-[60vh] border-r-2 border-b-2 border-red-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group odd:bg-fuchsia-50">
            {corporatives.img && (
              <div className="relative h-[80%]">
                <Image
                  src={corporatives.img}
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            )}
            <div className="flex items-center justify-between font-bold">
              <h1 className="text-2xl uppercase p-2">{corporatives.title}</h1>
              <h2 className="group-hover:hidden text-xl">
                ${corporatives.price}
              </h2>
              <button className="hidden group-hover:block uppercase bg-red-500 text-white p-2 rounded-md">
                Add to Cart
              </button>
            </div>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default EventPage;
