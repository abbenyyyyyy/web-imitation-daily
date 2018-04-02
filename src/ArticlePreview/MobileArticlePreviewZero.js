import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import JoinSvg from './JoinSvg';

export default class MobileArticlePreviewZero extends Component {

    render() {
        let item = this.props.articlePreviewData;
        let background_size = this.props.itemWidth + "px 8rem";
        let background_url = item.imgUrl + "/mobilecolumn640+390";
        let categoryIconUrl = this.props.articlePreviewData.categoryName === "投票" ? require("../img/vote_icon.png") : require("../img/mobs_icon.png");
        let hrefUrl = this.props.articlePreviewData.categoryName === "投票" ?
            'http://m.qdaily.com/mobile/papers/' + this.props.articlePreviewData.id + '.html' :
            'http://m.qdaily.com/mobile/mobs/' + this.props.articlePreviewData.id + '.html';
        return (
            <BaseA href={hrefUrl} target="_blank" rel="noopener noreferrer">
                <ImgContainer style={{ backgroundImage: `url(${background_url})`, backgroundSize: background_size, overflow: "hidden", }}>
                    <CountNew>
                        <JoinSvg width="3rem" height="2rem" fill="#ffc81f" />
                        <JoinCountText>NEW</JoinCountText>
                    </CountNew>
                    <CategoryBox>
                        <img src={categoryIconUrl} alt="category" style={{ width: "44px", height: "44px" }} />
                    </CategoryBox>
                </ImgContainer>
                <GridPaperFt>
                    <TitleDescription>
                        <h1>{this.props.articlePreviewData.title}</h1>
                        <p>{this.props.articlePreviewData.description}</p>
                    </TitleDescription>
                </GridPaperFt>
            </BaseA>
        );
    }
}

const BaseA = styled.a`
    position:relative;
    width: 100%;
    height:100%;
    margin-bottom:0.1rem;
    text-decoration:none;
    color: #0f1419;
`;

const ImgContainer = styled.div`
    width: 100%;
    height:8rem;
    position:relative;
`;

const CountNew = styled.div`
    position: absolute;
    top: 0;
    right: 15px;
    width: 2.95rem;
    height: 3.65rem;
    background-color: rgba(0,0,0,.7);
    text-align: center;
`;

const JoinCountText = styled.span`
    display:block;
    margin-top: .25rem;
    color: #ffc81f;
    font-weight: 700;
    font-size: .9rem;
    line-height: .8rem;
`;

const CategoryBox = styled.p`
    position: absolute;
    display: inline-block;
    bottom: .5rem;
    left: .75rem;
    width: 44px;
    height:44px;
`;

const GridPaperFt = styled.div`

`;

const TitleDescription = styled.div`
    padding: 6px 15px 12px;
    h1{
        font-size: .75rem;
        word-break:break-all;
    }
    p{
        margin-top: 5px;
        font-size: 14px;
        line-height: 18px;
        opacity: .6;
        word-break:break-all;
    }
`;

MobileArticlePreviewZero.propTypes = {
    articlePreviewData: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        categoryName: PropTypes.string,
        praiseCount: PropTypes.number,
        commentCount: PropTypes.number,
        imgUrl: PropTypes.any,
    }),
}