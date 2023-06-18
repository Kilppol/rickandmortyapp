import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CrearCuenta from '../screen/CrearCuenta';
import OlvidasteContrasena from '../screen/OlvidasteContrasena';
import LoginForm from '../components/Auth/Loginform';
import Navigation from './Navigation';
export default function NavigationHome() {
	const Stack = createStackNavigator();
	return (
		<Stack.Navigator
			initialRouteName='Login'
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen
				name='Login'
				component={LoginForm}
				options={{ headerShown: false }}
			/>
			<Stack.Screen name='CrearCuenta' component={CrearCuenta} />
			<Stack.Screen
				name='OlvidasteContrasena'
				component={OlvidasteContrasena}
			/>
			<Stack.Screen
				name='Tab'
				component={Navigation}
				options={{ headerShown: false }} // Opcional: ocultar la barra de navegación en el TabNavigator
			/>
		</Stack.Navigator>
	);
}
