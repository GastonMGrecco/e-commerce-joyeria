import React, {useEffect} from 'react';
import { useSelector,useDispatch} from 'react-redux';
import { setBorrarProductoThunk,getCarritoThunk,setModificarCantidadProductoThunk,setComprarThunk } from '../redux/actions';

const Car = () => {
    const Carrito=useSelector(state=>state.carrito)
        console.log(Carrito)
    const dispatch=useDispatch();
    let cantidad;
    const borrarProducto=(id)=>{
        console.log(id)
        dispatch(setBorrarProductoThunk(id));
    }    
    useEffect(()=>{
        dispatch(getCarritoThunk());
    },[dispatch]);
    let suma=0;
  
    const comprar=()=>{
        dispatch(setComprarThunk());
    
    }
    return (
        <div className="Carrito">
            <div className="tarjetasCar">
            <p></p>
            <p>Producto</p>
            <p>Cantidad</p>
            <p>Precio</p>
            <p>Subtotal</p>
            </div>
            {Carrito.map((producto)=>(
                <div className="tarjetasCar"key={producto.product?.name}>
                <img src={producto.product.images?.[0].url}alt=""style={{width:"100px", height:"100px"}}/>
                    <div>{producto.product?.name}</div>
                    <div>
                    <input className="cant"
                    type="text" disable="false"
                    placeholder={producto?.quantity} 
                    value={cantidad}
                    onChange={e=>dispatch(setModificarCantidadProductoThunk(producto.id.toString(),{
                        "quantity":e.target.value }))} 
                        style={false?{visibility:"hidden"}:{visibility:"visible"}}/>


                    </div>

                    <div>${producto.product?.price}</div>
                    <div>${(producto.product?.price * producto?.quantity).toFixed(2) }</div>
                   <div style={{visibility:"hidden", position:"fixed"}}> {suma=suma+(producto.product?.price * producto?.quantity )}</div>
                    <button className="botonX"onClick={()=>borrarProducto(producto.id)}></button>
                   
                </div>
            ))}
            <div className="comprar">
                <button onClick={comprar} >Comprar Carrito</button>
                <p>Total:  ${suma.toFixed(2)}</p>
            </div>
            
        </div>
    );
};

export default Car;