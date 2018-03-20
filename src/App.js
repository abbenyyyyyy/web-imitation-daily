import React, { Component } from 'react';
import './App.css';

import axios from 'axios';

import Head from './Head/Head.js';
import Banner from './Banner/Banner';
import ArticlePreview from './ArticlePreview/ArticlePreview';

export default class App extends Component {

  constructor(props) {
    super(props);
    // axios.defaults.baseURL = '/api';
    this.state = {
      bannerData: [],
      homepageData:[]
    };
  }

  componentDidMount() {
    function getBanner() {
      return axios.get('/homes/banner');
    }

    function getHomepage() {
      return axios.get('/homes/homepage');
    }
    axios.all([getBanner(), getHomepage()])
      .then(axios.spread((responseBanner, responseHomepage) => {
        this.setState({ bannerData: responseBanner.data.data, homepageData:IMAGE_DATA.data.homepageData});
        // console.log(IMAGE_DATA.data.homepageData);
      }));

    // axios.get("/homes/banner")
    //   .then(response => {
    //     // console.log(response.data.data);
    //     // for(var i=0;i<response.data.data.length;i++){
    //     //   response.data.data[i].imgUrl = require('./img/01.jpg');
    //     // }
    //     this.setState({ bannerData: response.data.data });
    //   });
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
              items={this.state.bannerData}
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
              
          <div>
          {/* <ArticlePreview articlePreviewData={this.state.homepageData[0]}/> */}
          </div>
        </div>
      </div>
    );
  }
}

const IMAGE_DATA = {
  "status": 200,
  "message": "OK",
  "data": {
    "has_more": true,
    "last_key": 51078,
    "homepageData": [
      {
        "id": 51060,
        "title": "乐观的史蒂芬·平克说人们应该更关注进步，而非徒自悲伤",
        "description": "相当宏观的分析，你怎么看？",
        "praiseCount": 22,
        "commentCount": 1,
        "createTime": "2018-03-15 07:12:34",
        "imgUrl": "http://imitation-daily-img-1252489855.picgz.myqcloud.com/51060.jpg",
        "cssColumn": 1,
        "appview": "http://app3.qdaily.com/app3/articles/51060.html",
        "categoryName": "城市"
      }
      // ,
      // {
      //   "id": 51066,
      //   "title": "印度之后，亚马逊在东南亚和阿里巴巴争夺电商市场",
      //   "description": "亚马逊计划进驻越南。",
      //   "praiseCount": 3,
      //   "commentCount": 1,
      //   "createTime": "2018-03-15 07:07:49",
      //   "imgUrl": "http://imitation-daily-img-1252489855.picgz.myqcloud.com/51066.gif",
      //   "cssColumn": 1,
      //   "appview": "http://app3.qdaily.com/app3/articles/51066.html",
      //   "categoryName": "智能"
      // },
      // {
      //   "id": 51110,
      //   "title": "东京动画奖竞赛单元揭晓结果，大奖是台湾的《幸福路上》",
      //   "description": "《幸福路上》拿了长片部门的大奖，短片部门获奖的是《负空间》。",
      //   "praiseCount": 20,
      //   "commentCount": 2,
      //   "createTime": "2018-03-15 07:05:16",
      //   "imgUrl": "http://imitation-daily-img-1252489855.picgz.myqcloud.com/51110.jpg",
      //   "cssColumn": 1,
      //   "appview": "http://app3.qdaily.com/app3/articles/51110.html",
      //   "categoryName": "娱乐"
      // },
      // {
      //   "id": 51112,
      //   "title": "顺丰公布上市后首份年报，此外它还在拓展新业务",
      //   "description": "业绩远超 “四通一达”，可又出现了京东物流这个新对手。",
      //   "praiseCount": 10,
      //   "commentCount": 1,
      //   "createTime": "2018-03-15 07:03:16",
      //   "imgUrl": "http://imitation-daily-img-1252489855.picgz.myqcloud.com/51112.jpg",
      //   "cssColumn": 1,
      //   "appview": "http://app3.qdaily.com/app3/articles/51112.html",
      //   "categoryName": "智能"
      // }
      // ,
      // {
      //   "id": 2224,
      //   "title": "你觉得，人们在处理日常冲突时都容易走上哪些歪路？",
      //   "description": "就没有“撕破脸”和“当包子”之外的解决问题方式么？（题图来自：视觉中国）",
      //   "praiseCount": 0,
      //   "commentCount": 4,
      //   "createTime": "2018-03-15 01:00:00",
      //   "imgUrl": "http://imitation-daily-img-1252489855.picgz.myqcloud.com/2224.jpg",
      //   "cssColumn": 0,
      //   "appview": "http://app3.qdaily.com/app3/articles/2224.html",
      //   "categoryName": "投票"
      // },
      // {
      //   "id": 56,
      //   "title": "房子和我们的生活",
      //   "description": "我们从个人生活中关注度最高的“房子”入手，开始记录微观历史。",
      //   "imgUrl": "https://imitation-daily-img-1252489855.cos.ap-guangzhou.myqcloud.com/column56.png",
      //   "cssColumn": -1,
      //   "appview": "http://www.qdaily.com/special_columns/56.html"
      // },
      // {
      //   "id": 51103,
      //   "title": "2 万名科学家签署“给人类的第二次警告”，但可能没什么用",
      //   "description": "第一次警告发布于 25 年前，截止目前，上面的大多数问题都没有进展",
      //   "praiseCount": 17,
      //   "commentCount": 11,
      //   "createTime": "2018-03-15 07:02:07",
      //   "imgUrl": "http://imitation-daily-img-1252489855.picgz.myqcloud.com/51103.jpg",
      //   "cssColumn": 1,
      //   "appview": "http://app3.qdaily.com/app3/articles/51103.html",
      //   "categoryName": "城市"
      // },
      // {
      //   "id": 51119,
      //   "title": "创造力说不定还真是天生的，它与大脑的关系被拍下来了",
      //   "description": "不过这也并不代表后天的努力就是徒劳的",
      //   "praiseCount": 16,
      //   "commentCount": 0,
      //   "createTime": "2018-03-15 06:59:09",
      //   "imgUrl": "http://imitation-daily-img-1252489855.picgz.myqcloud.com/51119.jpg",
      //   "cssColumn": 1,
      //   "appview": "http://app3.qdaily.com/app3/articles/51119.html",
      //   "categoryName": "智能"
      // },
      // {
      //   "id": 51104,
      //   "title": "雀巢日本要把 Kitkat 引入中国，这是它第四次“回归”",
      //   "description": "诶，会有日本最新推出的粉红色巧克力吗？",
      //   "praiseCount": 4,
      //   "commentCount": 4,
      //   "createTime": "2018-03-15 06:58:42",
      //   "imgUrl": "http://imitation-daily-img-1252489855.picgz.myqcloud.com/51104.jpg",
      //   "cssColumn": 1,
      //   "appview": "http://app3.qdaily.com/app3/articles/51104.html",
      //   "categoryName": "商业"
      // },
      // {
      //   "id": 51117,
      //   "title": "上海最值得一看的设计展开幕，这里有一些推荐",
      //   "description": "“设计上海”展览将会持续到本周六（3 月 17 日）。",
      //   "praiseCount": 17,
      //   "commentCount": 0,
      //   "createTime": "2018-03-15 06:58:26",
      //   "imgUrl": "http://imitation-daily-img-1252489855.picgz.myqcloud.com/51117.jpg",
      //   "cssColumn": 1,
      //   "appview": "http://app3.qdaily.com/app3/articles/51117.html",
      //   "categoryName": "设计"
      // },
      // {
      //   "id": 51118,
      //   "title": "香港苏富比春拍将有更多国际艺术家作品，藏家口味变了",
      //   "description": "信息的迅速传播以及亚洲藏家的年轻化，是其中的两个原因。",
      //   "praiseCount": 2,
      //   "commentCount": 0,
      //   "createTime": "2018-03-15 06:58:14",
      //   "imgUrl": "http://imitation-daily-img-1252489855.picgz.myqcloud.com/51118.jpg",
      //   "cssColumn": 1,
      //   "appview": "http://app3.qdaily.com/app3/articles/51118.html",
      //   "categoryName": "城市"
      // },
      // {
      //   "id": 50894,
      //   "title": "自拍照有可能不如真人好看，以及，人前自拍会更糟",
      //   "description": "别人发自拍更多的是在博关注刷存在感，有作秀成分。但自己发自拍，就是很真诚地在社交了。",
      //   "praiseCount": 46,
      //   "commentCount": 20,
      //   "createTime": "2018-03-14 17:46:48",
      //   "imgUrl": "http://imitation-daily-img-1252489855.picgz.myqcloud.com/50894.gif",
      //   "cssColumn": 1,
      //   "appview": "http://app3.qdaily.com/app3/articles/50894.html",
      //   "categoryName": "娱乐"
      // },
      // {
      //   "id": 51096,
      //   "title": "中投卖掉所持黑石全部股份，中国公司从后者那里买了不少美国地产",
      //   "description": "监管越来越严了。",
      //   "praiseCount": 29,
      //   "commentCount": 5,
      //   "createTime": "2018-03-14 15:55:14",
      //   "imgUrl": "http://imitation-daily-img-1252489855.picgz.myqcloud.com/51096.jpg",
      //   "cssColumn": 1,
      //   "appview": "http://app3.qdaily.com/app3/articles/51096.html",
      //   "categoryName": "商业"
      // },
      // {
      //   "id": 51097,
      //   "title": "耐克欲推动内马尔转会皇马？阿迪最重要的足球资源被瞄上了",
      //   "description": "网友调侃：我想在淘宝购物，推动恒大买内马尔",
      //   "praiseCount": 20,
      //   "commentCount": 8,
      //   "createTime": "2018-03-14 15:41:38",
      //   "imgUrl": "http://imitation-daily-img-1252489855.picgz.myqcloud.com/51097.jpeg",
      //   "cssColumn": 1,
      //   "appview": "http://app3.qdaily.com/app3/articles/51097.html",
      //   "categoryName": "商业"
      // },
      // {
      //   "id": 51098,
      //   "title": "《神奇动物2》发布预告，裘德·洛版邓布利多现身",
      //   "description": "电影将于 11 月 16 日于北美上映，目前尚未宣布内地档期。",
      //   "praiseCount": 46,
      //   "commentCount": 9,
      //   "createTime": "2018-03-14 14:57:53",
      //   "imgUrl": "http://imitation-daily-img-1252489855.picgz.myqcloud.com/51098.png",
      //   "cssColumn": 1,
      //   "appview": "http://app3.qdaily.com/app3/articles/51098.html",
      //   "categoryName": "娱乐"
      // },
      // {
      //   "id": 51092,
      //   "title": "XPrize 基金会发起了新挑战，造一台可以在 10 万米外遥控的机器人",
      //   "description": "还要求这个机器人可以将听觉、视觉、触觉等信息传输过去。",
      //   "praiseCount": 16,
      //   "commentCount": 2,
      //   "createTime": "2018-03-14 14:16:55",
      //   "imgUrl": "http://imitation-daily-img-1252489855.picgz.myqcloud.com/51092.jpg",
      //   "cssColumn": 1,
      //   "appview": "http://app3.qdaily.com/app3/articles/51092.html",
      //   "categoryName": "智能"
      // },
      // {
      //   "id": 51059,
      //   "title": "这部话题黑暗喜剧，被视作是 2018 版的《逃出绝命镇》",
      //   "description": "《抱歉打扰》在对现实的影射和讽刺上还要更宽广一些。",
      //   "praiseCount": 38,
      //   "commentCount": 4,
      //   "createTime": "2018-03-14 13:18:55",
      //   "imgUrl": "http://imitation-daily-img-1252489855.picgz.myqcloud.com/51059.jpg",
      //   "cssColumn": 1,
      //   "appview": "http://app3.qdaily.com/app3/articles/51059.html",
      //   "categoryName": "娱乐"
      // },
      // {
      //   "id": 51094,
      //   "title": "挪威最大的三文鱼生产商要来中国开店，三文鱼饺子要尝尝吗？",
      //   "description": "健康的快餐？",
      //   "praiseCount": 67,
      //   "commentCount": 24,
      //   "createTime": "2018-03-14 12:41:35",
      //   "imgUrl": "http://imitation-daily-img-1252489855.picgz.myqcloud.com/51094.jpg",
      //   "cssColumn": 1,
      //   "appview": "http://app3.qdaily.com/app3/articles/51094.html",
      //   "categoryName": "商业"
      // },
      // {
      //   "id": 51088,
      //   "title": "今日娱乐：东京动画大奖公布，恐怖片《中邪》清明定档",
      //   "description": "我们为你挑选了今天最重要的娱乐新闻。",
      //   "praiseCount": 46,
      //   "commentCount": 25,
      //   "createTime": "2018-03-14 11:11:31",
      //   "imgUrl": "http://imitation-daily-img-1252489855.picgz.myqcloud.com/51088.jpg",
      //   "cssColumn": 1,
      //   "appview": "http://app3.qdaily.com/app3/articles/51088.html",
      //   "categoryName": "娱乐"
      // },
      // {
      //   "id": 51087,
      //   "title": "看图：著名物理学家霍金去世，以及其他重要的事",
      //   "description": "每天我们都会摘取重要的新闻图片。PS：我们认为这个世界的重要性不应该有绝对的等级，重点是看得更多，探索更多。",
      //   "praiseCount": 76,
      //   "commentCount": 24,
      //   "createTime": "2018-03-14 09:45:12",
      //   "imgUrl": "http://imitation-daily-img-1252489855.picgz.myqcloud.com/51087.jpg",
      //   "cssColumn": 1,
      //   "appview": "http://app3.qdaily.com/app3/articles/51087.html",
      //   "categoryName": "城市"
      // },
      // {
      //   "id": 51099,
      //   "title": "霍金去世，他的思想在宇宙中回荡",
      //   "description": "将自己最好的时光花在探寻黑洞和宇宙源起，霍金并不惧怕黑暗。",
      //   "praiseCount": 730,
      //   "commentCount": 76,
      //   "createTime": "2018-03-14 08:31:46",
      //   "imgUrl": "http://imitation-daily-img-1252489855.picgz.myqcloud.com/51099.jpg",
      //   "cssColumn": 2,
      //   "appview": "http://app3.qdaily.com/app3/articles/51099.html",
      //   "categoryName": "智能"
      // },
      // {
      //   "id": 51078,
      //   "title": "特朗普解除国务卿蒂勒森职务，提名中情局长接任",
      //   "description": "蒂勒森曾与特朗普在各种重要外交政策问题上一再发生冲突。",
      //   "praiseCount": 67,
      //   "commentCount": 25,
      //   "createTime": "2018-03-14 08:11:11",
      //   "imgUrl": "http://imitation-daily-img-1252489855.picgz.myqcloud.com/51078.jpg",
      //   "cssColumn": 2,
      //   "appview": "http://app3.qdaily.com/app3/articles/51078.html",
      //   "categoryName": "城市"
      // }
    ]
  }
}