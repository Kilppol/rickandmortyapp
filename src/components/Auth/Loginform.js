import {
	View,
	Text,
	TextInput,
	Button,
	StyleSheet,
	SafeAreaView,
	Image,
	StatusBar,
} from 'react-native';
import React, { useState, useRef } from 'react';
import { SvgXml } from 'react-native-svg';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ButtonLogin from '../ButtonLogin';
import { user, useDetail } from '../../utils/userDB';

export default function LoginForm(props) {
	const logoRef = useRef('../../assets/imglogpng.png');
	const { navigation } = props;
	const [error, setError] = useState('');

	const formik = useFormik({
		initialValues: initialValues(),
		validationSchema: Yup.object(validationSchema()),
		validateOnChange: false,
		onSubmit: (formData) => {
			setError('');
			const { username, password } = formData;
			if (username !== user.username || password !== user.password) {
				console.log('Usuario o contraseña incorrectos');
				setError('Usuario o contraseña incorrectos');
			} else {
				navigation.navigate('Tab');
				console.log('Login correcto');
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

	const goToCrearCuenta = () => {
		navigation.navigate('CrearCuenta');
	};

	const goToOlvidaste = () => {
		navigation.navigate('OlvidasteContrasena');
	};

	return (
		<View style={styles.mainContainer}>
			<StatusBar backgroundColor='#fff' barStyle='dark-content' />
			<View style={styles.containerSvg}>
				<Image
					width={150}
					height={150}
					ref={logoRef}
					//source={require('../../assets/imglogpng.png')}
					style={styles.fondoLogin}
				/>
			</View>
			<View style={styles.containerForm}>
				<View style={styles.centeredContent}>
					<Text style={styles.titulo}>Hola</Text>
					<Text style={styles.subTitulo}>Ingresa a tu cuenta</Text>
					<TextInput
						placeholder='Nombre de usuario'
						style={styles.inputText}
						autoCapitalize='none'
						value={formik.values.username}
						onChangeText={(text) =>
							formik.setFieldValue('username', text)
						}
					/>

					<Text style={styles.error}>{formik.errors.username}</Text>

					<TextInput
						placeholder='Contrasena'
						style={styles.inputText}
						autoCapitalize='none'
						secureTextEntry={true}
						value={formik.values.password}
						onChangeText={(text) =>
							formik.setFieldValue('password', text)
						}
					/>

					<Text style={styles.error}>{formik.errors.password}</Text>

					<Text style={styles.text2} onPress={goToOlvidaste}>
						Olvidaste tu contraseña
					</Text>
				</View>

				<ButtonLogin onPress={formik.handleSubmit} />
				<Text style={styles.error}>{error}</Text>

				<Text style={styles.text3}>
					No tienes cuenta?{' '}
					<Text style={styles.boldText} onPress={goToCrearCuenta}>
						Crear
					</Text>
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	mainContainer: {
		backgroundColor: '#F8F4F4',
		height: '100%',
	},
	containerSvg: {
		marginTop: 0,
		alignItems: 'center',
		justifyContent: 'center',
	},
	error: {
		color: 'red',
		fontSize: 14,
		marginTop: 10,
		textAlign: 'center',
	},
	fondoLogin: {
		top: 20,
	},
	containerForm: {
		flex: 1,
		marginTop: -250,
		justifyContent: 'center',
		alignItems: 'center',
	},
	centeredContent: {
		marginTop: 100,
		alignItems: 'center',
	},
	titulo: {
		fontSize: 70,
		color: '#000000',
		fontWeight: 'bold',
	},
	subTitulo: {
		fontSize: 20,
		color: '#000000',
	},
	inputText: {
		height: 60,
		width: 350,
		backgroundColor: '#F8F8F8',
		borderRadius: 20,
		padding: 15,
		marginTop: 15,
		paddingStart: 20,
	},
	text2: {
		fontSize: 15,
		color: '#848484',
		marginTop: 15,
		marginRight: -140,
	},
	text3: {
		fontSize: 15,
		color: '#848484',
		marginTop: 100,
		marginBottom: -100,
		marginRight: -20,
	},
	boldText: {
		fontWeight: 'bold',
	},
});
// import {
// 	View,
// 	Text,
// 	TextInput,
// 	Button,
// 	StyleSheet,
// 	Keyboard,
// } from 'react-native';
// import React, { useState } from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import { user, useDetail } from '../../utils/userDB';

// export default function Loginform() {
// 	const [error, setError] = useState('');
// 	const formik = useFormik({
// 		initialValues: initialValues(),
// 		validationSchema: Yup.object(validationSchema()),
// 		validateOnChange: false,
// 		onSubmit: (formData) => {
// 			setError('');
// 			const { username, password } = formData;
// 			if (username !== user.username || password !== user.password) {
// 				console.log('Usuario o contraseña incorrectos');
// 				// console.log(user.username);
// 				// console.log(user.password);
// 				// console.log(username);
// 				// console.log(password);
// 			} else {
// 				console.log('Login correcto');
// 			}
// 		},
// 	});
// 	function validationSchema() {
// 		return {
// 			username: Yup.string().required('El nombre de usuario es obligatorio'),
// 			password: Yup.string().required('La contrasena es obligatoria'),
// 		};
// 	}
// 	function initialValues() {
// 		return {
// 			username: '',
// 			password: '',
// 		};
// 	}
// 	return (
// 		<View>
// 			<Text style={styles.personajeNombre}>Iniciar sesion</Text>
// 			<TextInput
// 				placeholder='Nombre de usuario'
// 				style={styles.input}
// 				autoCapitalize='none'
// 				value={formik.values.username}
// 				onChangeText={(text) => formik.setFieldValue('username', text)}
// 			/>
// 			<TextInput
// 				placeholder='Contrasena'
// 				style={styles.input}
// 				autoCapitalize='none'
// 				secureTextEntry={true}
// 				value={formik.values.password}
// 				onChangeText={(text) => formik.setFieldValue('password', text)}
// 			/>
// 			<Button title='Iniciar sesion' onPress={formik.handleSubmit} />
// 			<Text style={styles.error}>{formik.errors.username} </Text>
// 			<Text style={styles.error}>{formik.errors.password} </Text>
// 		</View>
// 	);
// }

// const styles = StyleSheet.create({
// 	title: {
// 		textAlign: 'center',
// 		fontSize: 20,
// 		fontWeight: 'bold',
// 		marginTop: 50,
// 		marginBottom: 20,
// 	},
// 	input: {
// 		height: 40,
// 		margin: 12,
// 		borderWidth: 1,
// 		padding: 10,
// 		borderRadius: 10,
// 	},
// 	personajeNombre: {
// 		marginTop: 20,
// 		fontSize: 30,
// 		fontWeight: 'bold',
// 		marginBottom: 20,
// 		color: '#000',
// 		textAlign: 'center',
// 	},
// });
