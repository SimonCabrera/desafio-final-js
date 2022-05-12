let promos = [
  {
    id: 1,
    name: "Promo 1",
    price: 600,
    img: "images/hamburguesa.jpeg",
    description: "Doble hamburguesa + doble queso + bacon + cebolla crispy",
  },
  {
    id: 2,
    name: "Promo 2",
    price: 500,
    img: "images/hamburg3.jpeg",
    description: "Doble hamburguesa + doble queso + cebolla crispy",
  },
  {
    id: 3,
    name: "Promo 3",
    price: 600,
    img: "images/tercerHamburguesa.webp",
    description:
      "Doble hamburguesa + doble queso + bacon + pesto + salsa especial",
  },
  {
    id: 4,
    name: "Promo 4",
    price: 650,
    img: "images/cuartaHamburg.webp",
    description:
      "Doble hamburguesa + doble queso + bacon + cebolla caramelizada + aderezos",
  },
  {
    id: 5,
    name: "Promo 5",
    price: 650,
    img: "images/cuartaHamburg.webp",
    description:
      "Doble hamburguesa + doble queso + bacon + cebolla caramelizada + aderezos",
  },
];
let finalPrice = 0;
let catalogoPadre = document.getElementById("catalogoPadre");
let catalogo = "";
for (const promo of promos) {
  catalogo =
    catalogo +
    `
    <article>
        <h4 class="burguerName">${promo.name}</h4>
        <img class="img-fluid" src="${promo.img}" alt="">
        <p class="productDescription">${promo.description}</p>
        <h3>$${promo.price}</h3>
        <button id="product-${promo.id}" class="css-button-arrow--black button" type="submit">Añadir a pedidos</button>
    </article>
   `;
}
const vart = document.getElementById("catalogoBurguer");
console.log(vart);
vart.innerHTML = catalogo;

const btn = document.getElementsByClassName("button");
for (const boton of btn) {
  boton.onclick = addToCart;
}
function addToCart(i) {
  const boton = i.target;
  const id = boton.id.split("-")[1];
  const promo = promos.find((p) => p.id == id);
  const carTittle = document.getElementById("cartTittle");
  carTittle.style.display = "inline";
  finalPrice = finalPrice + promo.price;

  const ul = document.createElement("ul");
  ul.innerHTML = `<li id="pricePlus"> ${promo.name} ========> $${promo.price} </li>`;
  catalogoPadre.append(ul);
  const totalPrice = document.getElementById("totalPrice");
  totalPrice.innerHTML = "Total: " + finalPrice;
}
const confirmButton = document.getElementById("confirmButton");
// confirmButton.onclick = () => alert("Su pedido fue recibido");
confirmButton.onclick = () => swal("Muchas gracias!!", "Su pedido fue recibido correctamente!", "success");

