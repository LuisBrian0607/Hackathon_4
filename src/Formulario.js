import React from 'react';
import './Formulario.css';
import { useForm } from 'react-hook-form';

const Formu = () => {

    const { register, errors, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        <p>{data}</p>
        console.log(data);
        e.target.reset();

    }

    return (
        <>
            <div className="contenedor">
                <div className="resultado">
                    <h1>Welcome!</h1>
                    
                </div>
                <div className="formulario">
                    <form onSubmit={handleSubmit(onSubmit)} >

                        <h1>Registrate</h1>
                        <fieldset >
                          

                            <input className="campito" type="text"
                                placeholder="Nombre"
                                name="fname"
                                ref={
                                    register({
                                        required: {
                                            value: true,
                                            message: 'Este campo es obligatorio'
                                        },
                                        maxLength: {
                                            value: 8,
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
                                ref={
                                    register({
                                        required: {
                                            value: true,
                                            message: 'Este campo es obligatorio'
                                        },
                                        maxLength: {
                                            value: 14,
                                            message: 'el apellido es muy largo'
                                        }
                                    })
                                } /><br />
                            <span>
                                {errors?.lname?.message}<br />
                            </span>
                            <input className="campito" type="text" name="email" placeholder="Correo"
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
                            <input className="campito" type="tel" name="telefono" placeholder="Telefono"
                                ref={
                                    register({
                                        required: {
                                            value: true,
                                            message: 'Este campo es obligatorio'
                                        },
                                        maxLength: {
                                            value: 7,
                                            message: ''
                                        }
                                    })
                                }
                            /><br />
                            <span>
                                {errors?.telefono?.message}<br />
                            </span>
                            <input className="campito" type="date" name="birthday" 
                                ref={
                                    register({
                                        required: {
                                            value: true,
                                            message: 'ingrese su fecha de nacimiento'
                                        }
                                    })
                                } /><br />
                            <span>
                                {errors?.birthday?.message}<br />
                            </span>
                            <input className="campito" type="text" name="direccion" placeholder="Dirección"
                                ref={
                                    register({
                                        required: {
                                            value: true,
                                            message: 'La dirección es obligatoria'
                                        },
                                        minLength: {
                                            value: 10,
                                            message: 'Su dirección es muy corta'
                                        }
                                    })
                                } /><br />
                            <span>
                                {errors?.direccion?.message}<br />
                            </span>


                            <input className="botonazo" type="submit" value="Click me" />

                        </fieldset>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Formu;