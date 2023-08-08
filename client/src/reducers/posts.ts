export default (posts = [], action: { type: string; payload: any }) => {
	switch (action.type) {
		case 'FETCH_ALL':
			return action.payload;
		case 'CREATE':
			return posts;
		default:
			return posts;
	}
};
