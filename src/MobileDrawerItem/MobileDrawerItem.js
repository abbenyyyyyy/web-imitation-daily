import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import DrawerSvgIcon from '../mobileImg/DrawerSvgIcon';
import HeadIcon from '../Head/headSvg/HeadIcon';
import MobileClassifyIcon from '../mobileImg/MobileClassifyIcon';

export default class MobileDrawerItem extends Component {
    render() {
        let svgFill = this.props.isFirst ? "#ffc81f" : "hsla(0,0%,100%,.5)";
        let iconNode;

        if (this.props.iconCategory === "logo" || this.props.iconCategory === "category") {
            iconNode = <DrawerSvgIcon iconCategory={this.props.iconCategory} width={25} height={25} fill={svgFill} />;
        } else {
            iconNode = <HeadIcon category={this.props.iconCategory} style={{ width: 23, height: 23, fill: svgFill }} />;
        }
        return (
            <ItemCurrent>
                <ItemA href={this.props.aHref} >
                    {iconNode}
                    <ItemText isFirst={this.props.isFirst}>
                        {this.props.description}
                    </ItemText>
                </ItemA>
            </ItemCurrent>
        );
    }
}

const ItemCurrent = styled.li`
    padding-left: .85333333rem;
    width: 100%;
    list-style-type: none;
    height: 2.13333333rem;
    color: hsla(0,0%,100%,.5);
    font-size: .768rem;
    line-height: .768rem;
`;

const ItemA = styled.a`
    width:100%;
    height:100%;
    text-decoration: none;
    display: flex;
    align-items:center;
`;

const ItemText = styled.span`
    padding-left: 1.706rem;
    color: ${props => props.isFirst ? "#ffc81f" : "hsla(0,0%,100%,.5)"};
`;

MobileDrawerItem.propTypes = {
    iconCategory: PropTypes.string,
    spanColor: PropTypes.string,
    description: PropTypes.string,
    aHref: PropTypes.string,
    isFirst: PropTypes.bool,
}

MobileDrawerItem.defaultProps = {
    aHref: "#null",
    isFirst: false,
}