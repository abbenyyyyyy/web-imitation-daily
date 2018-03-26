import React from 'react';
import PropTypes from 'prop-types';

ClassifyIcon.propTypes = {
    classify: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    fill: PropTypes.string,
}

ClassifyIcon.defaultProps = {
    width: 32,
    height: 32,
    fill: "#ffffff",
}

export default function ClassifyIcon(props) {
    switch (props.classify) {
        case '长文章':
            return (
                <svg t="1512089815185" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8925" width={props.width} height={props.height}><defs><style type="text/css"></style></defs><path d="M641.467677 585.823356 641.467677 269.508153 372.104833 269.508153l0 412.351466 173.022659 0C598.25141 681.859619 641.467677 638.777405 641.467677 585.823356zM420.207387 346.701257l173.158758 0 0 28.768207L420.207387 375.469464 420.207387 346.701257zM420.207387 413.280628l173.158758 0 0 28.768207L420.207387 442.048835 420.207387 413.280628zM420.207387 479.859999l173.158758 0 0 28.768207L420.207387 508.628206 420.207387 479.859999zM526.029528 575.206554 420.207387 575.206554 420.207387 546.438347l105.822141 0L526.029528 575.206554zM505.168408 64.072271c-220.568535 0-399.376966 178.806385-399.376966 399.375943s178.807409 399.375943 399.376966 399.375943 399.376966-178.806385 399.376966-399.375943S725.736942 64.072271 505.168408 64.072271zM670.325935 585.823356c0 68.928882-56.051597 124.805494-125.199467 124.805494L343.247598 710.62885 343.247598 240.738923l327.078337 0L670.325935 585.823356z" p-id="8926" fill={props.fill}></path></svg>
            );
        case '10个图':
            return (
                <svg t="1519631678743" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8635" width={props.width} height={props.height}><defs><style type="text/css"></style></defs><path d="M532.48 81.92a450.56 450.56 0 1 0 450.56 450.56A450.56 450.56 0 0 0 532.48 81.92z m48.3328 582.8608l-57.7536 57.7536-57.7536-57.7536-76.1856-75.776-115.9168 115.9168-57.7536-58.1632 173.6704-173.6704 133.9392 133.9392 277.2992-277.2992 57.7536 57.7536z" fill={props.fill} p-id="8636"></path><path d="M491.52 40.96a450.56 450.56 0 1 0 450.56 450.56A450.56 450.56 0 0 0 491.52 40.96z m48.3328 582.8608l-57.7536 57.7536-57.7536-57.7536-76.1856-75.776-115.9168 115.9168-57.7536-58.1632 173.6704-173.6704 133.9392 133.9392 277.2992-277.2992 57.7536 57.7536z" fill={props.fill} p-id="8637"></path></svg>
            );
        case 'top15':
            return (
                <svg t="1512045212406" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="869" width={props.width} height={props.height}><defs><style type="text/css"></style></defs><path d="M593.558527 579.720358l60.972677 61.851697 0-65.809845 64.86738 0-56.510038-57.3338C645.472897 544.487925 621.531626 565.591569 593.558527 579.720358zM364.723725 519.986905l-54.975079 55.775304 64.866357 0 0 65.809845 60.098773-60.966537C406.544203 566.771441 382.416689 545.866319 364.723725 519.986905zM665.182798 415.699724c0-84.997859-68.166519-154.150846-151.951761-154.150846-83.786265 0-151.948691 69.152986-151.948691 154.150846 0 25.174356 6.099928 48.88743 16.692171 69.895907 0.058328 0.057305 0.13917 0.072655 0.195451 0.132006 1.918699 1.944282 2.937912 4.344958 3.544733 6.835685 26.291806 46.115294 75.333756 77.286224 131.516336 77.286224C597.016279 569.849546 665.182798 500.697583 665.182798 415.699724zM481.900471 499.353982l-26.977421 0L454.92305 381.323798l-29.087479 11.334139-2.950192-21.595854 35.20378-16.464997 23.812335 0L481.901495 499.353982zM549.139875 502.133282c-16.861016 0-30.556946-4.276397-41.937135-10.477632l3.998057-23.947412c10.753925 6.628978 24.037463 11.332093 38.154995 11.332093 16.863063 0 29.928636-7.912204 29.928636-25.229614 0-14.32731-9.274224-23.092951-26.13524-23.092951-9.479909 0-16.226566 1.710968-22.12695 4.275373l-18.134009-4.060479 5.058203-76.121701 79.462796 0 3.588735 23.093974-61.760622 0-2.527566 33.783431c5.27412-1.49812 12.017708-2.994194 21.497617-2.994194 28.243251 0 46.791699 16.464997 46.791699 43.834344C605.000114 485.028719 581.176522 502.133282 549.139875 502.133282zM511.306198 64.072271c-220.568535 0-399.37492 178.806385-399.37492 399.375943s178.805362 399.375943 399.37492 399.375943 399.376966-178.806385 399.376966-399.375943S731.874733 64.072271 511.306198 64.072271zM683.272805 604.919273l0 107.041922-117.496018-119.191636c-0.419556-0.425695-0.589424-0.982374-0.946558-1.445932-16.360619 4.941546-33.656541 7.68503-51.599192 7.68503-17.117866 0-33.615609-2.574638-49.308009-7.086395-0.226151 0.26299-0.308015 0.597611-0.555655 0.847298L345.873402 711.962218 345.873402 604.919273 240.36337 604.919273l109.563348-111.155612c-11.034311-23.710005-17.385972-50.104141-17.385972-78.063937 0-101.238752 80.897472-183.308933 180.690292-183.308933s180.692339 82.07018 180.692339 183.308933c0 27.235294-6.011924 52.991911-16.516162 76.228125l111.375623 112.991424L683.272805 604.919273z" p-id="870" fill={props.fill}></path></svg>
            );
        case '商业':
            return (
                <svg t="1512089560745" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2923" width={props.width} height={props.height}><defs><style type="text/css"></style></defs><path d="M542.886451 496.619708 516.6366 672.117744c3.203972 0 6.40692 0 9.603729 0 64.019059 0 97.30414-35.366486 97.30414-85.415368C623.544469 547.33681 607.53689 521.314133 542.886451 496.619708z" p-id="2924" fill={props.fill}></path><path d="M542.886451 289.095257c-5.121648-0.668219-9.603729-0.668219-14.722306-0.668219-58.255799 0-87.703481 32.029484-87.703481 75.403341 0 42.706661 22.408359 61.394279 78.734202 82.747609L542.886451 289.095257z" p-id="2925" fill={props.fill}></path><path d="M527.520485 48.576345C280.809547 48.576345 80.811514 248.575402 80.811514 495.285317S280.81057 941.994288 527.520485 941.994288 974.229456 741.997278 974.229456 495.28634 774.231423 48.576345 527.520485 48.576345zM522.402931 708.817598c-3.841491 0-7.682983 0-10.883885 0l-12.166087 79.410608-30.726815-7.341199 11.524474-75.403341c-33.285081-4.671393-62.735833-15.347546-87.700411-26.691919l5.759167-41.370223c26.246781 14.011108 55.694463 25.355481 88.341001 31.361265l26.888394-182.171016c-74.257238-26.690896-112.022353-55.386448-112.022353-119.445416 0-72.065316 52.487422-114.76993 131.224694-114.76993 5.124717 0 10.245342 0 15.366989 0.666172l7.679913-50.716078 31.368428 8.009418-7.679913 46.040592c24.964578 4.004197 47.372937 11.343349 65.935712 20.023032l-6.40385 41.370223c-19.201318-10.007935-41.609677-19.35379-65.295122-24.025183L548.649711 457.254142c79.378885 29.356608 113.940029 63.389726 113.940029 126.113279C662.58974 658.773831 610.102319 708.817598 522.402931 708.817598z" p-id="2926" fill={props.fill}></path></svg>
            );
        case '智能':
            return (
                <svg t="1512089785948" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8534" width={props.width} height={props.height}><defs><style type="text/css"></style></defs><path d="M527.520485 365.102349c-60.977793 0-110.583584 47.638997-110.583584 106.196671 0 27.180036 20.884656 100.155071 25.976628 112.540146 3.990894 9.278317 7.40976 18.427698 10.720156 27.278273 16.555048 44.276413 24.114211 64.485687 73.886801 64.485687 45.992497 0 58.597583-26.387997 78.655408-76.952626 1.908466-4.814656 3.808746-9.617032 5.759167-14.361079 4.339842-10.809183 26.161846-84.948741 26.161846-112.989377C638.096906 412.741345 588.491115 365.102349 527.520485 365.102349z" p-id="8535" fill={props.fill}></path><path d="M527.520485 48.576345C280.809547 48.576345 80.811514 248.575402 80.811514 495.285317S280.81057 941.994288 527.520485 941.994288 974.229456 741.997278 974.229456 495.28634 774.231423 48.576345 527.520485 48.576345zM510.932692 172.655292l33.171494 0 0 90.564645-33.171494 0L510.932692 172.655292 510.932692 172.655292zM317.415256 472.64569l-88.461751 0 0-33.961486 88.461751 0L317.415256 472.64569zM305.688167 263.904529l23.453155-24.009833 62.553685 64.035432-23.453155 24.009833L305.688167 263.904529zM582.807672 778.295995 472.227158 778.295995l0-33.961486 110.580514 0L582.807672 778.295995zM642.521682 597.438904c-21.565155 52.559053-37.736463 112.125707-115.00222 112.125707-86.254479 0-91.64628-57.814754-115.00836-112.125707-4.863774-11.319813-28.747741-91.358731-28.747741-126.139885 0-77.405951 64.360843-140.158157 143.755078-140.158157 79.392188 0 143.752008 62.752206 143.752008 140.158157C671.272493 506.07915 647.197168 586.04439 642.521682 597.438904zM659.542334 303.930127l62.553685-64.035432 23.453155 24.009833-62.550615 64.035432L659.542334 303.930127zM826.086441 472.64569l-88.467891 0 0-33.961486 88.467891 0L826.086441 472.64569z" p-id="8536" fill={props.fill}></path></svg>
            );
        case '设计':
            return (
                <svg t="1512089592050" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3765" width={props.width} height={props.height}><defs><style type="text/css"></style></defs><path d="M527.520485 48.576345C280.809547 48.576345 80.811514 248.575402 80.811514 495.285317S280.81057 941.994288 527.520485 941.994288 974.229456 741.997278 974.229456 495.28634 774.231423 48.576345 527.520485 48.576345zM524.723789 675.759691l-193.436594 129.325437 13.963013-234.546897 151.167908-264.305665 33.725102 19.575848L383.553583 582.097498l-4.365424 73.294306 56.42408 32.884968 59.957557-40.085974L642.473587 391.346059l33.725102 19.578917L524.723789 675.759691zM569.335846 348.71717l33.728172 19.578917-106.559944 186.31336-33.731242-19.578917L569.335846 348.71717zM741.306546 296.852942l-38.787398 67.813478L522.753925 259.906471l38.790468-67.817572c19.224854-33.611515 54.105269-52.399417 89.975221-52.399417 17.605983 0 35.453467 4.529153 51.79362 14.053064l0.00614 0C752.952794 182.672436 769.963213 246.74266 741.306546 296.852942z" p-id="3766" fill={props.fill}></path><path d="M683.82846 187.680497c-9.861602-5.748934-21.034059-8.785084-32.308847-8.785084-23.137976 0-44.695968 12.558014-56.254212 32.765241l-19.393699 33.904181 112.387673 65.49569 19.325138-33.783431C725.500559 245.949598 714.844871 205.754131 683.82846 187.680497z" p-id="3767" fill={props.fill}></path></svg>
            );
        case '时尚':
            return (
                <svg t="1512089709411" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6631" width={props.width} height={props.height}><defs><style type="text/css"></style></defs><path d="M773.790378 576.051805l-0.88516-0.162706-0.87902-0.202615-244.516969-56.603159-247.349481 57.124022-0.865717 0.203638-0.88209 0.159636c-31.169907 5.684466-53.79316 32.473599-53.79316 63.692624l0 2.114151 605.796246 0C830.067103 609.820909 806.362214 581.993121 773.790378 576.051805z" p-id="6632" fill={props.fill}></path><path d="M527.520485 48.576345C280.809547 48.576345 80.811514 248.575402 80.811514 495.285317S280.81057 941.994288 527.520485 941.994288 974.229456 741.997278 974.229456 495.28634 774.231423 48.576345 527.520485 48.576345zM186.759521 679.667697 186.759521 640.262222c0-49.201585 35.638685-91.40171 84.760452-100.361779L508.587274 485.149469l0-60.311621 18.934235 0c45.230134 0 82.032318-36.248575 82.032318-80.799234 0-44.553729-36.801161-80.800257-82.032318-80.800257-45.237297 0-82.038458 36.245506-82.038458 80.800257l-37.859259 0c0-65.117067 53.782927-118.093629 119.897717-118.093629 66.10558 0 119.891578 52.976562 119.891578 118.093629 0 58.770522-43.813878 107.653859-100.963483 116.622114l0 24.49795 234.238882 54.223972c50.762127 9.259898 87.592964 52.870138 87.592964 103.715153l0 36.569894L186.759521 679.667697 186.759521 679.667697z" p-id="6633" fill={props.fill}></path></svg>
            );
        case '娱乐':
            return (
                <svg t="1512089653030" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4816" width={props.width} height={props.height}><defs><style type="text/css"></style></defs><path d="M507.21502 64.072271c-220.568535 0-399.376966 178.806385-399.376966 399.375943s178.807409 399.375943 399.376966 399.375943 399.376966-178.806385 399.376966-399.375943S727.783555 64.072271 507.21502 64.072271zM511.858784 698.979532c-127.510092 0-230.880391-105.134479-230.880391-234.827283s103.370299-234.828306 230.880391-234.828306c127.511115 0 230.880391 105.135502 230.880391 234.828306S639.370923 698.979532 511.858784 698.979532zM511.858784 258.678504c-111.39302 0-202.019063 92.175329-202.019063 205.473745s90.62502 205.473745 202.019063 205.473745c111.395066 0 202.020086-92.175329 202.020086-205.473745S623.25385 258.678504 511.858784 258.678504zM511.858784 532.643156c-37.190017 0-67.338664-30.66337-67.338664-68.490907s30.148647-68.49193 67.338664-68.49193c37.19104 0 67.339688 30.664394 67.339688 68.49193S549.049824 532.643156 511.858784 532.643156zM606.613868 422.99385c-9.265014-24.12649-28.175713-43.370787-51.906184-52.801577l10.503215-27.337625c31.206746 12.403494 56.103786 37.724183 68.288293 69.465095L606.613868 422.99385zM652.072199 414.895405c-14.693654-45.481867-52.100612-81.153298-97.626481-93.083002l7.195889-28.426423c54.966892 14.405081 100.114139 57.455573 117.842919 112.345718L652.072199 414.895405zM511.858784 425.01488c-21.218254 0-38.480406 17.557888-38.480406 39.138392 0 21.580504 17.262152 39.138392 38.480406 39.138392 21.216207 0 38.47836-17.557888 38.47836-39.138392C550.337143 442.571744 533.076014 425.01488 511.858784 425.01488z" p-id="4817" fill={props.fill}></path></svg>
            );
        case '城市':
            return (
                <svg t="1512089523987" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1985" width={props.width} height={props.height}><defs><style type="text/css"></style></defs><path d="M719.480448 480.586546c-41.690518 0-75.616188 34.871205-75.616188 77.729316 0 42.857087 33.92567 77.724199 75.616188 77.724199 41.693588 0 75.612095-34.867112 75.612095-77.724199C795.09152 515.457752 761.174036 480.586546 719.480448 480.586546zM527.785521 64.072271c-220.568535 0-399.37492 178.806385-399.37492 399.375943s178.806385 399.375943 399.37492 399.375943c220.570581 0 399.376966-178.806385 399.376966-399.375943S748.356103 64.072271 527.785521 64.072271zM486.197334 617.990986c-19.461237 29.879518-51.931766 47.714721-86.87051 47.714721-57.607022 0-104.471376-48.173163-104.471376-107.389846 0-50.502208 33.420157-93.568049 81.269955-104.736413l6.390547 28.932959c-34.618449 8.076956-58.800197 39.249933-58.800197 75.80243 0 42.857087 33.919531 77.724199 75.612095 77.724199 24.932856 0 48.1353-12.558014 62.285578-33.645284l7.751544-17.11275 26.16287 12.516058L486.197334 617.990986zM719.480448 665.706731c-57.604976 0-104.474446-48.173163-104.474446-107.389846 0-39.517015 20.932752-74.028017 51.938929-92.676749l-23.469528-73.094762L460.443787 500.054947l15.893992 35.894512-26.26827 12.294001-93.174076-210.450083 112.467491 0 0 29.665647-67.626213 0 46.702672 105.482403 185.804776-109.140723-26.347065-82.052784-73.571622-28.362978 10.134825-27.77253 86.510306 33.345456 62.741973 195.403389c8.259104-2.165316 16.859993-3.441379 25.765827-3.441379 57.607022 0 104.473423 48.179302 104.473423 107.394962C823.952848 617.532545 777.087471 665.706731 719.480448 665.706731z" p-id="1986" fill={props.fill}></path></svg>
            );
        case '游戏':
            return (
                <svg t="1512089741261" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7475" width={props.width} height={props.height}><defs><style type="text/css"></style></defs><path d="M512.37453 273.624914c-100.004645 0-181.363627 83.48746-181.363627 186.105628 0 102.619192 81.358983 186.106652 181.363627 186.106652 49.319266 0 96.576569-20.946055 130.543172-56.990992l-98.549503-101.124142-20.24816-20.777209 20.24816-20.780279 105.280812-108.032482C615.386672 297.374828 565.556777 273.624914 512.37453 273.624914zM455.100082 420.550195c-15.816221 0-28.635177-13.156648-28.635177-29.384237 0-16.23066 12.818957-29.387307 28.635177-29.387307 15.818267 0 28.639271 13.156648 28.639271 29.387307C483.739353 407.393547 470.918349 420.550195 455.100082 420.550195zM503.120772 64.072271c-220.568535 0-399.375943 178.806385-399.375943 399.375943s178.807409 399.375943 399.375943 399.375943 399.37492-178.806385 399.37492-399.375943S723.69033 64.072271 503.120772 64.072271zM681.728636 587.114768c-38.220487 53.411467-99.828636 88.107687-169.354106 88.107687-115.981525 0-209.999828-96.479355-209.999828-215.491912 0-119.014604 94.018304-215.490889 209.999828-215.490889 73.14695 0 137.532353 38.398542 175.131693 96.603175l-122.889865 126.102023L681.728636 587.114768z" p-id="7476" fill={props.fill}></path></svg>
            );
        case '广告':
            return (
                <svg t="1522048362908" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="25738" width={props.width} height={props.height}><defs><style type="text/css"></style></defs><path d="M512.073143 355.401143l114.834286 174.884571-229.741714 0zM720.676571 658.285714l53.686857 0-262.290286-394.825143-262.290286 394.825143 53.686857 0 59.465143-91.428571 298.276571 0zM950.930286 512q0 119.442286-58.88 220.306286t-159.744 159.744-220.306286 58.88-220.306286-58.88-159.744-159.744-58.88-220.306286 58.88-220.306286 159.744-159.744 220.306286-58.88 220.306286 58.88 159.744 159.744 58.88 220.306286z" p-id="25739" fill={props.fill}></path></svg>
            );
        default:
            return "传入classify参数错误！";
    }
}