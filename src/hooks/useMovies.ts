import { MovieItem } from '../api/movies';
import { OperationResult } from '../store';
import { ActionTypes, getPopularMovies, selectPopularMovies } from '../store/data/movies';
import { useDispatch, useSelector } from '../store/utils';
import { useActivity } from './useActivity';

export function useMovies(): OperationResult<MovieItem[]> {
	const dispatch = useDispatch();

	const [{ loading, error }] = useActivity(ActionTypes.GET_POPULAR_MOVIES);
	const data = useSelector((state) => selectPopularMovies(state.data.movies));

	function handler() {
		dispatch(getPopularMovies());
	}

	return [{ loading, error, data }, handler];
}
