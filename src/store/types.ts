import { ThunkAction, ThunkDispatch as Dispatch } from 'redux-thunk';
import { ApiFactory } from '../api';
import { ApplicationState } from './root';

import { Actions as ActivityActions, ActivityError } from './ui/activities';
import { Actions as MovieActions } from './data/movies';
import { Actions as TvShowsActions } from './data/tvshows';
import { Actions as ItemToViewActions } from './data/view';

export type ApplicationActions =
	| MovieActions
	| TvShowsActions
	| ActivityActions
	| ItemToViewActions;

export type Thunk = ThunkAction<Promise<void>, ApplicationState, ThunkContext, ApplicationActions>;
export type ThunkDispatch = Dispatch<ApplicationState, ThunkContext, ApplicationActions>;

export interface ThunkContext {
	api: ApiFactory;
}

export type Nullable<T> = T | null;

export interface OperationParams {
	lazy?: boolean;
}

interface OperationResultData<D> {
	data: D;
	loading: boolean;
	error: Nullable<ActivityError>;
	loaded?: boolean;
}

export type OperationResult<D = null, A = () => void> = [OperationResultData<D>, A];

export type ActivityResult<A = () => void> = [
	{
		loading: boolean;
		error: Nullable<ActivityError>;
	},
	A
];
