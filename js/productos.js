const productos = [

    {nombre:"Cheesecake", precio:12000},
    {nombre:"Tiramisú", precio:15000},
    {nombre:"Brownie", precio:8000}

];

const contenedor = document.getElementById("listaProductos");

productos.forEach(p => {

    const div = document.createElement("div");

    div.className = "producto";

    div.innerHTML = `
        <h3>${p.nombre}</h3>
        <p>Precio: $${p.precio}</p>
        <button onclick="agregarCarrito('${p.nombre}')">
        Agregar al carrito
        </button>
    `;

    contenedor.appendChild(div);

});