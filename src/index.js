import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ThemeProvider} from "@material-ui/styles";
import {create} from 'jss';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import rootReducer from './redux/reducers'
import theme from "./config/theme";
import {jssPreset, StylesProvider} from '@material-ui/core/styles'
import rtl from 'jss-rtl';

const jss = create({plugins: [...jssPreset().plugins, rtl()]});
const store = createStore(rootReducer);
ReactDOM.render(

        <ThemeProvider theme={theme}>
            <StylesProvider jss={jss}>
                <Provider store={store}>
                <App/>
                </Provider>
            </StylesProvider>
        </ThemeProvider>

    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
