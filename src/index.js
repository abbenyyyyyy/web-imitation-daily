import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import App from './App';

const IMAGE_DATA = [
  {
    src:require('./images/01.jpg'),
    alt:'image01',
    category:"商业",
    title:"宜家要在网上卖货了，那到底会是一个什么样的电商？",
  },
  {
    src:require('./images/02.jpg'),
    alt:'image02',
    category:"商业",
    title:"说到新媒体，你可以看看这个叫赫芬顿的人如何创办了第一份“互联网报纸”",
  },
  {
    src:require('./images/03.jpg'),
    alt:'image03',
    category:"智能",
    title:"他靠记录热潮做了个一百人的公司，现在他开始记录创业公司的衰败 | 硅谷在急什么❺”",
  },
  {
    src:require('./images/04.jpg'),
    alt:'image04',
    category:"商业",
    title:"谁让《查令十字街 84 号》大卖，《余罪》的剧又卖了多少书？｜六个图书编辑的故事②”",
  },
  {
    src:require('./images/05.jpg'),
    alt:'image05',
    category:"商业",
    title:"阿里为何不提那个虚幻的 GMV，开始讲“用户停留时间”的故事了？",
  },
]



ReactDOM.render(
  <App
  	items={IMAGE_DATA}
  />,
  document.getElementById('root')
);
