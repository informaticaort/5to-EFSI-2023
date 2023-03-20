

var pa = document.getElementById("parrafo").innerHTML; // si quiero saber cuál es el contenido del tag seleccionado

console.log(pa)


// si le quiero cambiar el contenido al párrafo que ya tenemos con contenido en el html


var pa = document.getElementById("parrafo").innerHTML= "Soy el nuevo contenido";



//////////////Si quiero agregarle hijos a un tag vacío (el div)

document.getElementById("divacio")

var nuevoElemento= document.createElement("h1"); // creo el tag
var contenido= document.createTextNode("soy el contenido del h1 que creo desde js"); // creo el contenido del nuevo div

nuevoElemento.appendChild(contenido); // le doy el contenido al tag creado

document.getElementById("divacio").appendChild(nuevoElemento) // le agrego el tag creado a su padre



/////////////// jugando con inputs

function leoElInput(e){  // función que lee el input cada vez que se modifica
    e.preventDefault();
    console.log(document.getElementById("soyelinput").value)
}


/// función que se desata cuando se le hace click al boton
function funcionoConElBoton(){
    // aca podría validar si el input está vacío
    if(document.getElementById("soyelinput").value==""){
        alert("el input está vacio")
        document.getElementById("soyelinput").style.borderColor="red"
    }
    //muestro el contenido caputurado del input
    console.log(document.getElementById("soyelinput").value)
    
}


