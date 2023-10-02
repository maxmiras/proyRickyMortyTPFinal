import './infocard.css'

export default function InfoCard({status,especie,origen,genero,setShow}) {
    return(
        <div  className=" d-flex p-5 flex-column align-items-center more-info-section">
            <button className='btn btn-active d-flex align-self-end m-2 btn-x-md btn-info-card' onClick={()=>setShow(false)}>
                <i className="bi bi-x-lg"></i>{/* icono extraido de boostrap icon */}
            </button>
            <ul className="list-group">
                <li className="list-group-item p-3 d-flex flex-column divli">
                        <p className='pp1'>Character Status : </p>  
                        <p className='fs-5 fw-bold pp2'>{status}</p></li>
                <li className="list-group-item p-3 d-flex flex-column divli ">
                    <p className='pp1'>Specie:</p>
                    <p className='fs-5 fw-bold pp2'>{especie}</p></li>
                <li className="list-group-item p-3 d-flex flex-column divli">
                    <p className='pp1'>Origin:</p>
                    <p className='fs-5 fw-bold pp2' >{origen}</p></li>
                <li className="list-group-item p-3 d-flex flex-column divli">
                    <p className='pp1'>Gender</p>
                    <p className='fs-5 fw-bold pp2'>{genero}</p></li>
            </ul>
        </div>
    )
}