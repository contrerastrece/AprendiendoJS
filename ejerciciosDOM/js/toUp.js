export function toUp(e,btnUp){
    
    // let y=scrollY;
    if(scrollY>800){
        // console.log(y)

        document.querySelector(btnUp).style.visibility="visible";
        document.addEventListener("click",e=>{
            if(e.target.matches(btnUp)){               
                scrollTo(scrollX,0);
            }
        })
    }else{        
        document.querySelector(btnUp).style.visibility="hidden";
    }
}