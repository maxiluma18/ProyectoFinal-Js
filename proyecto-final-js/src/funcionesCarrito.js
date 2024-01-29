import carrito from "./carrito";
import Swal from 'sweetalert2'
import Toastify from "toastify-js"
import "toastify-js/src/toastify.css"



const numberCarrito= document.querySelector("#cantProducts")
const ubiCart = document.querySelector("#cart")

const agregarProductos=(producto)=>{
    const memoria=JSON.parse(localStorage.getItem("articulos"))
    if(!memoria){//si no existe crea la memoria
        const nuevoProducto = cantidadDeProducto(producto);
        localStorage.setItem("articulos", JSON.stringify([nuevoProducto]))
        Toastify({
            text: `Se agrego el producto al carrito ${producto.nombre}`,
            position: "left",
            gravity: "top"
        }).showToast();
        
    } else{
        const indiceProducto = memoria.findIndex(articulo => articulo.id === producto.id)
        const nuevaMemoria=memoria;
        if(indiceProducto === -1){
            nuevaMemoria.push(cantidadDeProducto(producto))
            Toastify({
                text: `Se agrego el producto al carrito ${producto.nombre}`,
                position: "left",
                gravity: "top"
            }).showToast();
            
        }else{
            nuevaMemoria[indiceProducto].cantidad ++;
            Toastify({
                text: `Se agrego el producto ${producto.nombre} denuevo`,
                position: "right",
                gravity: "top"
            }).showToast();
        }
        localStorage.setItem("articulos", JSON.stringify(nuevaMemoria))
    }
    numeroCarrito();
}

const cantidadDeProducto=(producto)=>{
    const nuevoProducto=producto;
    nuevoProducto.cantidad=1;
    return nuevoProducto;
}

const eliminarProducto=(producto)=>{
    Swal.fire({
        title: "¿Estas seguro que deseas eliminar el producto del carrito?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si",
        cancelButtonText: "No",
        cancelButtonColor: " #FFC75F",
        confirmButtonColor: "#FF9671",
        timer:4000,
        timerProgressBar:true,
        background:"yellow"
    }).then((respuesta)=>{
        if(respuesta.isConfirmed){
            const memoria=JSON.parse(localStorage.getItem("articulos"))
            const indiceProducto = memoria.findIndex(articulo => articulo.id === producto.id)
            if(memoria[indiceProducto].cantidad < 2){
                memoria.splice(indiceProducto,1)
                localStorage.setItem("articulos", JSON.stringify(memoria))
            }else{
                memoria[indiceProducto].cantidad--;
                localStorage.setItem("articulos", JSON.stringify(memoria))
            }
            carrito.cart();
            numeroCarrito();
            Swal.fire({
                title:"Producto Eliminado",
                icon:"success",
                color:"#FF9671",
                confirmButtonColor: " #FFC75F",
                timer:2000,
                background:"yellow"
            })
        }
    })
    
}

const eliminarTodo =()=>{
    Swal.fire({
        title:"Eliminar todo",
        text:"¿Desea eliminar todos los productos de su carrito?",
        icon:'question',
        showCancelButton: true,
        confirmButtonText: "Si",
        cancelButtonText: "No",
        cancelButtonColor: "#FF9671",
        confirmButtonColor: " #FFC75F",
        timer:4000,
        timerProgressBar:true,
        background:"yellow"
    }).then((resp)=>{
        if (resp.isConfirmed){
            localStorage.removeItem('articulos')                
            ubiCart.style.display="none";
            numeroCarrito();
            Swal.fire({
                title:"Carrito Reiniciado",
                icon:"success",
                color:"#FF9671",
                confirmButtonColor: " #FFC75F",
                timer:2000,
                background:"yellow"
            })
        }
    })
}




const numeroCarrito=()=>{
    const memoria=JSON.parse(localStorage.getItem("articulos"))
    if(memoria && memoria.length>0){
        const total = memoria.reduce((acumulador, elemento)=>acumulador+elemento.cantidad,0);
        numberCarrito.innerText=total;
    }else{
        numberCarrito.innerText=0;
    }

}

const comprarArticulos=()=>{
    Swal.fire({
        title:"Comprar Articulos",
        text:"¿Desea Comprar los artículos del carrito?",
        icon:'question',
        showCancelButton: true,
        confirmButtonText: "Si",
        cancelButtonText: "No",
        cancelButtonColor: "#FF9671",
        confirmButtonColor: " #FFC75F",
        timer:4000,
        timerProgressBar:true,
        background:"yellow"
    }).then((resp)=>{
        if (resp.isConfirmed) {
            localStorage.removeItem('articulos')  
        numeroCarrito();
        ubiCart.style.display="none";
        Swal.fire({
            title:"Compra realizada",
            icon:"success",
            color:"#FF9671",
            confirmButtonColor: " #FFC75F",
            timer:2000,
            background:"yellow"
        })
        }
    })
}




export default{
    comprarArticulos,
    agregarProductos,
    eliminarProducto,
    numeroCarrito,
    eliminarTodo
}