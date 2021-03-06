import React, { Component } from 'react';
import styled from 'styled-components';

import HeadIcon from './headSvg/HeadIcon';
import HrefSvgView from './HrefSvgView';
import ClassifySvgView from './ClassifySvgView';

export default class Head extends Component {

	constructor(props) {
		super(props);
		this.state = {
			moreShow: false,
		}
		this._moreClick = this._moreClick.bind(this);
	}

	_moreClick() {
		this.setState({ moreShow: !this.state.moreShow });
	}

	render() {
		return (
			<AppHeader >
				<PageHeader extended={this.props.headExtended} >
					<SectionLeft >
						<a href="/"
							style={Object.assign({}, styles.logoVertical, !this.props.headExtended && {
								flexDirection: 'row', width: '125px', height: '60px', marginTop: '0px', marginRight: '0px',
							})} >
							<img style={Object.assign({}, styles.logoPic, !this.props.headExtended && styles.logoPicEnabled)}
								src={require('./headSvg/head-q.png')}
								alt="head-pic" />
							<img style={{ width: '50px', height: '26px', backgroundColor: '#000', }} src={require('./headSvg/head-title.png')}
								alt="head-text" />
						</a>
						<ItemsMainCatesClearfix >
							<HrefSvgView category='head_flask' text='好奇心研究所' headIconWidth={21} headIconHeight={22} headIconMarginRight={12}
								link="http://www.qdaily.com/labs.html" />
							<HrefSvgView category='head_column' text='栏目中心' headIconWidth={22} headIconHeight={22} headIconMarginRight={7}
								style={{ marginLeft: 40 }} link="http://www.qdaily.com/special_columns.html" />
						</ItemsMainCatesClearfix>
					</SectionLeft>
					<hr style={Object.assign({}, styles.hrHeightStyle, !this.props.headExtended && styles.hrHeightEnabledStyle)} />
					<div style={{
						display: 'flex', alignItems: 'center', lineHeight: '100%', height: '100%',
						padding: '0 0 0 20px', borderBottom: '1px solid #000',
					}}>
						<ItemCates >
							<ItemCate style={{ paddingLeft: '0px' }}>
								<a href="http://www.qdaily.com/tags/1068.html" target="_blank" rel="noopener noreferrer">长文章</a>
							</ItemCate>
							<ItemCate>
								<a href="http://www.qdaily.com/tags/1615.html" target="_blank" rel="noopener noreferrer">10 个图</a>
							</ItemCate>
							<ItemCate >
								<a href="http://www.qdaily.com/tags/29.html" target="_blank" rel="noopener noreferrer">Top 15</a>
							</ItemCate>
							<ItemCate >
								<a href="http://www.qdaily.com/categories/18.html" target="_blank" rel="noopener noreferrer">商业</a>
							</ItemCate>
							<ItemCate >
								<a href="http://www.qdaily.com/categories/4.html" target="_blank" rel="noopener noreferrer">智能</a>
							</ItemCate>
							<ItemCate >
								<a href="http://www.qdaily.com/categories/17.html" target="_blank" rel="noopener noreferrer">设计</a>
							</ItemCate>
							<ItemCate style={{ display: this.props.headExtended ? 'inline-block' : 'none' }}>
								<a href="http://www.qdaily.com/categories/19.html" target="_blank" rel="noopener noreferrer">时尚</a>
							</ItemCate>
							<ItemCate style={{ display: this.props.headExtended ? 'inline-block' : 'none' }}>
								<a href="http://www.qdaily.com/categories/3.html" target="_blank" rel="noopener noreferrer">娱乐</a>
							</ItemCate>
							<ItemCate style={{ display: this.props.headExtended ? 'inline-block' : 'none' }}>
								<a href="http://www.qdaily.com/categories/5.html" target="_blank" rel="noopener noreferrer">城市</a>
							</ItemCate>
							<ItemCate style={{ display: this.props.headExtended ? 'inline-block' : 'none' }}>
								<a href="http://www.qdaily.com/categories/54.html" target="_blank" rel="noopener noreferrer">游戏</a>
							</ItemCate>
						</ItemCates>
						<div style={{
							display: 'flex', whiteSpace: 'nowrap',
							zIndex: '66', backgroundColor: '#000', listStyleType: 'none', padding: '0 20px',
						}} onClick={this._moreClick}>
							<span style={{ textDecoration: 'none', color: '#fff', fontSize: '16px', cursor: 'pointer', }}>全部分类</span>
							<Triangle moreShow={this.state.moreShow}>
								<svg t="1519716943693" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="660" width="16" height="16"><defs><style type="text/css"></style></defs><path d="M191.815 319.981h640.37l-320.184 384.016z" p-id="661" fill="#fff"></path></svg>
							</Triangle>
						</div>
					</div>
					<div style={{
						flexShrink: '0', display: 'flex', alignItems: 'center', height: '100%',
						width: this.props.headExtended ? '350px' : '520px',
					}} >
						<hr style={Object.assign({}, styles.hrHeightStyle, !this.props.headExtended && styles.hrHeightEnabledStyle)} />
						<GoDownloadApp href="http://www.qdaily.com/aboutus.html" target="_blank" rel="noopener noreferrer">APP</GoDownloadApp>
						<hr style={Object.assign({}, styles.hrHeightStyle, !this.props.headExtended && styles.hrHeightEnabledStyle)} />
						<GoSearch href="http://www.qdaily.com/searches"  target="_blank" rel="noopener noreferrer">
							<HeadIcon category='head_search' style={{ width: 19, height: 23, fill: '#fff' }} />
						</GoSearch>
						<hr style={Object.assign({}, styles.hrHeightStyle, !this.props.headExtended && styles.hrHeightEnabledStyle)} />
						<HeadUser style={{
							width: this.props.headExtended ? '0px' : '200px',
							visibility: this.props.headExtended ? "hidden" : "visible"
						}}>
							<a href="#info" style={{ display: 'inline-block', width: '32px', height: '32px', maxHeight: '32px', maxWidth: '32px', }}>
								<img src={require('../img/missing_face.png')} style={{ width: '32px', height: '32px' }} alt="info" />
							</a>
							<a href="#login">登录</a>
							<a href="#signout" style={{ visibility: 'hidden' }}>退出</a>
						</HeadUser>
						<HeadAboutUs href="http://www.qdaily.com/aboutus.html" target="_blank" rel="noopener noreferrer">关于我们</HeadAboutUs>
						<IconWeibo href="http://weibo.com/qdaily" target="_blank" rel="noopener noreferrer">
							<HeadIcon category='head_weibo' style={{ width: 20, height: 20, fill: '#fff' }} />
						</IconWeibo>
						<IconWechat href="#wechat" >
							<HeadIcon category='head_wechat' style={{ width: 20, height: 20, fill: '#fff' }} />
						</IconWechat>
					</div>
				</PageHeader>
				<div style={{
					display: "flex", flexDirection: "column", width: "100%", height: this.state.moreShow ? "85px" : "0px",
					justifyContent: "space-around", alignItems: "center",
					backgroundColor: "#000", borderTop: "#4d4d4d 1px solid", visibility: this.state.moreShow ? "visible" : "hidden"
				}}>
					<ul>
						<li style={Object.assign({}, styles.classifyStyle, this.state.moreShow && { visibility: "visible" })}>
							<ClassifySvgView classify="长文章" link="http://www.qdaily.com/tags/1068.html"/>
						</li>
						<li style={Object.assign({}, styles.classifyStyle, this.state.moreShow && { visibility: "visible" })}>
							<ClassifySvgView classify="10个图" link="http://www.qdaily.com/tags/1615.html"/>
						</li>
						<li style={Object.assign({}, styles.classifyStyle, this.state.moreShow && { visibility: "visible" })}>
							<ClassifySvgView classify="top15" link="http://www.qdaily.com/tags/29.html"/>
						</li>
						<li style={Object.assign({}, styles.classifyStyle, this.state.moreShow && { visibility: "visible" })}>
							<ClassifySvgView classify="商业" link="http://www.qdaily.com/categories/18.html"/>
						</li>
						<li style={Object.assign({}, styles.classifyStyle, this.state.moreShow && { visibility: "visible" })}>
							<ClassifySvgView classify="智能" link="http://www.qdaily.com/categories/4.html"/>
						</li>
					</ul>
					<ul>
						<li style={Object.assign({}, styles.classifyStyle, this.state.moreShow && { visibility: "visible" })}>
							<ClassifySvgView classify="设计" link="http://www.qdaily.com/categories/17.html"/>
						</li>
						<li style={Object.assign({}, styles.classifyStyle, this.state.moreShow && { visibility: "visible" })}>
							<ClassifySvgView classify="时尚" link="http://www.qdaily.com/categories/19.html"/>
						</li>
						<li style={Object.assign({}, styles.classifyStyle, this.state.moreShow && { visibility: "visible" })}>
							<ClassifySvgView classify="娱乐" link="http://www.qdaily.com/categories/3.html"/>
						</li>
						<li style={Object.assign({}, styles.classifyStyle, this.state.moreShow && { visibility: "visible" })}>
							<ClassifySvgView classify="城市" link="http://www.qdaily.com/categories/5.html"/>
						</li>
						<li style={Object.assign({}, styles.classifyStyle, this.state.moreShow && { visibility: "visible" })}>
							<ClassifySvgView classify="游戏" link="http://www.qdaily.com/categories/54.html"/>
						</li>
					</ul>
				</div>
			</AppHeader>
		);
	}
}

const AppHeader = styled.div`
	width: 100%;
	position: fixed;
	z-index: 999;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #000;
	hr {
		color: #4d4d4d;
		border-left-style: solid;
		border-top-style: none;
		border-right-style: none;
		border-bottom-style: none;
	}
`;

const PageHeader = styled.div`
	min-width: 1190px;
  	max-width: 1400px;
  	display: flex;
  	justify-content: center;
  	align-items: center;
  	z-index: 1;
	height: ${props => props.extended ? '80px' : "60px"};
	transition: 0.25s all;
`;

const SectionLeft = styled.div`
	display: flex;
  	position: relative;
  	justify-content: center;
  	align-items: center;
  	width: 425px;
  	min-width: 425px;
`;

const ItemsMainCatesClearfix = styled.div`
	display: flex;
  	align-items: center;
  	text-align: center;
  	line-height: 40px;
`;

const ItemCates = styled.ul`
	display: flex;
  	align-items: center;
  	line-height: 100%;
  	height: 100%;
`;

const ItemCate = styled.li`
	list-style-type: none;
  	padding-left: 20px;
	float: left;
	a {
  		text-decoration: none;
  		color: #818181;
  		font-size: 14px;
  		white-space: nowrap;
	};
	a:hover {
		color: #ffc81f;
	}
`;

const Triangle = styled.div`
	width: 16px;
	height: 16px;
	margin-left: 2px;
	cursor: pointer;
	transform:${props => props.moreShow ? "rotate(180deg)" : "rotate(0deg)"};
    transition:transform 0.5s;
`;

const GoDownloadApp = styled.a`
	flex-shrink: 0;
  	padding: 20px;
  	line-height: 40px;
  	text-decoration: none;
  	color: #fff;
	  font-size: 14px;
	 &:hover {
  		color: #ffc81f;
	} 
`;

const GoSearch = styled.a`
	display: flex;
  	align-items: center;
  	line-height: 40px;
  	padding: 20px;
`;

const HeadUser = styled.div`
	display: flex;
  	align-items: center;
	justify-content: flex-start;
	a {
  		padding: 14px;
  		text-decoration: none;
  		color: #fff;
  		font-size: 14px;
	};
	a:hover {
  		color: #ffc81f;
	}
`;

const HeadAboutUs = styled.a`
	padding-left: 20px;
  	margin-right: 12px;
  	text-decoration: none;
  	color: #fff;
  	font-size: 14px;
  	&:hover{
		color: #ffc81f;
  	}
`;

const IconWeibo = styled.a`
	margin-right: 12px;
  	position: relative;
  	top: 5px;
`;

const IconWechat = styled.a`
	position: relative;
  	top: 5px;
`;

const styles = {
	hrHeightStyle: {
		height: '80px',
		transition: '0.25s all',
	},
	hrHeightEnabledStyle: {
		height: '60px',
	},
	logoVertical: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		marginRight: '35px',
		marginTop: '12px',
		backgroundColor: '#000',
		width: '90px',
		height: '120px',
	},
	logoPic: {
		width: '30px',
		paddingTop: '20px',
		transition: '0.25s all',
	},
	logoPicEnabled: {
		width: '14px',
		paddingTop: '0px',
		marginRight: '6px',
		transition: '0.25s all',
	},
	classifyStyle: {
		display: 'flex',
		flexDirection: 'column',
		float: 'left',
		padding: '0 10px',
		width: '190px',
		lineHeight: '32px',
		visibility: 'hidden',
	},
}