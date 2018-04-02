import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CategoryView from '../mobileImg/CategoryView';
import PreviewInfoContainerNumber from './PreviewInfoContainerNumber';

export default class MobileArticlePreviewTwo extends Component {

    render() {
        let item = this.props.articlePreviewData;
        let background_size = this.props.itemWidth + "px " + this.props.itemHeight;
        let background_url = item.imgUrl + "/mobilecolumn640+390";
        return (
            <BaseA href={'http://m.qdaily.com/mobile/articles/' + item.id + '.html'} target="_blank" rel="noopener noreferrer"
                style={{ backgroundImage: `url(${background_url})`, backgroundSize: background_size, overflow: "hidden", }}>
                <ArticleBdContainer>
                    <CategoryView categoryName={item.categoryName} />
                    <BannerItemTitle>{item.title}</BannerItemTitle>
                    <PreviewInfoContainerNumber praiseCount={this.props.articlePreviewData.praiseCount}
                        commentCount={this.props.articlePreviewData.commentCount}
                        style={{
                            position: "relative", right: "2px", marginTop: "2px",
                            height: "16px", lineHeight: "16px",
                            transform: " scale(.83333333)",
                        }}
                    />
                </ArticleBdContainer>
            </BaseA>
        );
    }
}

const BaseA = styled.a`
    position:relative;
    width: 100%;
    height:9.75rem;
    margin-bottom:0.1rem;
`;

const ArticleBdContainer = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0 10px 12px;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
`;

const BannerItemTitle = styled.h1`
    margin: 5px 0 0;
    color: #fff;
    font-weight: 400;
    font-size: 23px;
    line-height: 28px;
    word-break:break-all;
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