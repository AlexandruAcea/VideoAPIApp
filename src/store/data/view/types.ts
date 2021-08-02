import { Action } from 'redux';
import { Nullable } from '../../types';
import { MovieItem } from '../../../api/movies';

export enum ActionTypes {
	SET_ITEM_TO_VIEW = 'data/documents/SET_ITEM_TO_VIEW',
	RESET_ITEM_TO_VIEW = 'data/documents/ESET_ITEM_TO_VIEW'
}

export interface State {
	itemToView: Nullable<MovieItem>
}

export interface SetItemToView extends Action {
	type: ActionTypes.SET_ITEM_TO_VIEW;
	payload: {
		itemToView: MovieItem;
	}
}

export interface ResetItemToView extends Action {
	type: ActionTypes.RESET_ITEM_TO_VIEW;
}

export type Actions =
	| SetItemToView
	| ResetItemToView;
