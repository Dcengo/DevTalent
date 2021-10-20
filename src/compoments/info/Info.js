import React, {Component} from 'react';
import './Info.css';
import Person from './pexels-daniel-xavier-1239291.jpg';
import Linkedin from './linkedin.png'
import Twitter from './twitter.png'
import GitHub from './github.png'
import RoomIcon from '@material-ui/icons/Room';
import StarIcon from '@material-ui/icons/Star';
import Paper from '@material-ui/core/Paper';
import {
    Chart,
    PieSeries,
    Title
} from '@devexpress/dx-react-chart-material-ui';


const Info = props => {
    const data1 = [
        { argument:'Friday', value:20 },
        { argument:'Thursday', value:80 },

    ];
        return (
            <div className={'container'}>
                <div className={'info-main'}>
                    <div className={'left'}>
                        <div className={'top'}>
                            <img src={Person}/>
                        </div>
                        <div className={'bot'}>
                            <div className={'cube pdf'}>
                                PDF
                            </div>
                            <div className={'cube linkedin'}>
                                <img src={Linkedin}/>
                            </div>
                            <div className={'cube gitHub'}>
                                <img src={GitHub}/>
                            </div>
                            <div className={'cube twitter'}>
                                <img src={Twitter}/>
                            </div>
                        </div>
                    </div>
                    <div className={'right'}>
                        <div className={'dv-l'}>
                            <div className={'top'}>
                                <div className={'bg'}></div>
                                <div className={'info-per'}>
                                    <h5 className={'name'}>Bojan Sandic</h5>
                                    <a className={'button'}><StarIcon className={'star'}/>FEATURED</a>
                                </div>
                                <div className={'locate'}>
                                    <span className={'item'}>
                                     <div className={'circle-ic'}></div>Germany, Munichen
                                  </span>
                                  <span className={'item'}>
                                      <RoomIcon className={'room'}/>Germany, Munichen
                                  </span>
                                </div>
                            </div>
                            <div className={'mid'}>
                                <h5 className={'title'}>About Me</h5>
                               <h5 className={'text'}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                   tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet,
                                   consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/> <br/>
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                   labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                   sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
                            </div>
                            <div className={'bottom'}>
                                <button className={'button'}>Contact Me</button>
                            </div>
                        </div>
                        <div className={'dv-r'}>
                            <div className={'chart-title'}>
                                <span><StarIcon/></span>
                                <h5 className={'text'}>5.0 of 325 Total Reviews</h5>
                            </div>
                            <div className={'chart-div'}>
                                <div className={'cube'}></div>
                                <div className="svg-item">
                                    <svg width="100%" height="100%" viewBox="0 0 40 40" className="donut">
                                        <circle className="donut-hole" cx="20" cy="20" r="15.91549430918954"
                                                fill="#fff"></circle>
                                        <circle className="donut-ring" cx="20" cy="20" r="15.91549430918954"
                                                fill="transparent" stroke-width="3.5"></circle>
                                        <circle className="donut-segment donut-segment-2" cx="20" cy="20"
                                                r="15.91549430918954" fill="transparent" stroke-width="5"
                                                stroke-dasharray="69 31" stroke-dashoffset="25"></circle>
                                        <g className="donut-text donut-text-1">

                                            <text y="50%" transform="translate(0, 2)">
                                                <tspan x="50%" text-anchor="middle" className="donut-percent mid-span">69%</tspan>
                                            </text>

                                        </g>
                                    </svg>
                                </div>
                                <div className={'bottom'}>
                                    DevTalent Rank
                                </div>
                            </div>
                            <div className={'chart-div'}>
                                <div className={'cube'}></div>
                                <div className="svg-item">
                                    <svg width="100%" height="100%" viewBox="0 0 40 40" className="donut">
                                        <circle className="donut-hole" cx="20" cy="20" r="15.91549430918954"
                                                fill="#fff"></circle>
                                        <circle className="donut-ring" cx="20" cy="20" r="15.91549430918954"
                                                fill="transparent" stroke-width="3.5"></circle>
                                        <circle className="donut-segment donut-segment-3" cx="20" cy="20"
                                                r="15.91549430918954" fill="transparent" stroke-width="5"
                                                stroke-dasharray="69 31" stroke-dashoffset="25"></circle>
                                        <g className="donut-text donut-text-1">

                                            <text y="50%" transform="translate(0, 2)">
                                                <tspan x="50%" text-anchor="middle" className="donut-percent mid-span">69%</tspan>
                                            </text>

                                        </g>
                                    </svg>
                                </div>
                                <div className={'bottom'}>
                                    DevTalent Rank
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }


export default Info;