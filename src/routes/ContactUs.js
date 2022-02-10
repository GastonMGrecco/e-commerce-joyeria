import React from 'react';
import contact from '../imagencontacto.jfif';


const ContactUs = () => {
    return (
        <div >
            <h1>Contáctanos</h1>
          <div className="sobrenosotros">
          <img className="sobrenon1"src={contact}alt=""/>
            <p className="quiensomos">
            Para todas las consultas de clientes y ventas, comuníquese con:
            </p>
           
            <p className="quiensomos">
            Customer service<br></br>
                email@example.com<br></br>

                Wholesale inquiries<br></br>
                email@example.com<br></br>

                Press inquiries<br></br>
                email@example.com<br></br>


            </p>
            </div>
        </div>
    );
};

export default ContactUs;