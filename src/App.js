
import './App.css';
import { HashRouter, Route, Routes, Link } from 'react-router-dom';
import { Home, Login, Shop, ProductId, Car, ProtectLogin, Orders, SignUp,ContactUs,AboutUs } from './routes';
import { useSelector, useDispatch } from 'react-redux';
import { getCarritoThunk, getComprasThunk } from './redux/actions';
import carrito from './carrito.png';
import inicio from './inicio.png';
import tienda from './tienda.png';
import miscompras from './miscompras.png';
import login from './login.png';
import logout from './logout.png';
import sobrenosotros from './sobrenosotros.png';
import contactanos from './contactanos.png';
console.log(localStorage.getItem("token"));


function App() {
  const dispatch = useDispatch();
  const cargando = useSelector(state => state.cargando)
  const Carrito = useSelector(state => state.carrito)

  let cantidad = 0;
  Carrito.map(producto => (cantidad = cantidad + producto.quantity))

  const despacharCarrito = () => {

    dispatch(getCarritoThunk())
  }
  const despacharCompras = () => {
    dispatch(getComprasThunk())
  }
  const Logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  }
  return (

    <HashRouter>
      {cargando && <div className='Cargando'>
        <div id="contenedor">
          <div className="loader" id="loader">Loading...</div>
        </div>
      </div>}

      <div className='Encabezado'>
        <div className="division">
          <Link title="Cerrar sesión" to="/" className="cerrar" onClick={Logout}
            style={localStorage.getItem("token") ?
              { visibility: "visible" } : { visibility: "hidden", position:"absolute"}}>
            <img className="inicio" src={logout} alt="" /></Link>
          <Link title="Iniciar sesión" className="Paginas"
            to="/login" style={localStorage.getItem("token") ?
              { visibility: "hidden", position:"absolute"} : { visibility: "visible" }}>
            <img className="inicio" src={login} alt="Tienda" /></Link>
          <Link title="Inicio" className="Paginas"
            to="/" >
            <img className="inicio" src={inicio} alt="" /></Link>
          <Link title="Sobre nosotros" className="Paginas"
            to="/aboutus" style={localStorage.getItem("token") ?
              { visibility: "visible" } : { visibility: "hidden" }}>
            <img className="inicio" src={sobrenosotros} alt="Tienda" /></Link>
          <Link title="Contáctanos" className="Paginas"
            to="/contactus" style={localStorage.getItem("token") ?
              { visibility: "visible" } : { visibility: "hidden" }}>
            <img className="inicio2" src={contactanos} alt="Tienda" /></Link>
          <Link title="Tienda de Productos" className="Paginas"
            to="/shop" style={localStorage.getItem("token") ?
              { visibility: "visible" } : { visibility: "hidden" }}>
            <img className="inicio" src={tienda} alt="Tienda" /></Link>

        </div>
        <div className="division">
          <Link title="Tus compras" className="Paginas"
            to="/orders" style={localStorage.getItem("token") ?
              { visibility: "visible" } : { visibility: "hidden" }} onClick={despacharCompras}>
            <img className="inicio2" src={miscompras} alt="Tienda" /></Link>
          <Link title="Carrito de compras" className="Paginas"
            to="/car" style={localStorage.getItem("token") ?
              { visibility: "visible" } : { visibility: "hidden" }} onClick={despacharCarrito}>
            <img className="carrito" src={carrito} alt="" /><span>{cantidad}</span></Link>
        </div>


      </div>


      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/signup" element={<SignUp />} />
        <Route element={<ProtectLogin />}>
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ProductId />} />
          <Route path="/car" element={<Car />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Route>
      </Routes>
    </HashRouter>

  );
}

export default App;
