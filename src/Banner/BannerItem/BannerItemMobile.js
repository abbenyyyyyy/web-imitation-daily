import React, { Component } from 'react';
import styled from 'styled-components';

import CategoryView from '../../mobileImg/CategoryView';

export default class BannerItemMobile extends Component {

    render() {
        let { count, item } = this.props;
        let width = 100 / count + '%';
        let background_size = this.props.itemWidth + "px " + this.props.itemHeight;
        return (
            <a href={'http://m.qdaily.com/mobile/articles/' + item.id + '.html'} target="_blank" rel="noopener noreferrer"
                className="banner-item" style={{ width: width, backgroundImage: `url(${item.imgUrl})`, backgroundSize: background_size, overflow: "hidden", }}>
                <div style={{ padding: "0 10px" }}>
                    <BannerItemTitle>
                        <h1 >{item.title}</h1>
                    </BannerItemTitle>
                    <CategoryView categoryName={item.categoryName} style={{ marginBottom: "5px", }} />
                </div>
            </a>
        );
    }
}

const BannerItemTitle = styled.div`
    margin-bottom:30px;
    h1{
        color: #fff;
        font-weight: 400;
        font-size: 23px;
        line-height: 26px;
        word-break:break-all;
    }
`;