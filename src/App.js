import React, { Component } from 'react';

import './App.css';

import Banner from './Banner/Banner';
import Head from './Head/Head';


export default class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return ( 
            < div className = "App">
                <Head />
                <div className="page-content">
                    <div className="packery-container">
                        <div className="packery-banner-container">
                            < Banner items = { this.props.items }
                                speed = { 1.2 }
                                delay = { 2.1 }
                                pause = { true }
                                autoplay = { true }
                                dots = { true }
                                arrows = { true }
                            />
                        </div>

                        <div className="packery-login-container">
                            <div>
                                <img src={require('./images/missing_login_bg.png')} />
                            </div>
                            <div className="packery-login-bd">
                                <img src={require('./images/canvas.png')} />
                                <a className="packery-login-avatar">
                                   <img src={require('./images/missing_face.png')} width="64" height="64"/> 
                                </a>
                            </div>
                            <div className="packery-login-ft">
                                <a className="packery-login-text" href="#">登录</a>
                                <p>登录查看你的好奇心指数</p>
                            </div>
                            <a  className="packery-dowload" href="dowload">
                                <img src={require('./images/download-banner-x640.png')} width="245" height="160"/>
                            </a>
                        </div>
                    </div>
                </div>
            < /div>
        );
    }
}
