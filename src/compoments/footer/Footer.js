import React, {Component} from 'react';
import './Footer.css'
import logo from './logo1.png'
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


class Footer extends Component {
    render() {
        return (
            <div className={'footer'}>
                <div className={'container'}>
                    <footer className={'footer'}>
                        <div className={'top'}>
                            <div className={'left'}>
                                <img src={logo}/>
                            </div>
                            <div className={'right'}>
                                <div className={'buttons'}>
                                    <a className={'button'}>Features</a>
                                    <a className={'button'}>Log In</a>
                                    <a className={'button'}>Get Your Free Page</a>
                                </div>
                                <div className={'links'}>
                                    <a className={'link'}><LinkedInIcon/></a>
                                    <a className={'link'}><InstagramIcon/></a>
                                    <a className={'link'}><TwitterIcon/></a>

                                </div>
                            </div>
                        </div>
                        <div className={'bottom'}>
                            <div className={'part'}>
                                <h5 className={'footer-bt-tx'}>Copyrights 2020 DevTalent</h5>
                            </div>
                            <div className={'part'}>
                                <a className={'footer-bt-tx mg-right'}>Terms of Services</a>
                                <a className={'footer-bt-tx'}>Privacy Policy</a>
                            </div>

                        </div>
                    </footer>
                </div>
            </div>
        );
    }
}

export default Footer;