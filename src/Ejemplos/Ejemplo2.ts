function Operar (a:number, b:number, operacion:string):number
{
    switch(operacion){
        case 'suma':
            return a + b;
        case 'resta':
            return a-b;
        case 'multiplicacion':
            return a*b;
        case 'division':
            return a/b;
        default:
            return -1;
    }
}
export {Operar}