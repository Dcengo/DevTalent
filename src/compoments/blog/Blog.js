import React, {Component} from 'react';
import './Blog.css'

class Blog extends Component {
    render() {
        return (
            <div id={'blog-sec'} className={'blog'}>
                <div className={'container'}>
                    <div className={'exp-title'}>
                        <div className={'circle'}></div>
                        <h5 className={'title'}>Blog</h5>
                    </div>
                    <div className={'blog-items'}>
                        <div className={'item hv-shadow'}>
                            <div className={'top'}>
                                <img src={'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}/>
                            </div>
                            <div className={'bottom'}>
                                <h5 className={'title'}>How to get Featured On Awesome Website</h5>
                                <div className={'bt'}>
                                    <h5 className={'left'}>Tutorial</h5>
                                    <h5>11.05.2020</h5>
                                </div>
                            </div>
                        </div>
                        <div className={'item hv-shadow'}>
                            <div className={'top'}>
                                <img src={'https://images.pexels.com/photos/3194523/pexels-photo-3194523.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}/>
                            </div>
                            <div className={'bottom'}>
                                <h5 className={'title'}>How to get Featured On Awesome Website</h5>
                                <div className={'bt'}>
                                    <h5 className={'left'}>Tutorial</h5>
                                    <h5>11.05.2020</h5>
                                </div>
                            </div>
                        </div>
                        <div className={'item hv-shadow'}>
                            <div className={'top'}>
                                <img src={'https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}/>
                            </div>
                            <div className={'bottom'}>
                                <h5 className={'title'}>How to get Featured On Awesome Website</h5>
                                <div className={'bt'}>
                                    <h5 className={'left'}>Tutorial</h5>
                                    <h5>11.05.2020</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'load-more margin-tp'}>
                        <a className={'button'}>Load More Posts</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Blog;