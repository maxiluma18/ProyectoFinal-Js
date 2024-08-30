import traerProductos from './productos.js';
import funcionesCarrito from "./funcionesCarrito.js"

let stock = document.querySelector("#principal")


const productos = await traerProductos.traerProductos();
const productos2 = await traerProductos.traerProductos();
const productoBusqueda = await traerProductos.traerProductos();

const filtros = (filtro) => {
    if (filtro === "MayorMenor") {
        productos.sort((a, b) => a.precio - b.precio);
        productos.forEach((producto) => {
            let card = document.createElement("div")
            card.className = "card"
            card.innerHTML = `
                    <img src="${producto.img}" alt="">
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
    } else if (filtro === "MenorMayor") {
        productos.sort((a, b) => b.precio - a.precio);
        productos.forEach((producto) => {
            let card = document.createElement("div")
            card.className = "card"
            card.innerHTML = `
                    <img src="${producto.img}" alt="">
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
    } else {
        productos2.forEach((producto) => {
            let card = document.createElement("div")
            card.className = "card"
            card.innerHTML = `
                <img src="${producto.img}" alt="">
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
    }
}

const busqueda = (palabra) => {
    let nuevo = productoBusqueda.filter((producto) => producto.nombre.toLowerCase().startsWith(palabra.toLowerCase()));
    if (palabra == "") {
        filtros("Todos")
    } else if (nuevo.length >= 1) {
        nuevo.forEach((producto) => {
            let card = document.createElement("div")
            card.className = "card"
            card.innerHTML = `
                <img src="${producto.img}" alt="">
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
    } else {
        let card = document.createElement("div")
        card.className = "noResultado"
        card.innerHTML = `No se encontraron resultados con "${palabra}"`
        stock.appendChild(card)
    }
}

export default {
    filtros,
    busqueda
}