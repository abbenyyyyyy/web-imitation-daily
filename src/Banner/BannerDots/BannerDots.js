import React, {Component} from 'react';

export default class BannerDots extends Component {
  constructor(props) {
    super(props);
  }

  handleDotClick(i) {
    var option = i - this.props.nowLocal;
    this.props.turn(option);
  }

  render() {
    let dotNodes = [];
    let { count, nowLocal } = this.props;
    for(let i = 0; i < count; i++) {
      dotNodes[i] = (
        <span
          key={'dot' + i}
          className={"banner-dot" + (i === this.props.nowLocal?" banner-dot-selected":"")}
          onClick={this.handleDotClick.bind(this, i)}>
        </span>
      );
    }
    return (
      <div className="banner-dots-wrap">
        {dotNodes}
      </div>
    );
  }
}