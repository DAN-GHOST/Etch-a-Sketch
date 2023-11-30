function generarDiv(){
    const divContenedor = document.querySelector('.contenedor-de-divs');
    for(let i = 0; i<16; i++){
        const divs = document.createElement('div');
        divs.className = `divs-${i} divsCambiantesColum`;
        divContenedor.appendChild(divs);
        const divCambiante = document.querySelector(`.divs-${i}`);
        for(let j = 0; j<16; j++){
            const divs2 = document.createElement('div');
            divs2.className = `divs2-${j} Divs2CambiantesRow`;
            divCambiante.appendChild(divs2);
        }
    }
}

window.onload = generarDiv(); // Esto sirve para llamar a la funcion cuando se halla cargado por completo el html, css.