import React from 'react';

const Producto = ({ categoria, descripcion, nombre, imagenes, precio }) => {

    return (
        <div className='tarjeta'>
            <div className="imagen">
                <img className="imagen2"src={imagenes?.[1].url} alt='' />
                <img className="imagen1"src={imagenes?.[0].url} alt='' />
            </div>
            
            <h1>{nombre}</h1>
            <p>Precio: ${precio}</p>
        </div>
    );
};

export default Producto;