import React, { Component } from 'react';

import BannerArrowsIcon from './BannerArrowsIcon'

export default class BannerArrows extends Component {

  handleArrowClick(option) {
    this.props.turn(option);
  }

  render() {
    return (
      <div style={{ display: 'flex', visibility: this.props.arrowsVisibility }}>
        <span
          className="banner-arrow banner-arrow-left" style={{ marginLeft: '20px' }}
          onClick={this.handleArrowClick.bind(this, -1)}>
          <BannerArrowsIcon orientation="left" />
        </span>
        <span
          className="banner-arrow banner-arrow-right" style={{ marginRight: '20px' }}
          onClick={this.handleArrowClick.bind(this, 1)}>
          <BannerArrowsIcon orientation="right" />
        </span>
      </div>
    );
  }
}