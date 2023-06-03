import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native-gesture-handler';
import RickandmortyCard from './RickandmortyCard';

export default function RickandmortyList(props) {
	const { characters } = props;
	console.log(characters);
	return (
		<SafeAreaView>
			<FlatList
				data={characters}
				numColumns={2}
				showsVerticalScrollIndicator={false}
				keyExtractor={(characters) => {
					String(characters.id);
				}}
				renderItem={({ item }) => <RickandmortyCard characters={item} />}
				contentContainerStyle={StyleSheet.container}
			/>
		</SafeAreaView>
	);
}
const styles = StyleSheet.create({
	container: {
		paddingHorizantal: 15,
	},
});
