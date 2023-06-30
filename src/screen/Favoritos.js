import { View, Text, SafeAreaView, Button } from 'react-native';
import React from 'react';
import { getFavoriteApi } from '../api/favorito';

export default function Favoritos() {
	const checkFavorito = async () => {
		const response = await getFavoriteApi();
		console.log(response);
	};
	return (
		<SafeAreaView>
			<Text>Favoritos</Text>
			<Button title='Obtener' onPress={checkFavorito} />
		</SafeAreaView>
	);
}
