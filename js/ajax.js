(()=>{
    const $xhr=document.getElementById("xhr");
    const $fragment=document.createDocumentFragment();
    
    // 1.- instanciar 
    const ajax=new XMLHttpRequest();
       
    // 2.- asignar los eventos
    ajax.addEventListener("readystatechange",e=>{
        if(ajax.readyState!==4) return;
        
        if(ajax.status>=200 && ajax.status<300){
            // console.log("Exito")
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
    // ajax.open("GET","https://jsonplaceholder.typicode.com/users")
    ajax.open("GET","assets/users.json")

    // 4.- enviar la petición
    ajax.send();
})();

// Api Fetch
(()=>{
    const $fetch=document.getElementById("fetch");
    const $fragment=document.createDocumentFragment();
    
    // fetch("https://jsonplaceholder.typicode.com/users")
    // .then()
    // .catch()
    // .finally()
    
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>{
        // console.log(res)
       
        // convertir a JSON la respuesta
        return res.ok ?res.json() :Promise.reject(res) 
    })
    .then(json=>{
        // console.log(json)
        // $fetch.innerHTML=json
        json.forEach(element => {
            let $li=document.createElement("li");
            $li.innerHTML = `${element.username} - ${element.website}`
            $fragment.appendChild($li)
        });
        $fetch.appendChild($fragment)
    })
    .catch(err=>{
        let message=err.statusText || "Ocurrió un problema";
        $fetch.innerHTML=`Error - ${err.status} ${message}`
        console.log(err)
    })
    .finally(()=>{
        // console.log("esto se ejecutará independientemente del resultado de la promesa FETCH")
    })
})();

// Api Fetch Asyn Await
(()=>{
    const $fetchAsync=document.getElementById("fetchAsync");
    const $fragment=document.createDocumentFragment();
    async function getData(){
        try {
            let res=await fetch("https://jsonplaceholder.typicode.com/users");
            let json=await res.json();
            
            if(!res.ok) throw {status:res.status,statusText:res.statusText}

            json.forEach(element => {
                let $li=document.createElement("li");
                $li.innerHTML = `${element.name} - ${element.email}`
                $fragment.appendChild($li)
            });
            $fetchAsync.appendChild($fragment)

        } catch (error) {
            let message=error.statusText || "Ocurrió un problema";
            $fetchAsync.innerHTML=`Error - ${error.status} ${message}`
            // console.log(error)
        }
    }
    
    getData();
})();

// Usando Axios
(()=>{
    const $axios=document.getElementById("axios");
    const $fragment=document.createDocumentFragment();
    console.clear()

    // Utilizando la librería Axios
    axios
    .get("https://jsonplaceholder.typicode.com/user")
    .then(res=>{
        console.log(res);
        let json=res.data
        json.forEach(element => {
            let $li=document.createElement("li");
            $li.innerHTML = `${element.username} - ${element.email}`
            $fragment.appendChild($li)
        });
        $axios.appendChild($fragment)
    })
    .catch(error=>{
        console.log("CATCH",error.response)
    })
    .finally(()=>{
        console.log("Esto se ejecutará independientemente del resultado Axios")
    });
})()