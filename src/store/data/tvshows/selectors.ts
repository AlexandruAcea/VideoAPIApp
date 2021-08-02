import { createSelector } from 'reselect';
import { State } from './types';

export const selectTvShows = createSelector(
	({ tvShows }: State) => tvShows,
	tvShows => tvShows
);
