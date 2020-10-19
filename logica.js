//------- MANEJO DE ERRORES TRY CATCH

/* 
try {
console.log("se ejecuta el try");
} catch (error) {
    console.log("captura el error surgido por el catch")
}finally{
    console.log("siempre se ejecutará ");
}

try{
    let n=12;
    if(isNaN(n)){
        throw new Error("el valor de n no es un número");
    }
    console.log(n*10);
}catch(error){
    console.log(`Se produjo el siguiente ${error}`);
}

*/





//------- BREAK y CONTINUE

/* let numeros=[10,21,32,54,45,26,87,80,19,100];
for (let index = 0; index < numeros.length; index++) {
    if(index===5){
        break;
    }
    console.log(numeros[index]);
}
for (let index = 0; index < numeros.length; index++) {
    if(numeros[index]%2==0){
        continue;//salta la iteración
    }
    console.log(numeros[index]);
}
*/






//------- DESESTRUCTURACIÓN

/*const array=[1,2,3];
// sin desestructuración
let uno=array[0],
    dos=array[1],
    tres=array[2];
console.log(uno,dos,tres);
// con desestructuración
const [one,two,three]=[1,2,3];
console.log(one,two,three);

let persona={
    nombre:"victor",
    apellido:"contreras",
    edad:27
}
let {nombre,apellido,edad}=persona;
console.log(nombre,apellido);*/






//------- OBJETOS LITERALES

/*let nombre="lumpy";
let edad=2;
const perro={
    nombre:nombre,
    edad:edad,
    ladrar:function ladrar() {
        console.log("guauu guauu");
    }
}
perro.ladrar();
const gato={
    nombre,
    edad,
    ladrar(){
        console.log("miau miau");
    }
}
console.log(gato);
gato.ladrar();
*/





//------- PARAMETROS REST Y OPERADOR DE PROPAGACION
/*function suma(a,b){
    return a+b;
}
console.log(suma(1,2));
*/






//------ ARROW FUNCITONS

// ejemplo1
    // function decirHola(){//función declarada
    //     return "Hola mundo";
    // }
    // console.log(decirHola());

// ejemplo2
    // const saludar=function(){
    //     console.log("función expresada");
    // }
    // saludar();
// ejemmplo3
    // const saludarArrowFunction=()=>{
    //     console.log("arrow Functions");
    // }
    // const saludarArrowFunction=()=>console.log("arrow Functions");
    // saludarArrowFunction();

// ejemplo4
    // const nombre=yo=>console.log(`Hola: ${yo}`);
    // nombre("victor");
// ejemplo5
    // const suma=(a,b)=>a+b;
    // console.log(suma(7,9));

    // function perro(){
    //     console.log(this);
    // }
    // perro();

    // const dog={
    //     nombre:"Lumpy",
    //     raza:"chusca",
    //     ladrar:()=>{
    //         console.log(this);
    //     }
    // }
    // dog.ladrar();
/*
    const animal={
        nombre:"lumpy",
        sonar(){
            console.log("hago sonidos");
        }
    }
    const animal2={
        nombre:"hatake",
        sonar(){
            console.log("hago sonidos tambien");
        }
    }
    console.log(animal);
    console.log(animal2);

    // funcion constuctora
    function Animal(nombre, genero){
        // atributos
        this.nombre=nombre;
        this.genero=genero;
       
    }
    // metodos
    Animal.prototype.sonar=function(){
        console.log("Los animales hacen sonidos");
    }
    Animal.prototype.saludar=function(){
        console.log(`Hola soy: ${this.nombre}`);
    }

    const lumpy=new Animal("lumpy","hembra");
    const hatake=new Animal("Hatake", "macho");
    lumpy.saludar();
    hatake.saludar();
    console.log(lumpy);
    console.log(hatake);
*/





// CLASES

/*class Animal{
 constructor(nombre, genero){
     this.nombre=nombre;
     this.genero=genero;
 } 
// metodos
    sonar(){
        console.log("Hago sonido");
    }
    saludar(){
        console.log(`Hola mi nombre es: ${this.nombre}`);
    }
}
class Perro extends Animal{
    constructor(nombre, genero, raza){
        super(nombre, genero);
        this.raza=raza;
    }
    sonar(){
        console.log("Guauu, gauu!");
    }
    saludar(){ 
        console.log("Soy hijo de lumpy")
    }
}

const chinky=new Perro("Chinky", "macho","Chuzco");
console.log(chinky);
chinky.sonar();
chinky.saludar();
*/





/*
//------ GETTERS AND SETTERS

class Animal{
    constructor (nombre, genero,tamanio){
        this.nombre=nombre;
        this.genero=genero;
        this.tamanio=tamanio;       
    }
    static info(){//metodo estatico no necesita ser instanciado su clase
        console.log("Los perros son animales mamiferos");
    }
    saludar(){
        console.log("Hola, soy un ser vivo")
    }
}
class Perro extends Animal{
    constructor(nombre, genero, tamanio){
        super(nombre, genero,tamanio);
        this.raza=null;
    }
  
    get obtenerRaza(){
        return this.raza;
    }
    set asignarRaza(raza){
        this.raza=raza;
    }
    
}
Animal.info();
const chinky=new Perro("Chinky","Macho","normal");
chinky.asignarRaza="chusco";
console.log(chinky.obtenerRaza)
console.log(chinky)
Perro.info();
*/




// DATE

/*console.clear();
const nombre= ["victor","VICTOR", "Victor"];
console.table(nombre);
console.log(Date());
const fecha=new Date();
// D L M M J V S->
// 0,1,2,3,4,5,6
console.log(fecha.getDay());
console.log(fecha.getMonth());
console.log(fecha.getDate());
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());
console.log(fecha.toDateString());
console.log(fecha.toLocaleString());
console.log(fecha.getTimezoneOffset());
const fechaCumpleaños=new Date(1993,1,24);
console.log(fechaCumpleaños);
*/
console.clear();




// MATH

/*console.log(Math.abs(-255));
console.log(Math.ceil(7.1));
console.log(Math.floor(7.1));
console.log(Math.round(7.5));
console.log(Math.fround(7.5622))


let num1=53.918925;
console.log(num1.toFixed(2));//cantidad de decimales
console.log(num1.toPrecision(3))//cantidad de digitos a mostrar
*/





// ALERT CONFIRM PROMPT

/*const num=prompt("ingresa su numero");
alert(`Su numero es: ${num}`);
conf=confirm("HOla, acepta ps"),
console.log(conf);*/





// FUNCIONES ANONIMAS AUTOEJECUTABLES

/*    //clasica
    (function(d,w,c){
        console.log("mi primer funcion autoejecutable");
    })(document,window,console);

    //la Crockford (JavaScript the good parts)
    ((function(){
        console.log("version Crockford");
    })());

    //unaria
    +function(){
    console.log("version Unaria")
    }();

    //Facebook
    !function(){
        console.log("Version Facebook");
    }();

*/





//EJERCICIOS

/*  // 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
    function contar(cadena){
        return cadena.length;
    }
    console.log(contar("hola victor"));

    // 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
    function recortar(cadena2,separador,limite){
        let separado= cadena2.split(separador,limite);
        return separado.join("");
    
    }
    function recortar2(cadena3,indice){
        return cadena3.substring(0,indice);
    }
    console.log(recortar("hola victor como estas","",13));
    console.log(recortar2("hola victor",3));

    // 3) Programa una función que dada una String te devuelva un Array de textos separados por
    // cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
    function elementos(string, caracter){
        return string.split(caracter);
    }
    console.log(elementos("soy victor que tal"," "))

    // 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
    function xveces(palabra,x){

        if(typeof palabra==="string"){
            palabra=palabra+" ";
            if(Number.isInteger(x)){
                return palabra.repeat(x);
            }
            else{
                console.error("Numero de veces inválido");
            }
        }else{
            console.error("No es un string");
        }
    }
    console.log(xveces("as",100));
*/



// /* 5) Programa una función que invierta las palabras de una cadena de texto,
//  miFuncion("Hola Mundo") devolverá "odnuM aloH".*/
// function invertir(texto){
//     let invertido="";
//     for (let i = texto.length -1; i >=0 ; i--) {
        
//         invertido += texto[i];
//     }
//     return invertido;
// }
// console.log(invertir("anita lava la tina"));

// /* 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo,
//  miFuncion("hola mundo adios mundo", "mundo") devolverá 2.*/
//     function buscarRepetido(palabra,buscar){
//         let contador=0;
//         let array=palabra.split(" ");
//         for (let i = 0; i < array.length; i++) {
//             if(array[i]===buscar){
//                 contador++;
//             }           
//         }
//         return contador;
//     }
//     console.log(buscarRepetido("hola mundo como estas mundo ","mundo"));

// /* 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), 
//  mifuncion("Salas") devolverá true.*/
//     function polidromo(frase){
//         let minuscula=frase.toLowerCase().replace(/ /g,"");
//         let array=minuscula.split("");
//         let invertido=array.reverse();//invierte el valor del array
//         let union=invertido.join().replace(/,/g,"");
//         if (minuscula===union) {
//             return true;
//         }else{
//             return false
//         }    
        
//     }
//     console.log(polidromo("anita lava la tina"));

//     /* 8) Programa una función que elimine cierto patrón de caracteres de un texto dado,
//  miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.*/
// console.clear();
//  function eliminar(frase,eliminar){
//     let array=frase.split(" ");
//     //  let element=""
//     for (let i = 0; i < array.length; i++) {
        
//         console.log(array[i].slice(eliminar.length));
        
//     }
//  }
//  eliminar("hola1 hola2 hola3","hola");

 /*9) Programa una función que obtenga un numero aleatorio entre 501 y 600.*/
//  function random(){
     
//      for (let i = 0; i < 1000; i++) {
//         let ran=Math.round(Math.random()*(600-501))+501;
//          console.log(`${i}: ${ran}`);
//          if(ran==500 || ran==601){
//             break;
//         }
//      }
//  }
//  random();



 /*10) Programa una función que reciba un número y evalúe si es capicúa o no 
(que se lee igual en un sentido que en otro), miFuncion(2002) devolverá true.*/
// function capicua(numero){
    
//     if(Number.isInteger(numero)){
        
//         if(numero>=10){
//             let string=numero.toString();
//             let array=string.split("");
//             let cant=array.length;
//             let num=0;
//             let sum=0;
//               for (let i =cant-1; i>=0; i--) {
//                 num=parseInt(array[i])*Math.pow(10,i);
//                 sum=sum+num;                
//             }
//             if(numero==sum){
//                 console.log("Es capicua",numero, sum)
//             }else{
//                 console.log(numero, sum,"No es capicua :,v")
//             }
//         }else{

//             console.log("ingrese digito de 2 cifras a más")
        
//         }
        
//     }
// }
// capicua(101);
// /*11) Programa una función que calcule el factorial de un número 
// (El factorial de un entero positivo n, se define como el producto 
// de todos los números enteros positivos desde 1 hasta n), miFuncion(5) devolverá 120.*/

// function factorial(numero){
//     if(Number.isInteger(numero) && numero>0){
//         let acumulador=1;
//         for (let i = 0; i < numero; i++) {
//             acumulador=(i+1)*acumulador;            
//         }
//         console.log(acumulador);
//     }else{
//         console.log("Ingrese un valore entero y positivo");
//     }
    
// }
// factorial(5);

/*12) Programa una función que determine si un número es primo 
(aquel que solo es divisible por sí mismo y 1) o no, miFuncion(7) devolverá true.*/


// function primo(numero){
//     let contador=0;
//     for (let i = 0; i < numero; i++) {
//         if(numero%(i+1)==0){
//             contador++;
//         }
//         console.log(contador);
        
//     }
//     if (contador==2) {
//         console.log("es primo");
//     }else{
//         console.log("no es primo");
//     }

// }
// primo(1);
//  /*13) Programa una función que determine si un número es par o impar,
//  miFuncion(29) devolverá Impar.*/
// function numer_par(){
//     if(numer_par%2==0){
//         console.log("es par");
//     }
//     else{
//         console.log("Es inpar");
//     }
// }
// numer_par(0);
//  /*14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa,
// miFuncion(0,"C") devolverá 32°F.*/
// function conversion(temperatura,escala){
//     switch (escala) {
//         case "C":
//             n_tem=temperatura*9/5 +32;
//             console.log(`${n_tem} °F`)
//             break;
//         case "F":
//             n_tem=(10*temperatura-32)*5/9;
//             console.log(`${n_tem} °C`)
//         default:
//             break;
//     }
// }
// conversion(0,"F");





// /*15) Programa una función para convertir números de base binaria a decimal y viceversa,
//  miFuncion(100,2) devolverá 4 base 10.*/
 
//     function convertir(numero,base){
//         if(Number.isInteger(numero) && Number.isInteger(base)){
//             let string=numero.toString();
//         let array=string.split("");
//         let sum=0;
//         switch (base) {
//             case 2:
//                 for (let i =0; i <array.length ; i++) {
//                    if (parseInt(array[i])<base) {
//                     num=parseInt(array[i]);
//                     let baseTo=Math.pow(2,array.length-i-1)*num;  
//                     sum=sum+baseTo;
                    
//                    }else{
                       
//                        console.log("numero es incorrecto");
//                    }
                                   
//                 }
//                 break;

//             case 10:
//                 for (let i =0; i <array.length ; i++) {
//                     num=parseInt(array[i]);
//                     let baseTo=Math.pow(10,array.length-i-1)*num;
//                     sum=sum+baseTo;    
//                 }
//                 break;
//             default:
//                 return "CONVERTIR(numero, base) base--> 10 o 2";
            
//         }
//         return `el numero ${numero} en base ${base} es: ${sum}`
//         }
//         else{
//             console.log("ingrese numero positvos y enteros")
//         }
        
//     } 
//     // console.log(convertir(1131,2));
 
//  /*16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada,
//   miFuncion(1000, 20) devolverá 800.*/

//   function descuento(monto,des){
//     let total = monto*(1-(des/100));
//     console.log(total);
// }
// // descuento(1000,20);

// /*17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy,
// miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).*/
// function fec_nac(anio,mes,dia){
//     let h=new Date();
//         h.setTime(h.getTime());
    
//     let cum=new Date(anio,mes-1,dia);
//         cum.setTime(cum.getTime());

//     if(h.getTime()>cum.getTime()){
    
    
//     let d=h.getTime()-cum.getTime();
    
//     let d2=new Date();
//     d2.setTime(d);
//     //geDay devuelve el numero de día en la semana
//     //Do Lu Ma Mi Ju Vi Sa
//     //0, 1, 2, 3, 4, 5, 6 
//     let d2a=d2.getFullYear()-1970;
//     let d2m=d2.getUTCMonth();
//     let d2d=d2.getUTCDate()-1;
    
//     console.log(`han pasado ${d2a} años, ${d2m} meses y ${d2d} dias desde que naciste`);
     
//     }else{
//         console.log("Ingrese una fecha menor a la fecha actual");
//     }
// }

// fec_nac(2020,10,15);



/*18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes,
miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.*/
function nvocales_nk(frase){
    let nombre=frase;
    let array=nombre.split("");
    contadorv=0;
    contador_=0;
    contadork=0;
    for (let i = 0; i < array.length; i++) {
        
        if(array[i]=="a"||array[i]=="e"||array[i]=="i"||array[i]=="o"||array[i]=="u"){
            contadorv++;
        }else if(array[i]==" "){
            contador_++;
        }        
    }
    contadork=nombre.length-(contadorv+contador_);
   console.log(`hay ${contadorv} vocales y ${contadork} consonantes`)

}
// nvocales_nk("hola victor");


const contarLetras=(cadena="")=>{
    if(!cadena) return console.warn("No ingresaste una cadena de texto");
    if(typeof cadena!=="string") return console.info(`EL valor ${cadena} ingresado NO es una cadena de texto`);

    let vocales=0;
    let consonantes=0;

    cadena=cadena.toLocaleLowerCase();
    for (const letra of cadena) {
        if(/[aeiou]/.test(letra)) vocales++;        
        if(/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) consonantes++;
    }
    return console.info({
        cadena,
        vocales,
        consonantes
    })
}
// contarLetras("peña");
/*19) Programa una función que valide que un texto sea un nombre válido,
 miFuncion("Jonathan MirCha") devolverá verdadero.*/

function cadena(frase){        
    if(typeof frase==="string"){
        let min=frase.toLocaleLowerCase();
        let array=min.split("");
        let contador=0;        

        for (let i = 0; i < array.length; i++) {
            if((array[i].charCodeAt()>=97 && array[i].charCodeAt()<=122) || array[i].charCodeAt()==32 || array[i]==="ñ"){
                contador++;            
            }
        }       

        if(contador==frase.length){
            console.log("Su nombre es correcto");
        }else{
            console.log("Su nombre tiene caracteres raros");
        }
    }else{
        console.log("Asegurese de ingresar un string");
    }
    
}
// cadena("contreras");


const nombre=(cadena="")=>{
    if(!cadena) return console.warn("No ingresaste una cadena de texto");
    if(typeof cadena!=="string") return console.info(`${cadena} NO es una cadena de texto`);
    cadena=cadena.toLocaleLowerCase();

    //^ => no puede haber nada antes
    //$ => no puede haber nada despues
    let er=/(^[a-zñ]+)(\s?[a-zñ])+$/.test(cadena);
    return(er)
    ?console.info(`${cadena} es un nombre valido`)
    :console.error(`${cadena} NO es un nombre valido`);
}
// nombre("peña lopez llante");


 /*20) Programa una función que valide que un texto sea un email válido,
 miFuncion("jonmircha@gmail.com") devolverá verdadero.*/
 const email=(texto="")=>{
     if(!texto) return console.warn("No ingresaste una cadena");
     if(typeof texto!=="string") return console.info(`${texto} No es una cadena de texto`);

     let er=/(^[a-zñ0-9]+)(\_?\.?\-?[a-zñ0-9])*@([a-z]+)\.([a-z]{2,})$/i.test(texto); 
    // let er=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(texto);
    
    return(er)     
    ?console.info(`${texto} es un email valido`)
    :console.error(`${texto} NO es un email valido`);
 }
 email("contreras_alchemist45@outlook.com");