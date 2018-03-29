import React from 'react';
import PropTypes from 'prop-types';

MobileClassifyIcon.propTypes = {
    classify: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    fill: PropTypes.string,
}

MobileClassifyIcon.defaultProps = {
    width: 32,
    height: 32,
    fill: "#ffffff",
}

export default function MobileClassifyIcon(props) {
    switch (props.classify) {
        case '长文章':
            return (
                <svg t="1522315036794" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3574" width={props.width} height={props.height}><defs><style type="text/css"></style></defs><path d="M193.811 62.939v895.126H584.43q100.901 0 171.832-69.432t70.931-168.336V62.939H193.812z m577.436 657.358q0 75.926-54.447 129.374t-132.371 53.448H249.756V116.887h521.491v603.411z m-92.909-455.556H342.666v54.946h335.672v-54.946z m0 126.877H342.666v54.946h335.672v-54.946z m0 126.876H342.666v54.946h335.672v-54.946zM547.465 645.37h-204.8v54.946h204.8V645.37z" fill={props.fill} p-id="3575"></path></svg>
            );
        case '10个图':
            return (
                <svg t="1522315074844" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5134" width={props.width} height={props.height}><defs><style type="text/css"></style></defs><path d="M402.607 458.552l217.787 177.826 313.694-418.591-46.954-35.965-276.73 369.639-215.789-176.827-227.778 279.727 45.955 36.964 189.815-232.773zM122.88 831.188V130.872H63.938v759.259h896.125v-58.942H122.881z" fill={props.fill} p-id="5135"></path></svg>
            );
        case 'top15':
            return (
                <svg t="1522315025660"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3038"  width={props.width} height={props.height}><defs><style type="text/css"></style></defs><path d="M361.647 347.66l4.995 34.966 46.954-17.982V553.46h43.957V321.686h-38.962l-56.944 25.975z m220.784 60.941q-17.982 0-34.966 4.995l3.996-54.946h100.901l-5.994-36.964H516.495l-7.992 121.881 29.971 6.993q15.984-6.993 35.965-6.993t30.97 9.99 10.989 26.974q0 19.98-13.487 30.47t-34.466 10.49q-32.968 0-62.939-17.982l-5.994 37.963q30.97 16.983 67.934 16.983 40.96 0 65.936-20.98t24.976-58.942q0-32.968-20.48-51.45t-55.446-18.482z m194.81 133.869q26.974-58.942 26.974-122.88 0-121.881-86.416-208.297t-208.796-86.416-208.796 86.416-86.416 208.297q0 65.936 27.973 125.877L62.939 723.293H235.77v171.832l191.813-190.814q0-0.999 0.999-1.998 38.962 11.988 79.922 11.988 42.958 0 84.917-12.987 0 1.998 0.999 2.997l191.813 190.814V723.293h172.831L777.242 542.47zM282.724 782.236V676.339H176.827l89.912-88.913q43.957 62.939 113.889 96.905l-97.904 97.904z m225.779-114.888q-66.935 0-123.879-33.467t-89.912-89.413q-0.999-6.993-5.994-11.988 0-0.999-0.5-0.999t-0.5 0q-26.974-52.948-26.974-111.891 0-101.9 72.929-174.829t175.329-72.929 175.329 72.929T757.26 419.59t-72.929 174.829-175.828 72.929z m230.775 8.992v105.897l-98.903-98.903q68.933-34.966 112.89-98.903l91.91 91.91H739.278z" fill={props.fill} p-id="3039"></path></svg>
            );
        case '商业':
            return (
                <svg t="1522315065969"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4866"  width={props.width} height={props.height}><defs><style type="text/css"></style></defs><path d="M544.468 452.558l38.962-249.756q47.953 8.991 101.9 35.965l9.99-62.939q-47.953-21.979-102.9-30.97l11.988-69.932-48.952-12.987-11.988 77.924q-7.992-0.999-24.976-0.999-92.909 0-148.855 46.954t-55.945 128.874q0 69.932 41.46 110.392t133.37 72.429l-41.959 278.728q-69.932-11.988-137.865-47.953l-8.991 63.938q71.93 31.969 136.866 40.96l-17.982 114.888 47.953 10.989 18.981-120.882h16.983q102.9 0 161.342-52.449t58.443-140.363q0-69.932-41.46-113.889t-136.367-78.923z m-169.834-142.86q0-51.949 35.465-83.918T511.5 193.811q15.984 0 23.977 0.999l-37.963 241.764q-67.934-25.975-95.407-52.449t-27.473-74.427z m133.869 471.539h-14.985l41.959-268.738q71.93 27.973 98.903 59.442t26.974 79.422q0 58.942-39.461 94.408t-113.389 35.465z" fill={props.fill} p-id="4867"></path></svg>
            );
        case '智能':
            return (
                <svg t="1522315058335"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4598"  width={props.width} height={props.height}><defs><style type="text/css"></style></defs><path d="M662.853 357.651q-63.438-60.94-152.851-60.94t-152.851 60.94-63.438 146.857q0 33.967 17.483 100.402t25.475 86.416q5.994 12.987 15.984 39.961t15.984 39.961 18.981 32.468 27.473 29.471 38.962 16.983 55.446 6.993q16.983 0 32.468-2.498t27.473-6.494 22.978-11.988 18.981-14.486 16.484-18.482 13.487-19.481 11.988-22.478 9.99-22.478 9.99-23.977 8.991-23.477q8.991-20.98 26.474-86.915t17.483-99.902q0-85.916-63.438-146.857z m-26.474 314.692q-2.997 6.993-7.992 20.98-25.975 63.938-48.453 88.913t-70.431 24.976q-17.982 0-31.969-1.998t-24.476-8.492-16.983-11.988-13.986-19.481-11.489-23.477-11.988-29.471q-9.99-26.974-15.984-40.96-7.992-18.981-23.477-79.422t-15.485-87.415q0-64.937 48.952-110.892t117.385-45.955 117.385 45.955 48.952 110.892q0 26.974-15.984 87.914t-23.977 79.922z m-209.796 286.72H593.42v-49.951H426.583v49.951zM534.478 61.94h-49.951v134.868h49.951V61.94z m-322.685 99.902l-34.966 35.965 93.908 94.907 34.966-35.965-93.908-94.907zM60.94 506.505h132.87v-49.951H60.94v49.951z m764.254-49.951v49.951h132.87v-49.951h-132.87z m-22.977-294.712l-93.908 94.907 34.966 35.965 93.908-94.907-34.966-35.965z" fill={props.fill} p-id="4599"></path></svg>
            );
        case '设计':
            return (
                <svg t="1522315043024"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3842"  width={props.width} height={props.height}><defs><style type="text/css"></style></defs><path d="M590.423 370.638l-45.955-25.975-143.86 250.755 45.955 25.975 143.86-250.755zM726.291 81.92q-32.968-18.981-69.932-18.981t-69.932 18.482-51.949 52.449l-52.948 90.911 243.762 140.862 51.949-90.911q28.972-50.95 13.986-107.395T726.29 81.92z m5.994 165.838l-26.974 45.955-151.852-87.914 25.975-45.955q11.988-19.98 32.468-31.969t43.957-11.988 43.458 11.988q31.969 17.982 41.46 53.448t-8.492 66.435zM444.566 748.269l-80.921 53.947-75.926-44.956 5.994-97.904L491.52 313.694l-44.956-25.975-204.8 355.653-18.981 315.692 261.744-173.83 204.8-356.652-45.955-26.974-198.806 346.661z" fill={props.fill} p-id="3843"></path></svg>
            );
        case '时尚':
            return (
                <svg t="1522315053299"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4330"  width={props.width} height={props.height}><defs><style type="text/css"></style></defs><path d="M842.178 624.39l-307.7-70.931V521.49q56.944-8.991 94.907-52.449t37.963-101.401q0-63.938-46.455-109.393t-111.391-45.456-110.892 45.456-45.955 109.393h48.952q0-43.957 31.969-74.927t76.425-30.97 75.926 30.97 31.469 74.927-31.469 75.426-76.425 31.469h-24.976v78.923l-310.697 71.93q-48.952 8.991-80.421 45.955t-31.469 85.916v51.949h895.126v-48.952q0-49.951-32.468-88.414t-82.42-47.454zM111.891 760.258v-2.997q0-30.97 19.98-54.447t50.95-29.471h1.998l324.683-75.926 323.684 74.927q31.969 5.994 52.948 30.47t20.98 57.444H111.891z" fill={props.fill} p-id="4331"></path></svg>
            );
        case '娱乐':
            return (
                <svg t="1522315014335"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2818"  width={props.width} height={props.height}><defs><style type="text/css"></style></defs><path d="M684.332 98.404q-82.919-35.465-174.33-35.465t-174.33 35.465-142.86 95.407-95.407 142.86-35.465 173.83 35.465 173.83 95.407 142.86 142.86 95.407 174.33 35.465 174.33-35.465 142.86-95.407 95.407-142.86 35.465-173.83-35.465-173.83-95.407-142.86-142.86-95.407zM706.81 849.67q-90.412 52.449-196.808 52.449T313.694 849.67t-142.86-142.86-52.948-196.308 52.948-196.308 142.86-142.86 196.308-52.449 196.808 52.449 142.86 142.86 52.449 196.308T849.67 706.81 706.81 849.67zM602.412 418.092q-37.963-38.462-92.41-38.462t-92.41 38.462-37.963 92.41 37.963 92.41 92.41 38.462 92.41-38.462 37.963-92.41-37.963-92.41zM562.95 563.45q-21.479 21.979-52.449 21.979t-52.948-21.979-21.979-52.948 21.979-52.948 52.948-21.979 52.449 21.979 21.479 52.948-21.479 52.948z m43.458-378.63l-13.986 53.947q66.935 17.982 117.385 65.436t72.429 112.39l52.948-16.983q-25.975-78.923-87.415-136.367T606.407 184.82z m6.993 94.907l-19.98 51.949q33.967 12.987 60.441 39.461t40.46 61.44l51.949-20.98q-17.982-44.956-52.449-79.922t-80.421-51.949z" fill={props.fill} p-id="2819"></path></svg>
            );
        case '城市':
            return (
                <svg t="1522315048281"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4110"  width={props.width} height={props.height}><defs><style type="text/css"></style></defs><path d="M782.236 519.493q-21.979 0-43.957 4.995L632.382 199.805 485.525 143.86l-16.983 45.955 124.878 47.953 44.956 135.867-314.693 181.822-79.922-175.828h114.888v-48.952H167.835l157.846 350.658 44.956-20.98-26.974-58.942 309.698-179.824 39.961 121.881q-39.961 23.977-63.938 64.937t-23.977 89.912q0 73.928 51.949 126.377t124.878 52.449 124.878-52.449 51.949-126.377-51.949-126.377-124.878-52.449z m90.412 269.736q-37.463 37.963-90.412 37.963t-90.412-37.963-37.463-91.411 37.463-91.411 90.412-37.963 90.412 37.963 37.463 91.411-37.463 91.411z m-526.986-17.982q-17.982 26.974-45.955 41.46t-59.941 14.486q-52.948 0-90.412-37.963t-37.463-90.911q0-45.955 27.973-81.42t71.93-45.456l-10.989-47.953q-60.94 13.986-99.403 62.939T62.94 698.32q0 73.928 51.949 126.377t124.878 52.449q44.956 0 83.918-21.479t63.938-58.443l14.985-33.967-43.957-19.98-12.987 27.973z" fill={props.fill} p-id="4111"></path></svg>
            );
        case '游戏':
            return (
                <svg t="1522315031475"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3306"  width={props.width} height={props.height}><defs><style type="text/css"></style></defs><path d="M865.155 225.78q-53.947-81.92-141.362-130.373T533.479 46.954q-107.895 0-199.305 53.448T189.315 246.26t-53.448 200.804 53.448 200.304 144.859 145.358 199.305 53.448q96.905 0 181.323-43.458t139.364-119.383L632.383 460.551 865.156 225.78z m-83.918 460.55q-48.952 49.951-113.389 77.924t-134.369 27.973q-92.909 0-171.832-46.455T236.769 619.895t-45.955-172.831 45.955-173.331 124.878-125.877 171.832-45.955q75.926 0 143.86 30.97t115.887 87.914L556.457 460.551l224.78 225.78z m-317.69-405.604q-15.984-15.984-38.462-15.984t-37.963 15.984-15.485 38.962 15.485 38.462 37.963 15.485 38.462-15.485 15.984-38.462-15.984-38.962z" fill={props.fill} p-id="3307"></path></svg>
            );
        default:
            return "传入classify参数错误！";
    }
}