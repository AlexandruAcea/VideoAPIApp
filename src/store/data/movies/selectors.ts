import { createSelector } from 'reselect';
import { State } from './types';

export const selectPopularMovies = createSelector(
	({ movies: { popular } }: State) => popular,
	popular => popular
);
