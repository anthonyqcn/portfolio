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
	},
	test: {
		marginTop: '1rem',
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
						// eslint-disable-next-line
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
						// eslint-disable-next-line
						target="_blank"
						className="column button-links"
					>
						GitHub
					</a>
				</Button>
			</div>
			<div className="columnize">
				<Resume />
				<Button
					variant="contained"
					color="secondary"
					size="medium"
					endIcon={<GetAppIcon />}
					classes={{
						root: classes.test
					}}
				>
					{' '}
					<Link
						to={pdf}
						target="_blank"
						download
						className="button-links"
					>
						Download
					</Link>
				</Button>
			</div>
		</div>
	);
}

export default Contact;
