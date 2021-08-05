import React from 'react';
import { ScrollView } from 'react-native';
import { TVShowItem } from '../../api/tvseries';
import { useItemToView } from '../../hooks';
import { Loader } from '../core';
import { BottomCarouselBody } from './BottomCarousel.style';
import { TvShowItem } from './TvShowItem';

interface Props {
	tvShows: TVShowItem[];
	loading: boolean;
	viewDetails: () => void;
}

export function BottomCarousel({ tvShows, loading, viewDetails }: Props) {
	const [{}, selectItemToView] = useItemToView();

	function handleSelectTvShow(item: TVShowItem) {
		selectItemToView(item);
		viewDetails();
	}

	return (
		<BottomCarouselBody>
			{loading ? (
				<Loader />
			) : (
				<ScrollView
					horizontal
					style={{ flex: 1, paddingBottom: 10 }}
					indicatorStyle="black"
				>
					{tvShows.map((tvShow, index) => (
						<TvShowItem
							key={index}
							title={tvShow.name}
							image={tvShow.poster_path}
							isFirstItem={index === 0}
							onPress={() => handleSelectTvShow(tvShow)}
						/>
					))}
				</ScrollView>
			)}
		</BottomCarouselBody>
	);
}
