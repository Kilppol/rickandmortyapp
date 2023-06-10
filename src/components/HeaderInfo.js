import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native';
import React from 'react';

export default function HeaderInfo({ characters }) {
	console.log('characters:' + characters);
	return (
		<SafeAreaView>
			<Image source={{ url: characters.image }} style={estilos.image} />
		</SafeAreaView>
	);
}
const estilos = StyleSheet.create({
	image: {
		position: 'absolute',
		width: 200,
		height: 200,
		borderRadius: 20,
		alignSelf: 'center',
		marginTop: 20,
		borderColor: 'black',
	},
});
