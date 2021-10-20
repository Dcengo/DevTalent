import React, { useState} from 'react';
import './Portfolio.css'
import list from './Portfolio.json'


const Portfolio = props =>  {
    const [portfolios] = useState(list);
        return (
            <div id={'portfolio-sec'} className={'portfolio'}>
                <div className={'container'}>
                    <div className={'exp-title'}>
                        <div className={'circle'}></div>
                        <h5 className={'title'}>Portfolios</h5>
                    </div>
                    <div className={'portfolio-main'}>

                        {portfolios.map((list)=>

                            <div className={'item hv-shadow'}>
                                <div className={'top'}>
                                    <img src={list.img}/>
                                    </div>
                                    <div className={'bottom'}>
                                    <h5 className={'text'}>{list.name}</h5>
                                </div>
                            </div>
                        )}


                    </div>
                    <div className={'load-more'}>
                        <a className={'button'}>Load More Posts</a>
                    </div>
                </div>
            </div>
        );

}

export default Portfolio;