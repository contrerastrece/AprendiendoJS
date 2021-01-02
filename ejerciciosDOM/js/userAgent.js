export{userDevice}
function userDevice(id){
    const $id=document.getElementById(id);
    const isMobile={
        android:()=>navigator.userAgent.match(/android/i),
        ios:()=>navigator.userAgent.match(/iphone|ipad|ipod/i),
        windows:()=>navigator.userAgent.match(/windows phone/i),
        any:function(){
            return this.android()|| this.ios()|| this.windows();
        }
    };
    const isDesktop={
        linux:()=> navigator.userAgent.match(/linux/i),
        mac:()=> navigator.userAgent.match(/mac os/i),
        windows:()=> navigator.userAgent.match(/windows nt/i),
        any:function(){
            return this.linux()|| this.mac()|| this.windows();
        }
    };
    const isBrowser={
        chrome:() =>navigator.userAgent.match(/chrome/i),
        safari:() =>navigator.userAgent.match(/safari/i),
        firefox:() =>navigator.userAgent.match(/firefox/i),
        opera:() =>navigator.userAgent.match(/opera|opera mini/i),
        ie:() =>navigator.userAgent.match(/msie|iemobile/i),
        edge:() =>navigator.userAgent.match(/edge/i),
        any:function(){
            return this.chrome()|| this.safari()|| this.firefox()|| this.opera()|| this.ie()||this.edge();
        }
    }
    
    // console.log(isDesktop.windows())

    $id.innerHTML=`
        <ul>
            <li><b>User agent:</b> ${navigator.userAgent}</li>
            <li><b>Plataforma:</b> ${isMobile.any()?isMobile.any():isDesktop.any()}</li>
            <li><b>Navegador:</b> ${isBrowser.any()}</li>        
        </ul>
    `;

    // contenido exclusivo
    if(isBrowser.chrome()){
        $id.innerHTML+=`
        <ul>
            <p><mark>Este contenido solo se ve en Google CHrome</mark></p>      
        </ul>
    `;
    }
    if(isBrowser.firefox()){
        $id.innerHTML+=`
        <ul>
            <p><mark>Este contenido solo se ve en Firefox :]</mark></p>      
        </ul>
    `;
    }
    // redirecciones
    // en el caso de que mi dispositivo sea mobil me redireccionará a una página en concreta
    if(isMobile.android()){
        // window.location.href="";
        
    }
}