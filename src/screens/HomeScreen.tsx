import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { useEffectOnce } from '../store/utils';
import { Typography } from '../components/core/Typography';
import { TopCarousel } from '../components/TopCarousel';
import { useMovies, useTvShows } from '../hooks';
import { Layout, Loader } from '../components/core';
import { CategorySelector } from '../components/CategorySelector';
import { BottomCarousel } from '../components/BottomCarousel';

import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParams, Routes } from '../router';

export type HomeScreenNavigationProps = StackNavigationProp<MainStackParams, Routes.ViewMovie>;

interface Props {
	navigation: HomeScreenNavigationProps;
}

export default function HomeScreen({ navigation: { navigate } }: Props) {
	const [{ loading: loadingMovies, data: popularMovies }, fetchPopularMovies] = useMovies();
	const [{ loading: loadingTvShows, data: tvShows }, fetchTvShows] = useTvShows();

	useEffectOnce(() => {
		fetchPopularMovies();
		fetchTvShows();
	});

	function viewItemDetails() {
		navigate(Routes.ViewMovie);
	}

	function goToSearch() {
		navigate(Routes.Search);
	}

	return (
		<Layout.Screen>
			<Layout.Block direction="column" style={{ paddingHorizontal: 20 }}>
				<Layout.Block direction="row" justify="space-between" align="center">
					<Typography.H3 style={{ color: 'white', fontWeight: 'bold' }}>
						Discover
					</Typography.H3>
					<Layout.Touchable onPress={goToSearch}>
						<Icon name="md-search" size={30} color="#ffffff" />
					</Layout.Touchable>
				</Layout.Block>
			</Layout.Block>

			<TopCarousel
				loading={loadingMovies}
				movies={popularMovies}
				viewDetails={viewItemDetails}
			/>

			<CategorySelector />

			<BottomCarousel
				loading={loadingTvShows}
				tvShows={tvShows}
				viewDetails={viewItemDetails}
			/>
		</Layout.Screen>
	);
}
