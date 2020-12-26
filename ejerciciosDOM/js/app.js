import { countDown } from "./countDown.js";
import { detectarCamara } from "./detectarCamara.js";
import { deteccion_Conexion } from "./detectarConexion.js";
import { geolocalizacion } from "./geolocalizacion.js";
import  {hamburgerMenu}  from "./hamburger.js";
import {responsiveMedia } from "./matchMedia.js";
import { modeDark } from "./modeDark.js";
import { reloj, alarma } from "./reloj.js";
import { responsiveTester } from "./responsiveTester.js";
import { search } from "./search.js";
import { moveKeys, shortCuts} from "./shortcuts.js";
import { sortear } from "./sorteo.js";
import { toUp } from "./toUp.js";
import { userDevice } from "./userAgent.js";
import {carousel} from "./sliders.js"

document.addEventListener("DOMContentLoaded",e=>{
    hamburgerMenu(".menu-btn",".panel-item",".li .a");
    reloj("#hora","#iniciar_r","#detener_r");
    alarma("#iniciar_a","#detener_a");
    countDown("#days","#hours","#minutes","#seconds","#fest");
    
    responsiveMedia("video","(min-width:600px)",`<a target="_blank" href="https://www.youtube.com/watch?v=n7ZuRd-Mjg8">ver video</a>`,`<iframe width="560" height="315" src="https://www.youtube.com/embed/n7ZuRd-Mjg8" frameborder="0" allow="accelerometer"; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);    
    responsiveMedia("mapa","(min-width:1025px)",`<a target="_blank" href="https://goo.gl/maps/afz6oR7W7ptoeQDo8">ver Mapa</a>`,`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.9589583960087!2d116.5681862149428!3d40.4319076793633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35f121d7687f2ccf%3A0xd040259b950522df!2sMuralla%20China!5e0!3m2!1ses-419!2spe!4v1607811431153!5m2!1ses-419!2spe" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`);
    // responsiveTester("url","ancho","alto","#probar","#cerrar");
    responsiveTester("form");
    userDevice("userAgent");
    detectarCamara("btnInit","video-cam");
    geolocalizacion("geo");
    search("input");
    sortear();
    carousel("next","prev",".slide");
    
});

document.addEventListener("keydown",e=>{
    moveKeys(e,".circle",".container-board");
    shortCuts(e);
});

document.addEventListener("scroll",e=>{
    toUp(e,"#btnUp")
});

modeDark("#btnMode");

deteccion_Conexion("status");
// masonry();    



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
        name:"Responsive con JavaScript",
        link:"#4"
    },
    {
        name:"Responsive Tester",
        link:"#5"
    },
    {
        name:"Detección de Disposivos (User Agent)",
        link:"#6"
    },
    {
        name:"Detección de Conexi{on",
        link:"#7"
    },
    {
        name:"Detección de CamareWeb",
        link:"#8"
    },
    {
        name:"Geolocalización",
        link:"#9"
    },
    {
        name:"Filtros de Búsqueda",
        link:"#10"
    },
    {
        name:"Sorteo Digital",
        link:"#11"
    },
    {
        name:"Carousel Responsive",
        link:"#12"
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
