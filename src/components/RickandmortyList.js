import { View, Text, SafeAreaView, FlatList, StyleSheet } from 'react-native';
import React, { useRef, useState } from 'react';
import RickandmortyCard from './RickandmortyCard';

export default function RickandmortyList(props) {
	const { characters } = props;
	const loadMore = () => {
		console.log('cargando mas personajes');
	};
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
				onEndReachedThreshold={0.4}
				//onEndReached={}
			/>
			<Text>Lista</Text>
		</SafeAreaView>
	);
}
const styles = StyleSheet.create({
	container: { paddingHorizontal: 15 },
});
