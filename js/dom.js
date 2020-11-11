// elementos del document

// console.log(document)
// console.log(document.head)
// console.log(document.body)
// console.log(document.documentElement)
// console.log(document.title)






// NODOS ELEMENTOS SELECTORES

console.log(document.getElementsByTagName("li"))//devolverá una coleccion de elementos de LI
console.log(document.getElementsByClassName("card"))
console.log(document.getElementsByName("menu"))
console.log(document.getElementById("menu"))
console.log(document.querySelector(".card"))//devuelve la primera que tiene la clase card
console.log(document.querySelectorAll(".card"))
console.log(document.querySelectorAll("#menu"))
document.querySelectorAll(".card").forEach(el=>console.log(el));//devolverá el codigo HTML que contengan las clases card