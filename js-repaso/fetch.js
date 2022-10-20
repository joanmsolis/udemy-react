const url ='http://jsonplaceholder.typicode.com/users'
// fetch(url,{
//     method: 'post',
//     headers:{
//         'content-Type': 'application/json',
//         'Autoration' : 'Beare acadebieseexitiruntokendeautorizacion'
//     },
//     body: JSON.stringify({
//         name: 'el numero uno de la api',
//         website: 'google.com'
//     })
    
// })
// .then((Response) => Response.json())
// .then(data => console.log(data))

const fn = async () =>{
    const response = await fetch(url,{
    
        method: 'post',
        headers:{
            'content-Type': 'application/json',
            'Autoration' : 'Beare acadebieseexitiruntokendeautorizacion'
        },
        body: JSON.stringify({
            name: 'el numero uno de la api',
            website: 'google.com'
        })
        
    })
    const data = await response.json()
    console.log(data);
}
fn()

