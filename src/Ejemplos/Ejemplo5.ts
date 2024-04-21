//callback exercise
function Operar (num1:number, num2:number
    , Operar:(num1:number, num2:number)=>number , callback:(Resultado:number)=>void)
    {
        const Resultado = Operar(num1,num2);
        callback(Resultado)
    }
export {Operar}