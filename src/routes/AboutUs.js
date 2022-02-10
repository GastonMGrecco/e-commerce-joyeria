import React from 'react';
import sobrenosotros from '../imagensobrenosotros.gif';
import joyeria from '../joyeria.jpg';

const AboutUs = () => {
    return (
        <div>
            
          <h1>¿Quiénes somos?</h1>
          <div className="sobrenosotros">
          <img className="sobrenon1"src={joyeria}alt=""/>
            <p className="quiensomos">
                La Verguen Paraden, Joyería Alemana, es una boutique en 
                ínea con las tendencias y estilos más actuales de accesorios, 
                nuestras joyas aportan un toque único a tu look 
                porque son tan especiales como tú lo eres para nosotros.
                ¿Por qué son especiales? porque son piezas elegidas con mucha 
                dedicación y profesionalismo acorde a las tendencias de moda 
                mas actuales y exclusivas para poder complementar tu estilo y 
                elevar tu estado de ánimo. 
            </p>
            <img className="sobrenon"src={sobrenosotros}alt=""/>
            <p className="quiensomos">
                Nuestra misión, ademas de hacerte 
                brillar es hacerte sonreir queremos que mantengas un look 
                fresco asi que siempre estamos actualizando nuestras 
                colecciones para que nunca dejes de sorprenderte.
            </p>
            </div>
            
        </div>
    );
};

export default AboutUs;