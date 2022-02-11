import React, { useEffect,useState } from 'react';
import {Link} from 'react-router-dom';
import Producto from '../redux/Componentes/Producto';
import { useDispatch,useSelector } from 'react-redux';
import { getProductosThunk,getCategoriasThunk,getProductosNombreThunk } from '../redux/actions';




const Shop = () => {
    const productos=useSelector(state=>state.productos);
    const categorias=useSelector(state=>state.categorias);
    const existe=useSelector(state=>state.existe);
    const [pro,setPro]=useState("");
    const dispatch=useDispatch();
        
   

    const [value,setValue]=useState("");
   
 
useEffect(()=>{
    
        dispatch(getProductosThunk());
    
    

},[dispatch])


useEffect(()=>{
   if(value){

    dispatch(getCategoriasThunk(value));
   } 

},[dispatch,value])



const submit=e=>{
    e.preventDefault();
  dispatch(getProductosNombreThunk(pro))
}


const despachar=()=>{
    dispatch(getProductosThunk());
    setValue("0");
}

    return (
        <div className="shop">
           <h1>Catálogo</h1> 
           <form onSubmit={submit} className='buscarProducto'>
               <input value={pro}id='producto'onChange={e=>setPro(e.target.value)}placeholder='Elige tu producto...'></input>
               <button className='buscar'>Buscar</button>
           </form>
          {existe && <div className="Noexiste">El producto no existe. Intenta con otro...</div>}
           
           <div className='botones'>
           <button style={{border:"none"}}value="0"className="boton"onClick={despachar}>Todos</button>
           <button value="1"className="boton"onClick={e=>setValue(e.target.value)}>Pendientes</button>
           <button value="2"className="boton"onClick={e=>setValue(e.target.value)}>Collares</button>
           <button value="3"className="boton"onClick={e=>setValue(e.target.value)}>Anillos</button>
           <button value="4"className="boton"onClick={e=>setValue(e.target.value)}>Brasaletes</button>
           </div>
           <ul>
           {value==="0"||value===""? productos.map(pro=>(
               <Link className="Link"to={`/shop/${pro?.name}`} key={pro?.id}>
               <Producto 
               categoria={pro.category?.name}
               descripcion={pro?.description}
               imagenes={pro?.images}
               nombre={pro?.name}
               precio={pro?.price}
               
               />
               </Link>
           )):categorias.map(pro=>(
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

export default Shop;