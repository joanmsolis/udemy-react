// const rectangulo = class{}//expresion d clases
// console.log(rectangulo);
// class rectangulo{} //declaracion de clases
// console.log(cuadrado,rectangulo)
// function cuadrado (){}
// const r = new rectangulo ()

class usuario{
  #etapa = true
    constructor(estado = 'caasd') {
        this.estado = estado
        
    }
    hablar(){
        console.log(`esto es una prueba del sistema ${this.estado} ${this.#etapa ? 'vamos para producion' : 'esta es la version beta '}`);
    }
}
const caasd = new usuario('Caasd')
caasd.hablar()
const inapa = new usuario('inapa')
inapa.hablar()
const aduana = new usuario('aduana')
aduana.hablar()
const nose = new usuario()
nose.hablar
