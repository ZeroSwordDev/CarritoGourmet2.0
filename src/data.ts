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
