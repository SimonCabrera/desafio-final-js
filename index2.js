let promo1 = ["Promo 1", 600];
let promo2 = [{ name: "Promo 2", price: 500 }];
let promo3 = [{ name: "Promo 3", price: 600 }];
let promo4 = [{ name: "Promo 4", price: 650 }];
let promo5 = [{ name: "Promo 5", price: 650 }];
let finalPrice = 0;
const btn1 = document.getElementById("Button1");
const btn2 = document.getElementById("Button2");
const btn3 = document.getElementById("Button3");
const btn4 = document.getElementById("Button4");
const btn5 = document.getElementById("Button5");

const parrafo2 = document.createElement("div");
parrafo2.innerHTML = "<h2> PEDIDO </h2>";
document.body.append(parrafo2);
const div = document.createElement("ul");

btn1.onclick = () => {
  //const div = document.createElement('div')
  div.innerHTML = `<li>${promo1[0]}</li>`;
  document.parrafo2.appendChild(div);
  finalPrice = finalPrice + promo1[1];
};
btn2.onclick = () => {
  //const div = document.createElement('div')
  div.innerHTML = `<li>${promo2[0]}</li>`;
  document.parrafo2.appendChild(div);
  finalPrice = finalPrice + promo2[1];
};
btn3.onclick = (e) => {
  //const div = document.createElement('div')
  div.innerHTML = `<li>${e.name}</li>`;
  parrafo2.appendChild(div);
  finalPrice = finalPrice + promo3[1];
};
btn4.onclick = () => {
  //const div = document.createElement('div')
  div.innerHTML = `<li>${promo4[0]}</li>`;
  parrafo2.appendChild(div);
  finalPrice = finalPrice + promo4[1];
};
btn5.onclick = () => {
  //const div = document.createElement('div')
  div.innerHTML = `<li>${promo5[0]}</li>`;
  parrafo2.appendChild(div);
  finalPrice = finalPrice + promo5[1];
};
