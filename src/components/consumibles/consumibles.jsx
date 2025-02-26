import React from 'react';
import Popcorn from '../../images/pochoclos.png';
import imagen1 from '../../images/compras/4.png';
import imagen2 from '../../images/compras/45.png';
import imagen3 from '../../images/compras/47.png';
import imagen4 from '../../images/compras/48.png';

const consumibles = () => {
  return (
    <div className='pb-5'>

      <div className='text-center mt-5 pb-2'>
        <h1 className='text-white'>¡Comprá ahora y ahorra tiempo!</h1>
        <img src={Popcorn} alt="" className='img-fluid pt-3' style={{ maxWidth: "110px", height: "auto" }} />
      </div>

      <div className="container pt-5">
        <div className="row g-4">
          
          {/* Columna 1 */}
          <div className="col-6 col-md-3">
            <div className="card">
              <img src={imagen1} className="card-img-top" alt="Imagen 1" />
              <div className="card-body text-center">
                <button className="btn btn-warning w-100 d-flex align-items-center justify-content-center">
                  <i className="fas fa-shopping-cart me-2"><i className="bi bi-cart4"></i></i> Agregar
                </button>
              </div>
            </div>
          </div>

          {/* Columna 2 */}
          <div className="col-6 col-md-3">
            <div className="card">
              <img src={imagen2} className="card-img-top" alt="Imagen 2" />
              <div className="card-body text-center">
                <button className="btn btn-warning w-100 d-flex align-items-center justify-content-center">
                  <i className="fas fa-shopping-cart me-2"><i className="bi bi-cart4"></i></i> Agregar
                </button>
              </div>
            </div>
          </div>

          {/* Columna 3 */}
          <div className="col-6 col-md-3">
            <div className="card">
              <img src={imagen3} className="card-img-top" alt="Imagen 3" />
              <div className="card-body text-center">
                <button className="btn btn-warning w-100 d-flex align-items-center justify-content-center">
                  <i className="fas fa-shopping-cart me-2"><i className="bi bi-cart4"></i></i> Agregar
                </button>
              </div>
            </div>
          </div>

          {/* Columna 4 */}
          <div className="col-6 col-md-3">
            <div className="card">
              <img src={imagen4} className="card-img-top" alt="Imagen 4" />
              <div className="card-body text-center">
                <button className="btn btn-warning w-100 d-flex align-items-center justify-content-center">
                  <i className="fas fa-shopping-cart me-2"><i className="bi bi-cart4"></i></i> Agregar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default consumibles;
