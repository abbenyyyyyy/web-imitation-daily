import React, { Component } from 'react';
import styled from 'styled-components';

export default class Footer extends Component {
    render() {
        return (
            <PageFooter>
                <PageFooterFt>
                    <Copyright>
                    <img style={{width:"40px",height:"40px"}}
								src={require('../Head/headSvg/head-q.png')}
								alt="head-pic" />
                    </Copyright>
                </PageFooterFt>
            </PageFooter>
        )
    }
}

const PageFooter = styled.div`
    /* position: relative;
    margin-top: -323px; */
    height:323px;
    min-width: 1190px;
    width: 100%;
   
    background-color: #000;
`;

const PageFooterFt = styled.div`
    background-color: #191919;
`;

const Copyright = styled.div`

`;
