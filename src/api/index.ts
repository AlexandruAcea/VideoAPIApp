import { movies } from './movies';
import { search } from './search';
import { tvShows } from './tvseries';

export const apiFactory = () => ({
	data: {
		movies: () => movies(),
		tvShows: () => tvShows(),
		search: () => search(),
	},
});

export type ApiFactory = ReturnType<typeof apiFactory>;
