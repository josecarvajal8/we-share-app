import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/Home';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
