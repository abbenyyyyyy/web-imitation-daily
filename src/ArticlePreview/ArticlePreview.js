import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ArticlePreview.css';
import ClassifyIcon from '../img/ClassifyIcon';
import ArticlePreviewIcon from './ArticlePreviewIcon';

export default class ArticlePreview extends Component {

    render() {
        if(typeof(this.props.articlePreviewData) === "undefined"){
            return null;
        }else{
            let nowDate = new Date();
            console.log(this.props.articlePreviewData);
            let date = new Date(this.props.articlePreviewData.createTime);
            let printTime;
            if (date.getFullYear() === nowDate.getFullYear() && date.getMonth() === nowDate.getMonth() && date.getDate() === nowDate.getDate()) {
                //今天，计算几个小时前
                let dis = parseInt((nowDate.getTime() - date.getTime()) / 3600000, 10);
                printTime = dis === 0 ? '半小时前' : dis + '小时前';
            } else {
                printTime = (date.getMonth() + 1) + "月" + date.getDate() + '日';
            }
    
            let imgPreviewInfoContainerNumber = null;
            if (this.props.articlePreviewData.commentCount > 0 && this.props.articlePreviewData.praiseCount > 0) {
                imgPreviewInfoContainerNumber = <div>
                    <ArticlePreviewIcon category='message' width={10} height={10} />
                    <span style={{ paddingLeft: 5, paddingRight: 10, }}>{this.props.articlePreviewData.commentCount}</span>
                    <ArticlePreviewIcon category='like' width={10} height={10} />
                    <span style={{ paddingLeft: 5, }}>{this.props.articlePreviewData.praiseCount}</span>
                </div>;
            } else if (this.props.articlePreviewData.commentCount > 0) {
                imgPreviewInfoContainerNumber = <div>
                    <ArticlePreviewIcon category='message' width={10} height={10} />
                    <span style={{ paddingLeft: 5, }}>{this.props.articlePreviewData.commentCount}</span>
                </div>;
            } else if (this.props.articlePreviewData.praiseCount > 0) {
                imgPreviewInfoContainerNumber = <div>
                    <ArticlePreviewIcon category='like' width={10} height={10} />
                    <span style={{ paddingLeft: 5, }}>{this.props.articlePreviewData.praiseCount}</span>
                </div>;
            }
            return (
                <a href='#articlePreview' >
                    <div className='imgPreviewContainer'>
                        <img alt='' src={(this.props.articlePreviewData.imgUrl)} className='imgPreview' />
                        <div className='imgPreviewClassifyIconContainer'>
                            <ClassifyIcon classify={this.props.articlePreviewData.categoryName} width={16} height={16} style={{ width: 16 }} />
                            <span>{this.props.articlePreviewData.categoryName}</span>
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
}

ArticlePreview.propTypes = {
    articlePreviewData: PropTypes.shape({
        title: PropTypes.string,
        categoryName: PropTypes.string,
        praiseCount: PropTypes.number,
        commentCount: PropTypes.number,
       
        imgUrl: PropTypes.any,
    }),
}