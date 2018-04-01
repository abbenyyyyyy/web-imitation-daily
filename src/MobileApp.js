import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { injectGlobal } from 'styled-components';

import Banner from './Banner/Banner';
import DefaultHeadSvg from './mobileImg/DefaultHeadSvg'
import OpenPanelIcon from './mobileImg/OpenPanelIcon';
import MobileDrawerItem from './MobileDrawerItem/MobileDrawerItem';
import HeadIcon from './Head/headSvg/HeadIcon';
import MobileArticlePreviewNormal from './ArticlePreview/MobileArticlePreviewNormal';
import BannerItemMobile from './Banner/BannerItem/BannerItemMobile';

injectGlobal`
    body{
        margin: 0;
        padding: 0;
        background-color: #eee;
        color: #363636;
        font-size: 14px;
        font-family: Arial,STHeiti,华文黑体,Microsoft YaHei,微软雅黑,SimSun,宋体,Helvetica,Tahoma,Arial sans-serif;
        line-height: 1.5;
        word-break: keep-all; 
    }
`;

export default class MobileApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showDrawer: false,
            extended: false,
            lastId: -1,
            bannerData: [],
            homepageData: [],
        };
        this._onMenuClick = this._onMenuClick.bind(this);
        this._onExtendClick = this._onExtendClick.bind(this);
    }

    _onMenuClick() {
        this.setState(prevState => (
            { showDrawer: !prevState.showDrawer }
        ));
    }

    _onExtendClick() {
        this.setState(prevState => (
            { extended: !prevState.extended }
        ));
    }

    componentDidMount() {
        function getBanner() {
            return axios.get('/homes/banner');
        }

        function getHomepage() {
            return axios.get('/homes/mobile/articlemore?lastId=0');
        }
        axios.all([getBanner(), getHomepage()])
            .then(axios.spread((responseBanner, responseHomepage) => {
                if (responseBanner.data.status === 200 && responseHomepage.data.status === 200) {
                    this.setState({
                        bannerData: responseBanner.data.data,
                        // homepageData: responseHomepage.data.data.homepageData,
                        lastId: responseHomepage.data.data.last_key,
                        homepageData: MoData,
                    });
                } else {
                    //error
                }
            }));
    }

    render() {
        let windowWidth = document.documentElement.clientWidth;
        let windowHeight = document.documentElement.clientHeight;
        let bannerHeight = "9rem";
        let articlesNodes = this.state.homepageData.map((item) => {
            switch (item.cssColumn) {
                case 1:
                    return <MobileArticlePreviewNormal articlePreviewData={item} key={item.id} />;
                default:
                    if (item.categoryName === "投票" || item.categoryName === "我说") {
                        return null;
                    } else {
                        return <BannerItemMobile item={item} key={item.id} itemWidth={windowWidth} itemHeight="9.75rem" />;
                    }
            }
        });
        return (
            <MobileAppContainer >
                <MobileHead>
                    <a href="#reolad" style={{ display: "flex", }}>
                        <img src={require("./mobileImg/mobilelogo.png")} style={{ width: "83.48px", height: "38px" }} alt="mobilelogo" />
                    </a>
                    <HeadRight href="#login" >
                        <DefaultHeadSvg width={20} height={20} />
                        <p>登录</p>
                    </HeadRight>
                </MobileHead>
                <Banner bannerWidth={windowWidth}
                    bannerHeight={bannerHeight}
                    items={this.state.bannerData}
                    speed={1.2}
                    delay={3}
                    isMobile={true}
                    pause={true}
                    autoplay={true}
                    dots={true}
                    arrows={false}
                />
                <ArticlePreviewContainer>
                    {articlesNodes}
                </ArticlePreviewContainer>

                <Drawer showDrawer={this.state.showDrawer}>
                    <SidebarPanel>
                        <img src={require('./img/canvas.png')} alt="" />
                        <PackeryLoginAvatar href="#login">
                            <img src={require('./mobileImg/missingFaceMobile.png')} alt="" />
                        </PackeryLoginAvatar>
                    </SidebarPanel>
                    <NameDescription>
                        <NameA href="#login">登录</NameA>
                        <NameDescriptionInfo />
                        <NameDescriptionHr />
                    </NameDescription>
                    <IscrollContainer>
                        <ItemsCategories>
                            <MobileDrawerItem iconCategory="logo" description="首页" isFirst={true} />
                            <MobileDrawerItem iconCategory="category" description="新闻分类" canExtend={true}
                                rotate={this._onExtendClick} />
                            <ItemsCategoriesCanExtend show={this.state.extended}>
                                <MobileDrawerItem description="长文章" show={this.state.extended} />
                                <MobileDrawerItem description=" 10 个图 " show={this.state.extended} />
                                <MobileDrawerItem description=" Top 15 " show={this.state.extended} />
                                <MobileDrawerItem description="商业" show={this.state.extended} />
                                <MobileDrawerItem description="智能" show={this.state.extended} />
                                <MobileDrawerItem description="设计" show={this.state.extended} />
                                <MobileDrawerItem description="时尚" show={this.state.extended} />
                                <MobileDrawerItem description="娱乐" show={this.state.extended} />
                                <MobileDrawerItem description="城市" show={this.state.extended} />
                                <MobileDrawerItem description="游戏" show={this.state.extended} />
                            </ItemsCategoriesCanExtend>
                            <MobileDrawerItem iconCategory="head_column" description="栏目中心" />
                            <MobileDrawerItem iconCategory="head_flask" description="生活研究所" />
                        </ItemsCategories>
                    </IscrollContainer>
                    <SidebarPanelFt>
                        <NameDescriptionHr style={{ marginBottom: ".64rem", }} />
                        <SidebarPanelFtBox>
                            <DrawerSearch href="#moblieSearch">
                                <MockInput>搜索
                            <HeadIcon category="head_search" style={{ width: 16, height: 16, fill: "hsla(0,0%,100%,.3)" }} />
                                </MockInput>
                            </DrawerSearch>
                            <AboutUs href="#aboutUs">关于我们</AboutUs>
                        </SidebarPanelFtBox>
                    </SidebarPanelFt>
                    <OpenPanel showDrawer={this.state.showDrawer} onClick={this._onMenuClick}>
                        <SvgBox showDrawer={this.state.showDrawer}>
                            <OpenPanelIcon width={24} height={24} iconCategory="menu" />
                        </SvgBox>
                        <SvgBox showDrawer={!this.state.showDrawer}>
                            <OpenPanelIcon width={24} height={24} iconCategory="rightArrow" />
                        </SvgBox>
                    </OpenPanel>
                </Drawer>
                <PanelOverlay showDrawer={this.state.showDrawer} style={{ height: windowHeight }} onClick={this._onMenuClick} />
            </MobileAppContainer>
        );
    }
}

const MobileAppContainer = styled.div`
    width: 100%;
    height: 100%;
`;

const MobileHead = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding: 0px 15px;
    height: 44px;
    background-color: #000;
    line-height: 44px;
    margin-bottom:0.1rem;
`;

const HeadRight = styled.a`
    display:flex;
    align-items:center;
    text-decoration:none;
    color: #fff;
    font-size: 16px;
    line-height: 38px;
    p{
        margin-left: 4px;
    }
`;

const ArticlePreviewContainer = styled.div`
    width: 100%;
    margin-top:0.1rem;
    display: flex;
	justify-content:space-between;
	flex-wrap:wrap;
	align-content:space-between;
`;

const Drawer = styled.div`
    position:fixed;
    z-index:6000;
    left: ${props => props.showDrawer ? "0" : "-12.544rem"};
    top: 0;
    width: 12.50133333rem;
    background-color: rgba(30,30,30,.99);
    color: hsla(0,0%,100%,.3);
    height: 100%;
    transition:left 0.4s;
    display:flex;
    flex-direction:column;
`;

const SidebarPanel = styled.div`
    width: 100%;
    flex: 0 0 auto;
    img{
        display: block;
        width: 9.514rem;
        height: 9.088rem;
        margin:0 auto;
    }
`;

const NameDescription = styled.div`
    flex: 0 0 auto;
    margin: 0 1.28rem;
    padding-bottom: .42666667rem;
`;

const NameA = styled.a`
    display: block;
    overflow: hidden;
    margin-bottom:.128rem;
    width: 100%;
    height: 1.28rem;
    color: #ffc81f;
    white-space: nowrap;
    font-size: .59733333rem;
    text-decoration:none;
    text-align:center;
`;

const NameDescriptionInfo = styled.span`
    display: inline-block;
    overflow: hidden;
    height: 1.152rem;
    color: hsla(0,0%,100%,.3);
    font-size: .512rem;
    line-height: .512rem;
`;

const NameDescriptionHr = styled.hr`
    width: 100%;
    height: 1px;
    background-color: hsla(0,0%,100%,.3);
    border-style: none;
`;

const PackeryLoginAvatar = styled.a`
    position: absolute;
    width: 1.7066rem;
    height: 1.7066rem;
    top: 3.66933333rem;
    left: 50%;
    margin-left: -.85333333rem;
    img{
        width: 1.7066rem;
        height: 1.7066rem;
    }
`;

const IscrollContainer = styled.div`
    padding: 0 1.28rem;
    flex: 1;
    overflow-y: auto;
    max-height: 19.25973333333333rem;
`;

const ItemsCategories = styled.ul`
    display:flex;
    flex-direction:column;
`;

const ItemsCategoriesCanExtend = ItemsCategories.extend`
    height: ${props => props.show ? "17.92rem" : "0"};
    visibility:${props => props.show ? "visible" : "hidden"};
    transition:all 0.4s;
`;

const SidebarPanelFt = styled.div`
    position: relative;
    margin: 0 1.28rem;
    padding: 1.06666667rem 0 .93866667rem;
    flex: 0 0 auto;
    display:flex;
    flex-direction:column;
    line-height:130px;
`;

const SidebarPanelFtBox = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
`;

const DrawerSearch = styled.a`
    display: inline-block;
    text-decoration:none;
    color: hsla(0,0%,100%,.3);
    width: 5.67466667rem;
`;

const MockInput = styled.div`
    background-color:#333;
    padding: 0 .512rem;
    height: 1.19466667rem;
    border-radius: 1.19466667rem;
    font-size: 12px;
    line-height: 1.19466667rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
`;

const AboutUs = styled.a`
    display: inline-block;
    width: 3.41333334rem;
    border: 1px solid hsla(0,0%,100%,.3);
    color: hsla(0,0%,100%,.3);
    text-decoration:none;
    height: 1.10933rem;
    line-height:1.10933rem;
    border-radius: 1.10933rem;
    font-size: 12px;
    text-align:center;
`;

const OpenPanel = styled.a`
    position:fixed;
    display:flex;
    align-items:center;
    justify-content:center;
    left:${props => props.showDrawer ? "13.184rem" : "0.68266667rem"};
    bottom:0.68266667rem;
    width: 1.70666667rem;
    height: 1.70666667rem;
    border-radius: 50%;
    background-color: rgba(0,0,0,.8);
    transform:${props => props.showDrawer ? "rotate(180deg)" : "rotate(0deg)"};
    transition:left 0.4s,transform 0.5s;
`;

const SvgBox = styled.div`
    position:absolute;
    display:flex;
    align-items:center;
    justify-content:center;
    opacity: ${props => props.showDrawer ? "0" : "1"}; 
    transition:opacity 0.4s;
`;

const PanelOverlay = styled.div`
    position:fixed;
    top: 0;
    left: 0;
    display: block;
    z-index: 5999;
    opacity: ${props => props.showDrawer ? "1" : "0"}; 
    visibility:${props => props.showDrawer ? "visible" : "hidden"};
    background: rgba(0,0,0,.4);
    width: 100%;
    transition:opacity 0.5s;
`;

const MoData = [
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
    },
    {
        "id": 51066,
        "title": "印度之后，亚马逊在东南亚和阿里巴巴争夺电商市场",
        "description": "亚马逊计划进驻越南。",
        "praiseCount": 3,
        "commentCount": 1,
        "createTime": "2018-03-15 07:07:49",
        "imgUrl": "http://imitation-daily-img-1252489855.picgz.myqcloud.com/51066.gif",
        "cssColumn": 1,
        "appview": "http://app3.qdaily.com/app3/articles/51066.html",
        "categoryName": "智能"
    },
    // {
    //     "id": 51110,
    //     "title": "东京动画奖竞赛单元揭晓结果，大奖是台湾的《幸福路上》",
    //     "description": "《幸福路上》拿了长片部门的大奖，短片部门获奖的是《负空间》。",
    //     "praiseCount": 20,
    //     "commentCount": 2,
    //     "createTime": "2018-03-15 07:05:16",
    //     "imgUrl": "http://imitation-daily-img-1252489855.picgz.myqcloud.com/51110.jpg",
    //     "cssColumn": 1,
    //     "appview": "http://app3.qdaily.com/app3/articles/51110.html",
    //     "categoryName": "娱乐"
    // },
    // {
    //     "id": 51112,
    //     "title": "顺丰公布上市后首份年报，此外它还在拓展新业务",
    //     "description": "业绩远超 “四通一达”，可又出现了京东物流这个新对手。",
    //     "praiseCount": 10,
    //     "commentCount": 1,
    //     "createTime": "2018-03-15 07:03:16",
    //     "imgUrl": "http://imitation-daily-img-1252489855.picgz.myqcloud.com/51112.jpg",
    //     "cssColumn": 1,
    //     "appview": "http://app3.qdaily.com/app3/articles/51112.html",
    //     "categoryName": "智能"
    // },
    // {
    //     "id": 51103,
    //     "title": "2 万名科学家签署“给人类的第二次警告”，但可能没什么用",
    //     "description": "第一次警告发布于 25 年前，截止目前，上面的大多数问题都没有进展",
    //     "praiseCount": 17,
    //     "commentCount": 11,
    //     "createTime": "2018-03-15 07:02:07",
    //     "imgUrl": "http://imitation-daily-img-1252489855.picgz.myqcloud.com/51103.jpg",
    //     "cssColumn": 1,
    //     "appview": "http://app3.qdaily.com/app3/articles/51103.html",
    //     "categoryName": "城市"
    // },
    // {
    //     "id": 51119,
    //     "title": "创造力说不定还真是天生的，它与大脑的关系被拍下来了",
    //     "description": "不过这也并不代表后天的努力就是徒劳的",
    //     "praiseCount": 16,
    //     "commentCount": 0,
    //     "createTime": "2018-03-15 06:59:09",
    //     "imgUrl": "http://imitation-daily-img-1252489855.picgz.myqcloud.com/51119.jpg",
    //     "cssColumn": 1,
    //     "appview": "http://app3.qdaily.com/app3/articles/51119.html",
    //     "categoryName": "智能"
    // },
    // {
    //     "id": 51104,
    //     "title": "雀巢日本要把 Kitkat 引入中国，这是它第四次“回归”",
    //     "description": "诶，会有日本最新推出的粉红色巧克力吗？",
    //     "praiseCount": 4,
    //     "commentCount": 4,
    //     "createTime": "2018-03-15 06:58:42",
    //     "imgUrl": "http://imitation-daily-img-1252489855.picgz.myqcloud.com/51104.jpg",
    //     "cssColumn": 1,
    //     "appview": "http://app3.qdaily.com/app3/articles/51104.html",
    //     "categoryName": "商业"
    // },
    // {
    //     "id": 51117,
    //     "title": "上海最值得一看的设计展开幕，这里有一些推荐",
    //     "description": "“设计上海”展览将会持续到本周六（3 月 17 日）。",
    //     "praiseCount": 17,
    //     "commentCount": 0,
    //     "createTime": "2018-03-15 06:58:26",
    //     "imgUrl": "http://imitation-daily-img-1252489855.picgz.myqcloud.com/51117.jpg",
    //     "cssColumn": 1,
    //     "appview": "http://app3.qdaily.com/app3/articles/51117.html",
    //     "categoryName": "设计"
    // },
    // {
    //     "id": 51118,
    //     "title": "香港苏富比春拍将有更多国际艺术家作品，藏家口味变了",
    //     "description": "信息的迅速传播以及亚洲藏家的年轻化，是其中的两个原因。",
    //     "praiseCount": 2,
    //     "commentCount": 0,
    //     "createTime": "2018-03-15 06:58:14",
    //     "imgUrl": "http://imitation-daily-img-1252489855.picgz.myqcloud.com/51118.jpg",
    //     "cssColumn": 1,
    //     "appview": "http://app3.qdaily.com/app3/articles/51118.html",
    //     "categoryName": "城市"
    // },
    // {
    //     "id": 2224,
    //     "title": "你觉得，人们在处理日常冲突时都容易走上哪些歪路？",
    //     "description": "就没有“撕破脸”和“当包子”之外的解决问题方式么？（题图来自：视觉中国）",
    //     "praiseCount": 0,
    //     "commentCount": 4,
    //     "createTime": "2018-03-15 01:00:00",
    //     "imgUrl": "http://imitation-daily-img-1252489855.picgz.myqcloud.com/2224.jpg",
    //     "cssColumn": 2,
    //     "appview": "http://app3.qdaily.com/app3/articles/2224.html",
    //     "categoryName": "投票"
    // },
    // {
    //     "id": 50894,
    //     "title": "自拍照有可能不如真人好看，以及，人前自拍会更糟",
    //     "description": "别人发自拍更多的是在博关注刷存在感，有作秀成分。但自己发自拍，就是很真诚地在社交了。",
    //     "praiseCount": 46,
    //     "commentCount": 20,
    //     "createTime": "2018-03-14 17:46:48",
    //     "imgUrl": "http://imitation-daily-img-1252489855.picgz.myqcloud.com/50894.gif",
    //     "cssColumn": 1,
    //     "appview": "http://app3.qdaily.com/app3/articles/50894.html",
    //     "categoryName": "娱乐"
    // },
    // {
    //     "id": 51096,
    //     "title": "中投卖掉所持黑石全部股份，中国公司从后者那里买了不少美国地产",
    //     "description": "监管越来越严了。",
    //     "praiseCount": 29,
    //     "commentCount": 5,
    //     "createTime": "2018-03-14 15:55:14",
    //     "imgUrl": "http://imitation-daily-img-1252489855.picgz.myqcloud.com/51096.jpg",
    //     "cssColumn": 1,
    //     "appview": "http://app3.qdaily.com/app3/articles/51096.html",
    //     "categoryName": "商业"
    // },
    // {
    //     "id": 51097,
    //     "title": "耐克欲推动内马尔转会皇马？阿迪最重要的足球资源被瞄上了",
    //     "description": "网友调侃：我想在淘宝购物，推动恒大买内马尔",
    //     "praiseCount": 20,
    //     "commentCount": 8,
    //     "createTime": "2018-03-14 15:41:38",
    //     "imgUrl": "http://imitation-daily-img-1252489855.picgz.myqcloud.com/51097.jpeg",
    //     "cssColumn": 1,
    //     "appview": "http://app3.qdaily.com/app3/articles/51097.html",
    //     "categoryName": "商业"
    // },
    // {
    //     "id": 51098,
    //     "title": "《神奇动物2》发布预告，裘德·洛版邓布利多现身",
    //     "description": "电影将于 11 月 16 日于北美上映，目前尚未宣布内地档期。",
    //     "praiseCount": 46,
    //     "commentCount": 9,
    //     "createTime": "2018-03-14 14:57:53",
    //     "imgUrl": "http://imitation-daily-img-1252489855.picgz.myqcloud.com/51098.png",
    //     "cssColumn": 1,
    //     "appview": "http://app3.qdaily.com/app3/articles/51098.html",
    //     "categoryName": "娱乐"
    // },
    // {
    //     "id": 51092,
    //     "title": "XPrize 基金会发起了新挑战，造一台可以在 10 万米外遥控的机器人",
    //     "description": "还要求这个机器人可以将听觉、视觉、触觉等信息传输过去。",
    //     "praiseCount": 16,
    //     "commentCount": 2,
    //     "createTime": "2018-03-14 14:16:55",
    //     "imgUrl": "http://imitation-daily-img-1252489855.picgz.myqcloud.com/51092.jpg",
    //     "cssColumn": 1,
    //     "appview": "http://app3.qdaily.com/app3/articles/51092.html",
    //     "categoryName": "智能"
    // },
    // {
    //     "id": 51059,
    //     "title": "这部话题黑暗喜剧，被视作是 2018 版的《逃出绝命镇》",
    //     "description": "《抱歉打扰》在对现实的影射和讽刺上还要更宽广一些。",
    //     "praiseCount": 38,
    //     "commentCount": 4,
    //     "createTime": "2018-03-14 13:18:55",
    //     "imgUrl": "http://imitation-daily-img-1252489855.picgz.myqcloud.com/51059.jpg",
    //     "cssColumn": 1,
    //     "appview": "http://app3.qdaily.com/app3/articles/51059.html",
    //     "categoryName": "娱乐"
    // },
    // {
    //     "id": 51094,
    //     "title": "挪威最大的三文鱼生产商要来中国开店，三文鱼饺子要尝尝吗？",
    //     "description": "健康的快餐？",
    //     "praiseCount": 67,
    //     "commentCount": 24,
    //     "createTime": "2018-03-14 12:41:35",
    //     "imgUrl": "http://imitation-daily-img-1252489855.picgz.myqcloud.com/51094.jpg",
    //     "cssColumn": 1,
    //     "appview": "http://app3.qdaily.com/app3/articles/51094.html",
    //     "categoryName": "商业"
    // },
    // {
    //     "id": 51088,
    //     "title": "今日娱乐：东京动画大奖公布，恐怖片《中邪》清明定档",
    //     "description": "我们为你挑选了今天最重要的娱乐新闻。",
    //     "praiseCount": 46,
    //     "commentCount": 25,
    //     "createTime": "2018-03-14 11:11:31",
    //     "imgUrl": "http://imitation-daily-img-1252489855.picgz.myqcloud.com/51088.jpg",
    //     "cssColumn": 1,
    //     "appview": "http://app3.qdaily.com/app3/articles/51088.html",
    //     "categoryName": "娱乐"
    // },
    // {
    //     "id": 2223,
    //     "title": "你的工作 or 行业里有哪些其他人可能不了解的压力？",
    //     "description": "就，每次听到“你的工作看起来挺轻松的嘛。”这种话都想说“你行你上啊。”（题图来自：视觉中国）",
    //     "praiseCount": 0,
    //     "commentCount": 0,
    //     "createTime": "2018-03-14 11:00:00",
    //     "imgUrl": "http://imitation-daily-img-1252489855.picgz.myqcloud.com/2223.jpg",
    //     "cssColumn": 2,
    //     "appview": "http://app3.qdaily.com/app3/articles/2223.html",
    //     "categoryName": "我说"
    // },
    // {
    //     "id": 51087,
    //     "title": "看图：著名物理学家霍金去世，以及其他重要的事",
    //     "description": "每天我们都会摘取重要的新闻图片。PS：我们认为这个世界的重要性不应该有绝对的等级，重点是看得更多，探索更多。",
    //     "praiseCount": 76,
    //     "commentCount": 24,
    //     "createTime": "2018-03-14 09:45:12",
    //     "imgUrl": "http://imitation-daily-img-1252489855.picgz.myqcloud.com/51087.jpg",
    //     "cssColumn": 1,
    //     "appview": "http://app3.qdaily.com/app3/articles/51087.html",
    //     "categoryName": "城市"
    // },
    {
        "id": 51268,
        "title": "对话艺术史学家弗雷德·克莱纳：如何解读艺术，关于它的学习在当今社会为何依然重要？",
        "description": "《加德纳艺术通史》是第一部打破“西方”界限的全球艺术史，它从何而来，为何重要？",
        "createTime": "2018-03-20 07:19:10",
        "imgUrl": "http://imitation-daily-img-1252489855.picgz.myqcloud.com/51268.jpg",
        "commentCount": 6,
        "praiseCount": 84,
        "appview": "http://app3.qdaily.com/app3/articles/51268.html",
        "cssColumn": 2,
        "categoryName": "城市"
    },
];