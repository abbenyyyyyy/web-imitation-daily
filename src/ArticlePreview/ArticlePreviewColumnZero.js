import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import JoinSvg from './JoinSvg';

// 投票与说说
export default class ArticlePreviewColumnZero extends Component {

    render() {
        let categoryIconUrl = this.props.articlePreviewData.categoryName === "投票" ? require("../img/vote_icon.png") : require("../img/mobs_icon.png");
        let hrefUrl = this.props.articlePreviewData.categoryName === "投票" ?
            'http://www.qdaily.com/papers/' + this.props.articlePreviewData.id + '.html' :
            'http://www.qdaily.com/mobs/' + this.props.articlePreviewData.id + '.html';
        return (
            <BaseA href={hrefUrl} target="_blank" rel="noopener noreferrer" normalSize={this.props.normalSize}>
                <ImgPreviewContainer normalSize={this.props.normalSize}>
                    <ImgPreviewContainerImgBox normalSize={this.props.normalSize}>
                        <ImgPreviewContainerImg alt='' src={(this.props.articlePreviewData.imgUrl)} normalSize={this.props.normalSize} />
                    </ImgPreviewContainerImgBox>
                    <GridKeyPaperFt normalSize={this.props.normalSize}>
                        <TitleDescriptionBox>
                            <TitleBox>{this.props.articlePreviewData.title}</TitleBox>
                            <DescriptionBox normalSize={this.props.normalSize}>{this.props.articlePreviewData.description}</DescriptionBox>
                        </TitleDescriptionBox>
                    </GridKeyPaperFt>
                    <CountNew>
                        <JoinSvg width={70} height={64} fill="#ffc81f" />
                        <JoinCountText>NEW</JoinCountText>
                    </CountNew>
                    <CategoryBox>
                        <img src={categoryIconUrl} alt="category" style={{ width: "60px", height: "60px" }} />
                    </CategoryBox>
                </ImgPreviewContainer>
            </BaseA>
        )
    }
}

const BaseA = styled.a`
    width: ${props => props.normalSize ? "500px" : "670px"};
    height: ${props => props.normalSize ? "280px" : "320px"};
    text-decoration: none;
    margin-bottom: 10px;
`;

const ImgPreviewContainer = styled.div`
    position:relative;
    width: ${props => props.normalSize ? "500px" : "670px"};
    height: ${props => props.normalSize ? "280px" : "320px"};
`;

const ImgPreviewContainerImgBox = styled(ImgPreviewContainer)`
    overflow: hidden;
    width: ${props => props.normalSize ? "500px" : "670px"};
    height: ${props => props.normalSize ? "280px" : "320px"};
`;

const ImgPreviewContainerImg = styled.img`
    width: ${props => props.normalSize ? "500px" : "670px"};
    height: ${props => props.normalSize ? "280px" : "320px"};
    transition:0.6s ease-in-out;
    &:hover{
        transform: scale(1.1);
    }
`;

const GridKeyPaperFt = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 3;
    width: 100%;
    box-sizing:border-box;
    display:block;
    overflow: hidden;
    padding: ${props => props.normalSize ? "0 20px 12px" : "12px 25px"};
    background-color: ${props => props.normalSize ? "rgba(0,0,0,0)" : "rgba(0,0,0,.5)"};
`;

const TitleDescriptionBox = styled.div`
    display:flex;
    justify-content:center;
    overflow: hidden;
    height: 100%;
    text-align: left;
    overflow:hidden;
    word-wrap:break-word;
    word-break: break-all;
    text-overflow:ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
`;

const TitleBox = styled.h3`
    color: #fff;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
`;

const DescriptionBox = styled.p`
    margin: 8px 0 0;
    color: ${props => props.normalSize ? "#d2d2d2" : "#ccc"};
    font-size: 14px;
    line-height: 22px;
`;

const CountNew = styled.div`
    position: absolute;
    top: 0;
    right: 25px;
    z-index: 1;
    width: 86px;
    height: 106px;
    background-color: rgba(0,0,0,.6);
    text-align: center;
`;

const JoinCountText = styled.span`
    display:block;
    margin-top: 5px;
    color: #ffc81f;
    font-weight: 700;
    font-size: 20px;
`;

const CategoryBox = styled.p`
    position: absolute;
    top: 15px;
    left: 25px;
    z-index: 1;
    border-radius: 50%;
`;

ArticlePreviewColumnZero.defaultProps = {
    normalSize: true,
}

ArticlePreviewColumnZero.propTypes = {
    articlePreviewData: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        categoryName: PropTypes.string,
        imgUrl: PropTypes.any,
    }),
    normalSize: PropTypes.bool,
}