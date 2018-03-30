import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { injectGlobal } from 'styled-components';

import Banner from './Banner/Banner';
import DefaultHeadSvg from './mobileImg/DefaultHeadSvg'
import OpenPanelIcon from './mobileImg/OpenPanelIcon';
import MobileDrawerItem from './MobileDrawerItem/MobileDrawerItem';
import HeadIcon from './Head/headSvg/HeadIcon';

injectGlobal`
    body{
        margin: 0;
        padding: 0;
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
            bannerData: [],
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
        axios.get("/homes/banner")
            .then(responseBanner => {
                if (responseBanner.data.status === 200) {
                    this.setState({
                        bannerData: responseBanner.data.data,
                    });
                } else {
                    //error
                }
            });
    }

    render() {
        let windowWidth = document.documentElement.clientWidth;
        let windowHeight = document.documentElement.clientHeight;
        let bannerHeight = windowWidth / 1.777;
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