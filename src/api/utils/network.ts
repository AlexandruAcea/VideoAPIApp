import axios from 'axios';

export async function sendRequest<Request = any, Response = any>(
	url: string,
	body: Request,
): Promise<Response> {
	try {
		return await axios.get(url, body);
	} catch (e) {
        // We could also use an interceptor here but as we don't have any
        // authentification in place I'm leaving it simple for now
        console.log(e);
        throw e;
	}
}