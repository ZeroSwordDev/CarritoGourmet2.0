type Product = {
  id: number;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

type Products = Product[];

export const featuredProducts: Products = [
  {
    id: 1,
    title: "Sicilian",
    desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
    img: "/fotosucursallinares.webp",
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
  },
  {
    id: 2,
    title: "Bacon Deluxe",
    desc: "Indulge in smoky goodness with a flame-grilled beef patty, topped with crispy bacon, melted cheddar cheese, caramelized onions, and a smattering of tangy BBQ sauce.",
    img: "/donuts.png",
    price: 29.9,
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
  },
  {
    id: 3,
    title: "Bella Napoli",
    desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
    img: "/temporary/donuts.png",
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
  },
  {
    id: 4,
    title: "Spicy Arrabbiata",
    desc: "Ignite your taste buds with this fiery pasta creation, combining penne in a spicy tomato sauce infused with garlic, red chili flakes, and fresh basil for the ultimate comfort food experience.",
    img: "/temporary/p4.png",
    price: 26.9,
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
  },
  {
    id: 5,
    title: "Jalapeño Fiesta",
    desc: "Ignite your taste buds with a fiery kick! This burger features a succulent beef patty, fiery jalapeños, pepper jack cheese, and a zesty chipotle mayo sauce , and all the classic fixings on a toasted bun.",
    img: "/temporary/p5.png",
    price: 29.9,
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
  },
  {
    id: 6,
    title: "Margherita Magic",
    desc: "A timeless favorite with a twist, showcasing a thin crust topped with sweet tomatoes, fresh basil, creamy mozzarella, and a drizzle of extra virgin olive oil, fresh arugula, and a drizzle of balsamic glaze.",
    img: "/temporary/p6.png",
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
  },
  {
    id: 7,
    title: "Garlic Parmesan Linguine",
    desc: "A garlic lover's delight, featuring linguine smothered in a creamy Parmesan sauce, infused with garlic and garnished with chopped parsley, bell peppers, and cherry tomatoes.",
    img: "/temporary/p7.png",
    price: 28.9,
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
  },
  {
    id: 8,
    title: "Mediterranean Delight",
    desc: "Embark on a culinary journey with this Mediterranean-inspired creation, featuring zesty feta cheese, Kalamata olives, sun-dried tomatoes, and a sprinkle of oregano.",
    img: "/temporary/p8.png",
    price: 32.9,
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
  },
  {
    id: 9,
    title: "Hawaiian Teriyaki",
    desc: "Experience a taste of the tropics with a juicy beef patty glazed in tangy teriyaki sauce, topped with grilled pineapple, crispy bacon, and fresh lettuce, and all the classic fixings on a toasted bun.",
    img: "/temporary/p9.png",
    price: 29.9,
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
  },
];

export const pizzas: Products = [
  {
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
  },
  {
    id: 2,
    title: "Mediterranean Delight",
    desc: "Embark on a culinary journey with this Mediterranean-inspired creation, featuring zesty feta cheese, Kalamata olives, sun-dried tomatoes, and a sprinkle of oregano.",
    img: "/temporary/p8.png",
    price: 32.9,
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
  },
  {
    id: 3,
    title: "Bella Napoli",
    desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
    img: "/temporary/p3.png",
    price: 26.9,
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
  },
  {
    id: 4,
    title: "Pesto Primavera",
    desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
    img: "/temporary/p10.png",
    price: 28.9,
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
  },
  {
    id: 5,
    title: "Veggie Supreme",
    desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
    img: "/temporary/p11.png",
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
  },
  {
    id: 6,
    title: "Four Cheese Fantasy",
    desc: "Experience pure cheesy bliss with a melty blend of mozzarella, cheddar, provolone, and Parmesan cheeses, creating a rich and indulgent pizza experience.",
    img: "/temporary/p12.png",
    price: 22.9,
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
    img: "/temporary/m1.png",
    color: "white",
  },
  {
    id: 2,
    slug: "corporatives",
    title: "Eventos corporativos",
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
    img: "/temporary/m1.png",
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
}[];

export const menu: Menu = [
  {
    id: 1,
    slug: "pastas",
    title: "Italian Pastas",
    desc: "Savor the taste of perfection with our exquisite Italian handmade pasta menu.",
    img: "/temporary/m1.png",
    color: "white",
  },
  {
    id: 2,
    slug: "burgers",
    title: "Juicy Burgers",
    desc: "Burger Bliss: Juicy patties, bold flavors, and gourmet toppings galore.",
    img: "/temporary/m2.png",
    color: "black",
  },
  {
    id: 3,
    slug: "pizzas",
    title: "Cheesy Pizzas",
    desc: "Pizza Paradise: Irresistible slices, mouthwatering toppings, and cheesy perfection.",
    img: "/temporary/m3.png",
    color: "white",
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
  img: "/temporary/p1.png",
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
