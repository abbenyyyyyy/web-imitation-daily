import React, { Component } from 'react';

export default class BannerArrowsIcon extends Component {
    render() {
        switch (this.props.orientation) {
            case 'left':
                return <svg t="1519455897088" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5114" width={this.props.style.width} height={this.props.style.height}><defs><style type="text/css"></style></defs><path d="M721.768049 957.138196c-7.789407 0-15.579837-2.935865-21.571295-8.867972l-419.492096-414.459476c-5.812379-5.752004-9.106402-13.601786-9.106402-21.810748 0-8.207939 3.295046-16.057721 9.106402-21.809725l419.492096-414.459476c11.983939-11.983939 31.457456-11.744485 43.382043 0.239454 11.864212 12.103666 11.744485 31.517831-0.239454 43.382043L345.955778 512l397.382543 392.648728c11.983939 11.864212 12.103666 31.277354 0.239454 43.382043C737.586316 954.082604 729.678206 957.138196 721.768049 957.138196z" p-id="5115" fill="#ffffff"></path></svg>;
            case 'right':
                return <svg t="1519455928325" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5339" width={this.props.style.width} height={this.props.style.height}><defs><style type="text/css"></style></defs><path d="M264.896 1010.112l497.728-497.728L264.128 13.888 218.88 59.136l453.248 453.248-452.48 452.48z" p-id="5340" fill="#ffffff"></path></svg>;
            default:
                return '传递错误参数！';
        }
    }
}

BannerArrowsIcon.defaultProps = {
    style:{
        width:18,
        height:18,
    }
}