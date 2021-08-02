
import { API_KEY } from '../../consts';
import { Nullable } from '../../store';
import { sendRequest } from '../utils';
import { TVShowItem, TVShowResponse } from './types';

export default () => ({
	getTvSeries: async (genre: Nullable<number>): Promise<TVShowItem[]> => {
		const URL = genre
				? `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=2&with_genres=${genre}&with_watch_monetization_types=flatrate`
				: `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`

		const { data }: TVShowResponse = await sendRequest(URL, {});

		if (!data.results) {
			throw 'Could not fetch tv shows 😭';
		}

		return data.results;
	},
});
