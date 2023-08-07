import React from 'react';
import { Post } from './Post/Post';
import useStyles from './styles';

export const Posts = () => {
	const styles = useStyles();

	return (
		<div>
			<h1>POSTS</h1>
			<Post />
			<Post />
		</div>
	);
};
