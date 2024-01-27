import { productos } from "./src/stockProductos";
import funcionesCarrito from "./src/funcionesCarrito"
import carritoFuncion from "./src/carrito"


let stock = document.querySelector("#principal")
const filtro = document.querySelector("#filtroProductos")

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
        if(filtro.value=="MayorMenor"){//CAmbia el orden de los productos
            stock.innerHTML="";
            productos.sort((a, b) => a.precio - b.precio);
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
            funcionesCarrito.numeroCarrito();
            funcionesCarrito.cart
        }else{
            stock.innerHTML="";
            productos.sort((a, b) => b.precio-a.precio);
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
            funcionesCarrito.numeroCarrito();
            funcionesCarrito.cart
        }
    }

}


app();

