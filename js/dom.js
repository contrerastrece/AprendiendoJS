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
/*const $linkDom=document.querySelector(".link-dom");

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
*/








//DOM: CLases CSS
/*
const $card=document.querySelector(".card");
const $linkMenu=document.querySelectorAll(".link-menu")
console.log($card)
console.log($linkMenu)
console.log($card.className)//devuelve el nombre de la clase
console.log($card.classList)//delvuelve un DOMTokenList

console.log($card.classList.contains("border-1"))//devolverá si contiene la clase
$card.classList.add("rotate-45")//agregar una clase
console.log($card.classList.contains("rotate-45"))
$card.classList.remove("rotate-45")//eleminar clase

$card.classList.toggle("ratate-45");//se agregará la clase si no la contiene en caso contrario se la quitará(como un interruptor)

//reemplazar clases por otra
$card.classList.add("rotate-45");
$card.classList.replace("rotate-45","rotate-135")

//agregar más de una clase 
$card.classList.add("sepia","opacity-80");
//eliminar más de una clase
$card.classList.remove("sepia","rotate-135");
*/








//DOM: Texto y HTML
/*
const $queEs=document.getElementById("que-es");

let text=`
<p>
    victor
</p>
<p>
    Contreras
</p>
<p>
    Pariona
</p>
`;
$queEs.innerText=text;//sirve para agregar texto y no es parte del Stantdar
$queEs.textContent=text;//es parte del estandar
$queEs.innerHTML=text;//reenlaza con contenido html
$queEs.outerHTML=text;//elimina la etiquta contenedora y pega el codigo html ingresado en el template
*/







//RECORRIENDO EL DOM
/*
const $cards=document.querySelector(".cards")
console.log($cards)//devuelve la seccion cards
console.log($cards.children)//devuelve a sus hijos de la etiqueta section
console.log($cards.children[2])//devuelve un hijo en específico
console.log($cards.parentElement)//devuleve el padre de la seccion cards
console.log($cards.firstElementChild)//devuelve el primer hijo
console.log($cards.lastElementChild)//devuelve el último hijo
console.log($cards.previousElementSibling)//devuelve el hermano anterior de la secction
console.log($cards.nextElementSibling)//devuelve el hermano siguiente de la secction
console.log($cards.children[2].closest("section"))//devuelve la etiquta más cercana anterior
console.log($cards.closest(":not(section)"))//devolverá el body
*/












//CREAR ELEMENTOS HTML
/*const $figure=document.createElement("figure"),
    $img=document.createElement("img"),
    $figCaption=document.createElement("figcaption"),
    $figCaptionText=document.createTextNode("Animals"),
    $cards=document.querySelector(".cards");

$figure.classList.add("card");//agregando clase a la etiqueta FIGURE

$img.setAttribute("src","https://placeimg.com/200/200/animals") //agregando atributo SRC
$img.setAttribute("alt","Animales")//agregando atributo ALT

$figCaption.appendChild($figCaptionText)//insertando texto en el FIGCAPTION

$figure.appendChild($img)//insertando un hijo a la etiqueta FIGURE
$figure.appendChild($figCaption)
$cards.appendChild($figure)

const estaciones=["Primavera", "Otoño", "Invierno","Verano"],
$ul=document.createElement("ul");
document.write("<h3>Estaciones del Año</h3>");
document.body.appendChild($ul);

//imprimir los elemntos de las estaciones
//(no recomendable)
estaciones.forEach(elementos =>{
    const $li=document.createElement("li");
    $li.textContent=elementos;
    $ul.appendChild($li);
})

//no recomendable(reflow)
//reflow=por cada insersion de elementos vuelve a recargar el html
//no es recomndable si muchos elementos a insertar
const continentes=["Africa","America","Asia","Europa","Oceanía"],
$ul2=document.createElement("ul");

document.write("<h3>Continentes del Mundo</h3>");
document.body.appendChild($ul2);

$ul2.innerHTML="";
//imprimir los eleentos del continente
continentes.forEach(continente=>$ul2.innerHTML+=`<li>${continente}</li>`

)

//usaremos fragmentos para evitar el problema del reflow
const fragment=document.createDocumentFragment();
// const fragment=new DocumentFragment();//esta tambien es valida para crear fragmentos
const meses=["ENE","FEB","MAR","ABR","MAY","JUN","JUL","AGO","SET","OCT","NOV","DIC"];
const $ul3=document.createElement("ul");
document.write("<h3>Meses del Año</h3>");


meses.forEach(mes=>{
    const $li3=document.createElement("li");
    $li3.textContent=mes;
    fragment.appendChild($li3)
})

$ul3.appendChild(fragment)
document.body.appendChild($ul3)
*/











//TEMPLATES HTML
/*
const $cards=document.querySelector(".cards"),
$template=document.getElementById("template-card").content,
$fragment=document.createDocumentFragment(),
cardContent=[
    {
        title:"Tecnología",
        img:"https://placeimg.com/200/200/tech"
    },
    {
        title:"Naturaleza",
        img:"https://placeimg.com/200/200/nature"
    },
    {
        title:"Animales",
        img:"https://placeimg.com/200/200/animals"
    },
    {
        title:"Arquitectura",
        img:"https://placeimg.com/200/200/arch"
    },
    {
        title:"Persona",
        img:"https://placeimg.com/200/200/people"
    },
]

cardContent.forEach(contenido=>{
    $template.querySelector("figure").classList.add("card");
    
    $template.querySelector("img").setAttribute("src",contenido.img);
    $template.querySelector("img").setAttribute("alt",contenido.title.toLocaleLowerCase());
    $template.querySelector("figcaption").textContent=contenido.title;

    //el template es único, por eso clonaremos el nodo para cada elemento
    let $clone=document.importNode($template,true);//true->copiara toda la estructra, False->solo copiara la etiqueta template de apertura y de cierre

    $fragment.appendChild($clone)
})

$cards.appendChild($fragment);
*/














//modificando elementos (old Style)

/*const $cards=document.querySelector(".cards");
const $newCard=document.createElement("figure");
const $clone=$cards.cloneNode(true);

$newCard.innerHTML=`
<img src="https://placeimg.com/200/200/any" alt="Any">
<figcaption>Any</figcaption>
`;
$newCard.classList.add("card")
// console.log($newCard)
// $cards.replaceChild($newCard,$cards.children[1])//remplazando al segundo elemento
// $cards.removeChild($cards.lastElementChild);//Eliminando el último hijo
$cards.insertBefore($newCard,$cards.firstElementChild)//insertando antes del primer hijo
document.body.appendChild($clone)//clonar la seccion cards
*/

//Modificando elementos (cool style)
/*
insertAdjacent...
    .insertAdjacentElement(position,el)
    .insertAdjacentHTML(position,html)
    .insertAdjacentText(position,text)

Position...
    beforebegin(hermano anterior)
    afterbegin(primer hijo)
    beforeend(ultimo hijo)
    afterend(hermano siguiente)
*/
/*const $cards=document.querySelector(".cards");
const $newCard=document.createElement("figure");

// $newCard.innerHTML=`
// <img src="https://placeimg.com/200/200/any" alt="Any">
// <figcaption>Any</figcaption>
// `;

let $contentCard=`
<img src="https://placeimg.com/200/200/people" alt="people">
<figcaption></figcaption>
`;
$newCard.classList.add("card");
// $cards.insertAdjacentElement("beforebegin",$newCard)
// $cards.insertAdjacentElement("beforeend",$newCard)
// $cards.insertAdjacentElement("afterbegin",$newCard)
// $cards.insertAdjacentElement("afterend",$newCard)


// $cards.prepend($newCard)//agrega como primer hijo
// $cards.append($newCard)//agrega como útlmo hijo
// $cards.before($newCard)//agrega como hermano anterior
// $cards.after($newCard)//agrega como hermano siguiente
$cards.insertAdjacentElement("afterbegin",$newCard);//insertando un elemento vacio como primer hijo

$newCard.insertAdjacentHTML("beforeend",$contentCard);//insertando contenido html al elemento vacio
$newCard.querySelector("figcaption").insertAdjacentText("beforeend","Personas")//insertando texto al figcaption
*/













//Manejadores de Eventos
/*function holaMundo(){
    alert("Hello World!")
    console.log(event)
}

const $eventoSemantico=document.getElementById("evento-semantico");
const $eventoMultiple=document.getElementById("evento-multiple");

//evento semantico ejecuta solo 1 evento
$eventoSemantico.onclick=holaMundo;//sin parentesis el método para no inicializar cuando se carga la página

$eventoSemantico.onclick=function(e){
    alert("Hola mundo Manejador de eventos Semántico")
    console.log(e)
    console.log(event)
}

//asignar varios eventos al boton
$eventoMultiple.addEventListener("click",holaMundo)
$eventoMultiple.addEventListener("click",e=>{
    alert("Hola Mundo Manejado de eventos Multiples")
    console.log(e)
    console.log(e.type)
    console.log(e.target);
    console.log(event)
})
*/














//Eventos con parametros y remover eventos
/*const saludar=(nombre="desconocido")=>{
    console.log(`Hola ${nombre}`)
}
const $eventoMultiple=document.getElementById("evento-multiple");
const $eventoRemover=document.getElementById("remover-evento");

$eventoMultiple.addEventListener("click",()=>{
    saludar();
    saludar("Vcontreras");
});

//para eliminar un evento tiene que eliminar una función declarada
const remover=(e)=>{
    console.log(`Eliminando evento ${e.type}`)
    $eventoRemover.removeEventListener("dblclick",remover);//removiendo evento
    $eventoRemover.disabled=true;//desactivando button
}
$eventoRemover.addEventListener("dblclick",remover);
*/









//Flujos de eventos
//la fase de burbuja se efectua del evento más interno al más externo
//la fase de captura se efectua del evento más externo al más interno
const $eventoDiv=document.querySelectorAll(".eventos-flujos div");
console.log($eventoDiv);

function flujoEventos(e){
    console.log(`Hola te saluda el div ${this.className},el click lo orgino ${e.target.className}`)
}

$eventoDiv.forEach((div)=>{
    //FASE BURBUJA
    // div.addEventListener("click",flujoEventos);//actua del evento más interno al más externo
    // div.addEventListener("click",flujoEventos,false);//el false es opcional

    //FASE CAPTURA
    // div.addEventListener("click",flujoEventos,true)
    div.addEventListener("click",flujoEventos,{
        capture:true,
        once:true//el evento se ejecutará solo una vez
    })

});

