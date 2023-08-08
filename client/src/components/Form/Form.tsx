import React, { FormEvent, FormEventHandler, useState } from 'react';
// @ts-ignore
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { Typography, Button, TextField, Paper } from '@material-ui/core';
import { IPostData, IPostForm } from './Form.interface';
import cn from 'classnames';

export const Form = () => {
	const styles = useStyles();

	const [postData, setPostData] = useState<IPostData>({
		creator: '',
		title: '',
		message: '',
		tags: '',
		selectedFile: '',
	});

	const handleSubmit: FormEventHandler<HTMLFormElement> = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	const clear = () =>
		setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });

	const postFormArr: IPostForm[] = [
		{ name: 'creator', label: 'Creator' },
		{ name: 'title', label: 'Title' },
		{ name: 'message', label: 'Message' },
		{ name: 'tags', label: 'Tags' },
	];

	return (
		<Paper className={styles.paper}>
			<form
				autoComplete={'off'}
				noValidate={true}
				className={cn(styles.form, styles.root)}
				onSubmit={handleSubmit}
			>
				<Typography variant={'h6'}>Yours new post</Typography>
				{postFormArr.map((item) => (
					<TextField
						name={item.name}
						variant={'outlined'}
						label={item.label}
						fullWidth
						value={postData[item.name]}
						onChange={(e) => setPostData({ ...postData, [item.name]: e.target.value })}
					/>
				))}
				<div className={styles.fileInput}>
					<FileBase
						type={'file'}
						multiple={false}
						onDone={({ base64 }: any) =>
							setPostData({ ...postData, selectedFile: base64 })
						}
					/>
				</div>
				<Button
					className={styles.buttonSubmit}
					size={'large'}
					color={'primary'}
					variant={'contained'}
					type={'submit'}
					fullWidth
				>
					Send
				</Button>
				<Button
					size={'small'}
					color={'secondary'}
					variant={'contained'}
					fullWidth
					onClick={clear}
				>
					Clear
				</Button>
			</form>
		</Paper>
	);
};
