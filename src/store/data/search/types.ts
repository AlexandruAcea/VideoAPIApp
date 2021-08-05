import { Action } from 'redux';
import { MovieItem } from '../../../api/movies';

export enum ActionTypes {
	SEARCH_MOVIES = 'data/documents/SEARCH_MOVIES',
}

export interface State {
	results: MovieItem[];
}

export interface SearchMovies extends Action {
	type: ActionTypes.SEARCH_MOVIES;
	payload: {
		movies: MovieItem[];
	};
}

export type Actions = SearchMovies;
