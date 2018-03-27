import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import MediaQuery from 'react-responsive';
import App from './App';
import MobileApp from './MobileApp';
import registerServiceWorker from './registerServiceWorker';

injectGlobal`
    body{
        margin: 0;
        padding: 0;
        font-size: 14px;
        font-family: Arial, "Hiragino Sans GB", 冬青黑, "Microsoft YaHei", 微软雅黑, SimSun, 宋体, Helvetica, Tahoma, "Arial sans-serif";
        word-break: keep-all; 
    }
`;

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
