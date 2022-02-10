import React,{useState} from 'react';
import {useForm}from'react-hook-form';
import axios from 'axios';
import ver from '../ver.png';
import nover from '../nover.png';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const {register,handleSubmit}=useForm();
    const navigate=useNavigate();
    const [vista,setVista]=useState(false);
    const submit=data=>{ 
        
        console.log(data);
        axios.post( `https://ecommerce-exercise-backend.herokuapp.com/login/`,data)
        .then(res=>{
            localStorage.setItem("token",res.data.access);
            navigate("/shop");
            window.location.reload();  
        })
        .catch(()=>console.log("El usuario o contrasea no existe"))
         
    }
  
    return (
        <div className='login'>
            <form className='loginForm' onSubmit={handleSubmit(submit)}>
                <div className='ejemplo'>
                    <h3 style={{alignSelf: "center", fontSize:"15px"}}>Puedes utilizar estos datos</h3>
                    <p className='in'>E-mail: admin@admin.com</p>
                    <p className='in'>Contraseña: "root"</p>
                </div>
                <div className='input'>
                    <div className="ingreso">
                    <label htmlFor='email'>E-mail: </label>
                    <input type="email" {...register('email')} id='email'required></input>
                    </div>
                    

                    <div className="ingreso">
                    <label htmlFor='password'>Contraseña: </label>
                    <input type={vista===false?"password":"text"} {...register('password')}id='password'required></input>
                    <button type="button" className="ojo"onClick={()=>setVista(!vista)}>
                        {vista===false?<img title="Mostrar contraseña" className="ojo" src={ver} alt=""/>
                        :<img title="Ocultar contraseña"className="ojo" src={nover}alt=""/>}</button>
                    </div>
                

                    <button className='botonLogin'>Ingresar</button>
                </div>
                <p style={{alignSelf: "center"}}>¿No estás registrado?<Link to="./signup">Regístrate</Link></p>

            </form>
        </div>
    );
};

export default Login;