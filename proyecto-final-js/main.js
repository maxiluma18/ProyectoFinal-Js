import productosJson from "./src/productos"
import funcionesCarrito from "./src/funcionesCarrito"
import funcionesProductos from "./src/funcionesProductos"

let stock = document.querySelector("#principal")
const filtro = document.querySelector("#filtroProductos")

const productos = await productosJson.traerProductos();


const app = ()=>{
    //Cards iniciales
    productos.forEach((producto) =>{
        let card=document.createElement("div")
        card.className="card"
        card.innerHTML= `
            <img src="${producto.img}" alt="">
            <h3>${producto.nombre}</h3>
            <p>$${producto.precio}</p>
        `
        stock.appendChild(card)
    
        let boton=document.createElement("button")
        boton.innerText="Añadir al carrito"
        boton.className="boton"
    
        card.appendChild(boton)
    
        boton.addEventListener("click", ()=> funcionesCarrito.agregarProductos(producto))
    })
    funcionesCarrito.numeroCarrito();//Numero del carrito
    funcionesCarrito.cart//Carrito 


    filtro.onchange=()=>{
        //CAmbia el orden de los productos dependiendo el valor del filtro
            stock.innerHTML="";
            funcionesProductos.filtros(filtro.value)
            funcionesCarrito.numeroCarrito();
            funcionesCarrito.cart
    }

}


app();

