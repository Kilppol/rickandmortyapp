import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function ButtonLogin({ onPress }) {
	return (
		<TouchableOpacity style={styles.button} onPress={onPress}>
			<Text style={styles.buttonText}>Enviar</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		width: 260,
		height: 60,
		borderRadius: 20,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#2A2C2E',
		color: '#090808',
		marginTop: 50,
	},
	buttonText: {
		color: '#fff',
		fontSize: 22,
		fontWeight: 'bold',
	},
});
