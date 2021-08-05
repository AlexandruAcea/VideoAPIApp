import React, { useCallback, useRef, useState } from 'react';
import { debounce } from 'lodash';
import { ScrollView } from 'react-native';
import { Layout, Loader } from '../../components/core';
import { Typography } from '../../components/core/Typography';
import { SearchResultItem } from '../../components/SearchResults';
import { DEFAULT_DEBOUNCE_TIME } from '../../consts';
import { useSearchMovies } from '../../hooks';
import { CancelButtonWrapper, SearchField } from './SearchScreen.style';

import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParams, Routes } from '../../router';

export type SearchScreenNavigationProps = StackNavigationProp<MainStackParams, Routes.ViewMovie>;

interface Props {
	navigation: SearchScreenNavigationProps;
}

export function SearchScreen({ navigation: { navigate } }: Props) {
	const inputRef = useRef(null);
	const [{ data: searchResults, loading, error }, search] = useSearchMovies();

	const [inputFocused, setInputFocused] = useState(false);
	const [inputValue, setInputValue] = useState('');

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

	const debounceFunction = useCallback(
		debounce(handleDebounceFunction, DEFAULT_DEBOUNCE_TIME),
		[]
	);

	function handleDebounceFunction(text: string) {
		if (text) search(text);
	}

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
					<Layout.Block direction="row" justify="space-between" align="center">
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

			<ScrollView style={{ marginTop: 10 }}>
				{!inputValue ? null : loading ? (
					<Loader />
				) : !searchResults.length && inputValue ? (
					<Typography.H5 color="white">Nothing found</Typography.H5>
				) : (
					searchResults.map((result, index) => (
						<SearchResultItem key={index} item={result} viewDetails={viewItemDetails} />
					))
				)}
			</ScrollView>
		</Layout.Screen>
	);
}
