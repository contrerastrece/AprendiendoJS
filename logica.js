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
// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
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
            console.log(palabra.repeat(x));
        }
        else{
            console.error("Numero de veces inválido");
        }
    }else{
        console.error("No es un string");
    }
}
console.log(xveces("as",2));
