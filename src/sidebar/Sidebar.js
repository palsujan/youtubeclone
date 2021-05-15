import React from 'react'
import classNames from 'classnames';
import Styles from './Sidebar.module.scss';
import { Sidebarmenu } from '../sidebar_menu/Sidebarmenu';

import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const Sidebar = () => {
    return (
        <div className={Styles.main}>
            <Sidebarmenu selected Icon={HomeIcon} title='Home'/>
            <Sidebarmenu Icon={WhatshotIcon} title='Trnding'/>
            <Sidebarmenu Icon={SubscriptionsIcon} title='Subscriptions'/>
            <hr/>
            <Sidebarmenu Icon={VideoLibraryIcon} title='Library'/>
            <Sidebarmenu Icon={HistoryIcon} title='history'/>
            <Sidebarmenu Icon={OndemandVideoIcon} title='Your Videos'/>
            <Sidebarmenu Icon={WatchLaterIcon} title='Watch Later'/>
            <Sidebarmenu Icon={ThumbUpAltIcon} title='Liked videos'/>
            <Sidebarmenu Icon={ExpandMoreIcon} title='Show More'/>
        </div>
    )
}

export default Sidebar
