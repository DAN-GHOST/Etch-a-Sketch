function generarDiv(tamanioMatriz = 16){
    const divContenedor = document.querySelector('.contenedor-de-divs');
    for(let i = 0; i<tamanioMatriz; i++){
        const divs = document.createElement('div');
        divs.className = `divs-${i} divsCambiantesColum`;
        divContenedor.appendChild(divs);
        const divCambiante = document.querySelector(`.divs-${i}`);
        for(let j = 0; j<tamanioMatriz; j++){
            const divs2 = document.createElement('div');
            divs2.className = `divs2-${j} Divs2CambiantesRow`;
            divCambiante.appendChild(divs2);
        }
    }
}

function limpiarDiv(){
    let evaluar = false,
    i = 0;
    while(evaluar === false){
        const divCambiante = document.querySelector(`.divs-${i}`);
        if(divCambiante === null){
            evaluar = true;
        }else{
            ++i;
            divCambiante.remove();
        }
    }
}

function rangeSlider(value){
    document.getElementById('rangeValue').innerHTML= `${value}x${value}`;
}

const getValue = document.querySelector('.rangeValue');
const btnValorBoton = document.querySelector('.btnEnviarValor');
btnValorBoton.addEventListener('click',()=>{
    limpiarDiv();
    let valor = null;
    if( getValue.textContent.length === 5){
        valor = Number(getValue.textContent.substring(0,2));
    }else{
        valor = Number(getValue.textContent.substring(0,3));
    }
    generarDiv(valor);
});

window.onload = generarDiv(); // Esto sirve para llamar a la funcion cuando se halla cargado por primera vez el html, css.