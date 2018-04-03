import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import DrawerSvgIcon from '../mobileImg/DrawerSvgIcon';
import HeadIcon from '../Head/headSvg/HeadIcon';
import MobileClassifyIcon from '../mobileImg/MobileClassifyIcon';
import ArrowIcon from '../mobileImg/ArrowIcon';

export default class MobileDrawerItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            extended: false,
        }
        this._onExtendClick = this._onExtendClick.bind(this);
    }

    _onExtendClick() {
        if (this.props.canExtend) {
            this.setState(prevState => (
                { extended: !prevState.extended }
            ));
            this.props.rotate();
        }
    }

    render() {
        let _color = this.props.isFirst ? "#ffc81f" : "hsla(0,0%,100%,.5)";
        let _height = "2.13333333rem";
        let iconNode;
        if (this.props.iconCategory === "logo" || this.props.iconCategory === "category") {
            iconNode = <DrawerSvgIcon iconCategory={this.props.iconCategory} width={25} height={25} fill={_color} />;
        } else if (this.props.iconCategory === "head_column" || this.props.iconCategory === "head_flask") {
            iconNode = <HeadIcon category={this.props.iconCategory} style={{ width: 23, height: 23, fill: _color }} />;
        } else {
            _color = "hsla(0,0%,100%,.4)";
            _height = "1.792rem";
            iconNode = <MobileClassifyIcon classify={this.props.description} />
        }
        let extendNode = this.props.canExtend ? <ArrowContainer up={this.state.extended}><ArrowIcon /></ArrowContainer> : null;
        return (
            <ItemCurrent _height={_height} show={this.props.show}>
                <ItemA href={this.props.aHref}  onClick={this._onExtendClick}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "25px", height: "25px" }}>
                        {iconNode}
                    </div>
                    <ItemText _color={_color}>
                        {this.props.description}
                    </ItemText>
                    {extendNode}
                </ItemA>
            </ItemCurrent>
        );
    }
}

const ItemCurrent = styled.li`
    padding-left: .85333333rem;
    width: 100%;
    list-style-type: none;
    height: ${props => props._height};
    display:${props => props.show ? "block" : "none"};
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
    margin-right:.08533333rem;
    color: ${props => props._color};
`;

const ArrowContainer = styled.div`
    transform:${props => props.up ? "rotate(180deg)" : "rotate(0)"};
    transition:transform 0.5s;
`;

MobileDrawerItem.propTypes = {
    iconCategory: PropTypes.string,
    spanColor: PropTypes.string,
    description: PropTypes.string,
    aHref: PropTypes.string,
    isFirst: PropTypes.bool,
    canExtend: PropTypes.bool,
    show:PropTypes.bool,
    rotate: PropTypes.func,
}

MobileDrawerItem.defaultProps = {
    aHref: "#null",
    iconCategory: "1",
    isFirst: false,
    canExtend: false,
    show:true,
}