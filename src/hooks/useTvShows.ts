import { TVShowItem } from '../api/tvseries';
import { OperationResult } from '../store';
import { ActionTypes, getTvShows, selectTvShows } from '../store/data/tvshows';
import { useDispatch, useSelector } from '../store/utils';
import { useActivity } from './useActivity';

export function useTvShows(): OperationResult<TVShowItem[], (genreiId?: number) => void> {
	const dispatch = useDispatch();

	const [{ loading, error }] = useActivity(ActionTypes.GET_TV_SHOWS);
	const data = useSelector((state) => selectTvShows(state.data.tvShows));

	function handler(genreId?: number) {
		if (genreId) dispatch(getTvShows(genreId));
		else dispatch(getTvShows());
	}

	return [{ loading, error, data }, handler];
}
