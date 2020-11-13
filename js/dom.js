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
/*console.log(document.documentElement.lang)
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
*/






//DOM:ESTILOS Y VARIABLES CSS
const $linkDom=document.querySelector(".link-dom");

console.log($linkDom.style)
console.log($linkDom.getAttribute("style"))
console.log($linkDom.style.background);//accediendo el color del fondo
console.log($linkDom.style.color);//accediendo el color del texto
console.log(window.getComputedStyle($linkDom))//devuelve los valores por defecto que le da el navegador a la etiqueta
console.log(window.getComputedStyle($linkDom).getPropertyValue("background-color"))//acceder a una propiedad en específico

//dar estilo a la etiqueta
$linkDom.style.setProperty("text-decoration","none");
$linkDom.style.setProperty("display","block");
$linkDom.style.width="50%";
$linkDom.style.textAlign="center";
$linkDom.style.margin="auto";
$linkDom.style.padding=".5rem";
$linkDom.style.borderRadius="0.3rem"
$linkDom.style.fontFamily="verdana";
$linkDom.style.fontWeight="700";


//variables CSS
const $html=document.documentElement;
const $body=document.body;

let varBodyColor=getComputedStyle($html).getPropertyValue("--primary-color");
let varTextColor=getComputedStyle($body).getPropertyValue("--text-color");

$body.style.backgroundColor=varBodyColor;
$body.style.color=varTextColor;
console.log(varBodyColor)

//cambiar el color del --primary-color
$html.style.setProperty("--primary-color","#222");
varBodyColor=getComputedStyle($html).getPropertyValue("--primary-color");
console.log(varBodyColor)
$body.style.setProperty("background-color",varBodyColor)

