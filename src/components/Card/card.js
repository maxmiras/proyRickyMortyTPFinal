import './card.css';

import InfoCard  from '../InfoCard/Infocard';
import { useState } from 'react';

export default function Card({data}) {
    const [show,setShow]= useState(false);
    // const[hide,setHide]=useState("d-block");
    
    const mostrarLista=()=>{
        setShow(true);
        // setHide('d-none')
    }

    return(
        <div className="card border mb-2 p-2 d-flex flex-row justify-content-between align-items-center gap-5">
            <div>
                <img src={data.image} alt="imagen-personaje..."/>
                <h3 className='nombre'>{data.name}</h3>
                <button className={show?"d-none":"d-block btnc btn"} onClick={mostrarLista}>Know More..</button>
            </div>
{show === true? <InfoCard status={data.status} genero={data.gender} especie={data.species} origen={data.origin.name} setShow={setShow}/>:''}
        </div>
    )
}

/* condicion ?  si se cumple la condicion : si no se cumple la condicion */

/*
  operador ternario:
  
  ESTRUCTURA:

  condicion ? accionTrue : accionFalse

  diferencia con el if/else -> solo permite UNA accion si se cumple la condicion o si no se cumple;
                            -> tengo que definir la accion a realizar si se cumple y si no se cumple la condicion( no puedo dejar a fuera un o de los caminos a diferencia de if/else que podiamos evitar el else)

  condicional if/else:
  ESTRUCTURA:
    if(condicion){
        funcion;
        funcion;
        ...;
        ...;
    }else{

    }

*/
//usamos en este caso un operador ternario para crear o no un componente y para mostrar un string como clase u otro string

/* {show?"d-none":"d-block"} o {show === true?"d-none":"d-block"}*/