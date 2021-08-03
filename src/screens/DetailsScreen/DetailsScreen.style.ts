import styled from 'styled-components/native';

export const BackgroundImage = styled.Image`
	height: 100%;
	width: 100%;
	position: fixed;
	position: absolute;
	top: 0;
`;

export const ScrollWrapper = styled.ScrollView`
	width: 100%;
`;

export const DetailsWrapper = styled.View`
	display: flex;
	flex-direction: column;
	width: 100%;
	background-color: black;
	position: relative;
	margin-top: 100%;
	box-shadow: 0px 2px 15px black;
	padding: 0px 20px;
	padding-top: 30px;
	padding-bottom: 100px;
	min-height: 500px;
`;

export const VotesWrapper = styled.View`
	display: flex;
	align-items: center;
	justify-content: center;
	max-width: 30px;
	background-color: white;
	border-radius: 5px;
	padding: 2px 4px;
`;

export const GoBack = styled.View`
	position: absolute;
	top: 60px;
	left: 20px;
	z-index: 999;
`;
