import produce from 'immer';

import initialState from './initialState';
import { Actions, ActionTypes, State } from './types';

export default (state: State = initialState, action: Actions): State => {
	switch (action.type) {
		case ActionTypes.GET_TV_SHOWS: {
			const { tvShows } = action.payload;

			return produce(state, draft => {
				draft.tvShows = tvShows;
			});
		}

		default: {
			return state;
		}
	}
};
