import React from 'react'
import './suscripcion.css'

const Suscripcion = () => {
    return (
        <div>
            <div className='d-flex justify-content-center container pt-3'>
                <form className='text-white colorBack p-3 rounded w-100'>
                    <h5>¡Suscribite a nuestro newsletter!</h5>

                    {/* Email */}
                    <div className="mb-3">
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Correo electrónico"
                            required
                        />
                    </div>

                    {/* Nombre y Apellido */}
                    <div className='mb-3'>
                        <div className="d-flex flex-column flex-sm-row">
                            <input
                                type="text"
                                className="form-control mb-2 mb-sm-0 me-sm-2"
                                id="nombre"
                                placeholder="Nombre"
                                required
                            />
                            <input
                                type="text"
                                className="form-control"
                                id="apellido"
                                placeholder="Apellido"
                                required
                            />
                        </div>
                    </div>

                    {/* Cumpleaños */}
                    <div className="mb-3">
                        <h6>Cumpleaños</h6>
                        <input
                            type="date"
                            className="form-control"
                            id="cumpleanos"
                            required
                        />
                    </div>

                    {/* Botón */}
                    <button type="submit" className="btn btn-primary w-100">Suscríbete</button>
                </form>
            </div>
        </div>
    )
}

export default Suscripcion
