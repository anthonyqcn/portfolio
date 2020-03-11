import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';

function Bonito() {
	return (
		<div className="page">
			<Typography variant="h1" color="secondary" className="header">
				BONITO
			</Typography>
			<Typography variant="h2">Welcome to Bonito!</Typography>
		</div>
	);
}

export default Bonito;
