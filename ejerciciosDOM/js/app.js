import  {hamburgerMenu}  from "./hamburger.js";

document.addEventListener("DOMContentLoaded",e=>{
    hamburgerMenu(".menu-btn",".panel-item",".li .a");
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

const listSeccion=[
    {
        name:"1ra Generación",
        link:"#1"
    },
    {
        name:"2da Generación",
        link:"#2"
    },
    {
        name:"3ra Generación",
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
document.querySelector(".Panel").appendChild($div);