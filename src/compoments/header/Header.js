import React from 'react';
import './Header.css';
import Logo from './logo.png';
import MenuIcon from '@material-ui/icons/Menu';

const Header = () => {
    return (
        <div className={'header-main'}>
            <div className={'container'}>
                <header className={'header'}>
                    <div className={'logo'}>
                        <img src={Logo}/>
                    </div>
                    <div className={'right'}>
                        <a href={'/'} className={'text'}>Features</a>
                        <a href={'/'} className={'text'}>Log In</a>
                        <a href={'/'} className={'button'}>Get Your Free Page</a>
                    </div>
                    <a className={'hamburger-mbl mobile-wd'}>
                        <MenuIcon/>
                    </a>
                </header>
            </div>

        </div>
    );
};

export default Header;