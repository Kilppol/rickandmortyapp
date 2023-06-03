import { View, Text, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function RickandmortyCard(props) {
	const { characters } = props;

	const goToPersonaje = () => {
		console.log(`Conoce mas del personaje: ${characters.name} `);
	};
	return (
		<TouchableWithoutFeedback onPress={goToPersonaje}>
			<Text>Personajes</Text>
		</TouchableWithoutFeedback>
	);
}
