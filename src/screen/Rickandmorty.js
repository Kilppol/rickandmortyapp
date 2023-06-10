import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import RickandmortyList from '../components/RickandmortyList';
import HeaderInfo from '../components/HeaderInfo';

export default function Rickandmorty({ route }) {
	const { characters } = route.params;
	return (
		<SafeAreaView style={styles.contenedor}>
			<View style={styles.contenedorDos}>
				<HeaderInfo characters={characters}></HeaderInfo>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	contenedor: {
		flex: 1,
	},
	contenedorDos: {
		flexGrow: 1,
		backgroundColor: 'black',
		alignSelf: 'center',
		alignContent: 'center',
		width: '100%',
		height: '100%',
		borderRadius: 20,
		marginTop: 20,
		marginBottom: -20,
	},
});
