import React, { Children, createElement } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ReactDOM.render(
//     'lalalalal ', document.getElementById('root')
// )

// const  X = () => <h1>La forma correcta en react, gracias </h1>

// ReactDOM.render(
//     <X/>, document.getElementById('root')
// )

// const Li = ( { children, estado, cantidad } ) => {
//     console.log(estado,cantidad);
//     return(
//         <li>{ children} /{ estado}/ {cantidad}</li>
//     )
    
// }
      

// const X = () =>
//     <ul>
//         <Li estado = {' exelente'}
//             cantidad = {25} > manzana verde  </Li>
//         <Li estado = {' bueno'}
//         cantidad = {20}>manzana amarilla  </Li>
//         <Li estado = {' defetuosa'}
//         cantidad = {'5'}> manzana roja  </Li>
//         <Li cantidad={50}>las tres manzanas</Li>
//     </ul>
//     ReactDOM.render(
//         <X />, document.getElementById('root')
//     )



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
