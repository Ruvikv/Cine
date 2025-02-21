import React, { useEffect, useState } from 'react'
import Entradas from '../../images/ticket.png';
import Milenium from '../../images/Milenium-isotipo.png';
import Consumibles from '../consumibles/consumibles';

const Compra = () => {

    const apikey = process.env.REACT_APP_AUTHORIZATION_API;
    const movieId = localStorage.getItem('select');
    const fecha = localStorage.getItem('fecha');

    const [pelicula, setPelicula] = useState([])
    const [peliculaImagen, setPeliculaImagen] = useState([])

    useEffect(() => {
        const fetchPelicula = async () => {
        try{
            const options = {
                method: 'GET',
                headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.REACT_APP_AUTHORIZATION_API}`
                }
            };
            const response = await fetch(`${process.env.REACT_APP_API_LINK}/3/movie/${movieId}`,options);
            const data = await response.json();
            if (data){
                setPelicula(data.title);
                setPeliculaImagen(data.poster_path)
                console.log(data)            
            }
            

        }
        catch(error){
            console.error(error)
        }
    }
        fetchPelicula()
    }, [apikey, movieId])


    const baseUrl = process.env.REACT_APP_IMAGE_URL;

    return (
    <div>
        <div className='text-center pt-5 mt-5 pb-5'>
            <img src={Entradas} alt="" className='img-fluid' style={{ maxWidth: "200px", height: "auto" }}/>
        </div>

        <div className='color-contenedor container p-5'>
            {/* logo milenium dentro del contenedor */}
            <div className='text-center p-3'>
                <img src={Milenium} alt="" />
            </div>
            {/*  IMAGEN Y DETALLES  */}
            <div className="row align-items-center justify-content-center text-center text-md-start g-3 p-2">
                <div className="col-auto mx-auto">
                    <img src={`${baseUrl}${peliculaImagen}`} alt="" style={{ width: "200px", height: "250px" }} />
                </div>

                <div className="col d-flex flex-column align-items-center align-items-md-start ps-md-5 pt-2">
                    <h5 className="text-white" style={{ wordWrap: "break-word", overflowWrap: "break-word", maxWidth: "200px" }}>
                    {pelicula}
                    </h5>
                    <p className="text-white pt-4">{fecha}</p>
                </div>
            </div>
        </div>

        <form action='' className='container pt-5'>
            <div className='row gap-3'>
                <div className="form-floating col-12 col-md color-contenedor p-3">
                    <h2 className="mt-2 text-white">Cantidad de Entradas</h2>
                    <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                        <option selected>Cantidad de Entradas</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
                <div className='col-12 col-md color-contenedor p-3'>
                    <h2 className="mt-2  text-white">Datos Personales</h2>
                    <div className="form-floating mb-3 position-relative">
                        <input type="text" className="form-control" id="nombre" placeholder="Nombre" maxLength="50" required
                            onInput={(e) => e.target.nextSibling.innerText = `${e.target.value.length}/50`} />
                        <label htmlFor="nombre">Nombre</label>
                        <small className="text-muted position-absolute end-0 bottom-0 me-2 mb-1">0/50</small>
                    </div>
                    <div className="form-floating mb-3 position-relative">
                        <input type="text" className="form-control" id="apellido" placeholder="Apellido" maxLength="50" required
                            onInput={(e) => e.target.nextSibling.innerText = `${e.target.value.length}/50`} />
                        <label htmlFor="apellido">Apellido</label>
                        <small className="text-muted position-absolute end-0 bottom-0 me-2 mb-1">0/50</small>
                    </div>
                    <div className="form-floating mb-3 position-relative">
                        <input type="email" className="form-control" id="email" placeholder="E-mail" maxLength="50" required
                            onInput={(e) => e.target.nextSibling.innerText = `${e.target.value.length}/50`} />
                        <label htmlFor="email">E-mail</label>
                        <small className="text-muted position-absolute end-0 bottom-0 me-2 mb-1">0/50</small>
                    </div>
                    <div className="form-floating mb-3 position-relative">
                        <input type="text" className="form-control" id="dni" placeholder="DNI" maxLength="9" required
                            onInput={(e) => e.target.nextSibling.innerText = `${e.target.value.length}/9`} />
                        <label htmlFor="dni">DNI</label>
                        <small className="text-muted position-absolute end-0 bottom-0 me-2 mb-1">0/9</small>
                    </div>
                    <div className="form-floating mb-3 position-relative">
                        <input type="text" className="form-control" id="whatsapp" placeholder="Whatsapp" maxLength="10" required
                            onInput={(e) => e.target.nextSibling.innerText = `${e.target.value.length}/10`} />
                        <label htmlFor="whatsapp">Whatsapp</label>
                        <small className="text-muted position-absolute end-0 bottom-0 me-2 mb-1">0/10</small>
                    </div>
                </div>
            </div>
        </form>

        <div>
            <Consumibles />
        </div>


    </div>
  )
}

export default Compra
