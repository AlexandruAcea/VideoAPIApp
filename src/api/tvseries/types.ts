import { Item } from '../movies';
import { GenericApiResponse } from '../types';

export interface TVShowItem extends Item {
      name: string
}

interface TVShowAPIResponse {
	results: TVShowItem[];
}

export type TVShowResponse = GenericApiResponse<TVShowAPIResponse>;