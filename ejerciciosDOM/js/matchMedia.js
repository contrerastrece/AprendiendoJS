export {responsiveMedia}

function responsiveMedia(id,mq,mobileContent, desktopContent){
    let breakPoint=window.matchMedia(mq);
    const responsive=(e)=>{
        //e.matches retornará true si cumple con la breackpoint 
        e.matches
            ?document.getElementById(id).innerHTML=desktopContent        
            :document.getElementById(id).innerHTML=mobileContent;        
    }
    breakPoint.addEventListener("change",responsive);
    responsive(breakPoint)//se ejecutará para que al cargar el navegador se ejecute la función
}