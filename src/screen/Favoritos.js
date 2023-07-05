import React, { useState } from 'react';
import { View, Text, SafeAreaView, Button, ScrollView } from 'react-native';
import { getFavoriteApi } from '../api/favorito';
import RickandmortyList from '../components/RickandmortyList';

export default function Favoritos() {
	const [characters, setCharacters] = useState([]);

	const checkFavorito = async () => {
		try {
			const response = await getFavoriteApi();
			console.log(response);

			// Realizar la solicitud de cada personaje por separado
			const charactersData = await Promise.all(
				response.map(async (characterId) => {
					const characterUrl = `https://rickandmortyapi.com/api/character/${characterId}`;
					const characterResponse = await fetch(characterUrl);
					return characterResponse.json();
				})
			);

			console.log(charactersData);

			// Actualizar el estado con los personajes obtenidos
			setCharacters(charactersData);
		} catch (error) {
			console.log('Error:', error);
		}
	};

	return (
		<SafeAreaView>
			<Button title='Obtener' onPress={checkFavorito} />
			<ScrollView>
				<RickandmortyList characters={characters} />
			</ScrollView>
		</SafeAreaView>
	);
}
