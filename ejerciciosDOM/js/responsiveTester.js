export {responsiveTester}

function responsiveTester(url,ancho,alto,btnProbar,btnCerrar){
    let ventanaUrl;
    let $url=document.getElementById(url);
    let $ancho=document.getElementById(ancho);
    let $alto=document.getElementById(alto);
        //hacemos que cargue con el contenido vacio cada input
        $url.value="";
        $alto.value="";
        $ancho.value="";
        
        document.querySelector(btnCerrar).disabled=true;  
    document.addEventListener("click",e=>{        

        //daremos un ancho y alto a nuestra ventana
        let configuracion_ventana = `width=${$ancho.value},height=${$alto.value}`;
        if(e.target.matches(btnProbar)){
            ventanaUrl=open($url.value,"ContrerasPariona",configuracion_ventana);
            //deshabilitar el btnProbar, y habilitar el btnCerrar
            document.querySelector(btnProbar).disabled=true;  
            document.querySelector(btnCerrar).disabled=false;      
        }
        if(e.target.matches(btnCerrar)){
            ventanaUrl.close();    

            $url.value="";
            $ancho.value="";
            $alto.value="";
            //Habilitamos el btnProbar
           document.querySelector(btnProbar).disabled=false;
           document.querySelector(btnCerrar).disabled=true;    
        }
    })
    // console.log($alto.value);
}