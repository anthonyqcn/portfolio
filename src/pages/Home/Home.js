import React from 'react';
import '../../Media.css';
import '../../App.css';
import './Home.css';
import Headshot from './Headshot.jpg';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Smash from './smash.png';

function Home() {
	return (
		<div className="page">
			<Typography variant="h1" color="secondary" className="header">
				ABOUT ME
			</Typography>
			<Typography variant="h2">
				Hello there! My name is Anthony Q.C. Nguyen and I am a product
				manager. Welcome to my portfolio!
			</Typography>
			<div className="headshot-container">
				<Paper elevation={2} className="headshot-paper">
					<img src={Headshot} alt="" className="headshot" />
				</Paper>
			</div>
			<div className="intro">
				<Typography variant="body1">
					I’m a graduating senior at the University of Washington
					studying{' '}
					<a
						target="_blank"
						href="https://www.hcde.washington.edu/bs"
					>
						Human Centered Design and Engineering
					</a>
					, which is a discipline that combines my love of technology
					with my passion for helping people. I currently work as a
					Junior Product Manager at{' '}
					<a target="_blank" href="https://www.carina.org">
						Carina
					</a>
					, a not-for-profit startup that builds platforms to help
					caregivers across the nation connect with those who need
					care.
				</Typography>
			</div>
			<Typography variant="h2">Fun Facts!</Typography>
			<Card
				style={{
					margin: '1rem',
					paddingTop: '.8rem',
					paddingBottom: '.4rem'
				}}
			>
				<CardMedia
					component="img"
					src={Smash}
					title="Smash Ultimate"
					alt=""
					height="150"
				/>
				<CardContent>
					<Typography gutterBottom variant="h3" component="h3">
						Super Smash Bros Ultimate
					</Typography>
					<Typography
						variant="body2"
						color="textSecondary"
						component="p"
						style={{ textAlign: 'start' }}
					>
						I main Link in Super Smash Bros Ultimate, and my GSP (as
						of March 9, 2020) is over six million!
					</Typography>
				</CardContent>
			</Card>
			{/*<Card>
				<CardMedia
					component="img"
					src={Smash}
					title="Smash Ultimate"
					alt=""
					height="150"
				/>
				<CardContent>
					<Typography gutterBottom variant="h3" component="h3">
						Super Smash Bros Ultimate
					</Typography>
					<Typography
						variant="body2"
						color="textSecondary"
						component="p"
						style={{ textAlign: 'start' }}
					>
						I main Link in Super Smash Bros Ultimate, and my GSP (as
						of March 9, 2020) is over six million!
					</Typography>
				</CardContent>
						</Card>*/}
		</div>
	);
}

export default Home;
