import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { injectGlobal } from 'styled-components';

import Head from './Head/Head.js';
import Banner from './Banner/Banner';
import ArticlePreviewColumnNormal from './ArticlePreview/ArticlePreviewColumnNormal';
import ArticlePreviewColumnZero from './ArticlePreview/ArticlePreviewColumnZero';
import ArticlePreviewSpecial from './ArticlePreview/ArticlePreviewSpecial';
import ArticlePreviewNull from './ArticlePreview/ArticlePreviewNull';
import Footer from './Footer/Footer';
import Loading from './loading/Loading';

injectGlobal`
    body{
        margin: 0;
        padding: 0;
        font-size: 14px;
        font-family: Arial, "Hiragino Sans GB", 冬青黑, "Microsoft YaHei", 微软雅黑, SimSun, 宋体, Helvetica, Tahoma, "Arial sans-serif";
        word-break: keep-all; 
    }
`;

export default class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			headExtended: true,
			showToTop: false,
			toTopscrooling: false,
			loadTime: 0,//加载数据次数，只有<2时才自动加载，>=2时不再自动加载
			lastId: -1,//请求下一页数据的参数
			showLoading: false,
			hasMore: true,
			bannerData: [],
			homepageData: [],
		};
		this._scroolHandler = this._scroolHandler.bind(this);
		this._onToTopClick = this._onToTopClick.bind(this);
		this._onLoadMoreClick = this._onLoadMoreClick.bind(this);
		this._fetchMoreHomePageData = this._fetchMoreHomePageData.bind(this);
		axios.defaults.baseURL = "http://127.0.0.1:8080";
	}

	_scroolHandler() {
		let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
		if (scrollTop >= 60) {
			if (this.state.headExtended) {
				this.setState({ headExtended: false });
			}
		} else {
			if (!this.state.headExtended) {
				this.setState({ headExtended: true });
			}
		}
		if (scrollTop < 920) {
			//隐藏toTop
			if (this.state.showToTop) {
				this.setState({ showToTop: false });
			}
		} else {
			let loadMoreNodeBottom = this.loadMoreNode.getBoundingClientRect().bottom;
			let windowHeight = document.documentElement.clientHeight;//屏幕高度
			if ((loadMoreNodeBottom < windowHeight) && (!this.state.showLoading) && (this.state.loadTime < 2) && this.state.hasMore) {
				this._fetchMoreHomePageData();
			}
			//显示toTop
			if (!this.state.showToTop) {
				if (!this.state.toTopscrooling) {
					this.setState({ showToTop: true });
				}
			}
		}
	}

	_onLoadMoreClick() {
		this.setState({ loadTime: 0 });
		this._fetchMoreHomePageData();
	}

	_onToTopClick() {
		this.setState({ toTopscrooling: true, showToTop: false });
		var timer = setInterval(() => {
			var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
			currentPosition -= 20;
			if (currentPosition > 0) {
				window.scrollTo(0, currentPosition);
			} else {
				window.scrollTo(0, 0);
				clearInterval(timer);
				timer = null;
				this.setState({ toTopscrooling: false });
			}
		}, 1);
	}

	_fetchMoreHomePageData() {
		this.setState({ showLoading: true });
		axios.get('/homes/articlemore?lastId=' + this.state.lastId)
			.then(responseNextPage => {
				if (responseNextPage.data.status === 200) {
					this.setState(prevState => ({
						homepageData: prevState.homepageData.concat(responseNextPage.data.data.homepageData),
						lastId: responseNextPage.data.data.last_key,
						hasMore: responseNextPage.data.data.has_more,
						loadTime: prevState.loadTime + 1,
						showLoading: false,
					}));
				} else {
					//error
				}
			});
	}

	componentDidMount() {
		window.addEventListener("scroll", this._scroolHandler);
		function getBanner() {
			return axios.get('/homes/banner');
		}

		function getHomepage() {
			return axios.get('/homes/homepage');
		}
		axios.all([getBanner(), getHomepage()])
			.then(axios.spread((responseBanner, responseHomepage) => {
				if (responseBanner.data.status === 200 && responseHomepage.data.status === 200) {
					this.setState({
						bannerData: responseBanner.data.data,
						homepageData: responseHomepage.data.data.homepageData,
						lastId: responseHomepage.data.data.last_key,
					});
				} else {
					//error
				}
			}));
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this._scroolHandler);
	}

	render() {
		let loginBackgroundImage = require('./img/missing_login_bg.png');
		let articlesNodes = [];
		let row_count = 0;//每一行已有的格数，需要控制 == 4
		let nextSelect = -1;//后面已被添加到页面的所在位置
		for (let i = 0; i < this.state.homepageData.length; i++) {
			let item = this.state.homepageData[i];
			switch (item.cssColumn) {
				case -1:
					articlesNodes.push(<ArticlePreviewSpecial articlePreviewData={item} key={item.id} />);
					break;
				case 0:
					articlesNodes.push(<ArticlePreviewColumnZero articlePreviewData={item} key={item.id} normalSize={false} />);
					break;
				default:
					if (i !== nextSelect) {
						let future_row_count = row_count + item.cssColumn;
						let addToViewNode = (item.categoryName === "投票" || item.categoryName === "我说") ?
							<ArticlePreviewColumnZero articlePreviewData={item} key={item.id} /> : <ArticlePreviewColumnNormal articlePreviewData={item} key={item.id} />;
						if (future_row_count <= 4) {
							row_count = future_row_count < 4 ? future_row_count : 0;
							articlesNodes.push(addToViewNode);
						} else {
							//这一行的格数将要>4,为控制页面美观，寻找这个数据后面的最近一个cssColumn===1的数据显示，如果没有，就用一个空白的代替
							let nextIndex = i + 1;
							let find_flag = true;
							while (nextIndex < this.state.homepageData.length && find_flag) {
								if (this.state.homepageData[nextIndex].cssColumn === 1) {
									nextSelect = nextIndex;
									row_count = 2;
									find_flag = false;
									articlesNodes.push(<ArticlePreviewColumnNormal articlePreviewData={this.state.homepageData[nextIndex]}
										key={this.state.homepageData[nextIndex].id} />);
									articlesNodes.push(addToViewNode);
								} else {
									nextIndex++;
								}
							}
							if (find_flag) {
								//遍历完都没能找到cssColumn === 1的，只能自己虚构
								row_count = 2;
								articlesNodes.push(<ArticlePreviewNull key={i} />);
								articlesNodes.push(addToViewNode);
							}
						}
					}
					break;
			}
		}
		//为使最后一行美观，用空白元素填补
		if (row_count !== 0) {
			for (let j = 0; j < 4 - row_count; j++) {
				articlesNodes.push(<ArticlePreviewNull key={j} />);
			}
		}

		let loadMore = null;
		if (this.state.hasMore) {
			loadMore = this.state.loadTime === 2 ?
				<ShowMoreButton href="#loadmore" onClick={this._onLoadMoreClick} >加载更多</ShowMoreButton> :
				<Loading type="bubbles" color="#ffc81f" />;
		} else {
			loadMore = <p style={{ fontSize: "18px", color: "#bbb" }}>没有更多啦</p>;
		}

		return (
			<AppContainer >
				<Head headExtended={this.state.headExtended} />
				<PageContent >
					<PackeryContainer >
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
							<PackeryLoginContainer >
								<PackeryLoginBd style={{ backgroundImage: `url(${loginBackgroundImage})` }}>
									<img src={require('./img/canvas.png')} alt="" />
									<PackeryLoginAvatar >
										<img src={require('./img/missing_face.png')} width="64" height="64" alt="" />
									</PackeryLoginAvatar>
								</PackeryLoginBd>
								<PackeryLoginFt >
									<a href="#login">登录</a>
									<p>登录查看你的好奇心指数</p>
								</PackeryLoginFt>
							</PackeryLoginContainer>
							<PackeryDowload href="http://www.qdaily.com/aboutus.html" target="_blank" rel="noopener noreferrer">
								<img src={require('./img/download-banner-x640.png')} width="245" height="160" alt="" />
							</PackeryDowload>
						</div>
					</PackeryContainer>
					<PackeryContainerArticles >
						{articlesNodes}
						<div style={{
							display: "flex", justifyContent: "center", alignItems: "center", height: "100px", width: "100%",
							lineHeight: "100px",
						}} ref={node => this.loadMoreNode = node}>
							{loadMore}
						</div>
					</PackeryContainerArticles>
				</PageContent>
				<Footer />
				<TotopBd href="#totop" style={{ visibility: this.state.showToTop ? "visible" : "hidden", }} onClick={this._onToTopClick}>
					<img src={require('./img/totop.png')} style={{ width: '60px', height: '74px', visibility: this.state.showToTop ? "visible" : "hidden", }} alt="totop" />
				</TotopBd>
			</AppContainer>
		);
	}
}

const AppContainer = styled.div` 
  background: #eee;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const PageContent = styled.div`
  margin: 0 auto;
  width: 1190px;
  padding: 90px 90px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PackeryContainer = styled.div`
  display: flex;
  margin: 0 auto;
`;

const PackeryLoginContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 245px;
  height: 280px;
  margin-left: 10px;
`;

const PackeryLoginBd = styled.div`
  height: 215px;
  width: 245px;
  position: absolute;
  top: 90px;
`;

const PackeryLoginAvatar = styled.a`
  width: 64px;
  height: 64px;
  margin-left: 10px;
  position: absolute;
  top: 70px;
  left: 79px;
`;

const PackeryLoginFt = styled.div`
  display: flex;
  height: 65px;
  flex-direction: column;
  p{
    padding: 8px 0;
    font-size: 14px;
    color: #848484;
    background-color: #fff;
    text-align: center;
  };
  a{
    width: 100%;
    height: 30px;
    line-height: 30px;
    background-color: #ffc81f;
    color: #000;
    text-decoration: none;
    font-size: 14px;
    text-align: center;
  }
`;

const PackeryDowload = styled.a`
  margin: 5px 0 0 10px;
  img {
    margin: 5px 0 0;
  }
`;

const PackeryContainerArticles = styled.div`
    width:1010px;//23寸
    margin-top:5px;
    display: flex;
	justify-content:space-between;
	flex-wrap:wrap;
	align-content:space-between;
`;

const ShowMoreButton = styled.a`
	width:72px;
	height: 20px;
	text-decoration:none;
	background-color: #ffc81f;
	padding: 15px 50px;
    color: #fff;
    font-size: 18px;
    line-height: 18px;
`;

const TotopBd = styled.a`
	position: fixed;
	bottom:40px;
	right:40px;
  	width: 60px;
  	height:74px;
`;