
import { API_KEY } from '../../consts';
import { sendRequest } from '../utils';
import { MovieItem, MoviesResponse } from './types';

export default () => ({
	getPopularMovies: async (): Promise<MovieItem[]> => {
		const URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28%2C35&with_watch_monetization_types=flatrate`

		const { data }: MoviesResponse = await sendRequest(URL, {});

		if (!data.results) {
			throw 'Could not fetch popular movies 😭';
		}

		return data.results;
	},
});
