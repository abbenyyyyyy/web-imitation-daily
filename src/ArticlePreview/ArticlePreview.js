import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ArticlePreview.css';
import ClassifyIcon from '../img/ClassifyIcon';
import ArticlePreviewIcon from './ArticlePreviewIcon';

export default class ArticlePreview extends Component {

    render() {
        let nowDate = new Date();
        let date = new Date(this.props.articlePreviewData.date);
        let printTime;
        if (date.getFullYear() === nowDate.getFullYear() && date.getMonth() === nowDate.getMonth() && date.getDate() === nowDate.getDate()) {
            //今天，计算几个小时前
            let dis = parseInt((nowDate.getTime() - date.getTime()) / 3600000, 10);
            printTime = dis === 0 ? '半小时前' : dis + '小时前';
        } else {
            printTime = (date.getMonth() + 1) + "月" + date.getDate() + '日';
        }

        let imgPreviewInfoContainerNumber = null;
        if (this.props.articlePreviewData.comments > 0 && this.props.articlePreviewData.likes > 0) {
            imgPreviewInfoContainerNumber = <div>
                <ArticlePreviewIcon category='message' width={10} height={10} />
                <span style={{ paddingLeft: 5, paddingRight: 10, }}>{this.props.articlePreviewData.comments}</span>
                <ArticlePreviewIcon category='like' width={10} height={10} />
                <span style={{ paddingLeft: 5, }}>{this.props.articlePreviewData.likes}</span>
            </div>;
        } else if (this.props.articlePreviewData.comments > 0) {
            imgPreviewInfoContainerNumber = <div>
                <ArticlePreviewIcon category='message' width={10} height={10} />
                <span style={{ paddingLeft: 5, }}>{this.props.articlePreviewData.comments}</span>
            </div>;
        } else if (this.props.articlePreviewData.likes > 0) {
            imgPreviewInfoContainerNumber = <div>
                <ArticlePreviewIcon category='like' width={10} height={10} />
                <span style={{ paddingLeft: 5, }}>{this.props.articlePreviewData.likes}</span>
            </div>;
        }
        return (
            <a href='#articlePreview' >
                <div className='imgPreviewContainer'>
                    <img alt='' src={(this.props.articlePreviewData.imgUrl)} className='imgPreview' />
                    <div className='imgPreviewClassifyIconContainer'>
                        <ClassifyIcon classify={this.props.articlePreviewData.classify} width={16} height={16} style={{ width: 16 }} />
                        <span>{this.props.articlePreviewData.classify}</span>
                    </div>
                </div>
                <span className='imgPreviewTitle'>{this.props.articlePreviewData.title}</span>
                <div className='imgPreviewInfoContainer'>
                    <span>{printTime}</span>
                    {imgPreviewInfoContainerNumber}
                </div>
            </a>
        );
    }
}

ArticlePreview.propTypes = {
    articlePreviewData: PropTypes.shape({
        title: PropTypes.string,
        classify: PropTypes.string,
        likes: PropTypes.number,
        comments: PropTypes.number,
        date: PropTypes.date,
        imgUrl: PropTypes.any,
    }),
}