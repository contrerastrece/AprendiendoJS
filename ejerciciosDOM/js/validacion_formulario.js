export{contact_validations}
function contact_validations(){
    const $inputs=document.querySelectorAll(".formulario [required]")

    // console.log($inputs);

    $inputs.forEach(input=>{
        //asignado atributos al span con los datos de mi input
        const $span=document.createElement("span")
        $span.id=input.name;
        $span.textContent=input.title;
        $span.classList.add("form_input-error","none")
        //insertando el span debajo de los inputs
        input.insertAdjacentElement("afterend",$span)
    })

    document.addEventListener("keyup",e=>{
        if(e.target.matches(".form_input[required]")){
            let $input=e.target;
            let pattern=$input.pattern || $input.dataset.pattern;
            
            // console.log($input,pattern)
            if(pattern && $input.value!==""){
                // console.log("el input tiene patron");
                let regex=new RegExp(pattern);
                return !regex.exec($input.value)
                ?document.getElementById($input.name).classList.add("is-active")
                :document.getElementById($input.name).classList.remove("is-active")
            }
            if(!pattern){
                // console.log("el input NO tiene patron")                
                return $input.value===""
                ?document.getElementById($input.name).classList.add("is-active")
                :document.getElementById($input.name).classList.remove("is-active")
            }
        }
    })
}