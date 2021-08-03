import React, { useEffect } from 'react';
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { MainStackParams, Routes, Stacks } from './types';
import SplashScreen from 'react-native-splash-screen';
import HomeScreen from '../screens/HomeScreen';
import { DetailsScreen } from '../screens/DetailsScreen';
import Orientation from 'react-native-orientation-locker';
import { SearchScreen } from '../screens/SearchScreen';

const defaultScreenOptions = {
	headerShown: false,
};

export const isReadyRef = React.createRef<boolean>();
export const navigationRef = React.createRef<NavigationContainerRef>();

interface Params {
	screen?: string;
}

export const Navigation = {
	navigate: function (route: string, params?: Params) {
		if (isReadyRef.current && navigationRef.current) {
			navigationRef.current?.navigate(route, params);
		}
	},
};

const MainStackNavigator = createNativeStackNavigator<MainStackParams>();

function MainNavigator() {
	return (
		<MainStackNavigator.Navigator screenOptions={defaultScreenOptions}>
			<MainStackNavigator.Screen name={Routes.Home} component={HomeScreen} />
			<MainStackNavigator.Screen
				name={Routes.ViewMovie}
				component={DetailsScreen}
				options={{ gestureEnabled: false }}
			/>
			<MainStackNavigator.Screen name={Routes.Search} component={SearchScreen} />
		</MainStackNavigator.Navigator>
	);
}

export function Router() {
	useEffect(() => {
		// Making sure the screen is always in portrait more expect ofr the trailer view!
		Orientation.lockToPortrait();

		return () => {
			// @ts-expect-error
			isReadyRef.current = false;
		};
	}, []);

	function handleReady() {
		// @ts-expect-error
		isReadyRef.current = true;
		SplashScreen.hide();
	}

	return (
		<NavigationContainer ref={navigationRef} onReady={handleReady}>
			<MainStackNavigator.Navigator screenOptions={defaultScreenOptions}>
				<MainStackNavigator.Screen
					options={{ stackAnimation: 'none' }}
					// @ts-ignore
					name={Stacks.Main}
					component={MainNavigator}
				/>
			</MainStackNavigator.Navigator>
		</NavigationContainer>
	);
}
