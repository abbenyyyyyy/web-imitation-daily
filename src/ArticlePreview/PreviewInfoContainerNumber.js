import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ArticlePreviewIcon from './ArticlePreviewIcon';

// 留言图标、留言数与点赞图标、点赞数的组合组件
export default class PreviewInfoContainerNumber extends Component {
    render() {
        let imgPreviewInfoContainerNumber = null;
        if (this.props.commentCount > 0 && this.props.praiseCount > 0) {
            imgPreviewInfoContainerNumber = <ViewContainer style={this.props.style} color={this.props.svgFill}>
                <ArticlePreviewIcon category='message' width={this.props.svgWidth} height={this.props.svgWidth} fill={this.props.svgFill} />
                <span style={{ marginLeft: this.props.textMarginLeft, marginRight: this.props.textMarginRight, }}>{this.props.commentCount}</span>
                <ArticlePreviewIcon category='like' width={this.props.svgWidth} height={this.props.svgWidth} fill={this.props.svgFill} />
                <span style={{ marginLeft: this.props.textMarginLeft, }}>{this.props.praiseCount}</span>
            </ViewContainer>;
        } else if (this.props.commentCount > 0) {
            imgPreviewInfoContainerNumber = <ViewContainer style={this.props.style} color={this.props.svgFill}>
                <ArticlePreviewIcon category='message' width={this.props.svgWidth} height={this.props.svgWidth} fill={this.props.svgFill} />
                <span style={{ marginLeft: this.props.textMarginLeft, }}>{this.props.commentCount}</span>
            </ViewContainer>;
        } else if (this.props.praiseCount > 0) {
            imgPreviewInfoContainerNumber = <ViewContainer style={this.props.style} color={this.props.svgFill}>
                <ArticlePreviewIcon category='like' width={this.props.svgWidth} height={this.props.svgWidth} fill={this.props.svgFill} />
                <span style={{ marginLeft: this.props.textMarginLeft, }}>{this.props.praiseCount}</span>
            </ViewContainer>;
        }
        return (
            <React.Fragment>
                {imgPreviewInfoContainerNumber}
            </React.Fragment>
        );
    }
}

const ViewContainer = styled.div`
    color: ${props => props.color};
    display: flex;
    align-items:center;
`;

PreviewInfoContainerNumber.propTypes = {
    praiseCount: PropTypes.number,
    commentCount: PropTypes.number,
    textMarginLeft: PropTypes.number,
    textMarginRight: PropTypes.number,
    svgFill: PropTypes.string,
    svgWidth: PropTypes.number,
}

PreviewInfoContainerNumber.defaultProps = {
    praiseCount: 0,
    commentCount: 0,
    svgFill: "#fff",
    textMarginLeft: 2,
    textMarginRight: 8,
    svgWidth: 12,
}