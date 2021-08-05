import { MovieItem } from '../api/movies';
import { OperationResult } from '../store';
import { ActionTypes, searchMovies, selectedSearchedMovies } from '../store/data/search';
import { useDispatch, useSelector } from '../store/utils';
import { useActivity } from './useActivity';

export function useSearchMovies(): OperationResult<MovieItem[], (query: string) => void> {
	const dispatch = useDispatch();

	const [{ loading, error }] = useActivity(ActionTypes.SEARCH_MOVIES);
	const data = useSelector((state) => selectedSearchedMovies(state.data.search));

	function handler(query: string) {
		dispatch(searchMovies(query));
	}

	return [{ loading, error, data }, handler];
}
