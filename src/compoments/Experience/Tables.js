import React, {} from 'react';
import './Tables.css';

const Tables = props =>  {
        return (
            <div>
                <div id={'work-sec'} className={'container'}>
                    <div className={'table-dv'}>
                          <div className={'exp-title'}>
                              <div className={'circle'}></div>
                              <h5 className={'title'}>Work Experince</h5>
                          </div>
                        <div className={'ov-scroll'}>
                            <div className={'table-head'}>
                                <h5 className={'table-wd'}>Position</h5>
                                <h5 className={'table-wd'}>Company</h5>
                                <h5 className={'table-wd'}>Country</h5>
                                <h5 className={'table-wd'}>Date</h5>
                            </div>
                            <div className={'bg-w-shad'}>
                                <h5 className={'table-wd cl-purple table-item'}>Senior Software Engineer</h5>
                                <h5 className={'table-wd table-item'}>Uber LLC</h5>
                                <h5 className={'table-wd table-item'}>Netherelands</h5>
                                <h5 className={'table-wd table-item'}>Sept 2018 - Present</h5>
                            </div>
                            <div className={'bg-w-shad'}>
                                <h5 className={'table-wd cl-purple table-item'}>Web Design and Developer</h5>
                                <h5 className={'table-wd table-item'}>Creative Company</h5>
                                <h5 className={'table-wd table-item'}>Germamy</h5>
                                <h5 className={'table-wd table-item'}>Sept 2019 - Present</h5>
                            </div>
                            <div className={'bg-w-shad'}>
                                <h5 className={'table-wd cl-purple table-item'}>Backend Developer</h5>
                                <h5 className={'table-wd table-item'}>Coca Cola</h5>
                                <h5 className={'table-wd table-item'}>USA</h5>
                                <h5 className={'table-wd table-item'}>Sept 2020 - Present</h5>
                            </div>
                        </div>
                    </div>
                    <div id={'education-sec'} className={'table-dv'}>
                        <div className={'exp-title'}>
                            <div className={'circle'}></div>
                            <h5 className={'title'}>Education</h5>
                        </div>
                        <div className={'ov-scroll'}>
                            <div className={'table-head'}>
                                <h5 className={'table-wd'}>Class</h5>
                                <h5 className={'table-wd'}>School</h5>
                                <h5 className={'table-wd'}>Country</h5>
                                <h5 className={'table-wd'}>Date</h5>
                            </div>
                            <div className={'bg-w-shad'}>
                                <h5 className={'table-wd cl-purple table-item'}>B.Sc Computer Science</h5>
                                <h5 className={'table-wd table-item'}>University of Munich</h5>
                                <h5 className={'table-wd table-item'}>Netherelands</h5>
                                <h5 className={'table-wd table-item'}>Sept 2018 - Present</h5>
                            </div>
                            <div className={'bg-w-shad'}>
                                <h5 className={'table-wd cl-purple table-item'}>Hereward Unversity</h5>
                                <h5 className={'table-wd table-item'}>University of Harward</h5>
                                <h5 className={'table-wd table-item'}>Ireland</h5>
                                <h5 className={'table-wd table-item'}>Sept 2022 - Present</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

}

export default Tables;