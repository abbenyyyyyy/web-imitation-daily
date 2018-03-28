import React from 'react';
import PropTypes from 'prop-types';

RightArrowSvg.propTypes = {
    classify: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    fill: PropTypes.string,
}

RightArrowSvg.defaultProps = {
    width: 32,
    height: 32,
    fill: "#ffffff",
}

export default function RightArrowSvg(props) {
    return <svg t="1522205628525" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3925" width={props.width} height={props.height}><defs><style type="text/css"></style></defs><path d="M885.113 489.373L628.338 232.599c-12.496-12.497-32.758-12.497-45.254 0-12.497 12.497-12.497 32.758 0 45.255l203.3 203.3H158.025c-17.036 0-30.846 13.811-30.846 30.846 0 17.036 13.811 30.846 30.846 30.846h628.36L583.084 746.147c-12.497 12.496-12.497 32.758 0 45.255 6.248 6.248 14.438 9.372 22.627 9.372s16.379-3.124 22.627-9.372l256.775-256.775a31.999 31.999 0 0 0 0-45.254z" p-id="3926" fill={props.fill}></path></svg>;
}