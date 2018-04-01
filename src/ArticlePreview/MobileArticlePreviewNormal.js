import React, { Component } from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';

import PreviewInfoContainerNumber from './PreviewInfoContainerNumber';
import CategoryView from '../mobileImg/CategoryView';

export default class MobileArticlePreviewNormal extends Component {
    render() {
        let nowDate = new Date();
        let date = new Date(this.props.articlePreviewData.createTime);
        let printTime;
        if (date.getFullYear() === nowDate.getFullYear() && date.getMonth() === nowDate.getMonth() && date.getDate() === nowDate.getDate()) {
            //今天，计算几个小时前
            let dis = parseInt((nowDate.getTime() - date.getTime()) / 3600000, 10);
            printTime = dis === 0 ? '半小时前' : dis + ' 小时前';
        } else {
            printTime = (date.getMonth() + 1) + " 月 " + date.getDate() + ' 日';
        }
        let backgroundImageUrl = this.props.articlePreviewData.imgUrl + "/mobilecolumn320+210"
        return (
            <BaseA>
                <GridArticleHd style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: "7.9rem 5.25rem" }}>
                    <CategoryView categoryName={this.props.articlePreviewData.categoryName}
                        style={{ position: "absolute", bottom: "8px", left: "4px", }} />
                    <PreviewInfoContainerNumber praiseCount={this.props.articlePreviewData.praiseCount}
                        commentCount={this.props.articlePreviewData.commentCount}
                        style={{
                            position: "absolute", right: "4px", bottom: "8px",
                            height: "16px", lineHeight: "16px",
                            transform: " scale(.83333333)",
                        }}
                    />
                </GridArticleHd>
                <GridArticleBd>
                    <h1>{this.props.articlePreviewData.title}</h1>
                    <span>{printTime}</span>
                </GridArticleBd>
            </BaseA>
        );
    }
}

const BaseA = styled.a`
    width: 7.95rem;
    height: 9.75rem;
    margin-bottom:0.1rem;
    background-color: #fff;
    font-size: 12px;
`;

const GridArticleHd = styled.div`
    position:relative;
    height: 5.25rem;
`;

const GridArticleBd = styled.div`
    padding: 8px 8px 4px;
    h1{
        overflow: hidden;
        max-height: 3rem;
        height: 3rem;
        font-weight: 400;
        font-size: 16px;
        line-height: 1rem;
        word-break:break-all;
    };
    span{
        color: #b2b2b2;
        font-size: 12px;
    }
`;

MobileArticlePreviewNormal.propTypes = {
    articlePreviewData: PropTypes.shape({
        title: PropTypes.string,
        categoryName: PropTypes.string,
        praiseCount: PropTypes.number,
        commentCount: PropTypes.number,
        createTime: PropTypes.date,
        imgUrl: PropTypes.any,
    }),
}