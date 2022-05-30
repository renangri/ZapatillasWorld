import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";

const arrayItems = [
  {
    id: 1,
    title: "Nike Air Max ",
    description: "	Shoe Nike Air Max Sneakers Running, running shoes, orange",
    pictureUrl: img4,
    price: 12000,
    category: "running",
    stock: 10,
    initial: 1,
    details:
      "Acá tenés una zapatilla para correr que tiene características que no encontrarás en muchas otras zapatillas de este espacio. Con su entresuela ProFoam es extremadamente ligera y sensible. Y eso es exactamente lo que necesitas en tu próxima carrera. Esta amortiguación se combina con la biomecánica de la suela sólida, incluido un talón desacoplado, que brinda el rendimiento de alta gama que tu cuerpo exige.",
  },
  {
    id: 2,
    title: "Nike ONE",
    description: "Sneakers Skate shoe Nike ONE, nike shoe, purple, fashio",
    pictureUrl: img1,
    price: 18000,
    category: "running",
    stock: 4,
    initial: 1,
    details:
      "Acá tenés una zapatilla para correr que tiene características que no encontrarás en muchas otras zapatillas de este espacio. Con su entresuela ProFoam es extremadamente ligera y sensible. Y eso es exactamente lo que necesitas en tu próxima carrera. Esta amortiguación se combina con la biomecánica de la suela sólida, incluido un talón desacoplado, que brinda el rendimiento de alta gama que tu cuerpo exige.",
  },
  {
    id: 3,
    title: "Nike Free Air Force",
    description: "Nike Air Max Nike Free Air Force Shoe, nike, white, outdoor ",
    pictureUrl: img3,
    price: 17000,
    category: "running",
    stock: 0,
    initial: 0,
    details:
      "Acá tenés una zapatilla para correr que tiene características que no encontrarás en muchas otras zapatillas de este espacio. Con su entresuela ProFoam es extremadamente ligera y sensible. Y eso es exactamente lo que necesitas en tu próxima carrera. Esta amortiguación se combina con la biomecánica de la suela sólida, incluido un talón desacoplado, que brinda el rendimiento de alta gama que tu cuerpo exige.",
  },

  {
    id: 4,
    title: "Nike Air Max Skate",
    description: "Air Force 1 Nike Air Max Skate shoe Sneakers, nike, blue",
    pictureUrl: img2,
    price: 20000,
    category: "running",
    stock: 8,
    initial: 1,
    details:
      "Acá tenés una zapatilla para correr que tiene características que no encontrarás en muchas otras zapatillas de este espacio. Con su entresuela ProFoam es extremadamente ligera y sensible. Y eso es exactamente lo que necesitas en tu próxima carrera. Esta amortiguación se combina con la biomecánica de la suela sólida, incluido un talón desacoplado, que brinda el rendimiento de alta gama que tu cuerpo exige.",
  },
];
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const productServices = async (id) => {
  await delay(2000);
  if (id) {
    const item = arrayItems[id - 1];
    return item;
  }
  return arrayItems;
};

export default productServices;
