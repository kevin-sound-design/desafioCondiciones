//desafio 2 parte 3 

let buttonIngresar = document.querySelector(".buttonIngresar");
let respuestaPassword = document.querySelector(".respuestaPassword");

function verificaPassword(){

    let primerNumero = document.querySelector(".primerNumero").value;
    let segundoNumero = document.querySelector(".segundoNumero").value;
    let tercerNumero = document.querySelector(".tercerNumero").value;
    let password = primerNumero + segundoNumero + tercerNumero;

    if(password==911){

        respuestaPassword.innerHTML = "Password 1 correcto"

    }

    else if(password==714){

        respuestaPassword.innerHTML = "Password 2 correcto"
    }

    else{

        respuestaPassword.innerHTML = "Password incorrecto"
    }
    
    

}

buttonIngresar.addEventListener("click", verificaPassword);
