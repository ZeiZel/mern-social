import React from 'react';
import { Container, Typography, Grid, AppBar, Grow } from '@material-ui/core';
import LogoIcon from './assets/logo.png';
import { Posts, Form } from './components';
import useStyles from './styles';

function App() {
	const styles = useStyles();

	return (
		<Container maxWidth={'lg'}>
			<AppBar className={styles.appBar} position={'static'} color={'inherit'}>
				<Typography className={styles.heading} variant={'h2'} align={'center'}>
					MERN Blog
				</Typography>
				<img className={styles.image} src={LogoIcon} alt="logo" height={60} />
			</AppBar>
			<Grow in>
				<Container>
					<Grid container justify={'space-between'} alignItems={'stretch'} spacing={3}>
						<Grid item xs={12} sm={7}>
							<Posts />
						</Grid>
						<Grid item xs={12} sm={4}>
							<Form />
						</Grid>
					</Grid>
				</Container>
			</Grow>
		</Container>
	);
}

export default App;
