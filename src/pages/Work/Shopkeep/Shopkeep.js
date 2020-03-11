import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';

function Shopkeep() {
	return (
		<div className="page">
			<Typography variant="h1" color="secondary" className="header">
				SHOPKEEP
			</Typography>
			<Typography variant="h2">Welcome to Shopkeep!</Typography>
		</div>
	);
}

export default Shopkeep;
