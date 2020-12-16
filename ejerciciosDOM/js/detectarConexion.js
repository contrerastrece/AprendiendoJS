export{deteccion_Conexion}
function deteccion_Conexion(status){
  const $status=document.getElementById(status);
  const isOnline=()=>{
      //preguntar si tiene conexion el usuario
      //navigator.onLine devuelve true si tiene acceso a la red
      //caso contrato retornará false
    if(navigator.onLine){
        $status.textContent="Conexion Reestablecida";
        $status.classList.add("online");
        $status.classList.remove("offLine");        
    }
    else{
        $status.textContent="Conexion Perdida";
        $status.classList.add("offLine");
        $status.classList.remove("online");
    }
    //eleiminando las clases para que desaparezca la alerta de conexion
    // setTimeout(()=>$status.classList.remove("online","offLine"),2000)

    //eliminando el mensaje en 2s
    setTimeout(()=>$status.removeAttribute("class"),2000)
  }    
   //por cada evento mostrar la alerta
   //los eventos se ejecutaran dependiendo de la conectividad del usuario
   // y no depender+a de la carga del documento
    window.addEventListener("online",e=>{ isOnline()})      
    window.addEventListener("offline",e=>{ isOnline()})
 
}
