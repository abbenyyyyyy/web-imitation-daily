import React, { Component } from 'react';
import styled from 'styled-components';

export default class BannerItemMobile extends Component {

    render() {
        let { count, item } = this.props;
        let width = 100 / count + '%';
        let background_size = this.props.itemWidth + "px " + this.props.itemHeight + "px";
        return (
            <a href={'http://m.qdaily.com/mobile/articles/' + item.id + '.html'} target="_blank" rel="noopener noreferrer"
                className="banner-item" style={{ width: width, backgroundImage: `url(${item.imgUrl})`, backgroundSize: background_size, overflow: "hidden", }}>
                <div>
                    <BannerItemTitle>
                        <h1 >{item.title}</h1>
                    </BannerItemTitle>
                    <BannerItemCategory>
                        <span>{item.categoryName}</span>
                    </BannerItemCategory>
                </div>
            </a>
        );
    }
}

const BannerItemTitle = styled.div`
    margin: 0 10px 30px 10px;
    h1{
        color: #fff;
        font-weight: 400;
        font-size: 23px;
        line-height: 26px;
        word-break:break-all;
    }
`;

const BannerItemCategory = styled.div`
    margin:0 10px 5px 10px;
    padding: 0 5px;
    height: 16px;
    background-color: #000;
    background-color: rgba(0,0,0,.4);
    line-height: 16px;
    span{
        margin-left: 3px;
        padding: 2px 0;
        color: #ffc81f;
        font-size: 12px;
        line-height: 12px;
    }
`;