import React from 'react';
import ReactDOM from 'react-dom';
import MediaQuery from 'react-responsive';
import App from './App';
import MobileApp from './MobileApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>
        <MediaQuery query='(min-device-width:1224px)'>
            {/* 台式机或笔记本电脑 */}
            <App />
        </MediaQuery>
        <MediaQuery query='(max-device-width:1224px)'>
            {/* 平板电脑或手机 */}
            <MobileApp />
        </MediaQuery>
    </div>,
    document.getElementById('root'));
registerServiceWorker();
