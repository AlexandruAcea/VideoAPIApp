import uuid from 'react-native-uuid'

import { ActionCreator } from 'redux';
import { MovieItem } from '../../../api/movies';
import { Thunk } from '../../types';
import { beginActivity, endActivity, setError } from '../../ui/activities';
import { ActionTypes, GetPopularMovies } from './types';

const getPopularMoviesAction: ActionCreator<GetPopularMovies> = (movies: MovieItem[]) => ({
	type: ActionTypes.GET_POPULAR_MOVIES,
	payload: { movies }
});

export const getPopularMovies = (): Thunk => async (dispatch, _, context) => {
	const activityId = uuid.v4() as string;

	try {
		dispatch(beginActivity({ type: ActionTypes.GET_POPULAR_MOVIES, uuid: activityId }));

        const data = await context.api.data.movies().getPopularMovies();

		dispatch(getPopularMoviesAction(data))

	} catch (e) {
		dispatch(
			setError({
				type: ActionTypes.GET_POPULAR_MOVIES,
				message: e.message,
				uuid: activityId
			})
		);
	} finally {
		dispatch(endActivity({ uuid: activityId }));
	}
};