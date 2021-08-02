import { Action } from 'redux';
import { TVShowItem } from '../../../api/tvseries';

export enum ActionTypes {
	GET_TV_SHOWS = 'data/documents/GET_TV_SHOWS',
}

export interface State {
	tvShows: TVShowItem[];
}

export interface GetTvShows extends Action {
	type: ActionTypes.GET_TV_SHOWS;
	payload: {
		tvShows: TVShowItem[];
	}
}

export type Actions =
	| GetTvShows;
