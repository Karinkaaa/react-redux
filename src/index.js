import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import store from "./store";
import {ThemeProvider} from '@material-ui/core/styles';
import {theme} from "./utils/theme";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <App/>
            </ThemeProvider>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

