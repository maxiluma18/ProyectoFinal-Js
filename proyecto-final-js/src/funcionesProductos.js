import productosJson from "./productos"
import funcionesCarrito from "./funcionesCarrito"

let stock = document.querySelector("#principal")

const productos = await productosJson.traerProductos();
const productos2 = await productosJson.traerProductos();

const filtros=(filtro)=>{
    if(filtro==="MayorMenor"){
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
    } else if(filtro==="MenorMayor"){
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
    }else{
        productos2.forEach((producto) =>{
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
    }
}

export default{
    filtros
}