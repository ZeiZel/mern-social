import axios, { AxiosResponse } from 'axios';
import { IPost } from '../interfaces';

const URL = 'http://localhost:5000/posts';

export const fetchPosts: Promise<AxiosResponse<IPost>> = axios.get<IPost>(URL);
