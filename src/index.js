import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';

const history = createBrowserHistory()


ReactDOM.render(<Router history={history}><App history={history} /></Router>, document.getElementById('root'));
registerServiceWorker();
