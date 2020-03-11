import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import Paper from '@material-ui/core/Paper';
import resume from './Anthony_QC_Nguyen.pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import './Contact.css';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Resume extends Component {
	state = {
		numPages: null,
		pageNumber: 1
	};

	onDocumentLoadSuccess = ({ numPages }) => {
		this.setState({ numPages });
	};

	render() {
		const { pageNumber } = this.state;

		return (
			<Paper elevation={2} className="resume-container">
				<Document
					file={resume}
					onLoadSuccess={this.onDocumentLoadSuccess}
					//externalLinkTarget="_blank"
				>
					<Page
						className="responsive"
						pageNumber={pageNumber}
						scale="0.6"
					/>
				</Document>
			</Paper>
		);
	}
}

export default Resume;
