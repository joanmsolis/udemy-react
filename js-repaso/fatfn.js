// function fn(){
//     this.prop ='propiedades'
//     return 'estamos feliz'
// }
// const r = new fn ()
// console.log(r);
// const fnr = () => 'around fan'
// console.log(fnr);
function fn (){
    this.otro = 'esto es un obj'
    return 'esto es una prueba '
}
fn.prototype.lalala = function nuevaprueba(){}
const prueba2 =  new fn()
console.log(prueba2.__proto__);