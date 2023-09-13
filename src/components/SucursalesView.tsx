import { Sucursales } from "@/data";

type props = {
  sucursales: Sucursales;
};
export default function SucursalesView({ sucursales }: props) {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid w-[90vw] max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {sucursales.title}
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                {sucursales.desc}
              </p>
              <img
                className="w-[100px] max-w-none rounded-xl object-cover bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[35rem] mt-6"
                src={sucursales.imgMap}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="-ml-12 flex flex-col gap-3 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[300px] h-[600px] max-w-none rounded-xl object-cover bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] "
            src={sucursales.img}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
