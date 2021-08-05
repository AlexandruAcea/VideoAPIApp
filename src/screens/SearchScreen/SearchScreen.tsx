import { debounce } from 'lodash';
import React, { useCallback, useRef, useState } from 'react';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { Layout } from '../../components/core';
import { Typography } from '../../components/core/Typography';
import { DEFAULT_DEBOUNCE_TIME } from '../../consts';
import { useSearchMovies } from '../../hooks';
import { CancelButtonWrapper, SearchField } from './SearchScreen.style';

export function SearchScreen() {
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
				<SearchField
					ref={inputRef}
					value={inputValue}
					onFocus={onFocus}
					onBlur={onBlur}
					onChangeText={onChange}
				/>
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
		</Layout.Screen>
	);
}
