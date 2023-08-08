import { fetchPosts } from '../api';
import { Dispatch } from 'react';

export const getPosts = () => async (dispatch: Dispatch<any>) => {
	try {
		const { data: posts } = await fetchPosts();
		dispatch({ type: 'FETCH_ALL', payload: posts });
	} catch (e) {
		if (e instanceof Error) {
			console.log(e.message);
		}
	}
};
