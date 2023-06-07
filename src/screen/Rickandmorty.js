import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import RickandmortyList from '../components/RickandmortyList';

export default function Rickandmorty() {
	return (
		<SafeAreaView>
			<RickandmortyList />
		</SafeAreaView>
	);
}
