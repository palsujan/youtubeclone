import React from 'react'
import Styles from './Video.module.scss'
import classNames from 'classnames'
import { Avatar } from '@material-ui/core'
export const Video = ({image, title,channel,views, timestamp, channelImages}) => {
    return (
        <div className={Styles.main}>
           <img src={image} alt=""/>
           <div className={Styles.info}>
               <Avatar className ={Styles.avatar}  alt={channel} src={channelImages}/>
            </div> 
            <div className={Styles.text}>
                <h4>{title}</h4>
                <p>{channel}</p>
                <p>{views}.{timestamp}</p>
            </div>
        </div>
    )
}
