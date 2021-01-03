export {validarForm}
function validarForm(){ 
    
    document.addEventListener("keyup",e=>{        
        const $nombre=document.getElementById("nombre");
            let nomRe=/(^[a-zñ]+)(\s?[a-zñ])+$/.test($nombre.value.toLowerCase());

        const $email=document.getElementById("email");
            let emailRe=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/.test($email.value.toLowerCase());
        
        let $mensaje=document.getElementById("mensaje");
          

        console.clear()
        console.log(nomRe)
        console.log(e.key,$nombre.value)
        // validar nombre
        if(nomRe){ 
            $nombre.classList.remove("error")
            $nombre.classList.add("success") 
        }else{
            $nombre.classList.remove("success")
            $nombre.classList.add("error")
        }

        // validar email
        if(emailRe){
            $email.classList.remove("error")
            $email.classList.add("success")
        }else{
            $email.classList.remove("success")
            $email.classList.add("error")
        }

        // validar mensaje
        if($mensaje.value.length>0 && $mensaje.value.length<250){
            console.log($mensaje)
            $mensaje.classList.remove("error")
            $mensaje.classList.add("success")
        }else{
            $mensaje.classList.remove("success")
            $mensaje.classList.add("error")
        }



    })
}