"use client";
import { useParams } from "next/navigation";
import React from "react";

const EventsPage = () => {
  const { slug } = useParams();
  console.log(slug);
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-12">
      <div className="mx-auto max-w-7xl px-2 lg:px-2">
        {slug === "particulares" ? (
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <p className="mt-2 text-4xl font-bold tracking-tight text-red-500 sm:text-4xl">
                  Eventos particulares
                </p>
                <br />
                <strong>
                  Con el Carrito Gourmet, podrás disfrutar de una deliciosa
                  experiencia sin preocupaciones en la comodidad de tu hogar.
                  Nos encargamos de todo y cocinamos por ti, para que tú y tus
                  invitados puedan disfrutar de la fiesta sin tener que trabajar
                  para ello.
                </strong>
                <br />
                <br />
                <p>
                  <strong className="text-2xl">
                    ¿QUE EVENTOS REALIZAMOS?{" "}
                  </strong>{" "}
                  Cumpleaños, reuniones, eventos infantiles, matrimonios,
                  bautizos, baby shower, paseos de curso, eventos para empresa
                  hasta 3000 personas o cualquier tipo de celebración.{" "}
                </p>

                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none"></dl>
              </div>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Beneficios
              </h2>
              <ul className="mt-6 text-lg leading-8 text-gray-600">
                <strong>
                  1. No pierdes tiempo haciendo compras en supermercados,
                  atendiendo a tus invitados ni lavando platos.
                </strong>
                <br />
                <br />
                <strong>
                  2. Nosotros cocinamos tu disfrutas sin preocupaciones.
                </strong>
                <br />
                <br />
                <strong>
                  3. Preparamos deliciosos productos personalizados según tu
                  preferencia y la de tus invitados.
                </strong>
                <br />
                <br />
                <strong>
                  4. Llegamos a cualquier parte donde sea tu evento.
                </strong>
                <br />
                <br />
                <strong>
                  5. Atención exclusiva a cargo de un equipo con más de 10 años
                  de experiencia.
                </strong>
              </ul>
              <div className="mt-10">
                <a
                  href="#"
                  className=" p-7  w-28 bg-red-500 rounded-lg text-white"
                >
                  COTIZA TU EVENTO AQUÍ
                </a>
              </div>
            </div>
            <div className="">
              <img
                src="/fotoparticular.webp"
                alt="Product screenshot"
                className="w-[28rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[48rem] object-cover md:-ml-4 lg:-ml-0"
                width={900}
                height={900}
              />
            </div>
          </div>
        ) : (
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <p className="mt-2 text-4xl font-bold tracking-tight text-red-500 sm:text-4xl">
                  Eventos corporativos
                </p>
                <br />
                <strong>
                  Ofrecemos soluciones creativas y personalizadas para empresas
                  de cualquier tamaño e industria.
                  <br /> <br /> Nuestro propósito es realizar eventos
                  inolvidables que satisfagan las necesidades y objetivos de
                  cada cliente, desde pequeñas reuniones hasta grandes
                  convocatorias para fechas especiales. Incluyendo, servicios de
                  catering en carritos de comida con capacidad para la entrega
                  desde 50 hasta 4000 productos diarios, Coffe break,
                  audiovisual, producción de videos y fotografía, juegos
                  inflables y servicios de entretenimiento para fomentar la
                  participación de los asistentes. <br /> <br />
                  Trabajaremos en estrecha colaboración para garantizar que cada
                  detalle esté perfectamente planificado y coordinado. Cabe
                  mencionar que cumplimos con los más altos estándares de
                  inocuidad alimentaria y seguimos rigurosamente los protocolos
                  establecidos por la seremi de salud para garantizar la
                  seguridad de nuestros clientes. En nuestra productora de
                  eventos, nos enfocamos en ofrecer una experiencia única y
                  memorable que combinen creatividad, tecnología y estrategia
                  para generar un impacto significativo.
                </strong>
                <br />
                <br />
                <p>
                  <strong className="text-2xl">¿QUE EVENTOS REALIZAMOS?</strong>
                  Coctels, desayunos, pequeñas reuniones de oficina, fechas
                  especiales y cel, ceremonias por cumplimiento de metas,
                  lanzamiento de productos y/o capacitaciones, fiestas de
                  navidad para tus colaboradores y sus familias.
                </p>

                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none"></dl>
              </div>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Beneficios
              </h2>
              <ul className="mt-6 text-lg leading-8 text-gray-600">
                <strong>
                  1. Contamos con un equipo con más de 10 años de experiencia
                  especializado en la planificación, diseño y ejecución de
                  eventos.
                </strong>
                <br />
                <br />
                <strong>
                  2. Te asesoramos y acompañamos en todo el proceso de
                  planificación poniendo a tu disposición toda nuestra
                  experiencia para conseguir el objetivo esperado.
                </strong>
                <br />
                <br />
                <strong>
                  3. Con nosotros podras encontrar todos los servicios en un
                  solo lugar, y gestionaremos por ti la coordinación de cada
                  detalle y facilitaremos todo el proceso.
                </strong>
                <br />
                <br />
                <strong>
                  4. En conjunto elegiremos el mejor lugar para el desarrollo de
                  tu evento. Llegamos a cualquier parte donde sea tu evento.
                </strong>
                <br />
                <br />
                <strong>
                  5. Contamos con altos estándares de seguridad alimentaria con
                  resolución sanitaria que abalan nuestros procesos de
                  manipulación de alimentos.
                </strong>
              </ul>
              <div className="mt-10">
                <a
                  href="#"
                  className=" p-7  w-28 bg-red-500 rounded-lg text-white"
                >
                  COTIZA TU EVENTO AQUÍ
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <img
                src="/masivo3.webp"
                alt="Product screenshot"
                className="w-[28rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[48rem] object-cover md:-ml-4 lg:-ml-0"
                width={900}
                height={900}
              />
              <img
                src="/masivo2.webp"
                alt="Product screenshot"
                className="w-[28rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[48rem] object-cover md:-ml-4 lg:-ml-0"
                width={900}
                height={900}
              />
              <img
                src="/masivo1.webp"
                alt="Product screenshot"
                className="w-[28rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[48rem] object-cover md:-ml-4 lg:-ml-0"
                width={900}
                height={900}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsPage;
