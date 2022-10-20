 const arr = [5,6,7,8,9]
const r = arr.filter(el => el < 2)
// console.log(r);

const user =[
    {id: 1, name:'chanchito feliz'},
    {id: 2, name: 'chanchito triste'},
    {id: 3, name: 'chanchito emocionado'},
    {id: 4, name: 'todos los chanchitos'},
]
// const mapped = arr.map((el) => `<h1>${el}</h1>`)
// console.log(mapped);
const mapped = user.map((user) => `<h1>${user.name}</h1>`)
// console.log(mapped);

// const r1 = arr.reduce((acc, el) => acc + el)
// const getMax = (a,b) => Math.random(a,b)
// const r1 = arr.reduce(getMax)
// const r1 = user.reduce((acc, el) => 
// `${acc === '' ? '' : `${acc},`} ${el.name}`, '')
const r1 = user.reduce((acc, el ) => {
    if(el.id > 3)
    {
        return acc
    }
    return acc.concat(el)

} ,[])

console.log(r1)