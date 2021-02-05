document.addEventListener("DOMContentLoaded", (e) => {
  const includeHTML = (el, url) => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange",e=>{
        if(xhr.readyState!==4) return;
        if(xhr.status>=200 && xhr.status<300){
            el.outerHTML=xhr.responseText;
        }else{
            let message = xhr.statusText || "Eror en la carga del archivo, verifique que si estás realizando la peticion por http o https";
            el.outerHTML=`<div>Error ${xhr.status}: ${message}</div>`
        }        
    })
    xhr.open('GET',url);
    xhr.setRequestHeader("Content-Type","text/html; charset=UTF-8");
    xhr.send();
  };
  const $dataInclude = document.querySelectorAll("[data-include]");
  $dataInclude.forEach(el=>includeHTML(el,el.getAttribute("data-include")));
});
