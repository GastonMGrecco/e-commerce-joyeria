import React,{useState} from 'react';
import ver from '../ver.png';
import nover from '../nover.png';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const SignUp = () => {

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [vista,setVista]=useState(false);
    const submit = data => {

        console.log(data);

        axios.post(`https://ecommerce-exercise-backend.herokuapp.com/users/`, data)
        .then(navigate("../login"))
        .catch((error) => console.log(error.response))

    }

    return (
        <div className='login'>
            <form className='loginForm' onSubmit={handleSubmit(submit)}>
                
                <div className='input'>
                    <div className="ingreso">
                        <label htmlFor='email'>E-mail: </label>
                        <input type="email" {...register('email')} id='email' required></input>
                    </div>
                    <div className="ingreso">
                        <label htmlFor='nombre'>Nombres: </label>
                        <input type="text" {...register('first_name')} id='nombre' required></input>
                    </div>
                    <div className="ingreso">
                        <label htmlFor='apellido'>Apellido: </label>
                        <input type="text" {...register('last_name')} id='apellido' required></input>
                    </div>

                    <div className="ingreso">
                        <label htmlFor='password'>Contraseña: </label>
                        <input type={vista===false?"password":"text"} {...register('password')} id='password' required></input>
                        <button type="button" className="ojo"onClick={()=>setVista(!vista)}>
                            {vista===false?<img title="Mostrar contraseña"className="ojo" src={ver}alt=""/>
                            :<img title="Ocultar contraseña"className="ojo" src={nover}alt=""/>}</button>
                    </div>


                    
                </div>
                <button className='botonLogin'>Ingresar</button>
                <p style={{alignSelf: "center"}}>¿Ya estás registrado?<Link to="../login">Inicia Sesión</Link></p>

            </form>
        </div>
    );
};

export default SignUp;