import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDetail } from '../../utils/userDB';

export default function UserData(props) {
	const { auth } = props;

	const userMatch = useDetail.username === auth ? useDetail : null;
	//const userMatch = useDetail[auth];

	if (userMatch) {
		const { firstName, lastName, email } = userMatch;

		return (
			<SafeAreaView style={styles.contenedor}>
				<View style={styles.contenedorDos}>
					<Text style={styles.personajeNombre}>{auth}</Text>
					<View style={styles.personajeContainer}>
						<Icon
							name='user-o'
							size={150}
							color={'white'}
							style={styles.icon}
						/>
						<View style={styles.textoWrapper}>
							<Text style={styles.textoWrapped}>Nombre</Text>
						</View>
						<Text style={styles.personajeEspecie}>
							{firstName} {lastName}
						</Text>
						<View style={styles.textoWrapper}>
							<Text style={styles.textoWrapped}>Correo</Text>
						</View>
						<Text style={styles.personajeEspecie}>{email}</Text>
					</View>
				</View>
			</SafeAreaView>
		);
	} else {
		return (
			<SafeAreaView style={styles.contenedor}>
				<View style={styles.contenedorDos}>
					<Text style={styles.personajeNombre}>Usuario no encontrado</Text>
				</View>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	contenedor: {
		flexGrow: 1,
		backgroundColor: '#2A2C2E',
	},
	contenedorDos: {
		flexGrow: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 10,
	},
	personajeNombre: {
		marginTop: 20,
		fontSize: 30,
		fontWeight: 'bold',
		marginBottom: 20,
		color: '#000',
		textAlign: 'center',
	},
	personajeContainer: {
		flexGrow: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#2A2C2E',
		borderRadius: 15,
		padding: 10,
		flexGrow: 1,
		width: '100%',
		height: '80%',
	},
	icon: {
		position: 'absolute',
		top: 20,
		left: 20,
	},
	textoWrapper: {
		marginTop: 10,
		backgroundColor: 'white',
		width: 300,
		alignItems: 'center',
	},
	textoWrapped: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	personajeEspecie: {
		marginTop: 2,
		fontSize: 18,
		marginBottom: 5,
		color: '#FFFFFF',
		textAlign: 'center',
	},
});
