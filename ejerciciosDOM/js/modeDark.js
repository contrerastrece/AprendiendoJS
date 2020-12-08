export {modeDark}
function modeDark(e,btn){
    const $btn=document.querySelector(btn);
    document.addEventListener("click",e=>{                   
        if(e.target.matches(btn)){
            document.querySelector("body").classList.toggle("dark")           
            if($btn.classList.contains("bxs-toggle-right")){
                $btn.classList.remove("bxs-toggle-right")
                $btn.classList.toggle("bx-toggle-left")
            }else{
                $btn.classList.add("bxs-toggle-right")                
                $btn.classList.remove("bx-toggle-left")
            }        
        }
    })
    
}