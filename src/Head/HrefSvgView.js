import React, { Component } from 'react';
import PropTypes from 'prop-types';

import HeadIcon from './headSvg/HeadIcon';

export default class HrefSvgView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _color: typeof (this.props.style.color) === 'undefined' ? '#fff' : this.props.style.color,
        }
    }

    handleMouseOut = () => {
        this.setState({ _color: typeof (this.props.style.color) === 'undefined' ? '#fff' : this.props.style.color });
    }

    handleMouseOver = () => {
        this.setState({ _color: '#ffc81f' });
    }

    render() {
        return (
            <a
                style={{
                    display: "flex", alignItems: 'center', fontSize: '16px', textDecoration: 'none', color: this.state._color,
                    marginLeft: this.props.style.marginLeft
                }}
                href={this.props.link} target="_blank" rel="noopener noreferrer"
                onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
                <HeadIcon category={this.props.category} style={{
                    width: this.props.headIconWidth, height: this.props.headIconHeight,
                    fill: this.state._color, marginRight: this.props.headIconMarginRight
                }} />
                {this.props.text}
            </a>
        );
    }
}

HrefSvgView.protoType = {
    categoty: PropTypes.string,
    text: PropTypes.string,
    headIconWidth: PropTypes.number,
    headIconHeight: PropTypes.number,
    headIconMarginRight: PropTypes.number,
    link: PropTypes.string,
}

HrefSvgView.defaultProps = {
    style: {
        color: '#fff'
    }
}