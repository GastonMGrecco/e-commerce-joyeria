import React from 'react';

const Producto = ({ categoria, descripcion, nombre, imagenes, precio }) => {

    return (
        <div className='tarjeta'>
            <img className="imagen"src={imagenes?.[0].url} alt='' />
            <h1>{nombre}</h1>
            <p>Precio: ${precio}</p>
        </div>
    );
};

export default Producto;