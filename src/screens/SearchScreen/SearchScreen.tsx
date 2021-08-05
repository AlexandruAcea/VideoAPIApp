import React, { useCallback, useEffect, useRef, useState } from 'react';
import { debounce } from 'lodash';
import { Alert, ScrollView } from 'react-native';
import { Layout, Loader } from '../../components/core';
import { Typography } from '../../components/core/Typography';
import { SearchResultItem } from '../../components/SearchResults';
import { DEFAULT_DEBOUNCE_TIME } from '../../consts';
import { useSearchMovies } from '../../hooks';
import { CancelButtonWrapper, SearchField } from './SearchScreen.style';

import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParams, Routes } from '../../router';
import Icon from 'react-native-vector-icons/Ionicons';

export type SearchScreenNavigationProps = StackNavigationProp<MainStackParams, Routes.ViewMovie>;

interface Props {
	navigation: SearchScreenNavigationProps;
}

export function SearchScreen({ navigation: { navigate, goBack } }: Props) {
	const inputRef = useRef(null);
	const [{ data: searchResults, loading, error }, search] = useSearchMovies();

	const [inputFocused, setInputFocused] = useState(false);
	const [inputValue, setInputValue] = useState('');

	// Checking for errors from the search API call
	useEffect(() => {
		if (error) {
			Alert.alert('Error', 'An error occured while searching for videos!');
		}
	}, [error]);

	function onFocus() {
		if (inputRef) {
			setInputFocused(true);
			// @ts-ignore
			inputRef.current && inputRef.current.focus();
		}
	}

	function onBlur() {
		if (inputRef) {
			setInputFocused(false);
			// @ts-ignore
			inputRef.current && inputRef.current.blur();
		}
	}

	// Using the debounce founction such that the search API isn't called on
	// every keystroke
	const debounceFunction = useCallback(
		debounce(handleDebounceFunction, DEFAULT_DEBOUNCE_TIME),
		[]
	);

	function handleDebounceFunction(text: string) {
		if (text) search(text);
	}

	// Controlled input function
	// handling both the focus and value changes to fit the UI
	function onChange(text: string) {
		setInputValue(text);
		debounceFunction(text);
	}

	function viewItemDetails() {
		navigate(Routes.ViewMovie);
	}

	return (
		<Layout.Screen style={{ paddingHorizontal: 20 }}>
			{!inputFocused && (
				<Layout.Block direction="column">
					<Layout.Block direction="row" align="center">
						<Layout.Touchable onPress={goBack} style={{ width: 35 }}>
							<Layout.Block direction="row" align="center" width={100}>
								<Icon name="chevron-back" size={30} color="#ffffff" />
							</Layout.Block>
						</Layout.Touchable>
						<Typography.H3 style={{ color: 'white', fontWeight: 'bold' }}>
							Search
						</Typography.H3>
					</Layout.Block>
				</Layout.Block>
			)}

			<Layout.Block style={{ height: 50, marginTop: 15 }} direction="row" align="center">
				{/* Controlled input */}
				<SearchField
					ref={inputRef}
					value={inputValue}
					placeholder="Iron man 2..."
					onFocus={onFocus}
					onBlur={onBlur}
					onChangeText={onChange}
				/>
				{/* Just to have a cooler UI I added some conditionally rendered elements */}
				{inputFocused && (
					<Layout.Touchable onPress={onBlur}>
						<CancelButtonWrapper>
							<Typography.Body
								style={{ margin: 0, padding: 0, lineHeight: 0 }}
								color="white"
							>
								Cancel
							</Typography.Body>
						</CancelButtonWrapper>
					</Layout.Touchable>
				)}
			</Layout.Block>

			{!inputValue ? (
				// Initial empty screen
				<Layout.Block flex={1} style={{ height: '100%' }} align="center" justify="center">
					<Typography.Body color="white">Search for movies</Typography.Body>
				</Layout.Block>
			) : // Loading state
			loading ? (
				<Loader />
			) : // Case where the search results are empty
			!searchResults.length && inputValue ? (
				<Layout.Block flex={1} style={{ height: '100%' }} align="center" justify="center">
					<Typography.H5 color="white">Nothing found</Typography.H5>
				</Layout.Block>
			) : (
				// Succesfully shown results
				<ScrollView style={{ marginTop: 10 }}>
					{searchResults.map((result, index) => (
						<SearchResultItem key={index} item={result} viewDetails={viewItemDetails} />
					))}
				</ScrollView>
			)}
		</Layout.Screen>
	);
}
