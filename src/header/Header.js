import React from 'react';
import classNames from "classnames";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import Styles from './Header.module.scss';

import youtubeLogo from '../assets/images/youtubeLogo.png';
import profileAvatar from '../assets/images/avatar.jpg';

const Header = () => {
    return (
        <div className={classNames(Styles.main)}>
            <div className={Styles.row}>
                <div className={classNames(Styles.col, Styles.leftBox)}>
                    <MenuIcon/>
                    <div className={Styles.logo}>
                        <img src={youtubeLogo} alt=""/>
                    </div>
                </div>
            
                <div className={classNames(Styles.col, Styles.centerBox)}>
                    <div className={Styles.inputWrap}>
                        <input type="text" placeholder="Search"/>
                        <SearchIcon className={Styles.search}/>
                    </div>
                          
                </div>           
            
                <div className={classNames(Styles.col, Styles.rightBox)}>
                    <span><VideoCallIcon/></span>
                    <span><AppsIcon/></span>
                    <span><NotificationsIcon/></span>
                    <span><Avatar 
                        alt="Hiraj Dey"
                        src={profileAvatar}
                    />
                    </span>
                    
                </div>
            </div>
        </div>
    )  
}

export default Header;
