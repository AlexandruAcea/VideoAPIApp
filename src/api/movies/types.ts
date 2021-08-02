import { GenericApiResponse } from '../types';

export interface Item {
      backdrop_path: string,
      genre_ids: number[],
      id: number[],
      original_language: string,
      overview: string,
      popularity: number,
      poster_path: string,
      vote_average: number,
      vote_count: number
}

export interface MovieItem extends Item {
      title: string,
}

interface MoviesApiResponse {
	results: MovieItem[];
}

export type MoviesResponse = GenericApiResponse<MoviesApiResponse>;