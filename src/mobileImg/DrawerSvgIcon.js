import React from 'react';

DrawerSvgIcon.defaultProps = {
    width: 32,
    height: 32,
    fill: "#ffffff",
}

export default function DrawerSvgIcon(props) {
    switch (props.iconCategory) {
        case "logo":
            return <svg t="1522288071437" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2158" width={props.width} height={props.height}><defs><style type="text/css"></style></defs><path d="M593.42 688.328q0 43.957-19.98 61.94T512.5 768.25q-41.959 0-61.94-17.982-20.98-17.982-20.98-61.94V224.781q0-43.957 21.979-61.94 20.98-17.982 60.94-17.982 40.96 0 60.94 17.982t19.98 61.94v463.547z m66.935-588.426q-60.94-35.965-149.854-35.965-86.915 0-147.856 35.965-56.944 33.967-56.944 113.889v491.52q0 78.923 56.944 112.89 50.95 30.97 120.882 35.965v10.989l1.998 19.98q1.998 38.962 15.984 56.944 11.988 15.984 55.945 15.984h61.94v-66.935h-51.949q-39.961 0-39.961-24.976v-10.989q77.924-3.996 132.87-36.964 56.944-33.967 56.944-112.89v-491.52q0-80.921-56.944-113.889z" fill={props.fill} p-id="2159"></path></svg>;
        case "category":
            return <svg t="1522288552024" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2550" width={props.width} height={props.height}><defs><style type="text/css"></style></defs><path d="M144.859 209.795v32.968h765.253v-32.968H144.859z m382.626 214.79H144.859v31.969h382.626v-31.969z m-382.626 245.76h595.419v-31.969H144.859v31.969z" fill={props.fill} p-id="2551"></path></svg>;
        default:
            return "传入iconCategory参数错误！";
    }
}