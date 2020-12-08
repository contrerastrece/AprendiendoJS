import { countDown } from "./countDown.js";
import  {hamburgerMenu}  from "./hamburger.js";
import { modeDark } from "./modeDark.js";
import { reloj, alarma } from "./reloj.js";
import { moveKeys, shortCuts} from "./shortcuts.js";
import { toUp } from "./toUp.js";

document.addEventListener("DOMContentLoaded",e=>{
    hamburgerMenu(".menu-btn",".panel-item",".li .a");
    reloj("#hora","#iniciar_r","#detener_r");
    alarma("#iniciar_a","#detener_a");
    countDown("#days","#hours","#minutes","#seconds","#fest");
    modeDark(e,"#btnMode");

})

document.addEventListener("keydown",e=>{
    moveKeys(e,".circle",".container-board");
    shortCuts(e);
})

document.addEventListener("scroll",e=>{
    toUp(e,"#btnUp")
})



const $template=document.getElementById("templateList").content;
const $fragment=document.createDocumentFragment();
// const $btnHamburger=document.querySelector(".menu-btn")

const $div=document.createElement("DIV");
const $ul=document.createElement("UL");
$ul.classList.add("ul");
$div.classList.add("panel-item");

// const hasClass = $div.classList.contains("panel-item");
// $btnHamburger.addEventListener('click', (e) => {
//   if(hasClass ) {
//     $div.classList.toggle("show");
//   } 
// });

// document.addEventListener("click",e=>{

//     if(e.target.matches("a")){
//         $div.classList.remove("show");
//         $btnHamburger.classList.remove("open")
//     } 
// })

//lista de Menu
const listSeccion=[
    {
        name:"Reloj Digital y Alarma sonora",
        link:"#1"
    },
    {
        name:"Evento de Teclado",
        link:"#2"
    },
    {
        name:"CountDown",
        link:"#3"
    },
    {
        name:"4ta Generación",
        link:"#4"
    },
    {
        name:"5ta Generación",
        link:"#5"
    },
    {
        name:"6ta Generación",
        link:"#6"
    },
    {
        name:"7ma Generación",
        link:"#7"
    },
    {
        name:"8va Generación",
        link:"#8"
    }
]

//imprimir mi lista de Menu
listSeccion.forEach(contenido=>{
    $template.querySelector("li").classList.add("li");
    $template.querySelector("a").classList.add("a");
    $template.querySelector("a").textContent=contenido.name;    
    $template.querySelector("a").setAttribute("href",contenido.link);
    

    //el template es único, por eso clonaremos el nodo para cada elemento
    let $clone=document.importNode($template,true);//true->copiara toda la estructra, False->solo copiara la etiqueta template de apertura y de cierre

    $fragment.appendChild($clone)

} );

$ul.appendChild($fragment);
$div.appendChild($ul);
document.querySelector(".menu").appendChild($div);
