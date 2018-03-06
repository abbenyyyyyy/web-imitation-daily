import React from 'react';
import PropTypes from 'prop-types';

ArticlePreviewIcon.prototype = {
    category: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    fill: PropTypes.string,
}

ArticlePreviewIcon.defaultProps = {
    width: 32,
    height: 32,
    fill: '#d1d1d1',
}

export default function ArticlePreviewIcon(props) {
    switch (props.category) {
        case 'like':
            return <svg t="1512542494470" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1869" width={props.width} height={props.height}><defs><style type="text/css"></style></defs><path d="M724.992 58.026667c-84.309333 0-162.474667 42.325333-214.016 111.957333C459.434667 100.352 380.928 58.026667 296.96 58.026667 145.066667 58.026667 21.504 193.194667 21.504 359.082667c0 98.986667 44.373333 168.277333 79.872 224.256C204.8 745.472 464.554667 947.2 475.477333 955.733333c10.581333 8.192 22.869333 12.288 35.498667 12.288 12.288 0 24.917333-4.096 35.157333-12.288 10.922667-8.533333 271.018667-210.261333 374.101333-372.394667 35.498667-55.978667 79.872-125.269333 79.872-224.256C1000.106667 193.194667 876.544 58.026667 724.992 58.026667L724.992 58.026667 724.992 58.026667 724.992 58.026667zM724.992 58.026667" p-id="1870" fill={props.fill}></path></svg>;
        case 'message':
            return <svg t="1512542545653" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2977" width={props.width} height={props.height}><defs><style type="text/css"></style></defs><path d="M190.378755 756.026179C190.378755 756.026181 173.654715 807.903432 147.089287 850.263366 111.737726 906.633242 64 957.543579 64 957.543579 64 957.543579 285.883926 957.543579 403.668086 867.990888 444.586173 879.240686 474.645213 880 512 880 759.423568 880 960 697.332178 960 472 960 246.667822 759.423568 64 512 64 264.576432 64 64 246.667822 64 472 64 582.407898 112.154154 682.572987 190.378755 756.026179Z" p-id="2978" fill={props.fill}></path></svg>;
        default:
            return '类别错误';
    }
}