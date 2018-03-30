import React from 'react';

ArrowIcon.defaultProps = {
    width: 12,
    height: 12,
    fill: "hsla(0,0%,100%,.5)",
}

export default function ArrowIcon(props) {
    return <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"width={props.widht} height={props.height}><defs><style type="text/css"></style></defs><path d="M511.5 789.9 80.6 359c-22.8-22.8-22.8-59.8 0-82.6 22.8-22.8 59.8-22.8 82.6 0l348.3 348.3 348.3-348.3c22.8-22.8 59.8-22.8 82.6 0 22.8 22.8 22.8 59.8 0 82.6L511.5 789.9 511.5 789.9zM511.5 789.9" fill={props.fill}></path></svg>;
}