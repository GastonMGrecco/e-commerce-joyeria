import React,{useState} from 'react';
import { useParams,Link,useNavigate } from 'react-router-dom';
import { useSelector,useDispatch} from 'react-redux';
import Producto from '../redux/Componentes/Producto';
import { setCarritoThunk, setModificarCantidadProductoThunk } from '../redux/actions';

const ProductId = () => {
    const {id}=useParams();

const productos=useSelector(state=>state.productos);
const categorias=useSelector(state=>state.categorias);
const carrito=useSelector(state=>state.carrito);
const producto= productos.filter(prod=>prod.name===id);
const navigate=useNavigate();
const dispatch=useDispatch();
const [cantidad,setCantidad]=useState(1);

const restar=()=>{
    setCantidad(cantidad-1);
}
const sumar=()=>{
    setCantidad(cantidad+1);
}
const agregarAlCarrito=(id,cantidad)=>{
    const productCar=carrito.filter(product=>product.product?.id===id);
    console.log(productCar)
    console.log(productCar.length)

        if(productCar.length>0){
            console.log("El producto ya existe",productCar)
            
           const AddToCart = {
            "quantity": cantidad
          }

            console.log(AddToCart)
            dispatch(setModificarCantidadProductoThunk(productCar[0]?.id.toString(),AddToCart))
            navigate("/Car")
        }else{
            const AddToCart = {
                "product": id,
                "quantity": cantidad
              }
              console.log(AddToCart)
              dispatch(setCarritoThunk(AddToCart))
              navigate("/Car")
        }
 
}


    return (
        <div>
            
            {producto.map(pro=>(

                    <div className='tarjetaInd' key={pro.name}>
                        <img className="imagen"src={pro.images?.[0].url} alt='' />
                        <div className='info'>
                            <h1>{pro.name}</h1>
                            <p>{pro.description}</p>
                            <p>Precio: ${pro.price}</p>
                            <form>
                                <button className="sumres"onClick={restar}>-</button>
                                <input className="cant" value={cantidad}onChange={e=>setCantidad(e.target.value)}></input>
                                <button className="sumres"onClick={sumar}>+</button>
                            </form>
                            <button onClick={()=>agregarAlCarrito(pro.id,cantidad)}>Agregar al carrito</button>
                            <p>TOTAL: ${ pro.price * cantidad}</p>
                        </div>
                    </div>
                    
            ))}
            <ul>
                    {categorias.map(pro=>(
                    <Link className="Link"to={`/shop/${pro?.name}`} key={pro?.id}>
                    <Producto 
                    categoria={pro.category?.name}
                    descripcion={pro?.description}
                    imagenes={pro?.images}
                    nombre={pro?.name}
                    precio={pro?.price}
                    
                    />
                    </Link>
                     ))}
            </ul>
        </div>
    );
};

export default ProductId;