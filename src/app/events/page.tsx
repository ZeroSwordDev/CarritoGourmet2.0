import { events } from "@/data";
import Link from "next/link";
import React from "react";

const EventsPage = () => {

  return (
    <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center">
      {events.map((event) => (
        <Link
          href={`/events/${event.slug}`}
          key={event.id}
          className="w-full h-1/3 bg-cover p-8 md:h-1/2"
          style={{ backgroundImage: `url(${event.img})` }}
        >
          <div className={`text-${event.color} w-1/2`}>
            <h1 className="uppercase font-bold text-3xl">{event.title}</h1>
            <p className="text-sm my-8">{event.desc}</p>
            <button
              className={`hidden 2xl:block bg-${event.color} text-${
                event.color === "black" ? "white" : "red-500"
              } py-2 px-4 rounded-md`}
            >
              Explore
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default EventsPage;
