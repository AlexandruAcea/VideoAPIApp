import React from 'react';
import { MovieItem } from '../../api/movies';
import { useItemToView } from '../../hooks';
import Icon from 'react-native-vector-icons/AntDesign';
import { Layout } from '../core';
import { Typography } from '../core/Typography';
import { Poster, SearchItemWrapper } from './SearchResultItem.style';
import { times } from 'lodash';

interface Props {
	item: MovieItem;
	viewDetails: () => void;
}

export function SearchResultItem({ item, viewDetails }: Props) {
	const [_, setItemToView] = useItemToView();
	const imageSource = { uri: `https://image.tmdb.org/t/p/w342/${item.poster_path}` };

	function handleOnPress() {
		setItemToView(item);
		viewDetails();
	}

	// Turning x out of 10 to x out of 5
	const filledStars = Math.round(item.vote_average / 2);
	const unFilledStars = 5 - filledStars;

	return (
		<Layout.Touchable onPress={handleOnPress}>
			<SearchItemWrapper>
				<Layout.Block direction="row" style={{ height: '100%' }}>
					<Poster source={imageSource} resizeMode="cover" />

					<Layout.Block
						style={{ padding: 10 }}
						flex={1}
						direction="column"
						align="flex-start"
						justify="space-between"
					>
						<Typography.Body color="white">{item.title}</Typography.Body>

						<Layout.Block>
							<Layout.Block
								direction="row"
								align="center"
								style={{ marginBottom: 10 }}
							>
								{times(filledStars, (index) => (
									<Icon key={index} name="star" color="white" size={20} />
								))}
								{times(unFilledStars, (index) => (
									<Icon key={index} name="staro" color="white" size={20} />
								))}
							</Layout.Block>

							<Typography.Description color="white">
								Press for more details
							</Typography.Description>
						</Layout.Block>
					</Layout.Block>
				</Layout.Block>
			</SearchItemWrapper>
		</Layout.Touchable>
	);
}
