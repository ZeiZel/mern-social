// тут будут все методы роута постов

import PostMessage from '../models/postMessage';

export const getAllPosts = async (req, res) => {
	try {
		const postMessages = await PostMessage.find();
		res.status(200).json(postMessages);
	} catch (e) {
		res.status(404).json({ message: e.message });
	}
};

export const createPost = async (req, res) => {
	const body = req.body;

	try {
		const postMessages = await PostMessage.create({});
		res.status(200).json(postMessages);
	} catch (e) {
		res.status(404).json({ message: e.message });
	}
};
