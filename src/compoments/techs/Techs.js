import React, {Component, useState} from 'react';
import './Techs.css'

import data from './list.json';






const Techs = props => {
    const [techs, setTech] = useState(data);

    return(
        <div id={'tech-sec'} className={'Techs'}>
            <div className={'purple'}></div>
            <div className={'container'}>
                <div className={'main-tech'}>
                    <div className={'top'}>
                        <a href={'#tech-sec'} className={'button active'}>Technology - Skills</a>
                        <a href={'#work-sec'} className={'button'}>Work Experience</a>
                        <a href={'#education-sec'} className={'button'}>Education</a>
                        <a href={'#portfolio-sec'} className={'button'}>Portfolio</a>
                        <a href={'#blog-sec'} className={'button'}>Blog</a>
                    </div>
                    <div className={'bottom'}>
                        <div className={'buttons'}>
                            <a href={'/'} className={'button active'}>Skills</a>
                            <a href={'/'} className={'button'}>Technology</a>
                            <a href={'/'} className={'button'}>Languages</a>
                        </div>

                        <div className={'techs'}>

                            {techs.map((techList)=>
                                <div className={'item'}>
                                    <div className={'left'}>
                                        <img alt="" src={techList.img}/>

                                    </div>
                                    <div className={'right'}>
                                        <h5>{techList.exp}</h5>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Techs;