import React from 'react';
import { StyleProp, StyleSheet, Text, TextProps as _TextProps, TextStyle } from 'react-native';
import { Sizes } from '../../environment';

interface TextProps {
	color?: string;
	align?: TextStyle['textAlign'];
	weight?: TextStyle['fontWeight'];
	textTransform?: TextStyle['textTransform'];
	ellipsizeMode?: _TextProps['ellipsizeMode'];
	numberOfLines?: number;
}

interface ComponentProps extends TextProps {
	children: React.ReactNode;
	style?: StyleProp<TextStyle>;
}

function applyTextProps({ align, color, textTransform, weight }: TextProps) {
	const styles: StyleProp<TextStyle> = {};

	if (align) styles.textAlign = align;
	if (color) styles.color = color;
	if (textTransform) styles.textTransform = textTransform;
	if (weight) styles.fontWeight = weight;

	return styles;
}

const styles = StyleSheet.create({
	h1: {
		fontSize: Sizes.normalize(60),
		lineHeight: Sizes.normalize(1.2)
	},
	h3: {
		fontSize: Sizes.normalize(36),
		lineHeight: Sizes.normalize(50)
	},
	h2: {
		fontSize: Sizes.normalize(48),
		lineHeight: Sizes.normalize(58)
	},
	h4: {
		fontSize: Sizes.normalize(24),
		lineHeight: Sizes.normalize(32)
	},
	h5: {
		fontSize: Sizes.normalize(24),
		lineHeight: Sizes.normalize(32)
	},
	h6: {
		fontSize: Sizes.normalize(18),
		lineHeight: Sizes.normalize(26)
	},
	body: {
		fontSize: Sizes.normalize(16),
		lineHeight: Sizes.normalize(24)
	},
	url: {
		fontSize: Sizes.normalize(16),
		lineHeight: Sizes.normalize(24)
	},
	smallUrl: {
		fontSize: Sizes.normalize(14),
		lineHeight: Sizes.normalize(22)
	},
	description: {
		fontSize: Sizes.normalize(12),
		lineHeight: Sizes.normalize(16)
	}
});

function H1({ children, style, ellipsizeMode, numberOfLines, ...textProps }: ComponentProps) {
	return (
		<Text
			ellipsizeMode={ellipsizeMode}
			numberOfLines={numberOfLines}
			style={[styles.h1, applyTextProps(textProps), style]}
		>
			{children}
		</Text>
	);
}

function H2({ children, style, ellipsizeMode, numberOfLines, ...textProps }: ComponentProps) {
return (
		<Text
			ellipsizeMode={ellipsizeMode}
			numberOfLines={numberOfLines}
			style={[styles.h2, applyTextProps(textProps), style]}
		>
			{children}
		</Text>
	);
}

function H3({ children, style, ellipsizeMode, numberOfLines, ...textProps }: ComponentProps) {
	return (
		<Text
			ellipsizeMode={ellipsizeMode}
			numberOfLines={numberOfLines}
			style={[styles.h3, applyTextProps(textProps), style]}
		>
			{children}
		</Text>
	);
}

function H4({ children, style, ellipsizeMode, numberOfLines, ...textProps }: ComponentProps) {
	return (
		<Text
			ellipsizeMode={ellipsizeMode}
			numberOfLines={numberOfLines}
			style={[styles.h4, applyTextProps(textProps), style]}
		>
			{children}
		</Text>
	);
}

function H5({ children, style, ellipsizeMode, numberOfLines, ...textProps }: ComponentProps) {
	return (
		<Text
			ellipsizeMode={ellipsizeMode}
			numberOfLines={numberOfLines}
			style={[styles.h5, applyTextProps(textProps), style]}
		>
			{children}
		</Text>
	);
}

function H6({ children, style, ellipsizeMode, numberOfLines, ...textProps }: ComponentProps) {
	return (
		<Text
			ellipsizeMode={ellipsizeMode}
			numberOfLines={numberOfLines}
			style={[styles.h6, applyTextProps(textProps), style]}
		>
			{children}
		</Text>
	);
}

function Body({ children, style, ellipsizeMode, numberOfLines, ...textProps }: ComponentProps) {
	return (
		<Text
			ellipsizeMode={ellipsizeMode}
			numberOfLines={numberOfLines}
			style={[styles.body, applyTextProps(textProps), style]}
		>
			{children}
		</Text>
	);
}

function SmallUrl({ children, style, ellipsizeMode, numberOfLines, ...textProps }: ComponentProps) {
	return (
		<Text
			ellipsizeMode={ellipsizeMode}
			numberOfLines={numberOfLines}
			style={[styles.smallUrl, applyTextProps(textProps), style]}
		>
			{children}
		</Text>
	);
}

function URL({ children, style, ellipsizeMode, numberOfLines, ...textProps }: ComponentProps) {
	return (
		<Text
			ellipsizeMode={ellipsizeMode}
			numberOfLines={numberOfLines}
			style={[styles.url, applyTextProps(textProps), style]}
		>
			{children}
		</Text>
	);
}

function Description({
	children,
	style,
	ellipsizeMode,
	numberOfLines,
	...textProps
}: ComponentProps) {
	return (
		<Text
			ellipsizeMode={ellipsizeMode}
			numberOfLines={numberOfLines}
			style={[styles.description, applyTextProps(textProps), style]}
		>
			{children}
		</Text>
	);
}

export function Typography() {
	return null;
}

Typography.Description = Description;
Typography.H1 = H1;
Typography.H2 = H2;
Typography.H3 = H3;
Typography.H4 = H4;
Typography.H5 = H5;
Typography.H6 = H6;
Typography.URL = URL;
Typography.SmallURL = SmallUrl;
Typography.Body = Body;
