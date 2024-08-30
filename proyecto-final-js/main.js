// main.js
import funcionesCarrito from "./src/funcionesCarrito.js"
import funcionesProductos from "./src/funcionesProductos.js"
let stock = document.querySelector("#principal")
const filtro = document.querySelector("#filtroProductos")
let input = document.querySelector("#searchInput")
import traerProductos from "./src/productos.js"

const app = async () => {
    const productos = await traerProductos.traerProductos();
    // Renderiza los productos
    productos.forEach((producto) => {
        let card = document.createElement("div")
        card.className = "card"
        card.innerHTML = `
      <h3>${producto.nombre}</h3>
      <p>$${producto.precio}</p>
    `
        stock.appendChild(card)

        let boton = document.createElement("button")
        boton.innerText = "Añadir al carrito"
        boton.className = "boton"

        card.appendChild(boton)

        boton.addEventListener("click", () => funcionesCarrito.agregarProductos(producto))
    })
    funcionesCarrito.numeroCarrito();//Numero del carrito
    funcionesCarrito.cart//Carrito 

    filtro.onchange = () => {
        //CAmbia el orden de los productos dependiendo el valor del filtro
        stock.innerHTML = "";
        funcionesProductos.filtros(filtro.value)
        funcionesCarrito.numeroCarrito();
        funcionesCarrito.cart
    }

    input.oninput = () => {
        stock.innerHTML = "";
        funcionesProductos.busqueda(input.value)
        funcionesCarrito.numeroCarrito();
        funcionesCarrito.cart
    }
}

app();
