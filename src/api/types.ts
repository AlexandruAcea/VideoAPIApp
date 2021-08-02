import { AxiosResponse } from 'axios';

export interface GenericApiResponse<T = void> extends AxiosResponse {
	data: T;
}
