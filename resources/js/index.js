import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';


export default App;

if (document.getElementById('staffList')) {
    ReactDOM.render(<App />, document.getElementById('staffList'));
}
