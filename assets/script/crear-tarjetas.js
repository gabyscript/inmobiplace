const catalogoProductos = document.querySelector("#product-section");

function crearTarjetas (propiedad) {

    catalogoProductos.innerHTML += `
        <div class = "tarjeta-producto">
            <div class="img-div" style="background-image:url(${propiedad.src});">               
            </div>
            <div class= text-div>        
                <h3 class="product-name">${propiedad.nombre}</h3>
                <h4 class="product-description">${propiedad.descripcion}</h4>
                <h5 class="product-room">Cant. cuartos: ${propiedad.cuartos}</h5>
                <h5 class="product-mt">Mt²: ${propiedad.metros}</h5>
            </div>
        </div>
        `;         
};

for(let propiedad of propiedades) {
    crearTarjetas(propiedad);
}

/*Profesor no pude hacer el ejercicio usando el appendchild, pero estoy buscando
y practicando para poder hacerlo.*/