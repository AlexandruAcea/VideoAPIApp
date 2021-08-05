import produce from 'immer';

import initialState from './initialState';
import { Actions, ActionTypes, State } from './types';

export default (state: State = initialState, action: Actions): State => {
	switch (action.type) {
		case ActionTypes.GET_POPULAR_MOVIES: {
			const { movies } = action.payload;

			return produce(state, draft => {
				draft.movies.popular = movies;
			});
		}

		default: {
			return state;
		}
	}
};
