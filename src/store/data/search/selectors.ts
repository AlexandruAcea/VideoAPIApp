import { createSelector } from 'reselect';
import { State } from './types';

export const selectedSearchedMovies = createSelector(
	({ results }: State) => results,
	(results) => results
);
