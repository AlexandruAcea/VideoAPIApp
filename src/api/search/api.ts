import { API_KEY } from '../../consts';
import { MovieItem, MoviesResponse } from '../movies';
import { sendRequest } from '../utils';

export default () => ({
	searchMovies: async (query: string): Promise<MovieItem[]> => {
		const URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;

		const { data }: MoviesResponse = await sendRequest(URL, {});

		if (!data.results) {
			throw 'Could not fetch movies search list 😭';
		}

		return data.results;
	},
});
