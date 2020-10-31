import React,{useState} from 'react';
import './Formulario.css';
import { useForm } from 'react-hook-form';

const Formu = () => {

    const { register, errors, handleSubmit } = useForm();
    const [datos,Setdatos]=useState([]);

    const onSubmit = (data, e) => {
        Setdatos([...datos,data]);
        e.target.reset();
        
    }

    return (
        <>
            <div className="contenedor">
                <div className="resultado">
                    <h1>Usuarios</h1>
                    <div>
                    {datos.map((item, index) => (
                        <div className="card-container" key={index}>
                        <label>Nombre: {item.fname}</label><br/>
                        <label>Apellido: {item.lname}</label><br/>
                        <label>Correo: {item.email}</label><br/>
                        <label>Telefono: {item.telefono}</label><br/>
                        <label>Fecha de Nacimiento: {item.birthday}</label><br/>
                        <label>Dirección: {item.direccion}</label><br/>
                        <hr/>
                      </div>
                    ))}
                    </div>

                </div>
                <div className="formulario">
                    <form onSubmit={handleSubmit(onSubmit)} >

                        <h1>Registrate</h1>
                        <fieldset >


                            <input className="campito" type="text"
                                placeholder="Nombre"
                                name="fname"
                                autoComplete="none"
                                ref={
                                    register({
                                        required: {
                                            value: true,
                                            message: 'Este campo es obligatorio'
                                        },
                                        maxLength: {
                                            value: 12,
                                            message: 'el nombre es muy larga'
                                        }
                                    })
                                } />
                            <br />
                            <span>
                                {errors?.fname?.message}<br />
                            </span>
                            <input className="campito" type="text"
                                placeholder="Apellido"
                                name="lname"
                                autoComplete="none"
                                ref={
                                    register({
                                        required: {
                                            value: true,
                                            message: 'Este campo es obligatorio'
                                        },
                                        maxLength: {
                                            value: 18,
                                            message: 'el apellido es muy largo'
                                        }
                                    })
                                } /><br />
                            <span>
                                {errors?.lname?.message}<br />
                            </span>
                            <input className="campito" type="text" name="email" placeholder="Correo" autoComplete="none"
                                ref={
                                    register({
                                        required: {
                                            value: true,
                                            message: 'Este campo es obligatorio'
                                        },
                                        pattern: {
                                            value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                            message: 'caracteres invalidos'
                                        }
                                    })
                                }
                            /><br />
                            <span>
                                {errors?.email?.message}<br />
                            </span>
                            <input className="campito" type="tel" name="telefono" placeholder="Telefono" autoComplete="none"
                                ref={
                                    register({
                                        required: {
                                            value: true,
                                            message: 'Este campo es obligatorio'
                                        },
                                        maxLength: {
                                            value: 7,
                                            message: 'El número es invalido'
                                        }
                                    })
                                }
                            /><br />
                            <span>
                                {errors?.telefono?.message}<br />
                            </span>
                            <input className="campito" type="text" name="birthday" placeholder="Fecha de Nacimiento" autoComplete="none"
                                ref={
                                    register({
                                        required: {
                                            value: true,
                                            message: 'Este campo es obligatorio'
                                        }
                                    })
                                } /><br />
                            <span>
                                {errors?.birthday?.message}<br />
                            </span>
                            <input className="campito" type="text" name="direccion" placeholder="Dirección" autoComplete="none"
                                ref={
                                    register({
                                        required: {
                                            value: true,
                                            message: 'Este campo es obligatorio'
                                        }
                                    })
                                } /><br />
                            <span>
                                {errors?.direccion?.message}<br />
                            </span>

                          
                            <input className="botonazo" type="submit" value="Submit" />
                          
                        </fieldset>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Formu;