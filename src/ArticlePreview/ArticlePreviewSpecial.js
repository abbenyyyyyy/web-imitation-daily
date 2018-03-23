import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

//专题栏目
export default class ArticlePreviewSpecial extends Component {
    render() {
        return (
            <BaseA href={"http://www.qdaily.com/special_columns/" + this.props.articlePreviewData.id + ".html"}
                target="_blank" rel="noopener noreferrer">
                <img alt='' src={(this.props.articlePreviewData.imgUrl)} style={{ width: "330px", height: "320px", }} />
            </BaseA>
        )
    }
}

const BaseA = styled.a`
    display: flex;
    width: 330px;
    height: 320px;
    text-decoration: none;
    margin-bottom: 10px;
`;

ArticlePreviewSpecial.propTypes = {
    articlePreviewData: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        categoryName: PropTypes.string,
        imgUrl: PropTypes.any,
    }),
}