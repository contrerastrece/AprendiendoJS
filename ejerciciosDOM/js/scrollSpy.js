export {scrollSpy}

// const $containers=document.querySelectorAll(".container");
// const $containersArr=Array.from($containers)

// const $navItems=document.querySelectorAll(".ul .li");
// const $navItemsArr=Array.from($navItems)

function scrollSpy(){
    // const $section=document.querySelectorAll(".container")

    // capturamos los div que tienen los data-attribute
    const $section=document.querySelectorAll("div[data-scroll-spy]")
    let options={
        // root el elmento que es usado como viewport para comprobar la visibilidad
        // por defecto es el viewport del navegador
        // root:,

        //al 50% de rootMargin es para que en la mitad de viewport  empiece a disparar el callback
        rootMargin:"-50%"

        // threshold nos pregunta el porcetaje de vista del elemneto
        // 1 nos indica que el elemento completo
        // 0 es por defecto, que ni bien el primer px se muestra este dispará el callback
        // tambien recibe un array [0, 0.25, 0.5, 0.75, 1]
        // threshold:[0.75,1]
    }

    const callback=(entries)=>{
        console.clear();
        console.log(entries,"entradas")
        // console.log(entries.target.id)
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                // agregamos al elemento del nav la clase active
                document.querySelector(`a[data-scroll-spy][href="#${entry.target.id}"]`).classList.add("active")
                // console.clear()
                // console.log(entry,"entry")
            }else{                
                // quitamos la clase active a los que no cumplen la condición
                document.querySelector(`a[data-scroll-spy][href="#${entry.target.id}"]`).classList.remove("active")
            }
        })
    }
    let observer=new IntersectionObserver(callback,options)

    // le asignamos a "observe" los ementos que va observar
    $section.forEach(elemento=>observer.observe(elemento))
}