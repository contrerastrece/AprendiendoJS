(()=>{
    const $xhr=document.getElementById("xhr");
    const $fragment=document.createDocumentFragment();
    
    // 1.- instanciar 
    const ajax=new XMLHttpRequest();
    console.clear()
    
    // 2.- asignar los eventos
    ajax.addEventListener("readystatechange",e=>{
        if(ajax.readyState!==4) return;
        
        if(ajax.status>=200 && ajax.status<300){
            console.log("Exito")
            // convertir a formato de string => json
            let json=JSON.parse(ajax.responseText);
            // convertir de JSON => a un String
            // $xhr.innerHTML=JSON.stringify(ajax.responseText);

            // console.log(ajax.responseText)
            json.forEach(element => {
                const $li=document.createElement("li");

                $li.innerHTML=`${element.name}-- ${element.username}`
                $fragment.appendChild($li)
            });

            $xhr.appendChild($fragment);

        }else{
            console.log("error")
            let message=ajax.statusText || "Ocurrió un problema";

            $xhr.innerHTML=`Error - ${ajax.status} ${message}`
        }
        

    })

    // 3.- abrir la petición con el metodo GET y el recurso
    // ajax.open("GET","https://jsonplaceholder.typicode.com/user")
    ajax.open("GET","assets/users.json")

    // 4.- enviar la petición
    ajax.send();
})();