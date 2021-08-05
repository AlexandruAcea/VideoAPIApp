import React, { useRef } from 'react';
import { MovieItem } from '../../api/movies';
import { TopCarouselBody } from './TopCarousel.style';
import { TopCarouselItem } from './TopCarouselItem';
import { Dimensions } from 'react-native';
import { useItemToView } from '../../hooks';
import Carousel from 'react-native-snap-carousel';
import { Loader } from '../core';

interface Props {
	movies: MovieItem[];
	loading: boolean;
	viewDetails: () => void;
}

export function TopCarousel({ movies, loading, viewDetails }: Props) {
	const ref = useRef(null);
	const [{}, selectItemToView] = useItemToView();

	// Using these calculations for responsive design
	// Such that the carousel will always look like it's coming
	// from out of bounds and the items will scale accordingly
	const windowWidth = Dimensions.get('window').width;
	const itemWidth = windowWidth / 1.2;

	function onPressHandler(movie: MovieItem) {
		selectItemToView(movie);
		viewDetails();
	}

	return (
		<TopCarouselBody>
			{loading ? (
				<Loader />
			) : (
				<Carousel
					loop
					ref={ref}
					data={movies}
					layout={'default'}
					renderItem={({ item }) => (
						<TopCarouselItem
							title={item.title}
							description={item.overview}
							poster={item.backdrop_path}
							maxWidthText={itemWidth - 30}
							onClick={() => onPressHandler(item)}
						/>
					)}
					sliderWidth={windowWidth}
					itemWidth={itemWidth}
				/>
			)}
		</TopCarouselBody>
	);
}
