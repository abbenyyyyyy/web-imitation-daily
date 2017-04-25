import React, { Component } from 'react';

import './Head.css';

import head_flask from './headSvg/head-flask.svg';
import head_column from './headSvg/head-column.svg';
import head_search from './headSvg/head-search.svg';
import head_weibo from './headSvg/head-weibo.svg';
import head_wechat from './headSvg/head-wechat.svg';


// const head_search_style = {
// 		color:"#000",
//  		// backgroundImage: `url(${head_search})`,
//   		backgroundImage: "url(" + head_search + ")",
//   		backgroundRepeat:"no-repeat",
//   // 		backgroundAttachment:"fixed",
// 		// backgroundPosition:"left",
// 		// backgroundOrigin:"content-box",
// 	};

	

	const logo_vertical={
		display: "-webkit-flex",
		flexDirection: "column",
		alignItems: "center",
            marginRight:"35px",
		backgroundColor: "#000",
	}

	const logo_horizontal={
		display: "-webkit-flex",
		flexDirection: "column",
		alignItems: "center",
		backgroundColor: "#000",
	}

export default class Head extends Component {

	constructor(props) {
    	super(props);
  	}

    
    render() {
        return ( 
        	< div className = "App-header" >
            	< a  href="#logo" style={logo_vertical} >
            		< img className="logo-pic" src={ require('./headSvg/head-q.png') }
            			alt="head-pic" / >
            		< img className="logo-text" src={ require('./headSvg/head-title.png') }
            			alt="head-text" / >
            	</a>
            	<ul className="items-main-cates-clearfix">
            		<li className="items-main-cates">
             			<a className="head-instutite" href="#instutite">
             				<img src={ head_flask} height="23" width="19"/>
             				<span>好奇心研究所</span>
             			</a>
             		</li>
             		<li className="items-main-cates">
             			<a className="head-column" href="#column">
             				<img src={ head_column} height="23" width="19"/>
             				栏目中心
             			</a>
             		</li>
             	</ul>
             	<ul className="item-cates">
             		<li className="item-cate">
             			<a href="#">长文章</a>
             		</li>
             		<li className="item-cate">
             			<a href="#">10个图</a>
             		</li>
             		<li className="item-cate">
             			<a href="#">Top 15</a>
             		</li>
             		<li className="item-cate">
             			<a href="#">商业</a>
             		</li>
             		<li className="item-cate">
             			<a href="#">职能</a>
             		</li>
             		<li className="item-cate">
             			<a href="#">设计</a>
             		</li>
             		<li className="item-cate">
             			<a href="#">时尚</a>
             		</li>
             		<li className="item-cate">
             			<a href="#">娱乐</a>
             		</li>
             		<li className="item-cate">
             			<a href="#">城市</a>
             		</li>
             		<li className="item-cate">
             			<a href="#">游戏</a>
             		</li>
                        <li className="dropdown">
                              <a  href="#">
                                    全部分类 <i className="arrow-toDown"></i>
                              </a>
                        </li>
             	</ul>
             	
             	<a className="app" href="#">
             		APP
             	</a>
             	
             	<a className="search" href="#" >
             	    <img src={head_search} height="23" width="19"/>
             	</a>
             	<div className="ribbon">
             		<a className="about-us" href="#" >
             			关于我们
             		</a>
             		<a className="icon-weibo" href="#" >
             			<img src={head_weibo} height="23" width="19"/>
             		</a>
             		<a className="icon-wechat" href="#" >
             			<img src={head_wechat} height="23" width="19"/>
             		</a>
             	</div>
            < /div>
        );
    }
}


