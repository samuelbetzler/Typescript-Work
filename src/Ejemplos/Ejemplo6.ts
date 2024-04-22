interface IStudent {
    id: number;
    name: string;
    age: number;
}
const students: IStudent[] = [
    { id: 1, name: 'Samuel', age: 21 },
    { id: 2, name: 'Juan', age: 22 },
    { id: 3, name: 'Pedro', age: 23 },
    { id: 4, name: 'Carlos', age: 24 },
    { id: 5, name: 'Jose', age: 25 }
]  
function getStudentById(id: number, callback: (err:Error|undefined, student:IStudent|undefined)=>void) {
    const student = students.find((student) => student.id === id)
    if (!student){
        return callback(new Error(`No se encontro el estudiante con id ${id}`), undefined)
    }
    callback (undefined, student)
}
export {getStudentById, IStudent, students};