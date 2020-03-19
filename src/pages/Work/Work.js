import React /*, { useState, useEffect }*/ from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './Work.css';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import ShopkeepLogo from './Shopkeep/logo.png';
import BonitoLogo from './Bonito/logo.png';
import Shopkeep from './Shopkeep/Shopkeep';
import Bonito from './Bonito/Bonito';

function Work() {
	return (
		<div className="page">
			<Typography variant="h1" color="secondary" className="header">
				PORTFOLIO OF WORK
			</Typography>
			<Typography variant="h2">
				Here's a bunch of projects I've worked on!
			</Typography>
			<Card
				style={{
					margin: '1rem',
					paddingTop: '.5rem',
					paddingBottom: '.4rem'
				}}
			>
				<CardActionArea>
					<Link to="/Work/Shopkeep" className="proj-link">
						<CardMedia
							component="img"
							src={ShopkeepLogo}
							title="Shopkeep"
							alt=""
							height="100"
						/>
						<CardContent>
							<Typography
								gutterBottom
								variant="h3"
								component="h3"
							>
								Shopkeep
							</Typography>
							<Typography
								variant="subtitle1"
								color="textSecondary"
								component="p"
							>
								My full User-Centered Design process in one
								project!
							</Typography>
						</CardContent>
					</Link>
				</CardActionArea>
				<Route path="/Work/Shopkeep" component={Shopkeep} />
			</Card>
			<Card
				style={{
					margin: '1rem',
					paddingTop: '.5rem',
					paddingBottom: '.4rem'
				}}
			>
				<CardActionArea>
					<Link to="/Work/Bonito" className="proj-link">
						<CardMedia
							component="img"
							src={BonitoLogo}
							title="Bonito"
							alt=""
							height="100"
						/>
						<CardContent>
							<Typography
								gutterBottom
								variant="h3"
								component="h3"
							>
								Bonito
							</Typography>
							<Typography
								variant="subtitle1"
								color="textSecondary"
								component="p"
							>
								My first product management project from start
								to finish!
							</Typography>
						</CardContent>
					</Link>
				</CardActionArea>
				<Route path="/Work/Bonito" component={Bonito} />
			</Card>
		</div>
	);
}

export default Work;
