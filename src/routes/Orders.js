import React from 'react';
import { useSelector} from 'react-redux';
const Orders = () => {

    const compras=useSelector(state=>state.compras);
let suma=0;
   return (
        <div className="Carrito">
            <h1>Mis compras</h1>
            <div className="tarjetasCar">
            <p></p>
            <p>Producto</p>
            <p>Cantidad</p>
            <p>Precio</p>
            <p>Subtotal</p>
            </div>
            {compras.map((producto)=>(
                <div className="tarjetasCar"key={producto.id}>
                <img src={producto.product.images?.[0].url}alt=""style={{width:"100px", height:"100px"}}/>
                    <div>{producto.product?.name}</div>
                    <div>
                    <input className="cant"placeholder={producto?.quantity}/>


                    </div>

                    <div>${producto.product?.price}</div>
                    <div>${(producto.product?.price * producto?.quantity).toFixed(2) }</div>
                   <div style={{visibility:"hidden", position:"fixed"}}> {suma=suma+(producto.product?.price * producto?.quantity )}</div>
                    
                   
                </div>
            ))}
            <div className="comprar">
                
                <p>Total:  ${suma.toFixed(2)}</p>
            </div>
            
        </div>
    );
};

export default Orders;