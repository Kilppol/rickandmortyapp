import { View, Text, SafeAreaView, FlatList, StyleSheet } from 'react-native';
import React from 'react';
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
				showsHorizontalScrollIndicator={false}
				keyExtractor={(characters) => {
					String(characters.id);
				}}
				renderItem={({ item }) => <RickandmortyCard characters={item} />}
				contentContainerStyle={styles.container}
			/>
			<Text>Lista</Text>
		</SafeAreaView>
	);
}
const styles = StyleSheet.create({
	container: { paddingHorizontal: 15 },
});
