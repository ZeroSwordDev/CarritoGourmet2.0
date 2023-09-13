import React from "react";
import image from "../../../public/hechoencasa/SalsaCesar.webp";

type Props = {};

const callouts = [
  {
    id: 1,
    name: "Box hamburguesero",
    imageSrc: "boxhaburgesa.webp",
    imageAlt: "",
    href: "/eathome/box-hamburgesa",
  },
  {
    id: 2,
    name: "Salsas",
    imageSrc: "SalsaCesar.webp",
    imageAlt: "",
    href: "/eathome/carne-mechada",
  },
  {
    id: 3,
    name: "Carne mechada al vacio",
    imageSrc: "Mechadavacio.webp",
    imageAlt: "",
    href: "/eathome/carne-mechada",
  },
];

export default function Example() {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">
            Hemos creado para ti una completa línea de productos lista para
            preparar en casa, donde cocinar es más fácil que nunca. Ya no tienes
            que realizar extensos y complejos procesos para disfrutar. Ahora
            podrás hacerlo rápido y fácil en simples pasos.
          </h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  {callout.imageSrc && (
                    <img
                      src={callout.imageSrc || ""}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  )}
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
