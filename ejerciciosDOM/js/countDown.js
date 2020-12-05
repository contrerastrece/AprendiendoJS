export {countDown}
function countDown(days,minutes,hours,seconds,fest){

    let time;     
            const fechaNavidad=new Date(2020,11,25);
           if(fechaNavidad.getTime()>Date.now()){
            time=setInterval(()=>{       
                let today= Date.now()//la fecha de ahora en milisegundos
                let restante=fechaNavidad-today;//devuelve en milisegundo
               let segundos=Math.floor(restante/1000);
               let minutos=Math.floor(segundos/60);
               let horas=Math.floor(minutos/60);
               let dias=Math.floor(horas/24);
                //calcular restos
                let dias_r=horas%24;
                horas=dias_r;
                let horas_r=minutos%60;
                minutos=horas_r;
                let minutos_r=segundos%60;
                segundos=minutos_r;
           
               let d=checkTime2(dias);
               let h=checkTime(horas);
               let m=checkTime(minutos);
               let s=checkTime(segundos);
               if(restante>0){
                document.querySelector(days).textContent=`${d}`;
                document.querySelector(minutes).textContent=`${h}`;
                document.querySelector(hours).textContent=`${m}`;
                document.querySelector(seconds).textContent=`${s}`;
               }else{
                   alert("Feliz Navidad");
                   clearInterval(time)
               }
            //    console.clear()
            //    console.log(restante,fechaNavidad.getTime()- Date.now());             
           },1000);
        }else{
            console.log("teminio")
            clearInterval(time);
        }
           


    let options = {weekday: "long", year: "numeric", month: "long", day: "numeric"};

    document.querySelector(fest).textContent=`${fechaNavidad.toLocaleDateString("es-ES",options)}`;
    function checkTime(i){
        return (i<10) ? i="0"+i : i;//agregar cero si es menor a 10
    }
    function checkTime2(i){

        return (i<10) ?i="00"+i :(i>10)?i="0"+i:i;
    }

}