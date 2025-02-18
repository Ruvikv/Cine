import React, { useEffect, useState } from 'react'
import Entradas from '../../images/ticket.png';
import Milenium from '../../images/Milenium-isotipo.png';

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
        <div className='text-center pt-5 mt-5 pb-4'>
            <img src={Entradas} alt="" className='img-fluid' style={{ maxWidth: "200px", height: "auto" }}/>
        </div>
        <div className='color-contenedor container p-4'>
            {/* logo milenium dentro del contenedor */}
            <div className='text-center p-3'>
                <img src={Milenium} alt="" />
            </div>

            {/*  IMAGEN Y DETALLES  */}
            <div className="row align-items-center justify-content-center text-center text-md-start g-3 p-4">
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



            <alert>alerta</alert>
        </div>
    </div>
  )
}

export default Compra
