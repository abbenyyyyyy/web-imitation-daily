import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CategoryView from '../mobileImg/CategoryView';

export default class MobileArticlePreviewTwo extends Component {

    render() {
        let item = this.props.articlePreviewData;
        let background_size = this.props.itemWidth + "px " + this.props.itemHeight;
        return (
            <BaseA href={'http://m.qdaily.com/mobile/articles/' + item.id + '.html'} target="_blank" rel="noopener noreferrer"
                style={{ backgroundImage: `url(${item.imgUrl})`, backgroundSize: background_size, overflow: "hidden", }}>
                <div style={{ padding: "0 10px" }}>
                    <BannerItemTitle>
                        <h1 >{item.title}</h1>
                    </BannerItemTitle>
                    <CategoryView categoryName={item.categoryName} style={{ marginBottom: "5px", }} />
                </div>
            </BaseA>
        );
    }
}

const BaseA = styled.a`
    width: 100%;
    height:9.75rem;
`;

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

MobileArticlePreviewTwo.propTypes = {
    articlePreviewData: PropTypes.shape({
        title: PropTypes.string,
        categoryName: PropTypes.string,
        praiseCount: PropTypes.number,
        commentCount: PropTypes.number,
        createTime: PropTypes.date,
        imgUrl: PropTypes.any,
    }),
}