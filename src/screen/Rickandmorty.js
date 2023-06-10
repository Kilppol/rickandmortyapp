import {
	View,
	Text,
	Image,
	StyleSheet,
	SafeAreaView,
	ScrollView,
	FlatList,
} from 'react-native';
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

	const formatEpisode = (url) => {
		const episodeNumber = url.split('/').pop();
		return `Episodio ${episodeNumber}`;
	};

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

						{characters.type !== '' && (
							<>
								<View style={styles.textoWrapper}>
									<Text style={styles.textoWrapped}>Type</Text>
								</View>
								<Text style={styles.personajeEspecie}>
									{characters.type}
								</Text>
							</>
						)}

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
						<FlatList
							style={styles.flatList}
							data={characters.episode}
							keyExtractor={(item) => item}
							renderItem={({ item }) => (
								<Text style={[styles.textoScrollbar]}>
									{formatEpisode(item)}
								</Text>
							)}
						/>
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	textoScrollbar: {
		height: 20,
		width: 350,
		marginTop: 10,
		fontSize: 18,
		marginBottom: 5,
		color: '#FFFFFF',
		textAlign: 'center',
		alignSelf: 'center',
	},
	header: {
		flexGrow: 1,
		flexDirection: 'row',
		padding: 10,
		marginTop: 265,
		marginLeft: 47,
		alignItems: 'top',
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
		flexGrow: 1,
		marginTop: 10,
		alignSelf: 'flex-start',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		height: '100%',
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
		alignSelf: 'center',
		backgroundColor: 'white',
		padding: 5,
		borderRadius: 5,
		width: 150,
		height: 44,
		transform: [{ rotate: '90deg' }],
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
	personajeEstado: {
		fontSize: 25,
		color: '#FFFFFF',
		alignSelf: 'center',
		fontWeight: 'bold',
		marginTop: 5,
	},
	personajeEspecie: {
		marginTop: 2,
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
	flatList: {
		flex: 1,
		marginTop: 10,
		width: 300,
		height: 100,
	},
});
