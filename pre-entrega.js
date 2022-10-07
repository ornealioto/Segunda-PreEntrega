class Cafeterias{
    constructor(name, coffee, pastry, price, image){
        this.Id = coffeeShop.length + 1;
        this.name = name;
        this.coffee = coffee;
        this.pastry = pastry;
        this.price = price;
        this.image = image;
    }
}

let coffeeShop = [];
coffeeShop.push(new Cafeterias("Baya Negra", "Latte", "Croissant", 1000));
coffeeShop.push(new Cafeterias("Folc", "Flat White", "Ecalir", 750));
coffeeShop.push(new Cafeterias("Weiss", "Capuccino Weiss", "Pain au Chocolat", 700));
coffeeShop.push(new Cafeterias("Sea and Coffee", "Iced Latte", "Scon de Queso", 730));



let titulo = document.getElementById("titulo");
let intro = document.getElementById("intro");
let parrafo = document.getElementById("parrafo");
let lista = document.getElementById("lista");
let parrafo2 = document.getElementById("parrafo2");



titulo.innerHTML = "ORNELATTE";
intro.innerHTML = "Bienvenido a ORNELATTE";
parrafo.innerHTML = "Contamos con la reseña de numerosas cafeterías";
coffeeShop.forEach(item => {
    let li = document.createElement("li");
    li.innerHTML = item.name;
    lista.append(li);
});

parrafo2.innerHTML = `Ingrese el nombre de la cafetería que le gustaría conocer`;



let contenedor = document.getElementById("contenedor");
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    contenedor.innerHTML = "";
    let inputs = e.target.children;

    let producto = coffeeShop.find(item => item.name === inputs[0].value);
    let div = document.createElement("div");
    div.innerHTML = `
    Usted eligio la cafetería ${producto.name}. \n Sus productos mas populares son ${producto.coffee} y ${producto.pastry}. \n El valor aproximado es de $${producto.price}
    `
    contenedor.append(div);
});

let precios = document.getElementById("precios")
precios.innerHTML = "<p>¿Le gustaría ver las cafeterías en orden desde las más económicas hasta las más costosas?</p>";

let botonSi = document.getElementById("si");
let botonNo = document.getElementById("no");

botonSi.addEventListener("mouseup", () => {
    let div = document.createElement("div");
    div.innerHTML = `${JSON.stringify(coffeeShop.sort((a, b) => a.price - b.price))}`
    botonSi.className = "verde";
    precios.append(div);
});

botonNo.addEventListener("mouseup", () => {
    let div = document.createElement("div");
    div.innerHTML = "No hay problema! Cualquier cosa nos consulta."
    botonNo.className = "rojo";
    precios.append(div);
})

let saludo = document.createElement("p");
saludo.innerHTML = "Muchas gracias por tenernos en cuenta! No se olvide de seguirnos en Instagram";
document.body.append(saludo);
instagram();
function instagram() {
    let a = document.createElement("a");
    a.setAttribute("href", "https://www.instagram.com/ornelatte/");
    let aTexto = document.createTextNode("ORNELATTE");
    a.appendChild(aTexto);

    document.body.appendChild(a);
}