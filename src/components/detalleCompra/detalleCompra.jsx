import React, { useEffect, useState } from 'react'
import Liz from '../../images/menuizq.png';
import Lde from '../../images/menu.png';

const DetalleCompra = () => {

    const [total, setTotal] = useState(0);
    const [carrito, setCarrito] = useState([]);

    const precio1 = 1500.00;
    const precio2 = 7000.00;
  
    // Calcular el total
    const calcularTotal = () => {
      return precio1 + precio2;
    };
  
    // Actualizamos el total al cargar el componente
    useEffect(() => {
      const cargarCarrito = () => {
        const productoGuardado = JSON.parse(localStorage.getItem('carrito'));
        if (productoGuardado) {
          setCarrito(productoGuardado);
          setTotal(calcularTotal());
        } else {
          setCarrito([]);
        }
      };
      // Cargar carrito al inicio
      cargarCarrito();
      // Escuchar cambios en localStorage
      window.addEventListener('storage', cargarCarrito);    
      return () => {
        window.removeEventListener('storage', cargarCarrito);
      };
    }, []);
    


    const apikey = process.env.REACT_APP_AUTHORIZATION_API;
      const movieId = localStorage.getItem('select');
      const [pelicula, setPelicula] = useState([])
    
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
            const response = await fetch(`${process.env.REACT_APP_API_LINK}/3/movie/${movieId}`,options);
            const data = await response.json();
            
            if (data) {
                setPelicula(data);                
            } else {
              console.error("Error en la respuesta de la API:", data);
            }
          } catch (error) {
            console.error("Error obteniendo el tráiler:", error);
          }
        };
    
          fetchTrailer();
        }, [apikey, movieId]);


  return (
    <div>
        <div className='divImagenes pb-3'>        
            <img src={Liz} alt="Lineas Izquierdas" className="lineas-izq" />
            <h1 className='Esec'>Detalle de Compra</h1>
            <img src={Lde} alt="Lineas Derechas" className="lineas-der" />
        </div>
        <div>
        {/* TABLA */}
        <table className="table table-bordered mt-2">
            <thead>
            <tr>
                <th scope="col">Detalle</th>
                <th scope="col">Precio</th>
                <th scope="col">Opcion</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td data-column="detalle" className="detalle">Cargo por servicio</td>
                <td data-column="precio" className="detalles"></td>
                <td data-column="opcion" className="detalles">$1,500.00</td>
            </tr>
            <tr>
                <td data-column="detalle" className="detalle">1 x Entrada de : {pelicula.title}</td>
                <td data-column="precio" className="detalles">$7,000.00</td>
                <td data-column="opcion" className="detalles"></td>
            </tr>
            <tr>
                <td data-column="detalle" className="detalle">{carrito.nombre}</td>
                <td data-column="precio" className="detalles">{carrito.precio}</td>
                <td data-column="opcion" className="detalles"></td>
            </tr>

            {/* Fila del Total */}
            <tr>
                <td colSpan="2" className="text-end" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                Total:
                </td>
                <td className="text-center" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                ${total.toLocaleString()}
                </td>
            </tr>
            {/* Fila del Botón */}
            <tr>
                <td colSpan="3" className="text-end">
                <button
                    className="btn btn-warning"
                    style={{
                    width: '200px', 
                    fontSize: '1rem',
                    }}
                >
                    <i className="fas fa-shopping-cart me-2">
                    <i className="bi bi-cart-check-fill"></i>
                    </i>
                    Generar Pago
                </button>
                </td>
            </tr>
            </tbody>
        </table>
        </div>
    
    </div>
  )
}

export default DetalleCompra
