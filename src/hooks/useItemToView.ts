import { MovieItem } from '../api/movies';
import { TVShowItem } from '../api/tvseries';
import { Nullable, OperationResult } from '../store';
import { selectItemToView, setItemToView } from '../store/data/view';
import { useDispatch, useSelector } from '../store/utils';

function isMovie(item: MovieItem | TVShowItem): item is MovieItem {
	return (<MovieItem>item).title !== undefined;
 }

type DataType = Nullable<MovieItem>;
type Handler = (itemToView: MovieItem | TVShowItem) => void

export function useItemToView(): OperationResult<DataType, Handler> {
	const dispatch = useDispatch();

	const data = useSelector(state => selectItemToView(state.data.itemToView));

	function handler(itemToView: MovieItem | TVShowItem) {
		// Normalizing the type of the Item to view
		// Could've done this a bit earilier catching the API response
		let formattedItem: MovieItem;

		if(isMovie(itemToView)) {
			formattedItem = itemToView
		} else {
			formattedItem = { title: itemToView.name, ...itemToView }
		}

        dispatch(setItemToView(formattedItem));
    }

	return [{ loading: false, error: null, data }, handler];
}
