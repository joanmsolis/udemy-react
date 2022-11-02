import logo from './logo.svg';
import './App.css';

const estilo = {
  boxShadow: '0 5px 3px rgba(0,0,0,5)'
}
const estilo2 = (bg = '#333') =>({
  backgroundColor: bg,
  color: '#fff',
  padding: '10px 15px',
  margin: '10px 15px',
}) 

const Li = ({children}) =>{
 return(
 <li style={{...estilo, ...estilo2() }} className='clases-li'>{children}</li>
 )
}
const App = () => {
  const valor = 'con mucho valor'
  return (
    <ul>
      <Li
      estados = {'estamos feliz'}>con Mucho valor</Li>
    </ul>
    
  );
}

export default App;
