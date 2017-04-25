import React, { Component } from 'react';

export default class BannerItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { count, item } = this.props;
    let width = 100 / count + '%';
    return (
      <li className="banner-item" style={{width: width}}>
        <img src={item.src} alt={item.alt} />
        <p>
         { item.category}
        </p>
        <span>
          { item.title}
        </span>
      </li>
    );
  }
}