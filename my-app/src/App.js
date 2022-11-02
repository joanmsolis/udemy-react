import Button from './Button' 

const arr = [
  'chanchito felix',
  'chanchito triste',
  'chanchito emocionado',
]

const app = () =>{
  const miVariable = false;
  if(miVariable){
    return <p>Mi Variable es Verdadera</p>
  }
  return (
<div>
<h1 onClick={(e) => console.log('click',e)}>Hola Mundo</h1>
{arr.map(el => <p key={el}>{el}</p>)}
<Button onClick={() => console.log('clikeado')}>enviar</Button>
</div>
  )
}
export default app