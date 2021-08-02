import { combineReducers } from 'redux';
import { ApplicationActions } from './types';

import { State as Activities, reducer as activities } from './ui/activities';
import { State as Movies, reducer as movies } from './data/movies';
import { State as TvShows, reducer as tvShows } from './data/tvshows';
import { State as ItemToView, reducer as itemToView } from './data/view';

export interface ApplicationState {
	data: {
		movies: Movies;
		tvShows: TvShows;
		itemToView: ItemToView
	};
	ui: {
		activities: Activities
	}
}

const appReducer = combineReducers<ApplicationState>({
	data: combineReducers({
		movies,
		tvShows,
		itemToView
	}),
	ui: combineReducers({
		activities
	})
});

function rootReducer(state: ApplicationState | undefined, action: ApplicationActions) {
	return appReducer(state, action);
}

export default rootReducer;
