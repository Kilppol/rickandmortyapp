import {
	View,
	Tex,
	TextInput,
	Button,
	StyleSheet,
	Keyboard,
} from 'react-native';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { user, useDetail } from '../../utils/userDB';

export default function Loginform() {
	const [error, setError] = useState('');
	const formik = useFormik({
		initialValues: initialValues(),
		validationSchema: Yup.object(validationSchema()),
		validateOnChange: false,
		onSubmit: (formData) => {
			setError('');
			const { username, password } = formData;
			if (username !== user.name || password !== user.password) {
				console.log('Usuario o contraseña incorrectos');
			} else {
				console.log('Login incorrecto');
			}
		},
	});
	function validationSchema() {
		return {
			username: Yup.string().required('El nombre de usuario es obligatorio'),
			password: Yup.string().required('La contrasena es obligatoria'),
		};
	}
	function initialValues() {
		return {
			username: '',
			password: '',
		};
	}
	return (
		<View>
			<Text>Iniciar sesion</Text>
			<TextInput
				placeholder='Nombre de usuario'
				style={styles.input}
				autoCapitalize='none'
				value={formik.values.username}
				onChangeText={(text) => formik.setFieldValue('username', text)}
			/>
			<TextInput
				placeholder='Contrasena'
				style={styles.input}
				autoCapitalize='none'
				secureTextEntry={true}
				value={formik.values.password}
				onChangeText={(text) => formik.setFieldValue('password', text)}
			/>
			<Button title='Iniciar sesion' onPress={formik.handleSubmit} />
			<Text style={styles.error}>{formik.errors.username} </Text>
			<Text style={styles.error}>{formik.errors.password} </Text>
		</View>
	);
}

const styles = StyleSheet.create({
	title: {
		textAlign: 'center',
		fontSize: 20,
		fontWeight: 'bold',
		marginTop: 50,
		marginBottom: 20,
	},
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
		borderRadius: 10,
	},
});
