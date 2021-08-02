import React from 'react';
import {
	StyleProp,
	StyleSheet,
	TouchableOpacity,
	View,
	ViewStyle,
    SafeAreaView
} from 'react-native';

import { Sizes } from '../../environment';

interface ComponentProps {
	children?: React.ReactNode;
	style?: StyleProp<ViewStyle>;
}

interface LayoutProps {
	direction?: 'column' | 'column-reverse' | 'row' | 'row-reverse';
	align?: 'flex-start' | 'center' | 'flex-end';
	justify?:
		| 'flex-start'
		| 'center'
		| 'flex-end'
		| 'space-between'
		| 'space-around'
		| 'space-evenly';
	flex?: number;
	height?: number | string;
	width?: number | string;
}

function getLayoutStyle({
	direction: flexDirection = 'column',
	align: alignItems,
	justify: justifyContent,
	flex,
	height,
	width
}: LayoutProps): StyleProp<ViewStyle> {
	return {
		flexDirection,
		alignItems,
		justifyContent,
		flex,
		height,
		width
	};
}

interface ScreenProps extends ComponentProps {
	modal?: boolean;
}

function Screen({ children, modal = false, style }: ScreenProps) {
	return (
		<SafeAreaView style={{backgroundColor: 'black'}}>
			<View
				style={[
					styles.container,
					{ backgroundColor: 'black' },
					style
				]}
			>
				{children}
			</View>
		</SafeAreaView>
	);
}

type BlockProps = ComponentProps & LayoutProps;

function Block({ children, style, ...layoutProps }: BlockProps) {
	return <View style={[getLayoutStyle(layoutProps), style]}>{children}</View>;
}

interface TouchableProps extends ComponentProps, LayoutProps {
	activeOpacity?: number;
	onPress: () => void;
}

function Touchable({ children, style, activeOpacity, onPress, ...layoutProps }: TouchableProps) {
	return (
		<TouchableOpacity
			activeOpacity={activeOpacity}
			style={[getLayoutStyle(layoutProps), style]}
			onPress={onPress}
		>
			{children}
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		height: '100%'
	},
	modal: {
		paddingTop: Sizes.normalize(12)
	}
});

interface SeparatorProps {
	style?: StyleProp<ViewStyle>;
}

function Separator({ style }: SeparatorProps) {
	return (
		<View
			style={[
				{
					width: '100%',
					borderWidth: StyleSheet.hairlineWidth,
					marginVertical: Sizes.normalize(16),
					borderColor: 'lightGray'
				},
				style
			]}
		/>
	);
}

export function Layout() {
	return null;
}

Layout.Block = Block;
Layout.Screen = Screen;
Layout.Touchable = Touchable;
Layout.Separator = Separator;
