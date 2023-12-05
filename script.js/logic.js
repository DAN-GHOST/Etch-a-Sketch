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
            divs2.id = `divs-${i}-divs2-${j}`;
            divCambiante.appendChild(divs2);
        }
    }
}

window.onload = generarDiv();

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

function limpiarTodo(){
    const getTypeColor = document.querySelector('.color');
    getTypeColor.value = '#000000';
    limpiarDiv();
    generarDiv();
}

function rangeSlider(value){
    document.getElementById('rangeValue').innerHTML= `${value}x${value}`;
}

function movimientoDivs(id){
    if(id !== "1"){
        const colorBotton = document.querySelector('.btnUsarColor');
        const divCambiante = document.querySelector("#"+id);
        divCambiante.style.backgroundColor = colorBotton.value;
    }
}

document.querySelector('.btnEnviarValor').addEventListener('click',()=>{
    limpiarDiv();
    const getValue = document.querySelector('.rangeValue');
    let valor = null;
    if( getValue.textContent.length === 5){
        valor = Number(getValue.textContent.substring(0,2));
    }else{
        valor = Number(getValue.textContent.substring(0,3));
    }
    generarDiv(valor);
});

document.querySelector('.btnUsarColor').addEventListener('click', ()=>{
    const getTypeColor = document.querySelector('.color');
    const colorBotton = document.querySelector('.btnUsarColor');
    colorBotton.value = getTypeColor.value;
});

document.querySelector('.contenedor-de-divs').addEventListener('mousemove', (event)=>{movimientoDivs(event.target.id,event)});

document.querySelector('.btnLiampiarDivs').addEventListener('click',()=>{
    limpiarTodo();
});