import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import App from './App';
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

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
