import React from 'react';
import PropTypes from 'prop-types';

OpenPanelIcon.propTypes = {
    iconCategory: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    fill: PropTypes.string,
}

OpenPanelIcon.defaultProps = {
    width: 32,
    height: 32,
    fill: "#ffffff",
}

export default function OpenPanelIcon(props) {
    switch (props.iconCategory) {
        case "menu":
            return <svg viewBox="0 0 1490 1024" xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height}><defs><style type="text/css"></style></defs><path d="M0 65.163636C0 29.174747 29.084579 0 65.19808 0L1424.256465 0C1460.264401 0 1489.454545 29.247991 1489.454545 65.163636 1489.454545 101.152526 1460.369967 130.327273 1424.256465 130.327273L65.19808 130.327273C29.190144 130.327273 0 101.079282 0 65.163636L0 65.163636ZM0 512C0 476.01111 29.084579 446.836364 65.19808 446.836364L1424.256465 446.836364C1460.264401 446.836364 1489.454545 476.084354 1489.454545 512 1489.454545 547.98889 1460.369967 577.163636 1424.256465 577.163636L65.19808 577.163636C29.190144 577.163636 0 547.915646 0 512L0 512ZM0 958.836364C0 922.847474 29.084579 893.672727 65.19808 893.672727L1424.256465 893.672727C1460.264401 893.672727 1489.454545 922.920718 1489.454545 958.836364 1489.454545 994.825253 1460.369967 1024 1424.256465 1024L65.19808 1024C29.190144 1024 0 994.752009 0 958.836364L0 958.836364Z" fill={props.fill}></path></svg>;
        case "rightArrow":
            return <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height}><defs><style type="text/css"></style></defs><path d="M885.113 489.373L628.338 232.599c-12.496-12.497-32.758-12.497-45.254 0-12.497 12.497-12.497 32.758 0 45.255l203.3 203.3H158.025c-17.036 0-30.846 13.811-30.846 30.846 0 17.036 13.811 30.846 30.846 30.846h628.36L583.084 746.147c-12.497 12.496-12.497 32.758 0 45.255 6.248 6.248 14.438 9.372 22.627 9.372s16.379-3.124 22.627-9.372l256.775-256.775a31.999 31.999 0 0 0 0-45.254z" fill={props.fill}></path></svg>;
        default:
            return "OpenPanelIcon传入iconCategory参数错误！";
    }
}