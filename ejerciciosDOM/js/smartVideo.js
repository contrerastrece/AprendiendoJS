export {smartVideo}
function smartVideo(tagvideo){
    const $video=document.querySelectorAll(tagvideo);
    
    let options = {
        // rootMargin: '-50%',
        threshold:1
    }
    
    // console.log($video,"all videos")
    let callback=(entries)=>{
        entries.forEach(entry=>{            
            if( entry.isIntersecting ){  
                entry.target.play();
                entry.target.loop=true;
                // console.clear() 
                // console.log("play")
            }else{
                entry.target.pause();
                // console.clear()
                // console.log("pause")
            }
            // verificamos si la pantalla se ha cambiado
            document.addEventListener("visibilitychange",e=>{
                document.visibilityState==="visible"?entry.target.play():entry.target.pause()
            })
        })
    }
    
    let observer = new IntersectionObserver(callback, options);

    // le asignamos a "observe" los ementos que va observar
    $video.forEach(elemento=>observer.observe(elemento))

    
}