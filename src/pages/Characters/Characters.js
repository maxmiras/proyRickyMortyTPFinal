import './characters.css'

import {useState, useEffect, Fragment} from 'react';

import Nav from '../../components/Nav/navegation'
import Card from '../../components/Card/card'
import Filter from '../../components/Filter/Filter'

export default function Character() {
    let [listaCompleta,setListaCompleta]=useState([]);//lista completa de todos los personajes que trae la API
    let [personajes,setPersonajes]=useState([]);//lista de personajes a reproducir en las tarjetas
    let [filtros]=useState([
        {
            nombre:"Alive",
            filtro:'Character Alive'
        },{  
            nombre:"Dead",
            filtro:'Character Dead'
        },{
            nombre:'Female',
            filtro:'Female'
        },{
            nombre:"Male",
            filtro:'Male'
        },{
            nombre:"unknown",
            filtro:'Origin Unknown'
        }]);
    let[filtrosAplicados,setFiltrosAplicados]=useState([]);


    let traerPersonajes=async()=>{
        let dato= await fetch("https://rickandmortyapi.com/api/character")
        .then(resp=>resp.json())
        .catch(err =>console.log("Hubo un error: "+ err));

        return dato
    }

    
    let aplicarFiltros=(event)=>{
        let nombreCheckbox=event.target.id;

        if(event.target.checked === true){
            console.log("Aplicar filtro")
            setFiltrosAplicados([...filtrosAplicados,nombreCheckbox]);
            //console.log(personajes)
        }else{
            console.log("sacar filtro")
            let filtrosRestantes=filtrosAplicados.filter((el)=>el !== nombreCheckbox);
            setPersonajes(listaCompleta);//para que agregue los personajes que no tenia por el filtro
            setFiltrosAplicados(filtrosRestantes)
    
        }    
           //console.log(nombreCheckbox) //info de que checkbox esta pulsando
           //console.log(event.target.checked) //si el checkbox esta checked o no
    }

    useEffect(()=>{
        let guardarPersonajes=async()=>{
            let info =await traerPersonajes();
      
            let listaPersonajes=info.results;

            setPersonajes(listaPersonajes)
            setListaCompleta(listaPersonajes)
        }
        
        guardarPersonajes();
        
    },[])

    
    useEffect( ()=>{
       
      filtrosAplicados.forEach((filtroNombre)=>{
            let resultado;
            if(filtroNombre === "Alive" || filtroNombre === "Dead"){
                    resultado=personajes.filter((personaje)=> personaje.status === filtroNombre)
                }
                if(filtroNombre === "Female" || filtroNombre === "Male"){
                    resultado=personajes.filter((personaje)=> personaje.gender === filtroNombre)
                }
                if(filtroNombre === "unknown"){
                    resultado=personajes.filter((personaje)=> personaje.origin.name === filtroNombre)
                    
                }
                setPersonajes(resultado)
        })
       
    },[filtrosAplicados])



    return(
        <Fragment>
            <Nav  itemMenu={"Characters"}/>
            <section className='row section-filters py-5'>
                <div class="filters-area d-flex justify-content-start m-2 align-items-center">
                    <h2 className='p-100'>Filters</h2>
                    <a type='button' className='btn btn-filter' data-bs-toggle="collapse" href='#collapseFilters' role='button' aria-expanded="false" aria-controls='collapseFilters'>
                        <i className="bi bi-sliders"></i>
                    </a>
                </div>
               
               
               <div className='d-flex gap-5 p-5 ' id='collapseFilters'>
                    {filtros.map((item)=>{ return <Filter key={item.nombre} valorFiltro={item.filtro} idFiltro={item.nombre} handlerChange={aplicarFiltros}/>})}
               </div>
            </section>
             {/* <button onClick={guardarPersonajes}>Traer Info</button> */}
            <section className='row card-section justify-content-evenly'>
            {/* usamos un operador ternario para que en caso que no encuentre personajes con esos filtros tire el cartel de alerta (es decir que si el array personaje nos da 0 items) */}
                {personajes.length>0?
                    personajes.map((personaje)=>{
                                return <Card key={personaje.id} data={personaje}/>
                    }):
                    <div className="alert  d-flex gap-2" role="alert">
                        <i className="bi bi-exclamation-triangle-fill fs-5"></i>{/* icono de alerta */}
                        <p className='m-0'>Sorry! There are no characters width all those properties</p>
                    </div>
                }

            
    
            </section>
        </Fragment>
    )
}
//operador ternario (condicional)->estructura :  condicion? si se cumple:si no se cumple;