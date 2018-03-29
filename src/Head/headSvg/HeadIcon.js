import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class HeadIcon extends Component {

    render() {
        switch (this.props.category) {
            case 'head_flask':
                return <svg style={{ marginRight: this.props.style.marginRight }} t="1522285306478" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1258" width={this.props.style.width} height={this.props.style.height}><defs><style type="text/css"></style></defs><path d="M848.172 817.202L639.376 473.538V62.939H380.629v410.599l-208.796 347.66q-22.978 46.954 4.995 91.411t80.921 44.457h501.51q54.946 0 83.918-45.955t4.995-93.908z m-36.964 73.928q-17.982 28.972-51.949 28.972h-501.51q-31.969 0-48.952-26.974-15.984-25.975-3.996-53.947l213.791-355.653V100.902h183.82v382.626l212.792 350.658q12.987 29.971-3.996 56.944z" fill={this.props.style.fill} p-id="1259"></path></svg>
                case 'head_column':
                return <svg style={{ marginRight: this.props.style.marginRight }} t="1522285314649" viewBox="0 0 1024 1024" version="1.1" width={this.props.style.width} height={this.props.style.height}><defs><style type="text/css"></style></defs><path d="M510.501 61.94L61.939 510.502l448.562 448.562 448.562-448.562L510.501 61.94z m13.987 53.947l186.818 185.819-186.818 186.818V115.888z m-27.973 379.629H116.886l379.629-379.629v379.629z m0 27.973v382.626L114.888 523.489h381.627z m44.956-12.988l189.815-188.816 188.816 188.816-188.816 188.816-189.815-188.816z m169.834 208.797L524.487 906.116V533.48l186.818 185.819zM510.501 920.101z" fill={this.props.style.fill} p-id="1527"></path></svg>;
            case 'head_search':
                return <svg style={{marginRight:this.props.style.marginRight}} t="1492674916568" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5139" width={this.props.style.width} height={this.props.style.height}><defs><style type="text/css"></style></defs><path d="M746.3013 656.0273c0 0-14.2549 18.8622-33.3428 37.3497l219.773 215.354 36.4768-34.1019L746.3013 656.0273zM824.3495 422.5726c0 213.7901-164.6831 374.2772-368.8031 374.2772C242.705 793.761 88.3684 626.1566 88.3684 422.8624c0-196.3739 166.1232-361.9626 367.1781-361.9626C659.6664 60.8998 824.3495 228.6441 824.3495 422.5726zM454.2033 109.9626c-174.9625 0-316.7702 141.9208-316.7702 318.9128 0 176.993 141.8077 319.8931 316.7702 319.8931 174.9865 0 321.0815-142.9001 321.0815-319.8931C775.2848 251.8824 629.1899 109.9626 454.2033 109.9626z" p-id="5140" fill={this.props.style.fill}></path></svg>;
            case 'head_weibo':
                return <svg style={{marginRight:this.props.style.marginRight}} t="1492741541682" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3116" width={this.props.style.width} height={this.props.style.height}><defs><style type="text/css"></style></defs><path d="M-56.57-52.89v0 0z" p-id="3117" fill={this.props.style.fill}></path><path d="M743.314 475.6q-16.558-3.318-21.501-9.921t-1.659-12.145l3.318-5.508q1.094-1.094 2.224-3.318t4.414-9.391 4.978-14.334 2.753-17.652-0.564-19.877-6.638-20.407-13.805-19.877q-15.463-15.463-40.284-19.877t-49.641-0.564-46.885 9.921-36.4 11.581l-14.334 6.638q-11.050 3.318-18.218 4.414t-11.050-0.564-6.073-3.318-1.659-7.732 1.094-10.485 2.753-13.805 3.318-14.899q0-13.239-1.659-24.819t-7.167-25.914-15.994-23.161-26.48-14.334-41.379-3.318-57.372 13.239q-38.624 13.239-78.342 39.154t-68.951 54.052-53.523 54.618-37.53 43.038l-12.145 17.652q-36.4 47.451-54.052 94.901t-16.558 71.707v23.161q6.638 52.958 32.551 94.901t61.785 67.857 84.415 44.132 93.242 26.48 94.337 11.581q81.662 6.638 169.36-12.675t163.289-66.763 106.481-113.649q18.747-38.624 19.313-72.836t-11.581-55.712-31.457-38.060-36.4-24.29-30.327-9.921zM406.816 818.735q-119.156 5.508-202.443-46.356t-83.285-131.301q0-78.342 82.756-135.15t203.007-62.35 203.007 39.718 82.756 123.569q0 79.438-84.415 142.882t-201.348 68.951zM374.83 513.094q-31.986 3.318-57.372 14.899t-39.718 26.48-24.29 31.986-13.805 33.646-4.978 30.327-1.094 21.501l1.094 8.827v4.414q0 3.318 2.224 13.239t6.073 18.218 12.675 18.218 20.972 16.558q72.836 35.306 135.714 21.501t101.503-63.443q15.463-18.747 20.407-46.356t-2.224-55.712-24.819-51.299-52.394-35.871-80.003-7.167zM335.11 721.645q-6.638 1.094-12.675 0.564t-11.050-2.224-9.921-3.847-8.261-6.073-6.073-7.732-4.414-8.827-1.659-10.485q0-12.145 6.638-23.725t18.218-19.877 25.914-9.391q9.921-1.094 19.313 0.564t15.994 5.508 11.581 8.827 7.167 11.581 2.224 14.334q0 12.145-7.167 23.161t-19.313 18.747-26.48 8.827zM428.882 642.207q-7.732 5.508-15.994 4.978t-11.581-7.167l-2.224-4.414q-1.094-2.224-1.094-4.414v-4.414q0-3.318 1.094-5.508l2.224-4.414q1.094-2.224 3.318-3.318l3.318-4.414q8.827-6.638 17.088-5.508t11.581 8.827q3.318 4.414 2.753 9.921t-3.318 10.485-7.167 9.391zM820.562 411.591q6.638 0 12.145-3.318t8.827-8.261 4.414-10.485q1.094-1.094 1.094-3.318 13.239-125.794-88.265-143.446-29.798-5.508-55.182-1.094-7.732 0-13.239 3.847t-9.391 9.921-3.847 12.675q0 11.050 7.732 18.747t18.747 7.732q86.075-19.877 92.677 55.182 2.224 18.747-2.224 35.306 0 11.050 7.732 18.747t18.747 7.732zM801.815 100.478q-48.545-11.050-130.207 4.414-1.094 0-2.224 1.094l-1.094 2.224-1.094 1.094q-12.145 3.318-19.877 13.805t-7.732 22.63q0 16.558 11.050 27.574t26.48 11.050h3.318q1.094 0 4.978-1.094t8.261-1.659 9.391-2.224 8.827-3.318 14.899-1.659 27.044 1.659 35.306 8.261 38.624 16.558 38.624 27.574 33.646 40.813q28.704 65.104 11.050 125.794 0 1.094-0.564 2.224t-1.659 5.508-2.224 8.261-2.224 9.921-1.094 10.485q0 9.921 5.508 16.558t13.805 9.391 19.313 2.753q30.893 0 36.4-37.53 13.239-43.038 14.899-82.192t-5.508-68.951-21.501-55.712-33.116-44.132-41.943-33.116-44.697-23.725-44.697-14.334z" p-id="3118" fill={this.props.style.fill}></path></svg>;
            case 'head_wechat':
                return <svg style={{marginRight:this.props.style.marginRight}} t="1492741490300" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2360" width={this.props.style.width} height={this.props.style.height}><defs><style type="text/css"></style></defs><path d="M684.8 339.2c12.8 0 25.6 0 32 0-32-140.8-179.2-249.6-352-249.6-192 0-352 134.4-352 300.8 0 96 51.2 179.2 140.8 236.8l-32 108.8 121.6-64c44.8 6.4 76.8 19.2 121.6 19.2 12.8 0 19.2 0 32 0-6.4-25.6-12.8-51.2-12.8-76.8C390.4 467.2 518.4 339.2 684.8 339.2zM499.2 243.2c25.6 0 44.8 19.2 44.8 44.8S524.8 332.8 499.2 332.8C473.6 332.8 448 313.6 448 288S473.6 243.2 499.2 243.2zM249.6 332.8c-25.6 0-51.2-19.2-51.2-44.8s25.6-44.8 51.2-44.8c25.6 0 44.8 19.2 44.8 44.8S281.6 332.8 249.6 332.8zM1011.2 614.4c0-140.8-140.8-256-300.8-256-166.4 0-300.8 115.2-300.8 256 0 140.8 134.4 256 300.8 256 32 0 70.4-6.4 102.4-19.2l96 51.2-25.6-89.6C953.6 768 1011.2 697.6 1011.2 614.4zM620.8 601.6C595.2 601.6 569.6 576 569.6 550.4c0-25.6 25.6-51.2 51.2-51.2 25.6 0 51.2 25.6 51.2 51.2C672 576 652.8 601.6 620.8 601.6zM819.2 601.6c-25.6 0-51.2-19.2-51.2-51.2 0-25.6 19.2-51.2 51.2-51.2 25.6 0 51.2 19.2 51.2 51.2C870.4 576 851.2 601.6 819.2 601.6z" p-id="2361" fill={this.props.style.fill}></path></svg>;
            default:
                return '传递错误参数！';
        }
    };
}

HeadIcon.propTypes = {
    category: PropTypes.string,
}

HeadIcon.defaultProps = {
    style:{
        marginRight:0,
        width:32,
        height:32,
    }
}