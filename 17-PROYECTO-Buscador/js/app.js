//VAriables
const marca = document.querySelector('#marca')
const year = document.querySelector('#year')
const minimo = document.querySelector('#minimo')
const maximo = document.querySelector('#maximo')
const puertas = document.querySelector('#puertas')
const transmision = document.querySelector('#transmision')
const color = document.querySelector('#color')

//contenedeor para los resultados
const resultado = document.querySelector('#resultado')

//crear los años
const years = document.createElement('option');
const max = new Date().getFullYear()
const min = max - 10

//generar un objetos con datos de la busqueda
const datosBusqueda = {
    marca: '',
    year: '',
    marca: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}


//EventListeners
document.addEventListener('DOMContentLoaded', ()=>{
    mostrarAutos(autos)
    llenarSelect()
})

//EventListener para los select de búsqueda
marca.addEventListener('input', e=>{
   datosBusqueda.marca = e.target.value
   filtrarAuto()
   console.log(datosBusqueda.marca)
})
year.addEventListener('input', e=>{
    datosBusqueda.year = parseInt(e.target.value)
    filtrarAuto()
 })
 minimo.addEventListener('input', e=>{
    datosBusqueda.minimo = e.target.value
    filtrarAuto()
 })
 maximo.addEventListener('input', e=>{
     datosBusqueda.maximo = e.target.value
     filtrarAuto()
  })
  puertas.addEventListener('input', e=>{
    datosBusqueda.puertas = parseInt(e.target.value)
    filtrarAuto()
 })
 transmision.addEventListener('input', e=>{
     datosBusqueda.transmision = e.target.value
     filtrarAuto()

     
  })
  color.addEventListener('input', e=>{
     datosBusqueda.color = e.target.value
     console.log(datosBusqueda)
     filtrarAuto()

  })


//Funciones 
function mostrarAutos(autos){

    limpiarHTML() //elimina el HTML previo
    autos.forEach(autito => {
        const {marca, modelo, year, puertas, precio, color, transmision} = autito;
        const autoHTML = document.createElement('p');
        
    autoHTML.textContent =
    `${marca} ${modelo} -${year} - USD$${precio} - ${puertas} Puertas- Transmisión: ${transmision} - Color: ${color}`
    ;   
    
})
}



function limpiarHTML(){
    while(resultado.firstChild){
        resultado.remove(resultado.firstChild)
    }
}


function llenarSelect(){
    for(let i=max; i >= min; i--){
       const opcion = document.createElement('option')
       opcion.value = i
       opcion.textContent = i
       document.querySelector('#year').appendChild(opcion);
    }
}


function filtrarAuto(){
    const resultado = autos.filter(filtrarMarca)//.filter(filtrarYear).filter(filtrarMinimo)
    //.filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor)
   

    if(resultado.length){
        console.log(resultado)
        mostrarAutos(resultado)    }
        else{
        noResultado()
    }

    function noResultado(){
        limpiarHTML()
        const noHayResultado = document.createElement('div')
        noHayResultado.classList.add('alerta', 'error')
        noHayResultado.textContent = 'pues no hay resultado'
        resultado.appendChild(noHayResultado)
    }

}
function filtrarMarca(autito){
    const {marca} = datosBusqueda
    if(marca){
        return autito.marca ===marca
    }else{
        return autito
    }
}

function filtrarYear(autito){
    const {year} = datosBusqueda
    console.log(year)
    if(year){
        return autito.year ===year
    }else{
        return autito
    }
}
function filtrarMinimo(autito){
    const {minimo} = datosBusqueda
    if(minimo){
        return autito.precio >= minimo
    }else{
        return autito
    }
}


function filtrarMaximo(autito){
    const {maximo} = datosBusqueda
    if(maximo){
        return autito.precio <= maximo
    }else{
        return autito
    }
}

function filtrarPuertas(autito){
    const {puertas} = datosBusqueda
    if(puertas){
        return autito.puertas === puertas
    }else{
        return autito
    }
}

function filtrarTransmision(autito){
    const {transmision} = datosBusqueda
    if(transmision){
        return autito.transmision === transmision
    }else{
        return autito
    }
}

function filtrarColor(autito){
    const {color} = datosBusqueda
    if(color){
        return autito.color === color
    }else{
        return autito
    }
}

