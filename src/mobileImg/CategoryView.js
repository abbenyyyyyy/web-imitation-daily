import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import MobileClassifyIcon from './MobileClassifyIcon';

// 一个类型Icon与类型文字的组合组件
export default class CategoryView extends Component {
    render() {
        return (
            <CategoryContainer style={this.props.style}>
                <MobileClassifyIcon classify={this.props.categoryName} fill="#ffc81f" height={12} width={12} />
                <span>{this.props.categoryName}</span>
            </CategoryContainer>
        );
    }
}

const CategoryContainer = styled.div`
    padding: 0 5px;
    height: 16px;
    width: 39px;
    background-color: #000;
    background-color: rgba(0,0,0,.4);
    line-height: 16px;
    display: flex;
    align-items:center;
    span{
        margin-left: 3px;
        padding: 2px 0;
        color: #ffc81f;
        font-size: 12px;
        line-height: 12px;
    }
`;

CategoryView.propTypes = {
    categoryName: PropTypes.string,
}

CategoryView.defaultProps = {
    style: {
        position: "static",
    }
}
