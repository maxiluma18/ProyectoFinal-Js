import carrito from "./carrito.js";




const numberCarrito = document.querySelector("#cantProducts")
const ubiCart = document.querySelector("#cart")

const agregarProductos = (producto) => {
    const memoria = JSON.parse(localStorage.getItem("articulos"))
    if (!memoria) {//si no existe crea la memoria
        const nuevoProducto = cantidadDeProducto(producto);
        localStorage.setItem("articulos", JSON.stringify([nuevoProducto]))


    } else {
        const indiceProducto = memoria.findIndex(articulo => articulo.id === producto.id)
        const nuevaMemoria = memoria;
        if (indiceProducto === -1) {
            nuevaMemoria.push(cantidadDeProducto(producto))


        } else {
            nuevaMemoria[indiceProducto].cantidad++;

        }
        localStorage.setItem("articulos", JSON.stringify(nuevaMemoria))
    }
    numeroCarrito();
}

const cantidadDeProducto = (producto) => {
    const nuevoProducto = producto;
    nuevoProducto.cantidad = 1;
    return nuevoProducto;
}

const eliminarProducto = (producto) => {

    const memoria = JSON.parse(localStorage.getItem("articulos"))
    const indiceProducto = memoria.findIndex(articulo => articulo.id === producto.id)
    if (memoria[indiceProducto].cantidad < 2) {
        memoria.splice(indiceProducto, 1)
        localStorage.setItem("articulos", JSON.stringify(memoria))
    } else {
        memoria[indiceProducto].cantidad--;
        localStorage.setItem("articulos", JSON.stringify(memoria))
    }
    carrito.cart();
    numeroCarrito();

}



const eliminarTodo = () => {

    localStorage.removeItem('articulos')
    ubiCart.style.display = "none";
    numeroCarrito();



}




const numeroCarrito = () => {
    const memoria = JSON.parse(localStorage.getItem("articulos"))
    if (memoria && memoria.length > 0) {
        const total = memoria.reduce((acumulador, elemento) => acumulador + elemento.cantidad, 0);
        numberCarrito.innerText = total;
    } else {
        numberCarrito.innerText = 0;
    }

}

const comprarArticulos = () => {

    localStorage.removeItem('articulos')
    numeroCarrito();
    ubiCart.style.display = "none";



}




export default {
    comprarArticulos,
    agregarProductos,
    eliminarProducto,
    numeroCarrito,
    eliminarTodo
}