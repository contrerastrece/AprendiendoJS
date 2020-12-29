export{detectarCamara}

function detectarCamara(btn,videoCam){

    const $btnActivar=document.getElementById(btn);
    const $video=document.getElementById(videoCam);
   
    document.addEventListener("click",e=>{
        if(e.target===$btnActivar){
            e.preventDefault()
            //preguntamos si soporta la Api de mediaDevices
            if(navigator.mediaDevices.getUserMedia){
                navigator.mediaDevices.getUserMedia({audio:true,
                    video:true}).then((stream)=>{
                    console.log(stream)
                        //a la etiqueta video le pasamos de los que nos devuleve la promesa
                        $video.srcObject=stream;
                    //ejecutamos el metodo play para que se reproduzca
                    $video.play();
                })
                .catch((err)=>{
                    console.log(err);
                })
            }else{
                console.log("error ;,v");
            }
            
        }    
    })
    
}
