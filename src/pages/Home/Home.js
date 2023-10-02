import './Home.css';
import{ Link } from'react-router-dom';//traemos este componente del paquete para poder "linkear" a otro componente



export default function Home() {
    return(
        <div className=" home1 d-flex flex-column" > 
            <h1 className="h1">Proyect Rick & Morty</h1>
            <h2 className="h2">Helcome to Rick & Morty Proyect!</h2>
            <p className="p">This proyect was made for practising React and to made a functional website </p>
            <p className="p">  In this website you can know information of the characters of this animated series.</p>
            <p className="p">Also you can filter for diferent types of properties to find the character that you are looking for or send us a massage for any concern o sugestion</p>
            <h2 className="h3">Lets go!</h2>
            <div className="contenedor p-4 align-item-center">
                <Link to="/characters" className="btn btn-custom p-3 me-3 btnhome">Charactes</Link>
                <Link to="/contact" className="btn btn-custom p-3 me-3 btnhome">Contact</Link>       
            </div>

         </div>
    )
}




