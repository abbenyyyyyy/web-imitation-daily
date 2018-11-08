import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ClassifyIcon from '../img/ClassifyIcon';
import PreviewInfoContainerNumber from './PreviewInfoContainerNumber';

export default class ArticlePreviewColumnNormal extends Component {

    render() {
        let nowDate = new Date();
        let date = new Date(this.props.articlePreviewData.createTime.replace(/\-/g, "/"));
        let printTime;
        if (date.getFullYear() === nowDate.getFullYear() && date.getMonth() === nowDate.getMonth() && date.getDate() === nowDate.getDate()) {
            //今天，计算几个小时前
            let dis = parseInt((nowDate.getTime() - date.getTime()) / 3600000, 10);
            printTime = dis === 0 ? '半小时前' : dis + '小时前';
        } else {
            printTime = (date.getMonth() + 1) + "月" + date.getDate() + '日';
        }
        let imgRealUrlSuffix = this.props.articlePreviewData.cssColumn === 1 ? "/columnone245+185" : "/columntwo500+185";
        //构建新闻标题显示元素
        let previewTitleNode = null;
        if (this.props.articlePreviewData.cssColumn === 1) {
            previewTitleNode = <ImgPreviewTitle columnCount={this.props.articlePreviewData.cssColumn} >
                <h3>{this.props.articlePreviewData.title}</h3>
            </ImgPreviewTitle>;
        } else {
            if (this.props.articlePreviewData.title.length > 23) {
                let title_first = this.props.articlePreviewData.title.substring(0, 23);
                let title_second = this.props.articlePreviewData.title.substring(23);
                previewTitleNode = <ImgPreviewTitle style={{ paddingTop: "5px" }} columnCount={this.props.articlePreviewData.cssColumn} >
                    <h3>
                        <span style={{ marginBottom: "5px" }}>{title_first}</span>
                        <span>{title_second}</span>
                    </h3>
                </ImgPreviewTitle>;
            } else {
                previewTitleNode = <ImgPreviewTitle columnCount={this.props.articlePreviewData.cssColumn} >
                    <h3><span>{this.props.articlePreviewData.title}</span></h3>
                </ImgPreviewTitle>;
            }
        }
        return (
            <BaseA columnCount={this.props.articlePreviewData.cssColumn} href={'http://www.qdaily.com/articles/' + this.props.articlePreviewData.id + '.html'}
                target="_blank" rel="noopener noreferrer" >
                <ImgPreviewContainer columnCount={this.props.articlePreviewData.cssColumn} >
                    <ImgPreviewContainerImgBox columnCount={this.props.articlePreviewData.cssColumn}>
                        <ImgPreviewContainerImg alt='' columnCount={this.props.articlePreviewData.cssColumn}
                            src={(this.props.articlePreviewData.imgUrl + imgRealUrlSuffix)} />
                    </ImgPreviewContainerImgBox>
                    <ImgPreviewClassifyIconContainer >
                        <ClassifyIcon classify={this.props.articlePreviewData.categoryName} width={22} height={22} />
                        <span>{this.props.articlePreviewData.categoryName}</span>
                    </ImgPreviewClassifyIconContainer>
                </ImgPreviewContainer>
                {previewTitleNode}
                <ImgPreviewInfoContainer columnCount={this.props.articlePreviewData.cssColumn} >
                    <span>{printTime}</span>
                    <PreviewInfoContainerNumber praiseCount={this.props.articlePreviewData.praiseCount}
                        commentCount={this.props.articlePreviewData.commentCount}
                        svgFill="#d1d1d1" svgWidth={10} textMarginLeft={5} textMarginRight={10}
                    />
                </ImgPreviewInfoContainer>
            </BaseA>
        );
    }
}

const BaseA = styled.a`
    position:relative;
    display: flex;
    flex-direction: column;
    width: ${props => props.columnCount === 1 ? "245px" : "500px"};
    height: 280px;
    background-color:#fff;
    text-decoration: none;
    margin-bottom: 10px;
`;

const ImgPreviewContainer = styled.div`
    width: ${props => props.columnCount === 1 ? "245px" : "500px"};
    height: 185px;
`;

const ImgPreviewContainerImgBox = styled(ImgPreviewContainer)`
    overflow: hidden;
`;

const ImgPreviewContainerImg = styled.img`
    width: ${props => props.columnCount === 1 ? "245px" : "500px"};
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
        font-weight: 400;
        color: #0f1419;
        text-align: left;
        overflow:hidden;
        word-wrap:break-word;
        word-break: break-all;
        text-overflow:ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        line-height: ${props => props.columnCount === 1 ? "22px" : "25px"};
        font-size: ${props => props.columnCount === 1 ? "16px" : "20px"};
        span{
            display: inline-block;
            color: #fff;
            background-color: #000;
            padding: 0 10px;
        }
    }
`;

const ImgPreviewInfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: ${props => props.columnCount === 1 ? "225px" : "480px"};
    color: #666;
    font-size: 12px;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0 10px 15px;
`;

ArticlePreviewColumnNormal.propTypes = {
    articlePreviewData: PropTypes.shape({
        title: PropTypes.string,
        categoryName: PropTypes.string,
        praiseCount: PropTypes.number,
        commentCount: PropTypes.number,
        createTime: PropTypes.date,
        imgUrl: PropTypes.any,
    }),
}