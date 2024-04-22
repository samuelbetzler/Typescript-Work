//import {Altura, Edad} from "./Ejemplos/Ejemplo1"
//import { Operar } from "./Ejemplos/Ejemplo2"
//let Resultado:Number = 0
//Resultado = Operar(2,10,'suma')
//console.log(Resultado)
//--------------------------------------
//import { students } from "./Ejemplos/Ejemplo3";
//students.forEach((res)=>{
//    console.log(res)
//})
//---------------------------------------
//import { Student} from "./Ejemplos/Ejemplo4";
//const estudiante = new Student('Samuel',21)
//console.log(estudiante)
//-----------------------------------
//import { Operar } from "./Ejemplos/Ejemplo5";
//Operar (1,2,(num1,num2)=>num1 - num2, (Resultado)=> console.log(Resultado))
//-----------------------------------
//import { getStudentById } from "./Ejemplos/Ejemplo6";
//getStudentById(2, (err, student)=>{
//    if (err){
//            return console.error(err.message)
//    }
//  console.log(student)
//})
//-----------------------------------
import { Ipost, httpclient } from "./Ejemplos/Ejemplo7";
// httpclient('https://jsonplaceholder.typicode.com/posts')
// .then((res)=>{ console.log(res) })
// .catch((err)=>{ console.error(err) })
async function app(){
    try{
        const res = await httpclient('https://jsonplaceholder.typicode.com/posts');
        console.log(res)
    }catch(error){
        console.error('Problemas al conectarse con el servidor')
        throw error;
    }
} 
app()