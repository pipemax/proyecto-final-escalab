import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import FormInput from "./FormInput";
import Swal from 'sweetalert2';
/* State Login de Redux*/
import { useDispatch } from 'react-redux'; 
import { logIn } from '../features/loginSlice';
import useGetLocalStorageFavorites from '../custom-hooks/useGetLocalStorageFavorites';
import propTypes from "prop-types";

const FormLogin = ({ onHide }) => {	

	const [email, setEmail] 		= useState("");
	const [password, setPassword] 	= useState("");
	const dispatch 					= useDispatch();
	const { loadLocalStorage } = useGetLocalStorageFavorites();

	const handleChange = (event) => {
		const { value, id } = event.target;
    	if (id === 'email')
		{
			setEmail(value);
		}
		if (id === 'password')
		{
			setPassword(value);
		}
	}

	const handleSubmit = (event) => {
		event.preventDefault();		
		if(email === 'test@test.cl' && password === 'test')
		{
			Swal.fire({
				title: '¡Usuario Autenticado!',
				text: 'Ahora podrás guardar tus favoritos',
				icon: 'success',
				confirmButtonText: 'Ok'
			});
			dispatch(logIn());
			onHide();	
			loadLocalStorage();		
		}
		else
		{
			Swal.fire({
				title: '¡Usuario y contraseña no válido!',
				text: 'Los datos son inválidos, no podrás administrar tus favoritos :(',
				icon: 'error',
				confirmButtonText: 'Ok'
			});
		}
	};
	

	return (
		<Form onSubmit={handleSubmit}>			
			<FormInput 
				class_Name="mb-3" 
				name="email"
				type="email"
				label="Ingrese su Email"
				placeholder="example@example.com"
				underLabel="No hay backend :(, así que el correo es: test@test.cl y la pass: test" 
				handleChange= { handleChange }
				required
			/>
			<FormInput 
				class_Name="mb-3" 
				name="password"
				type="password"
				label="Ingrese su contraseña"
				placeholder="1234"
				handleChange= { handleChange }
				required
			/>
			<Button variant="primary" type="submit">
				Guardar
			</Button>
		</Form>
	);
};

FormLogin.propTypes = {
    onHide: propTypes.bool
};
   
export default FormLogin;
