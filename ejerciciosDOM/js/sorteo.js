export {sortear}
function sortear(){
const n_elementos=document.querySelectorAll(".opcion_item").length;
    document.addEventListener("click",e=>{
        let num=Math.floor(Math.random()*n_elementos)+1;
        let win=document.querySelectorAll(".opcion_item")[num-1].textContent;
            if(e.target.matches(".btn_sortear"))
            alert(`El ganador es: ${win}`);
        
    })
}