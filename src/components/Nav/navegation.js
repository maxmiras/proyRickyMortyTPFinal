import {Link} from 'react-router-dom';
import './nav.css'

export default function Nav({itemMenu}) {
    return(
        <nav className="navbar navbar-expand-lg bnav">
        <div className="row container-fluid justify-content-between align-items-center ">
            <h1 className="col-4 hnavric navbar-brand cursor-p">
                <Link to="/" className="text-decoration-none texric">RicK & Morty</Link>
            </h1>
            <button className='navbar-toogle' type='button' data-bs-toggle="collapse" data-bs-target="#navbarBarra" aria-controls='navbarSupportedContent' aria-expanded="false" aria-label='Toggle navigation'>
                <i class="bi bi-list"></i>
            </button>
            <div className="collapse navbar-collapse " id="navbarBarra">
                <ul className="navbar-nav p-4 ">
                    <li className="nav-item m-2 active">
                    <Link to="/characters" className={itemMenu ==="Characters"? 'btn navric-act text-decoration-none':"btn navric-des text-decoration-none"}>Characters</Link>
                    </li>
                    <li  className="nav-item m-2">
                    <Link to="/contact" className={itemMenu === "Contact"? 'btn navric-act text-decoration-none':"btn  navric-des text-decoration-none"}>Contact</Link>
                    </li>
                </ul>               
            </div>
            
          
        
        </div>

        </nav>
    )}

    