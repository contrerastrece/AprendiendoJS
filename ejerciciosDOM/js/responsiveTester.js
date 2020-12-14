export {responsiveTester}

// function responsiveTester(url,ancho,alto,btnProbar,btnCerrar){
//     let ventanaUrl;
//     let $url=document.getElementById(url);
//     let $ancho=document.getElementById(ancho);
//     let $alto=document.getElementById(alto);
//         //hacemos que cargue con el contenido vacio cada input
//         $url.value="";
//         $alto.value="";
//         $ancho.value="";
        
//         document.querySelector(btnCerrar).disabled=true;  
//     document.addEventListener("click",e=>{        

//         //daremos un ancho y alto a nuestra ventana
//         let configuracion_ventana = `width=${$ancho.value},height=${$alto.value}`;
//         if(e.target.matches(btnProbar)){
//             ventanaUrl=open($url.value,"ContrerasPariona",configuracion_ventana);
//             //deshabilitar el btnProbar, y habilitar el btnCerrar
//             document.querySelector(btnProbar).disabled=true;  
//             document.querySelector(btnCerrar).disabled=false;      
//         }
//         if(e.target.matches(btnCerrar)){
//             ventanaUrl.close();    

//             $url.value="";
//             $ancho.value="";
//             $alto.value="";
//             //Habilitamos el btnProbar
//            document.querySelector(btnProbar).disabled=false;
//            document.querySelector(btnCerrar).disabled=true;    
//         }
//     })
    
// }

function responsiveTester(form){
    const $form=document.getElementById(form);
    let $url;
    document.addEventListener("submit",e=>{
        //comparar el objeto que orgina el evento contra
        //la variable que guarda la referencia (elemento del DOM)
        if(e.target===$form){
            //cancelar el envio de los datos del formulario por metodo get
            e.preventDefault();
            let configuracion_ventana=`innerWidth=${$form.ancho.value}, innerHeight=${$form.alto.value}`;
            $url=open($form.url.value,"Ventana",configuracion_ventana);
            // alert($form.url.value)
        }
    })
    document.addEventListener("click",e=>{
        if(e.target===$form.cerrar){ $url.close()}
        // alert($form.cerrar)}
        // console.log($form.cerrar);
    })

}