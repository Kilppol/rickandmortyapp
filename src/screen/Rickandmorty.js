import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Rickandmorty({ route }) {
	const { characters } = route.params;
	const navigation = useNavigation();
	React.useLayoutEffect(() => {
		navigation.setOptions({ headerShown: false });
	}, [navigation]);

	let estadoColor = '';

	switch (characters.status) {
		case 'Alive':
			estadoColor = '#04F32D';
			break;
		case 'Dead':
			estadoColor = '#FF0000';

			break;
		case 'unknown':
			estadoColor = '#FF8800';
			break;
		default:
			estadoColor = 'gray';
			break;
	}

	return (
		<SafeAreaView style={styles.contenedor}>
			<View style={styles.contenedorDos}>
				<Text style={styles.personajeNombre}>{characters.name}</Text>
				<View style={styles.personajeContainer}>
					<View style={styles.header}>
						<Image
							source={{ uri: characters.image }}
							style={styles.personajeImagen}
						/>
						<View
							style={[
								styles.personajeEstadoWrapper,
								{ backgroundColor: estadoColor },
							]}
						>
							<Text style={styles.personajeEstado}>
								{characters.status}
							</Text>
						</View>
					</View>
					<View style={styles.personajeText}>
						<View style={styles.textoWrapper}>
							<Text style={styles.textoWrapped}>Species</Text>
						</View>
						<Text style={styles.personajeEspecie}>
							{characters.species}
						</Text>
						<View style={styles.textoWrapper}>
							<Text style={styles.textoWrapped}>Type</Text>
						</View>
						<Text style={styles.personajeEspecie}>{characters.type}</Text>
						<View style={styles.textoWrapper}>
							<Text style={styles.textoWrapped}>Gender</Text>
						</View>
						<Text style={styles.personajeEspecie}>
							{characters.gender}
						</Text>
						<View style={styles.textoWrapper}>
							<Text style={styles.textoWrapped}>Location</Text>
						</View>
						<Text style={styles.personajeEspecie}>
							{characters.location.name}
						</Text>
						<View style={styles.textoWrapper}>
							<Text style={styles.textoWrapped}>Episodes</Text>
						</View>
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	header: {
		flex: 1,
		flexDirection: 'row',
		padding: 10,
		marginLeft: 50,
		alignItems: 'center',
	},
	contenedor: {
		flex: 1,
		backgroundColor: '#2A2C2E',
	},
	contenedorDos: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 10,
	},
	personajeText: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 150,
	},
	personajeContainer: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: '#2A2C2E',
		borderRadius: 15,
		padding: 10,
		flexGrow: 1,
		width: '100%',
		height: '80%',
	},
	personajeImagen: {
		width: 200,
		height: 200,
		borderRadius: 10,
	},
	personajeNombre: {
		marginTop: 20,
		fontSize: 30,
		fontWeight: 'bold',
		marginBottom: 20,
		color: '#000',
		textAlign: 'center',
	},
	personajeEstadoWrapper: {
		// position: 'absolute',
		// top: 105,
		// right: 10,
		backgroundColor: 'white',
		padding: 5,
		borderRadius: 5,
		width: 150,
		height: 44,
		transform: [{ rotate: '90deg' }],
		// alignSelf: 'center',
		// marginTop: -90,
	},
	textoWrapper: {
		marginTop: 20,
		backgroundColor: 'white',
		width: 300,
		alignItems: 'center',
	},
	textoWrapped: {
		// marginTop: 10,
		fontSize: 20,
		fontWeight: 'bold',
	},

	personajeEstado: {
		fontSize: 25,
		color: '#FFFFFF',
		alignSelf: 'center',
		fontWeight: 'bold',
		marginTop: 5,
	},
	personajeEspecie: {
		marginTop: 10,
		fontSize: 18,
		marginBottom: 5,
		color: '#FFFFFF',
		textAlign: 'center',
	},
	personajeUbicacion: {
		marginTop: 5,
		fontSize: 18,
		color: '#FFFFFF',
		textAlign: 'center',
	},
});
