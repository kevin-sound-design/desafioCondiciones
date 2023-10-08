//Desafio 2 parte 2

let botonVerificar = document.querySelector(".botonVerificar");
let cantidadStickers = document.querySelector(".cantidadStickers");


function capturarValores(){

    let valorUno = document.getElementById("valorUno").value;
    let valorDos = document.getElementById("valorDos").value;
    let valorTres = document.getElementById("valorTres").value;
    
    if(!valorUno){

        valorUno = 0

    }

    if(!valorDos){

        valorDos = 0

    }

    if(!valorTres){

        valorTres = 0

    }

    let totalStickers = parseInt(valorUno) + parseInt(valorDos) + parseInt(valorTres);

    if(totalStickers<=10){
        cantidadStickers.innerHTML = "Llevas " + totalStickers + " stickers";
    }

    else{

        cantidadStickers.innerHTML = "Llevas demasiados stickers";
    }

}

/* function handleValue(e){

    let value =e.target.value;
    if (value > 10){

        e.target.value=10;
    }

    else if (value <0){

        e.target.value=0;
    }  
    
}

document.getElementById("valorUno").addEventListener("change", handleValue)
 */
botonVerificar.addEventListener("click", capturarValores);
