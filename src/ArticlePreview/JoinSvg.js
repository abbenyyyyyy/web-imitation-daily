import React from 'react';
import PropTypes from 'prop-types';

JoinSvg.propTypes = {
    classify: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    fill: PropTypes.string,
}

JoinSvg.defaultProps = {
    width: 64,
    height: 64,
    fill: "#ffffff",
}

export default function JoinSvg(props) {
    return <svg t="1522286167023" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1794" width={props.width} height={props.height}><defs><style type="text/css"></style></defs><path d="M1.998 158.845v576.437h431.579l74.927 129.873 74.927-129.873h435.575V158.845H1.999z m987.036 546.466H560.453l-51.949 91.91-51.949-91.91H31.97V188.815h957.065v516.496zM274.732 466.544q0.999 48.952-30.97 47.953-32.968 0.999-33.967-42.958l-45.955 10.989q11.988 71.93 82.919 70.931 76.925 0.999 75.926-84.917V340.667h-47.953v125.877z m177.826-127.875q-99.902 2.997-104.898 108.894 5.994 101.9 104.898 106.896 97.904-4.995 102.9-106.896-5.994-103.899-102.9-108.894z m-1.998 175.829q-50.95-1.998-52.948-66.935 2.997-65.936 53.947-68.933 49.951 2.997 51.949 68.933-1.998 64.937-52.948 66.935z m128.874 35.964h48.952V340.667h-48.952v209.795z m220.785-209.795v116.886q0 21.979 0.999 32.968v0.999q-2.997-8.991-11.988-20.98l-79.922-129.873h-50.95v209.795h44.956V435.574q0-20.98-0.999-35.965 2.997 5.994 10.989 19.98l82.919 130.872h47.953V340.666h-43.957z" fill={props.fill} p-id="1795"></path></svg>;
}