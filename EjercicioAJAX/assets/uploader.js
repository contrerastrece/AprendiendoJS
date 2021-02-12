// console.log("hola mundo");
console.clear();

document.addEventListener("DOMContentLoaded", (e) => {
  let $form = document.getElementById("form_uploader");
  document.addEventListener("submit", (e) => {
    e.preventDefault();   
    subirArchivo($form);
  });
});


function subirArchivo(form){
  const $progress = document.getElementById("barraEstate");
  const $span = document.getElementById("span");
  const $cancel = document.getElementById("cancel");

  $progress.classList.remove("barraSuccess", "barraError");

  // peticion

  let xhr = new XMLHttpRequest();

  // progresso
  xhr.upload.addEventListener("progress", (e) => {
    let porcent = Math.round((e.loaded / e.total) * 100);
    console.log(porcent);

    $progress.style.width = porcent + "%";
    $span.innerHTML = porcent + "%";
  });

  // finalizado
  xhr.addEventListener("readystatechange", (e) => {
    if(xhr.readyState!==4) return;
    if(xhr.status>=200 && xhr.status<300){
        console.log(xhr.responseText)
        $progress.classList.add("barraSuccess");
        $span.innerHTML = "Proceso Completado";

    }else{
        let message=xhr.statusText || "Ocurrió un error"
        console.log(`Error ${xhr.status}: ${message}`)
    }
    
  });

  // enviar Datos
  xhr.open("POST", "assets/uploader.php");
  xhr.send(new FormData(form));

  // cancelar
  document.addEventListener("click", e => {
    if(e.target === $cancel){
        xhr.abort();
        $progress.classList.remove("barraSuccess");
        $progress.classList.add("barraError");
        $span.innerHTML = "Cancelado";
    }
  });
};
