import uuid from 'react-native-uuid';

import { ActionCreator } from 'redux';
import { MovieItem } from '../../../api/movies';
import { Thunk } from '../../types';
import { beginActivity, endActivity, setError } from '../../ui/activities';
import { ActionTypes, SearchMovies } from './types';

const searchMoviesAction: ActionCreator<SearchMovies> = (movies: MovieItem[]) => ({
	type: ActionTypes.SEARCH_MOVIES,
	payload: { movies },
});

export const searchMovies =
	(query: string): Thunk =>
	async (dispatch, _, context) => {
		const activityId = uuid.v4() as string;
		try {
			dispatch(beginActivity({ type: ActionTypes.SEARCH_MOVIES, uuid: activityId }));

			const data = await context.api.data.search().searchMovies(query);

			dispatch(searchMoviesAction(data));
		} catch (e) {
			dispatch(
				setError({
					type: ActionTypes.SEARCH_MOVIES,
					message: e.message,
					uuid: activityId,
				})
			);
		} finally {
			dispatch(endActivity({ uuid: activityId }));
		}
	};
