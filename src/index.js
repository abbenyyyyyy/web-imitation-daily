import React from 'react';
import ReactDOM from 'react-dom';
import MediaQuery from 'react-responsive';
import App from './App';
import MobileApp from './MobileApp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.Fragment>
        <MediaQuery query='(min-device-width:1224px)'>
            {/* 台式机或笔记本电脑 */}
            <App />
        </MediaQuery>
        <MediaQuery query='(max-device-width:1224px)'>
            {/* 平板电脑或手机 */}
            <MobileApp />
        </MediaQuery>
    </React.Fragment>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
