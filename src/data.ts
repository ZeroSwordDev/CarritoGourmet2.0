export type Product = {
  id: number;
  title: string;
  desc?: string;
  img?: string;
  price?: number;
  href?: string;
  options?: { title: string; additionalPrice: number }[];
};

export type Products = Product[];

export const featuredProducts: Products = [
  {
    id: 1,
    title: "Sucursales",
    desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
    img: "/fotosucursallinares.webp",
    href: "sucursales",
  },
  {
    id: 2,
    title: "Hazlo en Casa",
    desc: "Prepara rápido y fácil en casa.",
    img: "/boxhaburgesa.webp",
    href: "eathome",
  },
];

export const mechadas: Products = [
  {
    id: 1,
    title: "Mechadas Avocados",
    desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
    img: "/mechadas/MECHADA AVOCADO.webp",
    price: 24.9,
  },
  {
    id: 2,
    title: "Mechadas Bacon",
    desc: "Embark on a culinary journey with this Mediterranean-inspired creation, featuring zesty feta cheese, Kalamata olives, sun-dried tomatoes, and a sprinkle of oregano.",
    img: "/mechadas/MECHADA BACON.webp",
    price: 32.9,
  },
  {
    id: 3,
    title: "Mechadas Chacarera",
    desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
    img: "/mechadas/MECHADA CHACARERA.webp",
    price: 26.9,
  },
  {
    id: 4,
    title: "Mechadas Gringa",
    desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
    img: "/mechadas/MECHADA GRINGA.webp",
    price: 28.9,
  },
  {
    id: 5,
    title: "Mechadas Italiana",
    desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
    img: "/mechadas/MECHADA ITALIANA.webp",
    price: 24.9,
  },
  {
    id: 6,
    title: "Mechadas Luco",
    desc: "Experience pure cheesy bliss with a melty blend of mozzarella, cheddar, provolone, and Parmesan cheeses, creating a rich and indulgent pizza experience.",
    img: "/mechadas/MECHADA LUCO.webp",
    price: 22.9,
  },
];

export const papas: Products = [
  {
    id: 1,
    title: "Sicilian",
    desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
    img: "/temporary/p1.png",
    price: 24.9,
  },
  {
    id: 2,
    title: "Mediterranean Delight",
    desc: "Embark on a culinary journey with this Mediterranean-inspired creation, featuring zesty feta cheese, Kalamata olives, sun-dried tomatoes, and a sprinkle of oregano.",
    img: "/temporary/p8.png",
    price: 32.9,
  },
  {
    id: 3,
    title: "Bella Napoli",
    desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
    img: "/temporary/p3.png",
    price: 26.9,
  },
  {
    id: 4,
    title: "Pesto Primavera",
    desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
    img: "/temporary/p10.png",
    price: 28.9,
  },
  {
    id: 5,
    title: "Veggie Supreme",
    desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
    img: "/temporary/p11.png",
    price: 24.9,
  },
  {
    id: 6,
    title: "Four Cheese Fantasy",
    desc: "Experience pure cheesy bliss with a melty blend of mozzarella, cheddar, provolone, and Parmesan cheeses, creating a rich and indulgent pizza experience.",
    img: "/temporary/p12.png",
    price: 22.9,
  },
];
export const ensaladas: Products = [
  {
    id: 1,
    title: "Sicilian",
    desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
    img: "/temporary/p1.png",
    price: 24.9,
  },
  {
    id: 2,
    title: "Mediterranean Delight",
    desc: "Embark on a culinary journey with this Mediterranean-inspired creation, featuring zesty feta cheese, Kalamata olives, sun-dried tomatoes, and a sprinkle of oregano.",
    img: "/temporary/p8.png",
    price: 32.9,
  },
  {
    id: 3,
    title: "Bella Napoli",
    desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
    img: "/temporary/p3.png",
    price: 26.9,
  },
  {
    id: 4,
    title: "Pesto Primavera",
    desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
    img: "/temporary/p10.png",
    price: 28.9,
  },
  {
    id: 5,
    title: "Veggie Supreme",
    desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
    img: "/temporary/p11.png",
    price: 24.9,
  },
  {
    id: 6,
    title: "Four Cheese Fantasy",
    desc: "Experience pure cheesy bliss with a melty blend of mozzarella, cheddar, provolone, and Parmesan cheeses, creating a rich and indulgent pizza experience.",
    img: "/temporary/p12.png",
    price: 22.9,
  },
];
export const hamburgesas: Products = [
  {
    id: 1,
    title: "Bacon burger",
    desc: "",
    img: "/hamburgesas/Chesseburgerdoble.webp",
    price: 24.9,
  },
  {
    id: 2,
    title: "Tasty Bacon",
    desc: "",
    img: "/hamburgesas/TASTYBACON.webp",
    price: 24.9,
  },
  {
    id: 3,
    title: "Triple animal Style",
    desc: "",
    img: "/hamburgesas/TRIPLE ANIMAL STYLE.webp",
    price: 24.9,
  },
  {
    id: 4,
    title: "Crispy Bacon",
    desc: "",
    img: "/hamburgesas/crispy bacon.webp",
    price: 24.9,
  },
  {
    id: 5,
    title: "Cuatro de burger",
    desc: "",
    img: "/hamburgesas/CUARTO DE BURGER.webp",
    price: 24.9,
  },
  {
    id: 6,
    title: "Chesse Burger doble",
    desc: "",
    img: "/hamburgesas/Chesseburgerdoble.webp",
    price: 24.9,
  },
];

export const singleProduct: Product = {
  id: 1,
  title: "Sicilian",
  desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
  img: "/temporary/p1.png",
  price: 24.9,
  options: [
    {
      title: "Small",
      additionalPrice: 0,
    },
    {
      title: "Medium",
      additionalPrice: 4,
    },
    {
      title: "Large",
      additionalPrice: 6,
    },
  ],
};


type Events = {
  id: number;
  slug: string;
  title: string;
  fullDesc?: string;
  desc?: string;
  beneficts?: { id: number; desc: string }[];
  img?: string;
  color: string;
}[];

export const events: Events = [
  {
    id: 1,
    slug: "individuals",
    title: "Eventos particulares",
    desc: "Lleva el carrito hasta la puerta de tu casa y disfruta sin preocupaciones",
    fullDesc:
      "Con el Carrito Gourmet, podrás disfrutar de una deliciosa experiencia sin preocupaciones en la comodidad de tu hogar. Nos encargamos de todo y cocinamos por ti, para que tú y tus invitados puedan disfrutar de la fiesta sin tener que trabajar para ello. ¿QUE EVENTOS REALIZAMOS? Cumpleaños, reuniones, eventos infantiles, matrimonios, bautizos, baby shower, paseos de curso, eventos para empresa hasta 3000 personas o cualquier tipo de celebración. ",
    beneficts: [
      {
        id: 1,
        desc: "No pierdes tiempo haciendo compras en supermercados, atendiendo a tus invitados ni lavando platos.",
      },
      {
        id: 2,
        desc: "Nosotros cocinamos tu disfrutas sin preocupaciones.",
      },
      {
        id: 3,
        desc: "Preparamos deliciosos productos personalizados según tu preferencia y la de tus invitados.",
      },
      {
        id: 4,
        desc: "Llegamos a cualquier parte donde sea tu evento.",
      },
      {
        id: 5,
        desc: "Atención exclusiva a cargo de un equipo con más de 10 años de experiencia.",
      },
    ],
    img: "/Fotocategoriaeventosmasivos.webp",
    color: "white",
  },
  {
    id: 2,
    slug: "sucursales",
    title: "Sucursales",
    desc: "Tenemos todos los servicios para la producción de tu evento corporativo",
    fullDesc:
      "Ofrecemos soluciones creativas y personalizadas para empresas de cualquier tamaño e industria. Nuestro propósito es realizar eventos inolvidables que satisfagan las necesidades y objetivos de cada cliente, desde pequeñas reuniones hasta grandes convocatorias para fechas especiales. Incluyendo, servicios de catering en carritos de comida con capacidad para la entrega desde 50 hasta 4000 productos diarios, Coffe break, audiovisual, producción de videos y fotografía, juegos inflables y servicios de entretenimiento para fomentar la participación de los asistentes. Trabajaremos en estrecha colaboración para garantizar que cada detalle esté perfectamente planificado y coordinado. Cabe mencionar que cumplimos con los más altos estándares de inocuidad alimentaria y seguimos rigurosamente los protocolos establecidos por la seremi de salud para garantizar la seguridad de nuestros clientes. En nuestra productora de eventos, nos enfocamos en ofrecer una experiencia única y memorable que combinen creatividad, tecnología y estrategia para generar un impacto significativo. ¿QUE EVENTOS REALIZAMOS? Coctels, desayunos, pequeñas reuniones de oficina, fechas especiales y cel, ceremonias por cumplimiento de metas, lanzamiento de productos y/o capacitaciones, fiestas de navidad para tus colaboradores y sus familias.",
    beneficts: [
      {
        id: 1,
        desc: "Contamos con un equipo con más de 10 años de experiencia especializado en la planificación, diseño y ejecución de eventos.",
      },
      {
        id: 2,
        desc: "Te asesoramos y acompañamos en todo el proceso de planificación poniendo a tu disposición toda nuestra experiencia para conseguir el objetivo esperado.",
      },
      {
        id: 3,
        desc: "Con nosotros podras encontrar todos los servicios en un solo lugar, y gestionaremos por ti la coordinación de cada detalle y facilitaremos todo el proceso.",
      },
      {
        id: 4,
        desc: "En conjunto elegiremos el mejor lugar para el desarrollo de tu evento. Llegamos a cualquier parte donde sea tu evento.",
      },
      {
        id: 5,
        desc: "Contamos con altos estándares de seguridad alimentaria con resolución sanitaria que abalan nuestros procesos de manipulación de alimentos.",
      },
    ],
    img: "/fotosucursallinares.webp",
    color: "white",
  },
];

type Menu = {
  id: number;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
  backgroundColor: string;
}[];

export const menu: Menu = [
  {
    id: 1,
    slug: "Hamburgesas",
    title: "Hamburgesas",
    desc: "Las mejores hamburguesas de Talca pide ya!",
    img: "/hamburgesas/Chesseburgerdoble.webp",
    color: "white",
    backgroundColor: "red",
  },
  {
    id: 2,
    slug: "Mechadas",
    title: "Mechadas",
    desc: "Las mejores Mechadas de Talca pide ya!",
    img: "/hamburgesas/Chesseburgerdoble.webp",
    color: "black",
    backgroundColor: "orange",
  },
  {
    id: 3,
    slug: "Ensaladas",
    title: "Ensaladas",
    desc: "Las mejores ensaladas de Talca pide ya!",
    img: "/hamburgesas/Chesseburgerdoble.webp",
    color: "white",
    backgroundColor: "green",
  },
  {
    id: 4,
    slug: "Papas",
    title: "Papas",
    desc: "Las mejores papas de Talca pide ya!",
    img: "/hamburgesas/Chesseburgerdoble.webp",
    color: "black",
    backgroundColor: "yellow",
  },
];

export type Sucursales = {
  id: number;
  title: string;
  desc?: string;
  img?: string;
  imgMap?: string;
  color: string;
};

export const sucursales: Sucursales[] = [
  {
    id: 1,
    title: "Region del Maule, Linares",
    desc: "Savor the taste of perfection with our exquisite Italian handmade pasta menu.",
    img: "/fotosucursallinares.webp",
    imgMap: "https://carritogourmet.netlify.app/assets/rio-b877e52f.png",
    color: "white",
  },
  {
    id: 2,
    title: "Region del Maule, Talca",
    desc: "",
    img: "/fotosucursaltalca.JPG",
    imgMap: "https://carritogourmet.netlify.app/assets/calle31-dc3e40c9.png",
    color: "black",
  },
];

type HazloEnCasa = {
  id: number;
  title: string;
  slug: string;
  desc?: string;
  fullDesc?: string;
  img?: string;
  products?: { id: number; title: string; img: string }[];
};

export const hazloEnCasa: HazloEnCasa = {
  id: 1,
  title: "Hazlo en casa",
  slug: "hazlo-en-casa",
  desc: "Prepara rápido y fácil en casa.",
  fullDesc:
    "Hemos creado para ti una completa línea de productos lista para preparar en casa, donde cocinar es más fácil que nunca. Ya no tienes que realizar extensos y complejos procesos para disfrutar. Ahora podrás hacerlo rápido y fácil en simples pasos.",
  img: "/Fotocategoriaeventosmasivos.webp",
  products: [
    {
      id: 1,
      title: "Box hamburguesero",
      img: "/temporary/p1.png",
    },
    {
      id: 2,
      title: "Carne mechada al vacio",
      img: "/temporary/p2.png",
    },
    {
      id: 3,
      title: "Salsas en diferentes formatos ",
      img: "/temporary/p3.png",
    },
  ],
};
