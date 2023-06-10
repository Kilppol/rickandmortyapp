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
	const navigation = useNavigation();
	const goToPersonaje = () => {
		navigation.navigate('Rickandmorty', { characters: characters });
	};
	return (
		<TouchableWithoutFeedback onPress={goToPersonaje}>
			<View style={estilos.card}>
				<View style={estilos.marginCard}>
					<View style={estilos.colorCard}>
						<Text style={estilos.number}>
							# {`${characters.id}`.padStart(3, 0)}
						</Text>
						<View style={estilos.containerText}>
							<Text style={estilos.name} numberOfLines={3}>
								{characters.name}
							</Text>
						</View>
						<Image
							source={{ url: characters.image }}
							style={estilos.image}
						/>
					</View>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}

const estilos = StyleSheet.create({
	container: {
		alignContent: 'center',
		alignItems: 'center',
	},
	card: {
		flexGrow: 1,
		padding: 16,
		height: 130,
		padding: 5,
	},
	marginCard: {
		flex: 1,
		padding: 5,
		backgroundColor: 'white',
		borderRadius: 10,
		shadowColor: '#000',
		shadowOpacity: 0.3,
		shadowRadius: 4,
		elevation: 5,
	},
	colorCard: {
		flex: 1,
		padding: 5,
		borderRadius: 10,
		backgroundColor: '#2A2C2E',
	},
	name: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 14,
	},
	containerText: {
		width: 90,
	},
	image: {
		position: 'absolute',
		bottom: 2,
		right: 2,
		width: 75,
		height: 75,
		bottom: 10,
		borderRadius: 10,
	},
	number: {
		color: '#fff',
	},
});
