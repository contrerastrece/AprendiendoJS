// elementos del document

// console.log(document)
// console.log(document.head)
// console.log(document.body)
// console.log(document.documentElement)
// console.log(document.title)






// NODOS ELEMENTOS SELECTORES

// console.log(document.getElementsByTagName("li"))//devolverá una coleccion de elementos de LI
// console.log(document.getElementsByClassName("card"))
// console.log(document.getElementsByName("menu"))
// console.log(document.getElementById("menu"))
// console.log(document.querySelector(".card"))//devuelve la primera que tiene la clase card
// console.log(document.querySelectorAll(".card"))
// console.log(document.querySelectorAll("#menu"))
// document.querySelectorAll(".card").forEach(el=>console.log(el));//devolverá el codigo HTML que contengan las clases card







//ATRIBUTOS
console.log(document.documentElement.lang)
console.log(document.documentElement.getAttribute("lang"))
console.log(document.querySelector(".link-dom").href)//http://127.0.0.1:5500/DOM.html
console.log(document.querySelector(".link-dom").getAttribute("href"))//DOM.html
//cambiar de idioma al documento HTML
document.documentElement.lang="es";
console.log(document.documentElement.lang)
document.documentElement.setAttribute("lang","es-MX");
console.log(document.documentElement.lang);

const $linkDom=document.querySelector(".link-dom");
$linkDom.setAttribute("target","_blank")//abrirá en una pestaña nueva

//para mejorar la seguridad de tu sitio web es buena práctica
//utilizar los atribuutos rel="noopener" y rel="noreferrer"
$linkDom.setAttribute("rel","noopener");//evita pasar informacion del remitente a la nueva pestaña

$linkDom.setAttribute("href","https://youtube.com");//redireccionar a un enlace 

//eliminar atributos
console.log($linkDom.hasAttribute("rel"))//true
$linkDom.removeAttribute("rel")//eliminar el atributo rel
console.log($linkDom.hasAttribute("rel"))//false-- ya se eliminó el atributo

//Data-Attributes
console.log($linkDom.getAttribute("data-description"));
console.log($linkDom.dataset);//retornará un mapa
console.log($linkDom.dataset.description)//retornará el nombre que se le dio al atribbuto "description"

//cambiar la description del data-description
$linkDom.setAttribute("data-description","Model del Objeto del DOcumento");
console.log($linkDom.dataset.description);
$linkDom.dataset.description="Hola, estoy cambiando de description"
console.log($linkDom.dataset.description)
//cambiar el data-id
$linkDom.dataset.id="20";
console.log($linkDom.dataset.id);
//eliminar el data-id
console.log($linkDom.removeAttribute("data-id"))
console.log($linkDom.hasAttribute("data-id"))
