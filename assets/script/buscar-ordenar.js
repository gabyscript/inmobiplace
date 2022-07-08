let inputCuartos = document.querySelector('#room-input');
let inputDesdeMts = document.querySelector('#mts-a-input');
let inputHastaMts = document.querySelector('#mts-b-input');
let tarjetasProducto = document.querySelector('.tarjetas-producto');
const buscarBoton = document.querySelector('#buscar-button');

function buscarProductos () {
    if (inputCuartos.value == '' || inputDesdeMts.value == '' || inputHastaMts.value == '') {
        alert("Introduzca valores para realizar la búsqueda");
        return;                
    } else {
        catalogoProductos.innerHTML = "";         
    }   

    for (let propiedad of propiedades) {
        if ((inputCuartos.value <= propiedad.cuartos) && (inputDesdeMts.value < propiedad.metros) && (inputHastaMts.value > propiedad.metros)) {
            console.log(propiedad);
            crearTarjetas(propiedad);
        }
    }   
}

buscarBoton.addEventListener('click',function(){
    buscarProductos();   
})

const ordenCuartos = document.querySelector('#orden-cuartos');
const ordenMts = document.querySelector('#orden-mts');

function ordenarCuartos() {
    catalogoProductos.innerHTML = '';

    propiedades.sort((a,b) => {
        if (a.cuartos < b.cuartos){
            return -1;
        }
        if (a.cuartos > b.cuartos) {
            return 1;
        }
        return 0;               
    })  

    for(let propiedad of propiedades) {
        crearTarjetas(propiedad); 
    }   
    
}

function ordenarMts() {
    catalogoProductos.innerHTML = '';

    propiedades.sort((a,b) => {
        if (a.metros < b.metros){
            return -1;
        }
        if (a.metros > b.metros) {
            return 1;
        }
        return 0;               
    })  
     
    for(let propiedad of propiedades) {
        crearTarjetas(propiedad); 
    }   
}

ordenCuartos.addEventListener('click', function(){
    ordenarCuartos();
});

ordenMts.addEventListener('click', function(){
    ordenarMts();
});




