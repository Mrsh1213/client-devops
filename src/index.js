import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ThemeProvider} from "@material-ui/styles";
import {create} from 'jss';
import {createMuiTheme, jssPreset, StylesProvider} from '@material-ui/core/styles'
import {blue, indigo} from '@material-ui/core/colors'

import rtl from 'jss-rtl';

const jss = create({plugins: [...jssPreset().plugins, rtl()]});
const theme = createMuiTheme({
    palette: {
        secondary: {
            main: blue[900]
        },
        primary: {
            main: indigo[700]
        }
    },
    direction: 'rtl',
    typography: {
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '"Lato"',
            'sans-serif'
        ].join(',')
    },
    overrides: {
        MuiSlider: {
            root: {
                color: "#ca0c85"
            }
        }
    }
});
ReactDOM.render(
    <ThemeProvider theme={theme}>
        <StylesProvider jss={jss}>
            <App/>
        </StylesProvider>
    </ThemeProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
