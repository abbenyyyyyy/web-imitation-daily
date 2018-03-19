import React, { Component } from 'react';

export default class BannerItem extends Component {

  render() {
    let { count, item } = this.props;
    let width = 100 / count + '%';
    let bannerItemTitle = null;
    if (item.title.length > 23) {
      let title_first = item.title.substring(0, 23);
      let title_second = item.title.substring(23);
      bannerItemTitle = <div style={styles.bannerItemTitleStyle}>
        <span style={styles.bannerItemTitleSpanStyle}>{title_first}</span>
        <span style={styles.bannerItemTitleSpanStyle}>{title_second}</span>
      </div>;
    } else {
      bannerItemTitle = <div style={styles.bannerItemTitleStyle}>
        <span style={styles.bannerItemTitleSpanStyle}>{item.title}</span>
      </div>;
    }
    return (
      <a href='#banner-item' className="banner-item" style={{ width: width, backgroundImage: `url(${item.imgUrl})` }}>
        <div>
          {bannerItemTitle}
          <p>
            {item.categoryName}
          </p>
        </div>
      </a>
    );
  }
}

const styles = {
  bannerItemTitleStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: '40px',
  },
  bannerItemTitleSpanStyle: {
    color: '#fff',
    backgroundColor: '#000',
    fontSize: '30px',
    lineHeight: '40px',
    fontWeight: 400,
    padding: '0 8px',
    margin: '6px 20px 0 12px',
  }
}