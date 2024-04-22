export interface Ipost {
    userId: number;
    id:     number;
    title:  string;
    body:   string;
}
async function httpclient (url:string):Promise<Ipost>
{
    try{
        const data = await fetch('https://jsonplaceholder.typicode.com/posts');
        //.then(response => response.json())
        //.then(json => console.log(json))
        return data.json();
    }catch(error){
        console.error('problemas al conectarse con el servidor')
        throw error;
    }
}
export {httpclient}