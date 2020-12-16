export {modeDark}
function modeDark(btn){
    const $btn=document.querySelector(btn);
    
    //capturar el theme actual 
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        document.body.classList.toggle('dark');
        $btn.classList.replace("bx-toggle-right","bx-toggle-left")
    }
   
    document.addEventListener("click",e=>{                      
        if(e.target.matches(btn)){        
            let theme;  

            //por cada click intercambiara de theme
            document.body.classList.toggle("dark")

            // intercambio de clases para el toggle
            $btn.classList.contains("bx-toggle-right")
                ?$btn.classList.replace("bx-toggle-right","bx-toggle-left")   
                :$btn.classList.replace("bx-toggle-left","bx-toggle-right");            
            
            //si body ontiene la clase "dark" le asignamos a la variable theme el valor de dark en el storage
            document.body.classList.contains("dark")
                ?theme = "dark"
                :theme= "light";      
            
            //asignamos nuestro nuevo valor de theme
            localStorage.setItem("theme", theme);  
        }
    })    
}
