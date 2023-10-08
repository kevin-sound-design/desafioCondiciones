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














