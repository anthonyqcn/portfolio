import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import GetAppIcon from '@material-ui/icons/GetApp';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import pdf from './Anthony_QC_Nguyen.pdf';
import { makeStyles } from '@material-ui/core/styles';
import Resume from './Resume';
import './Contact.css';

const useStyles = makeStyles({
	root: {
		marginBottom: '1rem'
	}
});

function Contact() {
	const classes = useStyles();
	return (
		<div className="page">
			<Typography variant="h1" color="secondary">
				CONTACT ME
			</Typography>
			<Typography
				variant="h2"
				classes={{
					root: classes.root
				}}
			>
				Here's how to find me!
			</Typography>
			<div className="contact-buttons">
				<Button
					variant="contained"
					color="secondary"
					size="medium"
					endIcon={<LinkedInIcon />}
					classes={{
						root: classes.root
					}}
				>
					{' '}
					<a
						href="https://www.linkedin.com/in/anthonyqcn/"
						target="_blank"
						className="column button-links"
					>
						LinkedIn
					</a>
				</Button>
				<Button
					variant="contained"
					color="secondary"
					size="medium"
					endIcon={<GitHubIcon />}
					classes={{
						root: classes.root
					}}
				>
					{' '}
					<a
						href="https://github.com/anthonyqcn"
						target="_blank"
						className="column button-links"
					>
						GitHub
					</a>
				</Button>
			</div>
			<Resume />
			<Button
				variant="contained"
				color="secondary"
				size="medium"
				endIcon={<GetAppIcon />}
				classes={{
					root: classes.root
				}}
			>
				{' '}
				<Link
					to={pdf}
					target="_blank"
					download
					className="column button-links"
				>
					Download
				</Link>
			</Button>
		</div>
	);
}

export default Contact;
