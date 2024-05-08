const contenedorTarjetas = document.getElementById("productos-container");

function crearTartejasProductosInicio(producto){
    producto.forEach(producto => {
        const   nuevaPlanta = document.createElement("div");
        nuevaPlanta.innerHTML =`
        <img src="./img/planta/${planta.id}.png">
        `
        contenedorTarjetas.appendChild(nuevaPlanta); 
    });
}
crearTartejasProductosInicio(planta);