import funcionesCarrito from "./funcionesCarrito"

const carrito = document.querySelector("#imgCarrito")
const ubiCart = document.querySelector("#cart")




const cart=()=>{
    const memoria=JSON.parse(localStorage.getItem("articulos"))
    if(memoria && memoria.length>0){
        ubiCart.style.display="flex"
        ubiCart.innerHTML=""
        const header = document.createElement("div")
        header.className="headerCarrito"
        header.innerHTML=`
        <h1 class="h1HeaderCarrito">Carrito</h1>
        `
        ubiCart.append(header)

        const headerX=document.createElement("p")
        headerX.innerText="X"
        headerX.className="headerX"
        header.append(headerX)
        //Cerrar el Carrito al pulsar en X
        headerX.addEventListener("click",()=>{
            ubiCart.style.display="none";
        })


        const memoria=JSON.parse(localStorage.getItem("articulos"))
        memoria.forEach((producto) => {
            let contenidoCarrito = document.createElement("div")
            contenidoCarrito.className="contenidoCarrito"
            contenidoCarrito.innerHTML=`
            <img src="${producto.img}" alt="...">
            <h3 class="h3Carrito">${producto.nombre}</h3>
            <p class="h3Carrito">$${producto.precio}</p>
            <p class="cantidad" >Unidades:${producto.cantidad}</p>
            <p class="h3Carrito">Total individual:$${producto.precio*producto.cantidad}</p>
            <p class="eliminarProducto" >Eliminar Producto</p>
            `
            ubiCart.appendChild(contenidoCarrito);
            const eliminar = contenidoCarrito.querySelector(".eliminarProducto");
            eliminar.addEventListener("click", () => funcionesCarrito.eliminarProducto(producto));

            
        });
        
        let total= memoria.reduce((acumulador,producto)=>acumulador+producto.cantidad*producto.precio,0)
        const headerFooter=document.createElement("div");
        headerFooter.className="headerFooter"
        headerFooter.innerHTML=`
            <p>Total a Pagar: <span class="total" >$${total}</span></p>
            <div id="footer" > 
                <button class="botonComprar">Comprar</button>
                <button class="botonReinicio">Reiniciar Carrito</button>
            </div>
        `
        ubiCart.append(headerFooter)
        const comprar=document.querySelector(".botonComprar")
        comprar.addEventListener("click",funcionesCarrito.comprarArticulos)


        
        const reinicio=document.querySelector(".botonReinicio")
        reinicio.addEventListener('click',funcionesCarrito.eliminarTodo)
    }else{
        ubiCart.style.display="none";
    }
}

carrito.addEventListener("click", cart)

export default{
    cart
}