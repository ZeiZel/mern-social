import React from 'react';
import { Post } from './Post/Post';
import useStyles from './styles';
import { useAppSelector } from '../../hooks';

export const Posts = () => {
	const styles = useStyles();

	const posts = useAppSelector((state) => state.posts);

	return (
		<div>
			<h1>POSTS</h1>
			<Post />
			<Post />
		</div>
	);
};
