import React, { useEffect, useState } from 'react';
import Liz from './img/menuizq.png';
import Lde from './img/menu.png';
import { useNavigate } from 'react-router-dom';

const Carrousel2 = () => {
  const navigate = useNavigate();
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.REACT_APP_AUTHORIZATION_API}`
          }
        };
        const response = await fetch(`${process.env.REACT_APP_API_LINK}/3/movie/now_playing?language=en-US&page=1`, options);
        if (response.ok) {
          const data = await response.json();
          setMoviesData(data.results);
        } else {
          console.error('Error fetching movies:', response.statusText);
        }
      } catch (err) {
        console.error('Error fetching movies:', err);
      }
    };
    fetchMovies();
  }, []);

  const handleMovieClick = (movieId) => {
    localStorage.setItem('select', movieId)
    navigate(`/pelicula`)
  }

  const baseUrl = process.env.REACT_APP_IMAGE_URL;

  return (
    <div>
      <div className='divImagenes pb-3'>        
        <img src={Liz} alt="Lineas Izquierdas" className="lineas-izq" />
        <h1 className='Esec'>ESTA SEMANA EN CINES</h1>
        <img src={Lde} alt="Lineas Derechas" className="lineas-der" />
      </div>

      <div className='movies'>
        <div className="contenedor">
          {moviesData.length > 0 ? (
            moviesData.slice(0, 6).map((movie) => (
              <div key={movie.id} onClick={() => handleMovieClick(movie.id)}>
                <img src={`${baseUrl}${movie.poster_path}`} alt={movie.original_title} />
                <div className="content">
                  <h3>{movie.title}</h3>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center">
              <p>Loading movies...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Carrousel2;
