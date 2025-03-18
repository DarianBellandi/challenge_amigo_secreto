// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let arrayAmigos = [];

function agregarAmigo(){
    let inputNombre = document.getElementById("amigo");
    let nombre = inputNombre.value;
    //Se valida que el input no esté vacío
    if(nombre == ""){
        alert("El campo de ingreso no puede estar vacío, ingrese nombre");
        return
    }
    
    arrayAmigos.push(nombre);
    inputNombre.value = "";
    renderizarAmigos()
};

function renderizarAmigos(){
    let listaAmigosHTML = document.getElementById("listaAmigos");
    listaAmigosHTML.innerHTML = "";

    for(let i = 0; i < arrayAmigos.length; i++){
        let item = document.createElement("li");
        item.textContent = arrayAmigos[i];
        listaAmigosHTML.appendChild(item)
    }
}

function sortearAmigo(){
    if(arrayAmigos.length == 0){
        alert("No hay amigos para sortear")
        return
    }
    let amigoSorteado = arrayAmigos[Math.floor(Math.random() * arrayAmigos.length)]
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
    arrayAmigos = []

};

