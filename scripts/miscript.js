// console.log("Mi primer script")
// num = prompt("Dame un numero")
// datoBooleano = confirm("Si o no?")

//document.write("Hola")

// let nombre = "Manu"
// console.log("Hola " + nombre)
// console.log(`Hola ${nombre}`) // Con Templates String, más recomendado


// const manuel = {
//     nombre:"Manuel",
//     email:"a21manuelsg@iessanclemente.net"
// }

// console.log(manuel)

// manuel.nombre="Jose Manuel" // Aunque "manuel" sea una constante, al no ser un tipo primitivo de datos, se le puede reasignar su valor

// console.log(manuel) 

// const PI = 3.1415
// PI = 3.15 // Esto ya no se puede hacer


// let x = 5.0
// let y = Number(-5) // Esto ya no se usa, es otra forma de declarar la variable

// let z = "7"
// console.log(x+z) // Devolverá: 57

// console.log(typeof z) // Para checkear el tipo de dato


// // Definición de objetos
// let manuel = {
//     nombre:"Manuel",
//     email:"a21manuelsg@iessanclemente.net",
//     edad:30,
//     saludar: function(){
//         console.log(`Hola, me llamo ${this.nombre}`)
//     }
// }

// manuel.saludar()


// Función declarada
// function doble(x=2){ // Igualando a 2, le estamos dando un valor por defecto, en caso de no pasarle parámetros
//     return 2*x
// }

// console.log(doble(4))
// console.log(doble())


// // Función expresada
// const doble2=(x)=>{
//     return 2*x
// }



// ARRAYS

// let manuel = {
//     nombre:"Manuel",
//     email:"a21manuelsg@iessanclemente.net",
//     edad:30,
//     saludar: function(){
//         console.log(`Hola, me llamo ${this.nombre}`)
//     }
// }

// console.log(manuel["nombre"])
// const claves=Object.keys(manuel)


// const numero = [1,2,3]
// const [uno,dos,tres] = numeros // Crea 3 variables, las cuales van a tener el valor correspondiente


// let x = 5
// console.log(x++) // Primero lo muestra y luego lo incrementa
// x = 5 // Le volvemos a asignar el 5 porque lo incrementamos en la línea anterior
// console.log(++x) // Primero lo incrementa y luego lo muestra


// Comparadores == y ===
console.log(5=="5") // Devuelve true, porque los valores son iguales
console.log(5==="5") // Devuelve false, porque los tipos son diferentes