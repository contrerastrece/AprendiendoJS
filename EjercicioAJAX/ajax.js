const $content=document.getElementById("content");
// const $itemHome=document.getElementById("home");
// const $itemAbout=document.getElementById("about");
// const $itemService=document.getElementById("service");
// const $itemContact=document.getElementById("contact");
document.addEventListener("DOMContentLoaded",async e=>{
    try {
        let res=await fetch("assets/home.html");
        let data=await res.text();

        $content.innerHTML=data;
    } catch (error) {
        let message=error.statusText || "Ocurrió un problema";
        $content.innerHTML=`Error - ${error.status} ${message}`
    }
})
document.addEventListener("click", async (e) => {
  if (e.target.matches("li")) {
    try {
      let $url = `assets/${e.target.textContent.toLowerCase()}.html`;
      let options = {
        method: "GET",
        headers: {
          "Content-Type": "application/html; charset=utf-8",
        },
      };
      let res = await fetch(`${$url}`, options);
      let data = await res.text();
      // insertar contenido
      $content.innerHTML = data;
    } catch (error) {
      let message = error.statusText || "Ocurrió un problema";
      $content.innerHTML = `Error - ${error.status} ${message}`;
    }
  }
  // if(e.target===$itemHome){
  //     try {
  //         let res=await fetch("assets/home.html");
  //         let data=await res.text();
  //         $content.innerHTML=data;
  //     } catch (error) {
  //         let message=error.statusText || "Ocurrió un problema";
  //         $content.innerHTML=`Error - ${error.status} ${message}`
  //     }
  // }

  // if(e.target===$itemAbout){
  //     try {
  //         let res=await fetch("assets/acerca.html");
  //         let data=await res.text();
  //         $content.innerHTML=data;
  //     } catch (error) {
  //         let message=error.statusText || "Ocurrió un problema";
  //         $content.innerHTML=`Error - ${error.status} ${message}`
  //     }
  // }
  // if(e.target===$itemService){
  //     try {
  //         let res=await fetch("assets/servicio.html");
  //         let data=await res.text();
  //         $content.innerHTML=data;
  //     } catch (error) {
  //         let message=error.statusText || "Ocurrió un problema";
  //         $content.innerHTML=`Error - ${error.status} ${message}`
  //     }
  // }
  // if(e.target===$itemContact){
  //     try {
  //         let res=await fetch("assets/contacto.html");
  //         let data=await res.text();
  //         $content.innerHTML=data;
  //     } catch (error) {
  //         let message=error.statusText || "Ocurrió un problema";
  //         $content.innerHTML=`Error - ${error.status} ${message}`
  //     }
  // }
});