import React from 'react'
import '../assets/Style.css'
import styles from '../assets/Style.module.css'
import classnames from 'classnames'

export default class Style extends React.Component{
    render(){
        const isShow = false
        return (
            <div className={`demo-style ${isShow ? ' ' + styles.demoStyleSiblings : ''}`} style={{backgroundColor:'red'}}>
                Đây là components demo style React
                 {/* <div className={`${styles.demoStyle} ${styles.demoStyleSiblings}`}> */}
                <div className={ classnames([styles.demoStyle, {[styles.demoStyleSiblings]:isShow}])}>truog quoc nhut 
                <div className={styles.demoStyleChild}>thuong</div>
                </div>

            </div>
        )
    }

}