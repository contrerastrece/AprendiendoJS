export{search}
const $container_card=document.querySelector(".container__img");
const $template_card=document.getElementById("template_card").content;
const $fragmento=document.createDocumentFragment();

const pokemons=[
    {
        nom_pokemon:"bulbasaur",
        imagen:"assets/img/001-bulbasaur.gif",
    },
    {
        nom_pokemon:"ivysaur",
        imagen:"assets/img/002-ivysaur.gif",
    },
    {
        nom_pokemon:"venusaur",
        imagen:"assets/img/003-venusaur.gif",
    },
    {
        nom_pokemon:"charmander",
        imagen:"assets/img/004-charmander.gif",
    },
    {
        nom_pokemon:"charmeleon",
        imagen:"assets/img/005-charmeleon.gif",
    },
    {
        nom_pokemon:"charizard",
        imagen:"assets/img/006-charizard.gif",
    },
    {
        nom_pokemon:"squirtle",
        imagen:"assets/img/007-squirtle.gif",
    },
    {
        nom_pokemon:"wartortle",
        imagen:"assets/img/008-wartortle.gif",
    },
    {
        nom_pokemon:"blastoise",
        imagen:"assets/img/009-blastoise.gif",
    },
    {
        nom_pokemon:"caterpie",
        imagen:"assets/img/010-caterpie.gif",
    },
    {
        nom_pokemon:"metapod",
        imagen:"assets/img/011-metapod.gif",
    },
    {
        nom_pokemon:"butterfree",
        imagen:"assets/img/012-butterfree.gif",
    },
    {
        nom_pokemon:"pikachu",
        imagen:"assets/img/025-pikachu.gif",
    }

]
pokemons.forEach(pokemon=>{
    $template_card.querySelector("img").setAttribute("src",pokemon.imagen);
    $template_card.querySelector("img").setAttribute("alt",pokemon.nom_pokemon);
    $template_card.querySelector("p").textContent=pokemon.nom_pokemon

    let $clone_card=document.importNode($template_card,true);//true->copiara toda la estructra, False->solo copiara la etiqueta template de apertura y de cierre
    $fragmento.appendChild($clone_card)
})
$container_card.appendChild($fragmento)


function search(input){
    const $textSearch=document.getElementById(input)
    document.addEventListener("keyup",e=>{
        let text=$textSearch.value;
        filterCard(text)
    })
}


function filterCard(text){
    for(let i=0;i<pokemons.length;i++){            
        document.querySelectorAll(".card")[i].classList.remove("filter")
        let namePok=document.querySelectorAll(".namePokemon")[i]
            
        namePok.textContent.indexOf(text)!==-1
            ?document.querySelectorAll(".card")[i].classList.remove("filter")
            :document.querySelectorAll(".card")[i].classList.add("filter") 
    }        
}

 