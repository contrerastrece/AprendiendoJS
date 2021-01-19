export {leer};
let $voicesSelect=document.getElementById("voices_select");

let voices=[];
function leer(){        
    
    cargarOptions();
    
    document.addEventListener("click",e=>{
        // e.preventDefault();
        if(e.target.matches(".btn_leer")){
            speak()
        }
    });
}

function cargarOptions(){
    //obtener voces del navegador
    voices=speechSynthesis.getVoices();
    
    // crear Option
    voices.forEach(voz=>{
        let option=document.createElement("option");
        option.value=voz.name;
        option.text=voz.name;
        $voicesSelect.appendChild(option)
    })  
}

function speak(){   
    let $inpuText=document.getElementById("inputText").value;
    let mensaje=new SpeechSynthesisUtterance($inpuText);
    console.log($inpuText)
    
    document.addEventListener("change",e=>{
        if(e.target===$voicesSelect){
            mensaje.pitch=2;
            mensaje.voice=voices.find(voice=>voice.name===e.target.value)           
            console.log(mensaje)
        }
    })
    speechSynthesis.speak(mensaje);
    
}