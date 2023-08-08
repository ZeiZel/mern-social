import axios, { AxiosResponse } from 'axios';
import { IPost } from '../interfaces';

const URL = 'http://localhost:5000/posts';

export const fetchPosts = (): Promise<AxiosResponse<IPost[]>> => axios.get<IPost[]>(URL);
export const createPost = (newPost: IPost) => axios.post(URL, newPost);
export const likePost = (id: string) => axios.patch(`${URL}/${id}/likePost`);
export const updatePost = (id: string, updatedPost: IPost) =>
	axios.patch(`${URL}/${id}`, updatedPost);
export const deletePost = (id: string) => axios.delete(`${URL}/${id}`);
