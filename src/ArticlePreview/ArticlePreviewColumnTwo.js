import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ClassifyIcon from '../img/ClassifyIcon';
import ArticlePreviewIcon from './ArticlePreviewIcon';

export default class ArticlePreviewColumnTwo extends Component {
    render() {
        let nowDate = new Date();
        let date = new Date(this.props.articlePreviewData.createTime);
        let printTime;
        if (date.getFullYear() === nowDate.getFullYear() && date.getMonth() === nowDate.getMonth() && date.getDate() === nowDate.getDate()) {
            //今天，计算几个小时前
            let dis = parseInt((nowDate.getTime() - date.getTime()) / 3600000, 10);
            printTime = dis === 0 ? '半小时前' : dis + '小时前';
        } else {
            printTime = (date.getMonth() + 1) + "月" + date.getDate() + '日';
        }

        let imgPreviewInfoContainerNumber = null;
        if (this.props.articlePreviewData.commentCount > 0 && this.props.articlePreviewData.praiseCount > 0) {
            imgPreviewInfoContainerNumber = <div>
                <ArticlePreviewIcon category='message' width={10} height={10} />
                <span style={{ paddingLeft: 5, paddingRight: 10, }}>{this.props.articlePreviewData.commentCount}</span>
                <ArticlePreviewIcon category='like' width={10} height={10} />
                <span style={{ paddingLeft: 5, }}>{this.props.articlePreviewData.praiseCount}</span>
            </div>;
        } else if (this.props.articlePreviewData.commentCount > 0) {
            imgPreviewInfoContainerNumber = <div>
                <ArticlePreviewIcon category='message' width={10} height={10} />
                <span style={{ paddingLeft: 5, }}>{this.props.articlePreviewData.commentCount}</span>
            </div>;
        } else if (this.props.articlePreviewData.praiseCount > 0) {
            imgPreviewInfoContainerNumber = <div>
                <ArticlePreviewIcon category='like' width={10} height={10} />
                <span style={{ paddingLeft: 5, }}>{this.props.articlePreviewData.praiseCount}</span>
            </div>;
        }
        return (
            <BaseA href={'http://www.qdaily.com/articles/' + this.props.articlePreviewData.id + '.html'} target="_blank" >
                <ImgPreviewContainer >
                    <ImgPreviewContainerImgBox>
                        <ImgPreviewContainerImg alt='' src={(this.props.articlePreviewData.imgUrl)} />
                    </ImgPreviewContainerImgBox>
                    <ImgPreviewClassifyIconContainer >
                        <ClassifyIcon classify={this.props.articlePreviewData.categoryName} width={22} height={22} />
                        <span>{this.props.articlePreviewData.categoryName}</span>
                    </ImgPreviewClassifyIconContainer>
                </ImgPreviewContainer>
                <ImgPreviewTitle ><h3>{this.props.articlePreviewData.title}</h3></ImgPreviewTitle>
                <ImgPreviewInfoContainer >
                    <span>{printTime}</span>
                    {imgPreviewInfoContainerNumber}
                </ImgPreviewInfoContainer>
            </BaseA>
        );
    }
}

const BaseA = styled.a`
position:relative;
    display: flex;
    flex-direction: column;
    width: 500px;
    height: 280px;
    background-color:#fff;
    text-decoration: none;
    margin-bottom: 10px;
`;

const ImgPreviewContainer = styled.div`
    width: 500px;
    height: 185px;
`;

const ImgPreviewContainerImgBox = ImgPreviewContainer.extend`
    overflow: hidden;
`;

const ImgPreviewContainerImg = styled.img`
    width: 500px;
    height: 185px;
    transition:0.6s ease-in-out;
    &:hover{
        transform: scale(1.1);
    }
`;

const ImgPreviewClassifyIconContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    bottom: 175px;
    left: 10px;
    line-height: 22px;
    span {
        color: #fff;
        font-size: 12px;
        padding-left: 5px;
    }
`;

const ImgPreviewTitle = styled.div`
    padding: 12px 10px 0;
    h3{
        color: #fff;
        background-color: #000;
        max-height: 44px;
        font-weight: 400;
        height: 25px;
        font-size: 20px;
        line-height: 25px;
        text-align: left;
        overflow:hidden;
        word-wrap:break-word;
        word-break: break-all;
        text-overflow:ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
    }
`;

const ImgPreviewInfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* margin: 10px 10px; */
    width: 480px;
    color: #666;
    font-size: 12px;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0 10px 15px;
`;

ArticlePreviewColumnTwo.propTypes = {
    articlePreviewData: PropTypes.shape({
        title: PropTypes.string,
        categoryName: PropTypes.string,
        praiseCount: PropTypes.number,
        commentCount: PropTypes.number,
        createTime: PropTypes.date,
        imgUrl: PropTypes.any,
    }),
}