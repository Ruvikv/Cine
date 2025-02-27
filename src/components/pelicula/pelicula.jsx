import React, { useEffect, useState } from 'react';
import Entrada from '../../images/db74924b2be8d2d4d4ef95b03f6b9337.png';
import Hd from '../../images/2D.png';
import C from '../../images/Cast.png';
import S from '../../images/Subt.png';
import Liz from '../../images/menuizq.png';
import Lde from '../../images/menu.png';
import './pelicula.css';
import { Link, useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import Suscripcion from '../suscripcion/suscripcion';

const Pelicula = () => {

  const navigate = useNavigate();
  const [trailerKey, setTrailerKey] = useState(null);
  const apikey = process.env.REACT_APP_AUTHORIZATION_API;
  const movieId = localStorage.getItem('select');

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.REACT_APP_AUTHORIZATION_API}`
          }
        };
        const response = await fetch(`${process.env.REACT_APP_API_LINK}/3/movie/${movieId}/videos?`,options);
        const data = await response.json();
        
        if (data.results) {
          const trailer = data.results.find(video => video.type === "Trailer" && video.site === "YouTube");
          if (trailer) {
            setTrailerKey(trailer.key);
          } else {
            console.log("No se encontró un tráiler.");
          }
        } else {
          console.error("Error en la respuesta de la API:", data);
        }
      } catch (error) {
        console.error("Error obteniendo el tráiler:", error);
      }
    };

      fetchTrailer();
    }, [apikey, movieId]);



  function GradientCircularProgress() {
    return (
      <React.Fragment>
        <svg width={0} height={0}>
          <defs>
            <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e01cd5" />
              <stop offset="100%" stopColor="#1CB5E0" />
            </linearGradient>
          </defs>
        </svg>
        <CircularProgress sx={{ 'svg circle': { stroke: 'url(#my_gradient)' } }} />
      </React.Fragment>
    );
  }


  const handleClick = (event) => {
    const clickedText = event.currentTarget.innerText.trim();
    localStorage.setItem('fecha', clickedText)
    navigate(`/compra`)
  };


  return (
    <div className="pt-5 mt-5">
        <div className='divImagenes pb-3'>        
            <img src={Liz} alt="Lineas Izquierdas" className="lineas-izq" />
            <h1 className='Esec'>PROCESO DE COMPRA</h1>
            <img src={Lde} alt="Lineas Derechas" className="lineas-der" />
        </div>
      <div className="container color-contenedor p-2">
        <div className="row justify-content-center pt-5">
          {/* Columna del video y tabla */}
    <div className="col-12 col-md-7 text-center">
      {!trailerKey ? (
              <GradientCircularProgress/>
            ) : (
      <div className="embed-responsive embed-responsive-16by9 mb-0">
        <iframe
          className="embed-responsive-item"
          src={`https://www.youtube.com/embed/${trailerKey}`}
          title="Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      )}

      {/* TABLA */}
      <table className="table table-bordered mt-2">
        <thead>
          <tr>
            <th scope="col">Día y Hora</th>
            <th scope="col">Detalles</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-column="hora" className="hora" onClick={handleClick}>
              Lunes 11 <br />19:00 hs
            </td>
            <td data-column="detalles" className="detalles"><img src={Hd} alt="HD" /> <img src={C} alt="Cast" /></td>
          </tr>
          <tr>
            <td data-column="hora" className="hora" onClick={handleClick}>
              Martes 12 <br />20:00 hs
            </td>
            <td data-column="detalles" className="detalles"><img src={Hd} alt="HD" /> <img src={C} alt="Cast" /></td>
          </tr>
          <tr>
            <td data-column="hora" className="hora" onClick={handleClick}>
              Miércoles 13 <br />21:00 hs
            </td>
            <td data-column="detalles" className="detalles"><img src={Hd} alt="HD" /> <img src={S} alt="Subt" /></td>
          </tr>
        </tbody>
      </table>

    </div>




          {/* Columna de la imagen */}
<div className="col-12 col-md-3 text-center pt-3">
  {/* Imagen Entrada */}
  <img className="img-fluid entrada-img" src={Entrada} alt="Entrada" />
  <div className='pt-3'>
    <div className='container p-3 recuadro'>
      <Link className='link-blanco' to="https://www.cinesantarosa.com.ar/assets/img/logos/rs28902.pdf">
        <h7>DESCARGA FORMULARIO MENORES RES. 2890</h7>
      </Link>
    </div>
    <div className='p-3'>
      {/* Aseguramos que Suscripción ocupe todo el ancho */}
      <Suscripcion />
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default Pelicula;
