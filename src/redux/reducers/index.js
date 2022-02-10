import { actions } from "../actions";
const INITIAL_STATE = {
productos:[],
categorias:[],
cargando:false,
existe:false,
carrito:[],
compras:[]
}

const reducer = (state = INITIAL_STATE, action) => {
switch(action.type){
    case actions.setProductos:
        return{...state,
            productos:action.payload};
    case actions.setCategorias:
        return{...state,
            categorias:action.payload};
    case actions.setCargando:
        return{...state,
            cargando:action.payload};
     case actions.setExiste:
        return{...state,
            existe:action.payload};
    case actions.setCarrito:
        return{...state,
            carrito:action.payload};
    case actions.setCompras:
        return{...state,
            compras:action.payload};  
   default:return state;
}

}


export default reducer;
