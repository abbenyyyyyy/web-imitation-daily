import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default class ArticlePreviewColumnZero extends Component {

    render() {
        return (
            <BaseA href={'http://www.qdaily.com/papers/' + this.props.articlePreviewData.id + '.html'} target="_blank">
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
                </ImgPreviewContainer>
            </BaseA>
        )
    }
}

const BaseA = styled.a`
    width: 670px;
    height: 320px;
    background-color:#fff;
    text-decoration: none;
    margin-bottom: 10px;
`;

const ImgPreviewContainer = styled.div`
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
    height:80px;
    padding:12px 25px;
    background-color: rgba(0,0,0,.5);
`;

const TitleDescriptionBox = styled.div`
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

ArticlePreviewColumnZero.propTypes = {
    articlePreviewData: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        categoryName: PropTypes.string,
        praiseCount: PropTypes.number,
        commentCount: PropTypes.number,
        createTime: PropTypes.date,
        imgUrl: PropTypes.any,
    }),
}