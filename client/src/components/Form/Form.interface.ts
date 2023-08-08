export interface IPostData {
	creator: string;
	title: string;
	message: string;
	tags: string;
	selectedFile: string;
}

export interface IPostForm {
	name: keyof IPostData;
	label: string;
}
