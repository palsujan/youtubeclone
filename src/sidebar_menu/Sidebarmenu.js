import React from 'react'
import Styles from './Sidebarmenu.module.scss'
import classNames from 'classnames';
import { Icon } from '@material-ui/core';

export const Sidebarmenu = ({selected,Icon,title}) => {
    return (
        <div className={classNames(Styles.main, selected && Styles.selected)}>
            <span><Icon className={Styles.icon}/></span>
            <span>{title}</span>
        </div>
    )
}
