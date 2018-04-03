import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ClassifyIcon from '../img/ClassifyIcon';

export default class ClassifySvgView extends Component {

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
            <a style={{ display: "flex", alignItems: "center", width: "70px", textDecoration: "none", zIndex: 2, }}
                href={this.props.link} target="_blank" rel="noopener noreferrer"
                onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
                <ClassifyIcon width={22} height={22} classify={this.props.classify} fill={this.state._color} />
                <span style={{
                    paddingLeft: "5px", fontSize: "14px", lineHeight: "16px", color: this.state._color,
                    whiteSpace: "nowrap", wordBreak: "keep-all",
                }}>
                    {this.props.classify}
                </span>
            </a>
        );
    }
}

ClassifySvgView.propType = {
    classify: PropTypes.string,
    link: PropTypes.string,
}

ClassifySvgView.defaultProps = {
    style: {
        color: '#fff'
    }
}