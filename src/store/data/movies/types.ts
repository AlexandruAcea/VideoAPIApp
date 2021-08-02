import { Action } from 'redux';
import { MovieItem } from '../../../api/movies';

export enum ActionTypes {
	GET_POPULAR_MOVIES = 'data/documents/GET_POPULAR_MOVIES',
}

export interface State {
	movies: {
		popular: MovieItem[]
	}
}

export interface GetPopularMovies extends Action {
	type: ActionTypes.GET_POPULAR_MOVIES;
	payload: {
		movies: MovieItem[];
	}
}

export type Actions =
	| GetPopularMovies;
