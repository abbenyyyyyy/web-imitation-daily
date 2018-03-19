import React, { Component } from 'react';
import './App.css';

import axios from 'axios';

import Head from './Head/Head.js';
import Banner from './Banner/Banner';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state={
      bannerData:[]
    };
  }

  componentDidMount() {
    axios.get("/homes/banner")
      .then(response => {
        console.log(response.data.data);
        this.setState({bannerData:response.data.data});
      });
  }

  render() {
    let loginBackgroundImage = require('./img/missing_login_bg.png');
    return (
      <div className="App">
        <Head />
        <div className="page-content">
          <div className="packery-container">
            <Banner bannerWidth={755}
              bannerHeight={450}
              items={IMAGE_DATA}
              speed={1.2}
              delay={3}
              pause={true}
              autoplay={true}
              dots={true}
              arrows={true}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="packery-login-container">
                <div className="packery-login-bd" style={{ backgroundImage: `url(${loginBackgroundImage})` }}>
                  <img src={require('./img/canvas.png')} alt="" />
                  <a className="packery-login-avatar">
                    <img src={require('./img/missing_face.png')} width="64" height="64" alt="" />
                  </a>
                </div>
                <div className="packery-login-ft" >
                  <a className="packery-login-text" href="#login">登录</a>
                  <p>登录查看你的好奇心指数</p>
                </div>
              </div>
              <a className="packery-dowload" href="dowload">
                <img src={require('./img/download-banner-x640.png')} width="245" height="160" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const IMAGE_DATA = [
  {
    imgUrl: require('./img/01.jpg'),
    alt: 'image01',
    categoryName: "商业",
    title: "宜家要在网上卖货了，那到底会是一个什么样的电商？",
  },
  {
    imgUrl: require('./img/02.jpg'),
    alt: 'image02',
    categoryName: "商业",
    title: "说到新媒体，你可以看看这个叫赫芬顿的人如何创办了第一份“互联网报纸”",
  },
  {
    imgUrl: require('./img/03.jpg'),
    alt: 'image03',
    categoryName: "智能",
    title: "他靠记录热潮做了个一百人的公司，现在他开始记录创业公司的衰败 | 硅谷在急什么❺”",
  },
  {
    imgUrl: require('./img/04.jpg'),
    alt: 'image04',
    categoryName: "商业",
    title: "谁让《查令十字街 84 号》大卖，《余罪》的剧又卖了多少书？｜六个图书编辑的故事②”",
  },
  {
    imgUrl: require('./img/05.jpg'),
    alt: 'image05',
    categoryName: "商业",
    title: "阿里为何不提那个虚幻的 GMV，开始讲“用户停留时间”的故事了？",
  },
]