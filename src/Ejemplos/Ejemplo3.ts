interface Istudents
{
    name:string,
    age:number,
    grades:[
        {subject:string, grade:number},
        {subject:string, grade:number},
    ],
    address:[{street:string, type:string}],
}

const students:Istudents[]=
[
    {
        name:'Juan',
        age:20,
        grades : [
            {subject: 'Math', grade: 10},
            {subject: 'English', grade: 9},
        ],
        address: [
            {street: 'Calle1', type: 'Casa'},
        ],
    },
]

export {students}
