import { createSelector } from 'reselect';
import { State } from './types';

export const selectItemToView = createSelector(
	({ itemToView }: State) => itemToView,
	itemToView => itemToView
);
