import uuid from 'react-native-uuid'

import { ActionCreator } from 'redux';
import { TVShowItem } from '../../../api/tvseries';
import { Thunk } from '../../types';
import { beginActivity, endActivity, setError } from '../../ui/activities';
import { ActionTypes, GetTvShows } from './types';

const getTvShowsAction: ActionCreator<GetTvShows> = (tvShows: TVShowItem[]) => ({
	type: ActionTypes.GET_TV_SHOWS,
	payload: { tvShows }
});

export const getTvShows = (genre?: number): Thunk => async (dispatch, _, context) => {
	const activityId = uuid.v4() as string;

	try {
		dispatch(beginActivity({ type: ActionTypes.GET_TV_SHOWS, uuid: activityId }));

        const data = await context.api.data.tvShows().getTvSeries(genre ?? null);

		dispatch(getTvShowsAction(data))

	} catch (e) {
		dispatch(
			setError({
				type: ActionTypes.GET_TV_SHOWS,
				message: e.message,
				uuid: activityId
			})
		);
	} finally {
		dispatch(endActivity({ uuid: activityId }));
	}
};