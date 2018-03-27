import React, { Component } from 'react';
import styled from 'styled-components';

import HeadIcon from '../Head/headSvg/HeadIcon';

export default class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search_text: '',
        }
        this._handleChange = this._handleChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleChange(e) {
        this.setState({ search_text: e.target.value });
    }

    _handleSubmit(e) {
        e.preventDefault();
        if (!this.state.search_text.length) {
            return;
        }
        window.open("http://www.qdaily.com/searches?key=" + this.state.search_text);
        this.setState({ search_text: '', });
    }

    render() {
        return (
            <PageFooter>
                <PageFooterBd>
                    <ItemsCategories style={{ paddingLeft: "12px", }}>
                        <ItemCategory>
                            <a href="http://www.qdaily.com/" target="_blank" rel="noopener noreferrer">首页</a>
                        </ItemCategory>
                        <ItemCategory>
                            <a href="http://www.qdaily.com/tags/1068.html" target="_blank" rel="noopener noreferrer">长文章</a>
                        </ItemCategory>
                        <ItemCategory>
                            <a href="http://www.qdaily.com/tags/29.html" target="_blank" rel="noopener noreferrer">TOP 15</a>
                        </ItemCategory>
                        <ItemCategory>
                            <a href="http://www.qdaily.com/tags/1615.html" target="_blank" rel="noopener noreferrer">10 个图</a>
                        </ItemCategory>
                        <ItemCategory>
                            <a href="http://www.qdaily.com/labs.html" target="_blank" rel="noopener noreferrer">好奇心研究所</a>
                        </ItemCategory>
                        <ItemCategory>
                            <a href="http://www.qdaily.com/tags/12066.html" target="_blank" rel="noopener noreferrer">100个有想法的人</a>
                        </ItemCategory>
                        <ItemCategory>
                            <a href="http://www.qdaily.com/tags/7543.html" target="_blank" rel="noopener noreferrer">Medium</a>
                        </ItemCategory>
                    </ItemsCategories>
                    <ItemsCategories>
                        <ItemCategory>
                            <a href="http://www.qdaily.com/tags/7294.html" target="_blank" rel="noopener noreferrer">大公司头条</a>
                        </ItemCategory>
                        <ItemCategory>
                            <a href="http://www.qdaily.com/tags/7018.html" target="_blank" rel="noopener noreferrer">Q Business</a>
                        </ItemCategory>
                        <ItemCategory>
                            <a href="http://www.qdaily.com/tags/1288.html" target="_blank" rel="noopener noreferrer">今日应用</a>
                        </ItemCategory>
                        <ItemCategory>
                            <a href="http://www.qdaily.com/tags/1543.html" target="_blank" rel="noopener noreferrer">这世界</a>
                        </ItemCategory>
                        <ItemCategory>
                            <a href="http://www.qdaily.com/categories/12.html" target="_blank" rel="noopener noreferrer">Best on the web</a>
                        </ItemCategory>
                        <ItemCategory>
                            <a href="http://www.qdaily.com/categories/18.html" target="_blank" rel="noopener noreferrer">商业</a>
                        </ItemCategory>
                        <ItemCategory>
                            <a href="http://www.qdaily.com/categories/4.html" target="_blank" rel="noopener noreferrer">智能</a>
                        </ItemCategory>
                    </ItemsCategories>
                    <ItemsCategories>
                        <ItemCategory>
                            <a href="http://www.qdaily.com/categories/17.html" target="_blank" rel="noopener noreferrer">设计</a>
                        </ItemCategory>
                        <ItemCategory>
                            <a href="http://www.qdaily.com/categories/19.html" target="_blank" rel="noopener noreferrer">时尚</a>
                        </ItemCategory>
                        <ItemCategory>
                            <a href="http://www.qdaily.com/categories/3.html" target="_blank" rel="noopener noreferrer">娱乐</a>
                        </ItemCategory>
                        <ItemCategory>
                            <a href="http://www.qdaily.com/categories/5.html" target="_blank" rel="noopener noreferrer">城市</a>
                        </ItemCategory>
                        <ItemCategory>
                            <a href="http://www.qdaily.com/categories/54.html" target="_blank" rel="noopener noreferrer">游戏</a>
                        </ItemCategory>
                    </ItemsCategories>
                    <ItemsCategories>
                        <ItemCategory>
                            <a href="http://www.qdaily.com/aboutus.html" target="_blank" rel="noopener noreferrer">下载APP</a>
                        </ItemCategory>
                        <ItemCategory>
                            <a href="#footer" target="_blank" rel="noopener noreferrer">登录 / 注册</a>
                        </ItemCategory>
                        <ItemCategory>
                            <a href="http://www.qdaily.com/feed.xml" target="_blank" rel="noopener noreferrer">订阅</a>
                        </ItemCategory>
                        <ItemCategory>
                            <a href="https://weibo.com/qdaily" target="_blank" rel="noopener noreferrer">微博</a>
                        </ItemCategory>
                        <ItemCategory>
                            <a href="#footer" target="_blank" rel="noopener noreferrer">微信</a>
                        </ItemCategory>
                        <ItemCategory>
                            <a href="http://www.qdaily.com/policy.html" target="_blank" rel="noopener noreferrer">用户协议</a>
                        </ItemCategory>
                        <ItemCategory>
                            <a href="http://www.qdaily.com/policy.html#com-privacy" target="_blank" rel="noopener noreferrer">隐私政策</a>
                        </ItemCategory>
                    </ItemsCategories>
                    <ItemsCategories>
                        <ItemCategory>
                            <a href="http://www.qdaily.com/aboutus.html#aboutus-qdaily" target="_blank" rel="noopener noreferrer">关于好奇心</a>
                        </ItemCategory>
                        <ItemCategory>
                            <a href="http://www.qdaily.com/aboutus.html#aboutus-contact" target="_blank" rel="noopener noreferrer">联系我们</a>
                        </ItemCategory>
                        <ItemCategory>
                            <a href="http://www.qdaily.com/aboutus.html#aboutus-jobs" target="_blank" rel="noopener noreferrer">工作机会</a>
                        </ItemCategory>
                        <ItemCategory>
                            <a href="http://www.qdaily.com/policy.html#com-copyright" target="_blank" rel="noopener noreferrer">版权声明</a>
                        </ItemCategory>
                    </ItemsCategories>
                    <Search onSubmit={this._handleSubmit}>
                        <SearchInput id="new-todo" type="text" onChange={this._handleChange} value={this.state.search_text} />
                        <SearchIcon>
                            <HeadIcon category='head_search' style={{ width: 22, height: 22, fill: '#fff', }} />
                        </SearchIcon>
                    </Search>
                </PageFooterBd>
                <PageFooterFt>
                    <Copyright>
                        <img style={{ width: "20px", height: "40px" }}
                            src={require('../Head/headSvg/head-q.png')}
                            alt="footer-pic" />
                        <CopyrightInfo>
                            <CopyrightInfoText>2014 北京酷睿奥思科技发展有限公司</CopyrightInfoText>
                            <div style={{ display: "flex" }}>
                                <CopyrightInfoText>京ICP备14027177号-1</CopyrightInfoText>
                                <img src="http://www.beian.gov.cn/file/ghs.png" style={{ width: "16px", height: "16px", marginLeft: "10px" }} alt="gov"/>
                                <CopyrightInfoText style={{ marginLeft: "5px" }}>京公网安备 11010502030071号</CopyrightInfoText>
                            </div>
                        </CopyrightInfo>
                    </Copyright>
                </PageFooterFt>
            </PageFooter>
        )
    }
}

const PageFooter = styled.div`
    display:flex;
    flex-direction:column;
    height:323px;
    min-width: 1190px;
    width: 100%;
    background-color: #000;
`;

const PageFooterBd = styled.div`
    display:flex;
    margin: 0 auto;
    padding: 18px 0;
    width: 1010px;
`;

const ItemsCategories = styled.ul`
    display:flex;
    flex-direction:column;
    width: 150px;
    line-height: 30px;
`;

const ItemCategory = styled.li`
    list-style-type:none;
    text-align:left;
    height: 30px;
    color: #fff;
    line-height: 30px;
    a {
        color: hsla(0,0%,100%,.6);
        text-decoration:none;
    };
    a:hover {
		color: #ffc81f;
	}
`;

const Search = styled.form`
    display:flex;
    position:relative;
    justify-content:center;
    align-items:center;
    width: 245px;
    height: 36px;
`;

const SearchInput = styled.input`
    padding: 7px 10px;
    width: 245px;
    height: 20px;
    border: 1px solid #999;
    background-color: #000;
    color: hsla(0,0%,100%,.6)
`;

const SearchIcon = styled.div`
    position:absolute;
    right: 10px;
`;
const PageFooterFt = styled.div`
    background-color: #191919;
    flex:1;
    display:flex;
    align-content:center;
    justify-content:center;
`;

const Copyright = styled.div`
    display:flex;
    align-items:center;
`;

const CopyrightInfo = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    margin-left:20px;
`;

const CopyrightInfoText = styled.p`
    color: #fff;
    color: hsla(0,0%,100%,.8);
    line-height: 20px;
`;
