export{reloj ,alarma};//exportando las dos funciones implementadas

function reloj(hora,btn_iniciarR,btn_detenerR){    
    let time;
    function checkTime(i){
        return (i<10) ? i="0"+i : i;//agregar cero si es menor a 10
    }
    document.addEventListener("click",e=>{
        if(e.target.matches(btn_iniciarR)){           
            time=setInterval(()=>{
                let hoy= new Date();
                let h=hoy.getHours();
                let m=checkTime(hoy.getMinutes());
                let s=checkTime(hoy.getSeconds());
                //agregar contenido al contenedor de HORA
                document.querySelector(hora).textContent=`${h}:${m}:${s}`;               
            },500);    
            e.target.disabled=true;
            document.querySelector(btn_detenerR).disabled=false;
        }
        if(e.target.matches(btn_detenerR)){
            clearTimeout(time);
            e.target.disabled=true;
            document.querySelector(btn_iniciarR).disabled=false;           
        }
    })
}

function alarma(btn_iniciarA,btn_detenerA){
    let sound=new Audio("assets/alarm.mp3");
    sound.loop=true;
    document.addEventListener("click",e=>{
        if(e.target.matches(btn_iniciarA)){
            sound.play();//encendiendo alarma
            e.target.disabled=true;//deshabilitando el boton
            document.querySelector(btn_detenerA).disabled=false;
        } 
        if(e.target.matches(btn_detenerA)){
            sound.pause();//pausando alarma y la proxima que vez que se reproduzca empezará donde se pausó
            // sound.currentTime=0;//regresar desde el inicio
            // e.target.disabled=true;
            document.querySelector(btn_iniciarA).disabled=false;

        }
    })
}