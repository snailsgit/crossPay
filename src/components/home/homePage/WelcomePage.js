import React from 'react'
import { makeStyles, Card, Typography, Grid } from '@material-ui/core'
import './home.css'
import image from './a.jpeg'
import image2 from './b.png'
import image3 from './c.jpeg'

const useStyles = makeStyles((theme) => ({
	root: {
		alignContent: 'center',
		marginTop: '15%',
		marginLeft: '5%',
		marginRight: '10%',
		marginBottom: '20px',
	},
	content: {
		border: '2px solid black',
		minWidth: 375,
		width: 200,
		borderRadius: '5px',
	},
	title: {
		padding: '20px',
	},
}))

const WelcomePage = () => {
	const classes = useStyles()
	return (
		<Grid
			className={classes.root}
			container
			spacing={10}
			align='center'
			justify='center'>
			<Grid item xs={6}>
				<img src={image} width='130%' height='100%' />
			</Grid>

			<Grid item xs={6}>
				<Typography className={classes.title} component='h1' variant='h2'>
					crossPay
				</Typography>

				<Grid item xs={6}>
				<img src={image3} width='80%' height='80%' />
			</Grid>
			</Grid>
		</Grid>
	)
}

export default WelcomePage
