import { movies } from './movies';
import { tvShows } from './tvseries';

export const apiFactory = () => ({
	data: {
		movies: () => movies(),
		tvShows: () => tvShows(),
	},
});

export type ApiFactory = ReturnType<typeof apiFactory>;
