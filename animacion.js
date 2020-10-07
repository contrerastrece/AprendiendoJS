function fnClick(){
    alert("es una funcion onclick");
};
function encima(){
    alert("Está encima");
};
function down(){
    alert("El click está presionado");
};
function out(){
    alert("el mouse está fuera");
};
function up(){
    alert("Se levantó el click");
};
var evento=document.querySelector('#click');/*llamamos al eid click*/
evento.addEventListener('click', function(){
alert("mensaje desde js id");
});
/*
keyup
keydown
keypress
window.addEventListener('keyup',function(){
    alert("Ustede levanto la tecla")
});
window.addEventListener('keypress',function(){
    alert("Usted está presionando una tecla")
});*/
/*para saber que tecla a presionado el usuario */
window.addEventListener("keypress", function(event){    
    alert(String.fromCharCode(event.keyCode))//mostrará la letra que presionaste en el teclado
});
window.addEventListener('load', function(){
    alert("Ya cargo");//esto mostrará cuando la página haya cargadi completamente
});
var tiempo=setInterval(
    function(){
        document.write("Texto después de 3s <br>");
    },3000

);