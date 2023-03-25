// ============== variables en ES6 (let y var) =================

var comun=0 /// var es una variable global si esta fuera de una funcion
let local=0 // let es una variable local si esta fuera de una funcion

function prueba(){
    var comun=1 // var es una variable local si esta dentro de una funcion
    let local=1 // let es una variable local si esta dentro de una funcion o bloque de codigo
    console.log(comun) // 1
    console.log(local) // 1
}   

prueba()

console.log(comun) // 0
console.log(local) // 0

if(true){
    comun=3
    local=3
    console.log(comun) // 3
    console.log(local) // 3
}

console.log(comun) // 3
console.log(local) // 0


///////////////////////////

// ============= Funciones en ES6 ===================

//funciones con parametros
function suma(a,b){   //funcion normal
    return a+b
}
console.log(suma(1,2))

let sumar=(a,b)=>{  //funcion flecha
    return a+b  
}

console.log(sumar(1,2))

// funciones sin parametros
function saludo(){   //funcion normal
    return "hola"
}

console.log(saludo())

//funcion flecha sin parametros

let saludar=()=>{   //funcion flecha
    return "hola"
}            //si solo hay un parametro se pueden quitar los parentesis y si solo hay una linea de codigo se pueden quitar las llaves y el return

console.log(saludar())


// ============== Literal String en ES6 =================

let nombre="Juan"
let apellido="Perez"

console.log("Hola "+nombre+" "+apellido) // Hola Juan Perez

console.log(`Hola ${nombre} ${apellido}`) // Hola Juan Perez

// ============== Defaul Parameters en ES6 =================

function saludar(nombre="Juan",apellido="Perez"){
    return `Hola ${nombre} ${apellido}`
}   //si no se le pasa ningun parametro a la funcion se le asigna el valor por defecto

console.log(saludar()) // Hola Juan Perez

// default parameter con arrow function

let saludar=(nombre="Juan",apellido="Perez")=>`Hola ${nombre} ${apellido}`

console.log(saludar()) // Hola Juan Perez

//================= Destrucuring de objetos en ES6 =================

let persona={
    nombre:"Juan",
    apellido:"Perez",
    edad:20,
    direccion:{
        pais:"Argentina",
        ciudad:"Buenos Aires",
        edificio:{
            nombre:"Edificio Principal",
            telefono:"123456789"
        }
    }
}

//forma tradicional de acceder a los valores de un objeto

console.log(persona.nombre) // Juan
console.log(persona.apellido) // Perez
console.log(persona.edad) // 20
console.log(persona.direccion.pais) // Argentina
console.log(persona.direccion.ciudad) // Buenos Aires
console.log(persona.direccion.edificio.nombre) // Edificio Principal
console.log(persona.direccion.edificio.telefono) // 123456789

//forma de acceder a los valores de un objeto con destructuring

let {nombre,apellido,edad,direccion:{pais,ciudad,edificio:{nombre,telefono}}} = persona  //se puede desestructurar un objeto dentro de otro objeto

console.log(nombre) // Juan 
console.log(apellido) // Perez
console.log(edad) // 20
console.log(pais) // Argentina
console.log(ciudad) // Buenos Aires
console.log(nombre) // Edificio Principal
console.log(telefono) // 123456789

//================= Destrucuring de arreglos en ES6 =================

let numeros=[1,2,3,4,5,6,7,8,9,10]

let [uno,dos,tres,cuatro,cinco,seis,siete,ocho,nueve,diez]=numeros

console.log(uno) // 1
console.log(dos) // 2
console.log(tres) // 3

// ===================== Intercambio de valores en ES6 ====================

let a=1
let b=2

console.log(a) // 1
console.log(b) // 2

let aux=a
a=b
b=aux

console.log(a) // 2
console.log(b) // 1

// forma de intercambiar valores en ES6

let a=1
let b=2

console.log(a) // 1
console.log(b) // 2

[a,b]=[b,a]

console.log(a) // 2
console.log(b) // 1


