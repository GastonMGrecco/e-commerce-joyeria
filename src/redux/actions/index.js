import axios from "axios";
import { getConfig } from "../utils";


export const actions={
    setProductos:"SET_PRODUCTOS",
    setCategorias:"SET_CATEGORIAS",
    setCargando:"SET_CARGANDO",
    setExiste:"SET_EXISTE",
    setCarrito:"SET_CARRITO",
    setCompras:"SET_COMPRAS"
}

export const setProductos=productos=>({
    type:actions.setProductos,
    payload: productos

});
export const setCategorias=categoria=>({
    type:actions.setCategorias,
    payload: categoria

});
export const setCargando=cargando=>({
    type:actions.setCargando,
    payload: cargando

});
export const setExiste=existe=>({
    type:actions.setExiste,
    payload:existe

})
export const setCarrito=producto=>({
    type:actions.setCarrito,
    payload:producto
})
export const setCompras=compras=>({
    type:actions.setCompras,
    payload:compras
})


export const getProductosThunk=()=>{
    return dispatch=>{
        dispatch(setCargando(true));
        axios.get("https://ecommerce-exercise-backend.herokuapp.com/products/",getConfig)
        .then(res=>dispatch(setProductos(res.data)))
        .catch(error => console.log(error.response))
        .finally(()=>dispatch(setCargando(false)))
    }
}
export const getProductosNombreThunk=(nombre)=>{
    return dispatch=>{
        dispatch(setCargando(true));
        axios.get(`https://ecommerce-exercise-backend.herokuapp.com/products/?name__icontains=${nombre}`,getConfig)
        .then(res=>dispatch(setProductos(res.data)))
        .catch(error => console.log(error.response))
        .finally(()=>dispatch(setCargando(false)))
    }
}


export const getCategoriasThunk=(value)=>{
    return dispatch=>{
        dispatch(setCargando(true));
        axios.get(`https://ecommerce-exercise-backend.herokuapp.com/products/?category=${value}`,getConfig)
        .then(res=>dispatch(setCategorias(res.data)))
        .catch(error => console.log(error.response))
        .finally(()=>dispatch(setCargando(false)))
    }
    
}

export const getCarritoThunk=()=>{
    return dispatch=>{
        dispatch(setCargando(true));
        axios.get("https://ecommerce-exercise-backend.herokuapp.com/cart/",getConfig)
        .then(res=>dispatch(setCarrito(res.data)))
        .catch(error=>console.log(error.response))
        .finally(()=>dispatch(setCargando(false)))
    }
}
export const setCarritoThunk=id=>{
    return dispatch=>{
        dispatch(setCargando(true));
        axios.post("https://ecommerce-exercise-backend.herokuapp.com/products/add_to_cart/",id,getConfig)
        .then(()=>dispatch(getCarritoThunk()))
        .catch(error=>console.log(error.response))
        .finally(()=>dispatch(setCargando(false)))
    }
}

export const setBorrarProductoThunk=id=>{
    return dispatch=>{
        dispatch(setCargando(true));
        axios.delete(`https://ecommerce-exercise-backend.herokuapp.com/cart/${id}/remove_item/`,getConfig)
        .then(()=>dispatch(getCarritoThunk()))
        .catch(error=>console.log(error.response))
        .finally(()=>dispatch(setCargando(false)))
    }
}
export const setModificarCantidadProductoThunk=(id,cantidad)=>{
    return dispatch=>{
        dispatch(setCargando(true));
        axios.put(`https://ecommerce-exercise-backend.herokuapp.com/cart/${id}/change_quantity/`,cantidad,getConfig)
        .then(()=>dispatch(getCarritoThunk()))
        .catch(error=>console.log(error.response))
        .finally(()=>dispatch(setCargando(false)))
    }
}
//     esto es para obtener lo comprado

export const getComprasThunk=()=>{
    return dispatch=>{
        dispatch(setCargando(true));
        axios.get("https://ecommerce-exercise-backend.herokuapp.com/orders/",getConfig)
        .then(res=>dispatch(setCompras(res.data)))
        .catch(error=>console.log(error.response))
        .finally(()=>dispatch(setCargando(false)))
    }
}

export const setComprarThunk=()=>{
    return dispatch=>{
        dispatch(setCargando(true));
        axios.post("https://ecommerce-exercise-backend.herokuapp.com/cart/buy/",{},getConfig)
        .then(res=>{
            dispatch(getCarritoThunk());
            dispatch(getComprasThunk());
        })
        .catch(error=>console.log(error.response))
        .finally(()=>dispatch(setCargando(false)))
    }
}