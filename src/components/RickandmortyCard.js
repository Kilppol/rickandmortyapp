import {
	View,
	Text,
	Image,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function RickandmortyCard(props) {
	const { characters } = props;
	const navigation = useNavigation;
	const goToPersonaje = () => {
		navigation.navigate('Rickandmorty', {
			id: characters.id,
			name: characters.name,
		});
	};
	return (
		<View style={estilos.container}>
			<TouchableWithoutFeedback onPress={goToPersonaje}>
				<View style={estilos.card}>
					<View style={estilos.contenidocard}>
						<Image
							source={{
								url: `${characters.image}`,
							}}
							style={estilos.img}
						/>
						<Text style={estilos.textoname}>{`${characters.name}`}</Text>
						<Text
							style={{ ...estilos.textoname, fontSize: 20 }}
						>{`${characters.id}`}</Text>
					</View>
				</View>
			</TouchableWithoutFeedback>
		</View>
	);
}

const estilos = StyleSheet.create({
	container: {
		alignContent: 'center',
		alignItems: 'center',
	},
	textoname: {
		color: '#526A87',
		alignSelf: 'center',
		fontSize: 27,
	},
	img: {
		width: 100,
		height: 100,
		resizeMode: 'cover',
		alignSelf: 'center',
		borderRadius: 100,
		borderWidth: 2,
		borderColor: '#000',
	},
	card: {
		borderRadius: 6,
		elevation: 3,
		backgroundColor: '#fff',
		shadowOffset: { width: 1, height: 1 },
		shadowColor: '#333',
		shadowOpacity: 0.3,
		shadowRadius: 2,
		marginHorizontal: 4,
		marginVertical: 6,
		width: 190,
		height: 220,
	},
	contenidocard: {
		marginHorizontal: 18,
		marginVertical: 20,
	},
	touchableBotonInicio: {
		backgroundColor: '#fcf9f9',
		margin: 64,
		padding: 8,
		borderRadius: 8,
		flexDirection: 'row',
		alignItems: 'center',
		borderWidth: 2,
		borderColor: '#fcf9f9',
	},
});
