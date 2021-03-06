import React, { Component } from 'react';

import './Banner.css';

import BannerArrows from './BannerArrows/BannerArrows';
import BannerDots from './BannerDots/BannerDots';
import BannerItem from './BannerItem/BannerItem';
import BannerItemMobile from './BannerItem/BannerItemMobile';

export default class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nowLocal: 0,
      arrowsVisibility: 'hidden',
    };
  }

  // 向前向后多少
  turn(n) {
    var _n = this.state.nowLocal + n;
    if (_n < 0) {
      _n = _n + this.props.items.length;
    }
    if (_n >= this.props.items.length) {
      _n = _n - this.props.items.length;
    }
    this.setState({ nowLocal: _n });
  }

  // 开始自动轮播
  goPlay() {
    this.setState({ arrowsVisibility: 'hidden' });
    if (this.props.autoplay) {
      this.autoPlayFlag = setInterval(() => {
        this.turn(1);
      }, this.props.delay * 1000);
    }
  }

  // 暂停自动轮播
  pausePlay() {
    this.setState({ arrowsVisibility: 'visible' });
    clearInterval(this.autoPlayFlag);
  }

  componentDidMount() {
    this.goPlay();
  }

  render() {
    let count = this.props.items.length;
    let itemNodes = null;
    if (this.props.isMobile) {
      itemNodes = this.props.items.map((item) => {
        return <BannerItemMobile item={item} count={count} key={item.id} itemWidth={this.props.bannerWidth} itemHeight={this.props.bannerHeight} />;
      });
    } else {
      itemNodes = this.props.items.map((item) => {
        return <BannerItem item={item} count={count} key={item.id} itemWidth={this.props.bannerWidth} itemHeight={this.props.bannerHeight} />;
      });
    }
    let arrowsNode = <BannerArrows turn={this.turn.bind(this)} arrowsVisibility={this.state.arrowsVisibility} />;
    let dotsNode = <BannerDots turn={this.turn.bind(this)} count={count} nowLocal={this.state.nowLocal} />;
    return (
      <div style={{ width: this.props.bannerWidth, height: this.props.bannerHeight }}
        className="banner"
        onMouseOver={this.props.pause ? this.pausePlay.bind(this) : null} onMouseOut={this.props.pause ? this.goPlay.bind(this) : null}>
        <ul style={{
          left: -100 * this.state.nowLocal + "%",
          transitionDuration: this.props.speed + "s",
          width: this.props.items.length * 100 + "%",
          height: this.props.bannerHeight
        }}>
          {itemNodes}
        </ul>
        {this.props.arrows ? arrowsNode : null}
        {this.props.dots ? dotsNode : null}
      </div>
    );
  }
}

Banner.defaultProps = {
  speed: 1,
  delay: 2,
  isMobile: false,
  pause: true,
  autoplay: true,
  dots: true,
  arrows: true,
  items: [],
};
Banner.autoPlayFlag = null;