//Desafio 2 parte 1

let imagen = document.querySelector(".desafioParteUno");
let isActive = true;

function cambiaColor(){

    isActive=!isActive;

    if (isActive == false){

        imagen.style.border="solid 2px red";
    }

    else {

        imagen.style.border="none";
 
    }

}

imagen.addEventListener("click", cambiaColor);

//Desafio 2 parte 2

let botonVerificar = document.querySelector("botonVerificar")

function capturarValores(){

    let valorUno = document.getElementById("valorUno").value;
    let valorDos = document.getElementById("valorDos").value;
    let valorTres = document.getElementById("valorTres").value;

    console.log(valorUno+valorDos+valorTres);
   
}

botonVerificar.addEventListener("click", capturarValores);







