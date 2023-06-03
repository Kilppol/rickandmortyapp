import { View, Text, Image } from 'react-native';
import React from 'react';
import NavigationAccount from './NavigationAccount';
import NavigationFavoritos from './NavigationFavoritos';
import Rickandmorty from '../screen/Rickandmorty';
import Favoritos from '../screen/Favoritos';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function Navigation() {
	const Tab = createBottomTabNavigator();
	return (
		<Tab.Navigator>
			<Tab.Screen
				name='Account'
				component={NavigationAccount}
				options={{
					tabBarLabel: 'Mi cuenta',
				}}
			/>
			<Tab.Screen
				name='Rickandmorty'
				component={Rickandmorty}
				options={{
					tabBarLabel: '',
					tabBarIcon: () => renderIconRM(),
				}}
			/>
			<Tab.Screen name='Favoritos' component={NavigationFavoritos} />
		</Tab.Navigator>
	);
}

const renderIconRM = () => {
	return (
		<Image
			source={require('../assets/iconoram.png')}
			style={{ width: 75, height: 75, top: -20 }}
		/>
	);
};
