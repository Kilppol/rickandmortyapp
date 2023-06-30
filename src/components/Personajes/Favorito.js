import { View, Text } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { addFavoriteApi } from '../../api/favorito';

export default function Favorito(props) {
	const { id } = props;
	const addFavorite = async () => {
		await addFavoriteApi(id);
	};
	return (
		<Icon
			name='heart'
			color='white'
			size={30}
			onPress={addFavorite}
			style={{ padding: 5 }}
		/>
	);
}
