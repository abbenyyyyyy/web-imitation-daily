import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// 投票与说说
export default class ArticlePreviewColumnZero extends Component {

    render() {
        let categoryIconUrl = this.props.articlePreviewData.categoryName === "投票" ? require("../img/vote_icon.png") : require("../img/mobs_icon.png");
        let hrefUrl = this.props.articlePreviewData.categoryName === "投票" ?
            'http://www.qdaily.com/papers/' + this.props.articlePreviewData.id + '.html' :
            'http://www.qdaily.com/mobs/' + this.props.articlePreviewData.id + '.html';
        return (
            <BaseA href={hrefUrl} target="_blank">
                <ImgPreviewContainer >
                    <ImgPreviewContainerImgBox>
                        <ImgPreviewContainerImg alt='' src={(this.props.articlePreviewData.imgUrl)} />
                    </ImgPreviewContainerImgBox>
                    <GridKeyPaperFt>
                        <TitleDescriptionBox>
                            <TitleBox>{this.props.articlePreviewData.title}</TitleBox>
                            <DescriptionBox>{this.props.articlePreviewData.description}</DescriptionBox>
                        </TitleDescriptionBox>
                    </GridKeyPaperFt>
                    <CountNew>
                        <img src={require("../img/join_icon.png")} alt="join" style={{ width: "70px", height: "52px", marginTop: "5px" }} />
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
    width: 670px;
    height: 320px;
    text-decoration: none;
    margin-bottom: 10px;
`;

const ImgPreviewContainer = styled.div`
    position:relative;
    width: 670px;
    height: 320px;
`;

const ImgPreviewContainerImgBox = ImgPreviewContainer.extend`
    overflow: hidden;
`;

const ImgPreviewContainerImg = styled.img`
    width: 670px;
    height: 320px;
    transition:0.6s ease-in-out;
    &:hover{
        transform: scale(1.1);
    }
`;

const GridKeyPaperFt = styled.div`
    position:relative;
    bottom:80px;
    height:80px;
    padding:0px 25px;
    background-color: rgba(0,0,0,.5);
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
    color: #ccc;
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
    margin-top: 12px;
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

ArticlePreviewColumnZero.propTypes = {
    articlePreviewData: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        categoryName: PropTypes.string,
        imgUrl: PropTypes.any,
    }),
}