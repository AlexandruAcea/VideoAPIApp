import { ActionCreator } from 'redux';
import { MovieItem } from '../../../api/movies';
import { Thunk } from '../../types';
import { ActionTypes, ResetItemToView, SetItemToView } from './types';

const setItemToViewAction: ActionCreator<SetItemToView> = (itemToView: MovieItem) => ({
	type: ActionTypes.SET_ITEM_TO_VIEW,
	payload: { itemToView }
});

export const resetItemToView: ActionCreator<ResetItemToView> = () => ({
	type: ActionTypes.RESET_ITEM_TO_VIEW
});

export const setItemToView = (itemToView: MovieItem): Thunk => async (dispatch) => {
	dispatch(setItemToViewAction(itemToView))
};