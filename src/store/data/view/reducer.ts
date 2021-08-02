import produce from 'immer';

import initialState from './initialState';
import { Actions, ActionTypes, State } from './types';

export default (state: State = initialState, action: Actions): State => {
	switch (action.type) {
		case ActionTypes.SET_ITEM_TO_VIEW: {
			const { itemToView } = action.payload;

			return produce(state, draft => {
				draft.itemToView = itemToView;
			});
		}

		case ActionTypes.RESET_ITEM_TO_VIEW: {
			return produce(state, draft => {
				draft.itemToView = null;
			});
		}

		default: {
			return state;
		}
	}
};
