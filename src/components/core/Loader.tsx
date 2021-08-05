import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

export function Loader() {
	return (
		<LoaderWrapper>
			<ActivityIndicator />
		</LoaderWrapper>
	);
}

const LoaderWrapper = styled.View`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;
