import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Banner from './Banner/Banner';
import DefaultHeadSvg from './mobileImg/DefaultHeadSvg'
import MenuSvg from './mobileImg/MenuSvg';

export default class MobileApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showDrawer: false,
            bannerData: [],
        };
        this._onMenuClick = this._onMenuClick.bind(this);
    }

    _onMenuClick() {
        this.setState({ showDrawer: true });
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
                <Drawer>
                    <OpenPanel onClick={this._onMenuClick}>
                        <MenuSvg width={24} height={24} />
                    </OpenPanel>
                </Drawer>

                <PanelOverlay showDrawer={this.state.showDrawer} style={{ height: windowHeight }} />
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
    left: -12.544rem;
    top: 0;
    width: 12.50133333rem;
    background-color: rgba(30,30,30,.99);
    color: hsla(0,0%,100%,.3);
    height: 100%;
`;

const OpenPanel = styled.a`
    position:fixed;
    display:flex;
    align-items:center;
    justify-content:center;
    left:0.68266667rem;
    bottom:0.68266667rem;
    width: 1.70666667rem;
    height: 1.70666667rem;
    border-radius: 50%;
    background-color: rgba(0,0,0,.8);
    transition: transform .5s;
`;

const PanelOverlay = styled.div`
    position:fixed;
    top: 0;
    left: 0;
    display: block;
    z-index: 5999;
    display: ${props => props.showDrawer ? "inline" : "none"};
    /* background: #000; */
    opacity: ${props => props.showDrawer ? "1" : "0"}; 
    background: rgba(0,0,0,.4);
    width: 100%;
    transition:all 4s;
`;