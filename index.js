let burguer1 = 600;
let burguer2 = 500;
let burguer3 = 600;
let burguer4 = 650;
let burguer5 = 650;
const friesAndSoda = 400;
let finalPrice = 0;
let bigCombo = 0;
const finalOrder = [];
let addToOrder = "si";

let orden1 = prompt("quiere hacer un pedido?");

const createOrder = function () {
  while (orden1 != "no") {
    let order = prompt("que promo quiere?");
    if (finalOrder.length > 0) finalOrder.push("\n");

    switch (order) {
      case "promo 1":
        finalPrice = finalPrice + burguer1;
        finalOrder.push("promo 1");
        break;
      case "promo 2":
        finalPrice = finalPrice + burguer2;
        finalOrder.push("promo 2");
        break;
      case "promo 3":
        finalPrice = finalPrice + burguer3;
        finalOrder.push("promo 3");
        break;
      case "promo 4":
        finalPrice = finalPrice + burguer4;
        finalOrder.push("promo 4");
        break;
      case "promo 5":
        finalPrice = finalPrice + burguer5;
        finalOrder.push("promo 5");
        break;
      default:
        break;
    }
    console.log(finalPrice);

    bigCombo = prompt("quiere papas y gaseosa?");
    if (bigCombo === "si") {
      finalPrice = finalPrice + friesAndSoda;
      finalOrder[finalOrder.length - 1] += " con papas y gaseosa";
      console.log(finalPrice);
    }

    orden1 = prompt("Desea pedir algo mas??");
  }
  console.log(finalPrice);
  addToOrder = prompt(
    "Su pedido es:\n" + finalOrder + "\nDesea seguir ordenando?",
    "no"
  );
};

while (addToOrder === "si") {
  console.log("addToOrder?", addToOrder);
  orden1 = "si";
  createOrder();
}

alert(`Su pedido es:\n ${finalOrder}. \nEl costo total es $${finalPrice}`);
