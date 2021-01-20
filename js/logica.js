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



// /*18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes,
// miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.*/
// function nvocales_nk(frase){
//     let nombre=frase;
//     let array=nombre.split("");
//     contadorv=0;
//     contador_=0;
//     contadork=0;
//     for (let i = 0; i < array.length; i++) {
        
//         if(array[i]=="a"||array[i]=="e"||array[i]=="i"||array[i]=="o"||array[i]=="u"){
//             contadorv++;
//         }else if(array[i]==" "){
//             contador_++;
//         }        
//     }
//     contadork=nombre.length-(contadorv+contador_);
//    console.log(`hay ${contadorv} vocales y ${contadork} consonantes`)

// }
// // nvocales_nk("hola victor");


// const contarLetras=(cadena="")=>{
//     if(!cadena) return console.warn("No ingresaste una cadena de texto");
//     if(typeof cadena!=="string") return console.info(`EL valor ${cadena} ingresado NO es una cadena de texto`);

//     let vocales=0;
//     let consonantes=0;

//     cadena=cadena.toLocaleLowerCase();
//     for (const letra of cadena) {
//         if(/[aeiou]/.test(letra)) vocales++;        
//         if(/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) consonantes++;
//     }
//     return console.info({
//         cadena,
//         vocales,
//         consonantes
//     })
// }
// // contarLetras("peña");
// /*19) Programa una función que valide que un texto sea un nombre válido,
//  miFuncion("Jonathan MirCha") devolverá verdadero.*/

// function cadena(frase){        
//     if(typeof frase==="string"){
//         let min=frase.toLocaleLowerCase();
//         let array=min.split("");
//         let contador=0;        

//         for (let i = 0; i < array.length; i++) {
//             if((array[i].charCodeAt()>=97 && array[i].charCodeAt()<=122) || array[i].charCodeAt()==32 || array[i]==="ñ"){
//                 contador++;            
//             }
//         }       

//         if(contador==frase.length){
//             console.log("Su nombre es correcto");
//         }else{
//             console.log("Su nombre tiene caracteres raros");
//         }
//     }else{
//         console.log("Asegurese de ingresar un string");
//     }
    
// }
// // cadena("contreras");


// const nombre=(cadena="")=>{
//     if(!cadena) return console.warn("No ingresaste una cadena de texto");
//     if(typeof cadena!=="string") return console.info(`${cadena} NO es una cadena de texto`);
//     cadena=cadena.toLocaleLowerCase();

//     //^ => no puede haber nada antes
//     //$ => no puede haber nada despues
//     let er=/(^[a-zñ]+)(\s?[a-zñ])+$/.test(cadena);
//     return(er)
//     ?console.info(`${cadena} es un nombre valido`)
//     :console.error(`${cadena} NO es un nombre valido`);
// }
// // nombre("peña lopez llante");


//  /*20) Programa una función que valide que un texto sea un email válido,
//  miFuncion("jonmircha@gmail.com") devolverá verdadero.*/
//  const email=(texto="")=>{
//      if(!texto) return console.warn("No ingresaste una cadena");
//      if(typeof texto!=="string") return console.info(`${texto} No es una cadena de texto`);

//      let er=/(^[a-zñ0-9]+)(\_?\.?\-?[a-zñ0-9])*@([a-z]+)\.([a-z]{2,})$/i.test(texto); 
//     // let er=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(texto);
    
//     return(er)     
//     ?console.info(`${texto} es un email valido`)
//     :console.error(`${texto} NO es un email valido`);
//  }
//  email("contreras_alchemist45@outlook.com");





// /*21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado,
// mi_funcion([1, 4, 5]) devolverá [1, 16, 25].*/
// const elevarCuadrado=(array=undefined)=>{
//     if (array===undefined) return console.warn("No ingresaste un arreglo");
//     if(!(array instanceof Array)) return console.error(`El valor que ingresaste no es un arreglo`);
//     if(array.length===0) return console.warn("El arreglo está vacio");

//     for (const elemento of array) {
//         if(typeof elemento!=="number") return console.warn(`el elemento "${elemento}" no es numérico`);
//     }

//     const newArray=array.map(i=>Math.pow(i,2));//el metodo map devuelve un array del array existente
//     console.log(`${array} =>${newArray}`)
// }
// // elevarCuadrado([1,1.5,3]);

// /*22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array,
// miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].*/
 
// const maxMin=(array=undefined)=>{
//     if(array===undefined) return console.warn("No ingresaste un arreglo");
//     if(!(array instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");
//     if(array.length===0) return console.warn("El arreglo está vacio");
//     for (const elemento of array) {
//         if(typeof elemento!=="number") return console.warn(`El elemento "${elemento}" no es un numero`);        
//     }

//     for (let i = 0; i < array.length; i++) {
//         for (let j = 1; j < array.length; j++) {
//             if(array[j]<array[j-1]){
//                 let aux = array[j];
//                 array[j]=array[j-1];
//                 array[j-1]=aux; 
//             }            
//         } 
//     }

//     let result=array.filter(filtrar_max_min);
    
//     function filtrar_max_min(elemento){
//         let start=0;
//         let end=array.length-1;
//         return elemento ==array[start] || elemento==array[end];
//     }

//     return console.log(result);
    

// }

// // maxMin();
// // maxMin("");
// // maxMin([]);
// // maxMin(["",1])
// // maxMin([5,3,7,2,4])

// /*23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares,
// miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.*/

// function parEimpar(array){
//     if (array===undefined) return console.warn("No ingresaste un arreglo");
//     if(!(array instanceof Array)) return console.error(`El valor que ingresaste no es un arreglo`);
//     if(array.length===0) return console.warn("El arreglo está vacio");
//     for (const elemento of array) {
//         if(typeof elemento!=="number") return console.warn(`el elemento "${elemento}" no es numérico`);
//     }

//     let filterPares=array.filter(par);
//     let filterImpares=array.filter(impar)

//      return console.log(`${filterPares} Pares`,`${filterImpares} Impares`)
 
//     function par(elemento){
//      return elemento%2==0;
//     }
    
//     function impar(elemento){
//      return elemento%2!==0;
//     }
//   }
 
// //   parEimpar([1,2,3,4,5,6,7,8,9,10]);





// /*24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, 
// el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente,
// miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.*/

// const asc_des=(array)=>{
//     if (array===undefined) return console.warn("No ingresaste un arreglo");
//     if(!(array instanceof Array)) return console.error(`El valor que ingresaste no es un arreglo`);
//     if(array.length===0) return console.warn("El arreglo está vacio");
//     for (const elemento of array) {
//         if(typeof elemento!=="number") return console.warn(`el elemento "${elemento}" no es numérico`);
//     }

//     function asc(array){
//         for (let i = 0; i < array.length; i++) {
//             for (let j = 1; j < array.length; j++) {
//                 if(array[j]<array[j-1]){
//                     let aux = array[j];
//                     array[j]=array[j-1];
//                     array[j-1]=aux;
//                 }                
//             }            
//         }
//         return array;    
//     }

//     function des(array){
//         for (let i = 0; i < array.length; i++) {
//             for (let j = 1; j < array.length; j++) {
//                 if(array[j]>array[j-1]){
//                     let aux = array[j-1];
//                     array[j-1]=array[j];
//                     array[j]=aux;
//                 }                
//             }            
//         }        
//         return array;
//     }

//     return console.log(asc(array),"Ascendente"), console.log(des(array),"Descendente");
// }
// // asc_des([8,2,-4,6,7,1]);



// /*25) Programa una función que dado un arreglo de elementos, elimine los duplicados,
// miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true]*/


// let array=[false,true,false,"1",5,true,25,"1",3,1];
// // console.log(array.splice(5,0,54));//devuelve los elementos eliminados
// // console.log(array.shift());// elimina el primer elemento y lo retorna
// // console.log(array);
// // let buscar=array.some(element=>element===2)// comprueba si al menos un elemento existe y retornará un boolean
// // console.log(buscar);

// const eliminar_duplicado=(array)=>{
//     if (array===undefined) return console.warn("No ingresaste un arreglo");
//     if(!(array instanceof Array)) return console.error(`El valor que ingresaste no es un arreglo`);
//     if(array.length===0) return console.warn("El arreglo está vacio");
    
//     for (let j = array.length-1; j >=0; j--) {
//         if (array.indexOf(array[j])!==j) eliminado=array.splice(j,1);            
          
//     }    

//     return console.log(array);
// }

// eliminar_duplicado();
// eliminar_duplicado(6);
// eliminar_duplicado([]);
// eliminar_duplicado([1,2,3,1,2,3,4,5,2,0,1,97,5,0,58]);






// /*26) Programa una función que dado un arreglo de números obtenga el promedio,
// promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.*/

// const promedio=(array)=>{
//     if (array===undefined) return console.warn("No ingresaste un arreglo");
//     if(!(array instanceof Array)) return console.error(`El valor que ingresaste no es un arreglo`);
//     if(array.length===0) return console.warn("El arreglo está vacio");
//     for (const elemento of array) {
//         if(typeof elemento!=="number") return console.warn(`el elemento "${elemento}" no es numérico`);
//     }

//     const promedio=(array.reduce((acc,ele) => acc+ele,0))/array.length;
//     console.log(promedio);
    
// }

// // promedio([10,20,6]);





// /*27) Programa una clase llamada Pelicula.
// La clase recibirá un objeto al momento de instanciarse con los siguentes datos: 
// id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
//   - Todos los datos del objeto son obligatorios.
//   - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
//      7 restantes números.(OK)
//   - Valida que el título no rebase los 100 caracteres.(OK)
//   - Valida que el director no rebase los 50 caracteres.(OK)
//   - Valida que el año de estreno sea un número entero de 4 dígitos.(OK)
//   - Valida que el país o paises sea introducidos en forma de arreglo.(OK)
//   - Valida que los géneros sean introducidos en forma de arreglo(OK).
//   - Valida que los géneros introducidos esten dentro de los géneros(OK) 
//      aceptados*.
//   - Crea un método estático que devuelva los géneros aceptados*(OK).
//   - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
//     decimal de una posición.(OK)
//   - Crea un método que devuelva toda la ficha técnica de la película.(OK)
//   - Apartir de un arreglo con la información de 3 películas genera 3 
//     instancias de la clase de forma automatizada e imprime la ficha técnica 
//     de cada película.

// * Géneros Aceptados: 
// Action, Adult, Adventure, Animation, Biography, Comedy,Crime, 
// Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, 
// History, Horror, Musical, Music, Mystery, News, Reality-TV, 
// Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.*/

// class Pelicula{
//     constructor({id,titulo,director,anio,pais,generos,calificacion}){
//         this.id=id;
//         this.titulo=titulo;
//         this.director=director;
//         this.anio=anio;
//         this.pais=pais;
//         this.generos=generos;
//         this.calificacion=calificacion;

//        this.validarIMDB(id);
//        this.validarDirector(director);
//        this.validarTitulo(titulo);
//        this.validarAnio(anio);
//        this.validarPais(pais);
//        this.validarGenero(generos);
//        this.validarCalificacion(calificacion);
    
//     }

//     static get listaGeneros(){
//         return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy","Crime", 
//             "Documentary","Drama", "Family", "Fantasy", "Film Noir", "Game-Show", 
//             "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", 
//             "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];
//     }
//     static generosAceptados(){
//         return console.info(Pelicula.listaGeneros.join(".\n"));
//     }
//     validarCadena(propiedad,valor){
//         if(!valor) return console.warn(`${valor} está vacio`);
//         if(typeof valor!=="string") return console.error(`${propiedad}, ${valor} "ingresado, NO es una cadena de texto"`);
        
//         return true;
//     }

//     validarLongitudCadena(propiedad, valor, longitud){
//         if(valor.length>longitud) return console.error(`${propiedad} "${valor}" excede el numero de caracteres permitidos ${longitud}`);
//         return true;
//     }

//     validarEntero(propiedad, valor){
//         if(!valor) return console.error(`el ${propiedad} está vacio`);
//         if(typeof valor!=="number") return console.error(`${propiedad} "${valor} no es un número"`);

//         return true;
//     }
//     validarArray(propiedad, valor){
//         if (valor===undefined) return console.warn("No ingresaste un arreglo");
//         if(!(valor instanceof Array)) return console.error(`El ${propiedad} que ingresaste no es un arreglo`);
//         if(valor.length===0) return console.warn("El arreglo está vacio");
//         for (const elemento of valor) {
//             if(typeof elemento!=="string") return console.warn(`${propiedad} "${elemento}" no es una cadena de texto`);
//         }

//         return true;
//     }


//     validarIMDB(id){
//         if(this.validarCadena("IMDB id",id)){
//             if(!(/^([a-z]{2}([0-9]){7}$)/.test(id))){
//                 return console.error(`"${id}" no es valido, debe tener 9 caracteres, los 2 primero letras minusculas y los restanes números`);
//             }
//         }    
//     }

//     validarTitulo(titulo){
//         if(this.validarCadena("Titulo",titulo)){
//             this.validarLongitudCadena("Titulo",titulo,100);
//         }    
//     }

//     validarDirector(director){
//         if(this.validarCadena("Director",director)){
//             this.validarLongitudCadena("Director",director,50);
//         }    
//     }

//     validarAnio(anio){
//         if(this.validarEntero("Anio",anio)){
//             if(!(anio>1000 && anio<9999) ){
//                 return console.error(`Ingresar anio valido de 4 digitos`);
//             }
//         }
//     }
//     validarPais(pais){
//         if(this.validarArray("Pais",pais)){
           
//         }
//     }
//     validarGenero(generos){
//         if(this.validarArray("Genero",generos)){
//             for (const genero of generos) {
//                 if(!(Pelicula.listaGeneros.includes(genero))){
//                     return console.error(`"${generos.join(", ")}" no pertenece a Generos permitidos ${Pelicula.generosAceptados()}`);
                    
                    
//                 }
//             }
//         }
//     }
//     validarCalificacion(calificacion){
//         if(this.validarEntero("Calificación",calificacion)){
//             if(!(calificacion>=0 && calificacion<=10)){
//                 return console.error("Puntación permitido 0-10");
//             }else{
//                 this.calificacion=calificacion.toFixed(1);
//             }           
//         }
//     }
//     fichaTecnica(){
//         console.info(`FICHA TECNICA:\nTitulo: ${this.titulo}\nDirector: ${this.director}\nEstreno: ${this.anio}\nPais: ${this.pais.join(", ")}\nCalificación: ${this.calificacion}\nIMDB: ${this.id}\nGeneros: ${this.generos.join(",")} `);
//     }

// }
// // Pelicula.generosAceptados();
// const peli=[
//     {
//         id:"tt2123456",
//         titulo:"La hera del Hielo",
//         director:"victor contreras",
//         anio:1890,
//         pais:["Perú","Colombia"],
//         generos:["Comedy","Sport"],
//         calificacion:9.25
//     },
//     {
//         id:"tt2123456",
//         titulo:"La hera del Hielo",
//         director:"victor contreras",
//         anio:1290,
//         pais:["Perú","Colombia"],
//         generos:["Comedy","Sport"],
//         calificacion:9.25
//     },
//     {
//         id:"tt2123456",
//         titulo:"La hera del Hielo",
//         director:"victor contreras",
//         anio:1990,
//         pais:["Perú","Colombia"],
//         generos:["Comedy","Sport"],
//         calificacion:9.25
//     }
// ]

// peli.forEach(elemento=>new Pelicula(elemento).fichaTecnica());





//Asincronía en JS

//temporizador settimeout() & setInterval()

// setTimeout(()=>{
//     console.log("Ejecutando en SetTimeOut 3s")
// },3000)
// let tem=setInterval(()=>{
//     console.log("se mostrará cada 2seg",new Date().toLocaleString())
// },2000)
// clearInterval(tem);

//Asincronia y event loop


//CALLBACK 
// function cuadradoCallBack( valor, callback){
//     setTimeout(()=>{
//         callback(valor, Math.pow(valor,2));
//     },0 | Math.random()*1000)
// }
// cuadradoCallBack(0,(valor,resultado)=>{
//     console.log("Inicia CallBack");
//     console.log(`Valor: ${valor}, Resultado: ${resultado}`);
//     cuadradoCallBack(1,(valor,resultado)=>{        
//         console.log(`Valor: ${valor}, Resultado: ${resultado}`);
//         cuadradoCallBack(2,(valor,resultado)=>{
//             console.log(`Valor: ${valor}, Resultado: ${resultado}`);
//             cuadradoCallBack(3,(valor,resultado)=>{
//                 console.log(`Valor: ${valor}, Resultado: ${resultado}`);
//                 cuadradoCallBack(4,(valor,resultado)=>{
//                     console.log(`Valor: ${valor}, Resultado: ${resultado}`);
//                     cuadradoCallBack(5,(valor,resultado)=>{
//                         console.log(`Valor: ${valor}, Resultado: ${resultado}`);
//                     })
//                 })
//             })
//         })
//     });    
// })






//PROMESA

// function cuadradoPromesa(valor){
//     if(typeof valor!=="number"){
//         return Promise.reject(`Error, el valor "${valor}" no es un numero`);
//     }

//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve({
//                 valor:valor,
//                 result:Math.pow(valor,2)
//             });
//         },0|Math.random()*1000);
//     });
// }

// cuadradoPromesa(0)
// .then((obj)=>{
//     console.log(`Promesa: ${obj.valor}, ${obj.result}`);
//     return cuadradoPromesa(1);
// })
// .then((obj)=>{
//     console.log(`Promesa: ${obj.valor}, ${obj.result}`);
//     return cuadradoPromesa(2);
// })
// .then((obj)=>{
//     console.log(`Promesa: ${obj.valor}, ${obj.result}`);
//     return cuadradoPromesa(3);
// })
// .then((obj)=>{
//     console.log(`Promesa: ${obj.valor}, ${obj.result}`);
//     return cuadradoPromesa("4");
// })
// .then((obj)=>{
//     console.log(`Promesa: ${obj.valor}, ${obj.result}`);
//     return cuadradoPromesa(5);
// })
// .then((obj)=>{
//     console.log(`Promesa: ${obj.valor}, ${obj.result}`);
//     console.log("Fin de la Promesa");
// })
// .catch(err=>console.error(err));





//Async Await

// function resolveAfter2Seconds(x) {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve(x);
//       }, 2000);
//     });
//   }
  
  
//   async function add1(x) {
//     const a = await resolveAfter2Seconds(20);
//     const b = await resolveAfter2Seconds(30);
//     return x + a + b;
//   }
  
//   add1(10).then(v => {
//     console.log(v);  // prints 60 after 4 seconds.
//   });
  
  
//   async function add2(x) {
//     const p_a = resolveAfter2Seconds(20);
//     const p_b = resolveAfter2Seconds(30);
//     return x + await p_a + await p_b;
//   }
  
//   add2(20).then(v => {
//     console.log(v);  // prints 60 after 2 seconds.
//   });





//Nuevos tipos JS



//SYMBOL

// let NOMBRE=Symbol("nombre");
// let SALUDAR=Symbol("saludar");
// const persona={
//     [NOMBRE]:"victor",
//     edad:27
// }
// console.log(persona)

// persona.NOMBRE="vcontreras"
// console.log(persona);
// console.log(persona.NOMBRE)
// console.log(persona[NOMBRE])
// persona[SALUDAR]=function(){
//     console.log("hola");
// }
// persona[SALUDAR]();

// console.log(persona)
// //no mostrará a los del tipo SYMBOL porque los mantendrá como privado 
// for (let propiedad in persona) {
//     console.log(propiedad);
//     console.log(persona[propiedad])
// }
// //mostrará los objetos SYMBOL
// let mostrar=Object.getOwnPropertySymbols(persona);
// console.log(mostrar);






// //SET
// //devuelve un array con valores únicos primitivos

// const set=new Set(["1",true,false,"1",2,1,{},{}]);
// console.log(set);
// //cantidad de itmes
// console.log("cantidad de elementos ünicos",set.size);
// //agregar datos a un SET
// const set2=new Set();
// set2.add(1);
// set2.add(2);
// set2.add("");
// set2.add("2");
// set2.add(true);
// set2.add({});
// set2.add(["1",2,"hola"]);
// set2.add("vcontreras")
// console.log(set2)
// //recorrer set con for of
// console.log("Recorriendo set")
// for (const item of set) {
//     console.log(item)
// }
// //recorrer set con forEach
// console.log("Recorriendo set2")
// set2.forEach(item=>console.log(item));
// //SET es un objeto iterable más no es un arreglo
// //para poder acceder a sus elementos tendremos 
// //que convertirlo en un array para poder acceder
// let arr=Array.from(set);
// console.log(arr[7]);
// //eliminar elementos de set2
// set2.delete(true);
// console.log(set2)
// //verificar si contiene
// console.log(set2.has("vcontreras"))//devolverá true

// //limpiar los elemntos de set2
// set2.clear()
// console.log(set2.size)






// //MAP
// //almacena pares clave/valor
// let mapa=new Map();

// mapa.set("name","victor");
// mapa.set("user","vcontreras");
// mapa.set("age",27)
// console.log(mapa.get("name"));
// //cantidad de elementos
// console.log(mapa.size);

// //preguntar si tiene la llave victor, devolverá TRUE si es verdadero
// console.log(mapa.has("victor"))//retornará FALSE

// //recorrer el mapa
// for (const [key,value] of mapa) {
//     console.log(`LLave: ${key},Valor: ${value}`)
// }

// //otra forma de agregar valores al MAP
// const mapa2=new Map([
//     ["nombre","victor"],
//     ["edad","25"],
//     ["correo","vcontreras4@gmail.com"],
//     ["ciudad","Lima"]
// ])
// console.log(mapa2);

// //mostrar las llaves del mapa
// const llavesMapa=[...mapa.keys()];
// console.log(llavesMapa)

// //mostrar los valores del mapa
// const valoresMapa=[...mapa.values()];
// console.log(valoresMapa)





// //WEAKSET
// var ws = new WeakSet();
// var obj = {};
// var foo = {};

// ws.add(window);
// ws.add(obj);

// ws.has(window); // true
// ws.has(foo);    // false, foo no fue agregado al conjunto

// ws.delete(window); // elimina window del conjunto
// ws.has(window);    // false, window fue eliminado
// console.log(ws)



// //WEAKMAPS

// var wm1 = new WeakMap(),
//     wm2 = new WeakMap(),
//     wm3 = new WeakMap();
// var o1 = {},
//     o2 = function(){},
//     o3 = window;

// wm1.set(o1, 37);
// wm1.set(o2, "azerty");
// wm2.set(o1, o2); // un valor puede ser cualquier cosa, incluidos objetos o funciones
// wm2.set(o3, undefined);
// wm2.set(wm1, wm2); // claves y valores pueden ser objetos cualesquiera. !Incluso WeakMaps!

// wm1.get(o2); // "azerty"
// wm2.get(o2); // undefined, porque no hay valor para o2 en wm2
// wm2.get(o3); // undefined, porque es es el valor del conjunto
// wm1.has(o2); // true
// wm2.has(o2); // false
// wm2.has(o3); // true (incluso si el valor es 'undefined')

// wm3.set(o1, 37);
// wm3.get(o1); // 37

// wm1.has(o1);   // true
// wm1.delete(o1);
// wm1.has(o1);   // false








//ITERABLES & ITERATORS

// const iterable =["hola","mundo"];
// const iterador=iterable[Symbol.iterator]();
// console.log(iterable);
// console.log(iterador);
// console.log(iterador.next().value); // 'hola'
// console.log(iterador.next().value); // 'mundo'
// console.log(iterador.next().done);  // true


// const iterable2=[1,2,3,4,5,6];
// const iterador2=iterable2[Symbol.iterator]();
// let next=iterador2.next();
// while(!next.done){
//     console.log(next.value);
//     next=iterador2.next();
// }






//GENERATORS
/*Los generadores son una alternativa poderosa: 
permiten definir un algoritmo iterativo
al escribir una sola función que puede mantener su propio estado.

YIELD: son los returns especiales de un generator
 a diferencia de que un YIELD si se ejecutará lo que hay debajo

function suma(){
    let a=3;
    let b=5;
    return a+b;//8
    return a*b//nunca se ejecutará
}
function* SUMA(){
    let a=3;
    let b=5;
    yield a+b;//8
    yield a*b//15
}
let SUMA_YIELD=SUMA();
console.log(SUMA_YIELD.next());//Object { value: 8, done: false }
console.log(SUMA_YIELD.next());//Object { value: 15, done: false }
console.log(SUMA_YIELD.next());//Object { value: undefined, done: true }*/

// function* iterable(){
//     yield "hola"
//     console.log("hola consola");
//     yield "hola 2"
//     console.log("más instrucciones del");
//     yield "hola 3"
//     console.log("hola consola");
//     yield "hola 4"
//     yield "hola 5"
// }

// let iterador=iterable();
// //accediendo a los valores de la funcion generadora
// /*PRIMERA FORMA
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());*/

// //SEGUNDA FORMA
// for(let y of iterador){
//     console.log(y);
// }

// //guardaremos en un arreglo 
// const arr=[...iterable()];//guardará cada YIELD en el arreglo
// console.log(arr);


// function cuadrado(valor){
//     setTimeout(()=>{
//         return console.log({valor, resultado:Math.pow(valor,2)})
//     },Math.random()*10000);
// }

// function* generador(){
//     console.log("Inicio del Generador");
//     yield cuadrado(0);
//     yield cuadrado(1);
//     yield cuadrado(2);
//     yield cuadrado(3);
//     yield cuadrado(4);
//     yield cuadrado(5);
//     yield cuadrado(6);
//     console.log("Fin del generador");
// }
// let gen=generador();
// for (let g of gen) {
//     console.log(g);
// }






//PROXY
//va generer una copia y va permitir que tu realices modificaciones al objeto original
// const persona={
//     nombre:"",
//     apellido:"",
//     edad:0
// }
// //operaciones que se realizará al objeto
// const handler={
//     set(obj,prop, val){
//         //validando si existen las propiedades, si existe se agregará 
//         if(Object.keys(obj).indexOf(prop)===-1){
//             //console.log(Object.keys(obj))//devolverá las propiedades del obj
//             return console.error(`la propiedad "${prop}" no existe en el objeto Persona()`);           
//         }
//         obj[prop]=val;
//     }
// }
// const alumno = new Proxy(persona,handler)
// alumno.nombre="victor";
// alumno.apellido="contreras";
// alumno.edad=27;
// alumno.direccion="Cañete"//está agregando la propiedad al obj persona
// console.log(alumno);







//PROPIEDADES DINAMICAS DE LOS OBJETOS
// let aleatorio=Math.round(Math.random()*100+5);
// const objUsuarios={
//     propiedad:"valor",
//     [`id_${aleatorio}`]:"valor aleatorio"
// }
// console.log(objUsuarios);

// const usuarios=["Victor","Contreras","Pariona","Victor2","Contreras2","Pariona2"];
// usuarios.forEach((usuario,index) =>objUsuarios[`id_${index}`]=usuario);
// console.log(objUsuarios);









//THIS
//hará referencia al objeto global (window)
// console.log(window)
// console.log(this)
// this.nombre="contexto Global"


// function imprimir(){
//     console.log(this.nombre);
// }

// imprimir();//Contexto Global

// const obj={
//     nombre:"Contexto Objeto",
//     imprimir:function(){
//         console.log(this.nombre);
//     }
// }

// obj.imprimir();//Contexto Objeto

// const obj2={
//     nombre:"Contexto OBJETO 2",
//     imprimir
// }
// obj2.imprimir();//Contexto OBJETO 2

// const obj3={
//     nombre:"Contexto OBJETO 3",
//     imprimir:()=>{
//         console.log(this.nombre)
//     }
// }
// obj3.imprimir();//Contexto Global
// //las arrow funtions no genera scopes y obedece en donde fue creado el obejto

// function Persona(nombre){
//     this.nombre=nombre
//     return console.log(this.nombre);
// }
// let alumno=new Persona("victor");//victor


// function Persona2(nombre){
//     this.nombre=nombre
//     return function(){
//         console.log(this.nombre)
//     }
// }
// let alumno2=new Persona2("Contreras");
// alumno2()/*devuelve CONTEXTO GLOBAL porque dentro de su escope no encuentra
// la variable nombre y se sale del escope padre y trae el nombre 
 
// para solucionar el error anterior usaremos arrow functios porque el arrow function
// no crea scopes así que nos devolvera la propiedad nombre creada en la function*/

// function Persona3(nombre){
//     this.nombre=nombre
//     return ()=>{
//         console.log(this.nombre)
//     }
// }
// let alumno3=new Persona3("Pariona");
// alumno3();//Pariona





//CALL
//El método call() llama a una función con un valor this asignado y 
//argumentos provistos de forma individual.
// const person1={
//     firstName:"victor",
//     lastName:"Contreras",
//     fullName:function(){
//         return console.log(`${this.firstName} ${this.lastName}`)
//     }
// }
// person1.fullName();//victor contreras

// const person2={
//     firstName:"hatake",
//     lastName:"Kakashi",
// }
// person1.fullName.call(person2);//hatake kakashi

// //APPLY
// //recibe los métodos en forma de un array
// const person3={
//     firstName:"victor",
//     lastName:"Contreras",
//     fullName:function(city,country){
//         this.city=city;
//         this.country=country;
//         return console.log(`${this.firstName} ${this.lastName} Ciudad:${city} Pais:${country}`)
//     }
// }
// person3.fullName();//victor contreras

// const person4={
//     firstName:"hatake",
//     lastName:"Kakashi",
// }
// person3.fullName.apply(person4,["Lima","Perú"]);//hatake kakashi


// //BIND
// //crea una nueva función
// this.x=10;
// const obj={
//     x:30,
//     getx:function (){
//         return this.x
//     }     
// };

// console.log(obj.getx());//30
//  let y=obj.getx;//10 porque en este caso THIS apunta al objeto global
// console.log(y());

// function list(...arr){
//     // return Array.prototype.slice.call(arguments);
//     return arr.slice()
// }
// let lista=list(1,2,3,5);
// let agregarElemento=list.bind(undefined,24)//retorna una nueva funcion
// let list3=agregarElemento();
// let lista4=agregarElemento(2,15,16,17,18)
// console.log(lista4)








//JSON
// const json={
// "employees":[
//       {"firstName":"John","age":25},
//       {"firstName":"Anna","age":26},
//       {"firstName":"Peter","age":28}
//     ],
// "e-mail":"abc@gmail.com",
// "anio":2020
    
// }
// console.log(json.firstName);
// console.log(JSON);
// console.log(JSON.parse("{}"))//object
// console.log(JSON.parse("[1,2,3]"))//array
// console.log(JSON.parse("true"));
// console.log(JSON.parse("false"));
// console.log(JSON.parse('{"employees":[{"firstName":"John","age":25},{"firstName":"Anna","age":26},{"firstName":"Peter","age":28}],"e-mail":"abc@gmail.com","anio":2020}'))
// //devolver en formato JSON
// console.log(JSON.stringify({}));
// console.log(JSON.stringify([1,2,3,4]));
// console.log(JSON.stringify(true))
// console.log(JSON.stringify(false))
// console.log(JSON.stringify({x:2,y:3}))
// console.log(JSON.stringify(json)



//   let contenido=document.getElementById("contenido")
//   function consultar(id){
//     fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//     .then(res=>res.json())
//     .then(data=>{
//         console.log(data)
//         let type=data.json();
//         contenido.innerHTML=`<img src="${data.sprites.front_default}" alt="" class="img-fluid">
//         <h2>${data.name}</h2>
//         <p>${type.name}</p>`                    
//     })
// }
// consultar(3);