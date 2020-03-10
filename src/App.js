import React from 'react';
import './media.css';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import {
	createMuiTheme,
	ThemeProvider,
	responsiveFontSizes
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './pages/Home';
import Work from './pages/Work';
import Resume from './pages/Resume';
import Blog from './pages/Blog';

import LeagueSpartan from './fonts/LeagueSpartan-Bold.ttf';
import LibreBaskerville from './fonts/LibreBaskerville-Regular.ttf';

const league = {
	fontFamily: 'League-Spartan',
	fontStyle: 'bold',
	fontDisplay: 'swap',
	fontWeight: 400,
	src: `
    local('LeagueSpartan-Bold'),
    url(${LeagueSpartan}) format('truetype')
  `,
	unicodeRange:
		'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF'
};

const libre = {
	fontFamily: 'LibreBaskerville',
	fontStyle: 'normal',
	fontDisplay: 'swap',
	fontWeight: 400,
	src: `
    local('LibreBaskerville-Regular'),
    url(${LibreBaskerville}) format('truetype')
  `,
	unicodeRange:
		'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF'
};

let theme = createMuiTheme({
	palette: {
		primary: {
			// light: will be calculated from palette.primary.main,
			main: '#1C1C1C'
			// dark: will be calculated from palette.primary.main,
			// contrastText: will be calculated to contrast with palette.primary.main
		},
		secondary: {
			//light: '#0066ff',
			main: '#FF5B24'
			// dark: will be calculated from palette.secondary.main,
			//contrastText: '#ffcc00',
		},
		// Used by `getContrastText()` to maximize the contrast between
		// the background and the text.
		contrastThreshold: 3,
		// Used by the functions below to shift a color's luminance by approximately
		// two indexes within its tonal palette.
		// E.g., shift from Red 500 to Red 300 or Red 700.
		tonalOffset: 0.2
	},
	typography: {
		h1: {
			fontFamily: 'League-Spartan, Roboto, sans-serif'
		},
		fontFamily: 'LibreBaskerville, Arial, serif'
	},
	overrides: {
		MuiCssBaseline: {
			'@global': {
				'@font-face': [league, libre]
			}
		}
	}
});

theme = responsiveFontSizes(theme);

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<BrowserRouter>
				<div className="App">
					{/*<header className="App-header">*/}
					<AppBar position="sticky">
						<Typography variant="h1">
							<Link to="/">Home</Link>
						</Typography>
						<Typography variant="h2">
							<Link to="/work">Work</Link>
						</Typography>
						<Link to="/resume">Resume</Link>
						<Link to="/blog">Blog</Link>
					</AppBar>
					{/*</header>*/}

					<Route path="/" exact component={Home} />
					<Route path="/work" component={Work} />
					<Route path="/resume" component={Resume} />
					<Route path="/blog" component={Blog} />
				</div>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
