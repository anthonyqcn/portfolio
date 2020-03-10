import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import GetAppIcon from '@material-ui/icons/GetApp';
import Resume from './Resume';
import pdf from './Anthony_QC_Nguyen.pdf';

function Contact() {
	return (
		<div className="page">
			<Typography variant="h1" color="secondary">
				My Resume!
			</Typography>
			<Resume />
			<Link to={pdf} target="_blank" download>
				<Button variant="contained" color="secondary">
					{' '}
					<GetAppIcon />
				</Button>
			</Link>
		</div>
	);
}

export default Contact;
