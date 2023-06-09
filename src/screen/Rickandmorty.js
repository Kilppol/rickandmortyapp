import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import RickandmortyList from '../components/RickandmortyList';

export default function Rickandmorty(props) {
	const {
		navigation,
		route: { params },
	} = props;
	return (
		<SafeAreaView>
			<Text> Bienvenido a la info de {params.name} </Text>
		</SafeAreaView>
	);
}
