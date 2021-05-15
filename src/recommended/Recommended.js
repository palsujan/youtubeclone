import React from 'react'
import classNames from 'classnames';
import Styles from './Recommended.module.scss'
import { Video } from '../video/Video';

const videoData = [
    {   
        id:0,
        title:"Become a Web Developer in 10 Minutes | 2019/2020",
        views:"2.3M Views",
        timestamp:"3 days ago",
        channelImage:"https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s68-c-k-c0x00ffffff-no-rj",
        channel:"Sujen Tech",
        image:"https://i.ytimg.com/vi/NT299zIk2JY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqZPjIgBJ_NTf7TnAGCXmQQ5C85Q"
    },
    {
        id:1,
        title:"Become a Web Developer in 10 Minutes | 2019/2020",
        views:"2.3M Views",
        timestamp:"3 days ago",
        channelImage:"https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s68-c-k-c0x00ffffff-no-rj",
        channel:"Sujen Tech",
        image:"https://i.ytimg.com/vi/NT299zIk2JY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqZPjIgBJ_NTf7TnAGCXmQQ5C85Q"
    },
    {
        id:2,
        title:"Become a Web Developer in 10 Minutes | 2019/2020",
        views:"2.3M Views",
        timestamp:"3 days ago",
        channelImage:"https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s68-c-k-c0x00ffffff-no-rj",
        channel:"Sujen Tech",
        image:"https://i.ytimg.com/vi/NT299zIk2JY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqZPjIgBJ_NTf7TnAGCXmQQ5C85Q"
    },
    {   
        id:3,
        title:"Become a Web Developer in 10 Minutes | 2019/2020",
        views:"2.3M Views",
        timestamp:"3 days ago",
        channelImage:"https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s68-c-k-c0x00ffffff-no-rj",
        channel:"Sujen Tech",
        image:"https://i.ytimg.com/vi/NT299zIk2JY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqZPjIgBJ_NTf7TnAGCXmQQ5C85Q"
    }
    ,{
        id:4,
        title:"Become a Web Developer in 10 Minutes | 2019/2020",
        views:"2.3M Views",
        timestamp:"3 days ago",
        channelImage:"https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s68-c-k-c0x00ffffff-no-rj",
        channel:"Sujen Tech",
        image:"https://i.ytimg.com/vi/NT299zIk2JY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqZPjIgBJ_NTf7TnAGCXmQQ5C85Q"
    }

]

const Recommended = () => {
    return (
        <div className={Styles.main}>
            <h2>Recommended Videos</h2>
            <div className={Styles.videos}>
               {videoData.map(video=>
                <div key ={video.id} className={Styles.videoWrap}>
                     <Video 
                        image ={video.image}
                        title ={video.title}
                        channel ={video.channel}
                        views = {video.views}
                        timestamp ={video.timestamp}
                        channelImages = {video.channelImages}
                        />
                </div>
                )}
            </div>
        </div>
    )
}

export default Recommended
