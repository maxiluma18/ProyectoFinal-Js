

const traerProductos = async () => {
    try {
        const respuesta = await fetch("public/data/productos.json")
        const data = await respuesta.json()
        return data;
    }
    catch (error) {
        console.log('Error al cargar los productos')
        alert("Error al cargar los productos")
    }
}

export default {
    traerProductos
};

