import React, {useState} from 'react';
import styles from './TrainersProfile.module.css';

const TrainersProfile = ({picture, children}) => {
    return (
        <div className={styles.trainersProfileContainer}>
            <img src= {picture} alt='image'/>
            <div className = {styles.trainersInfo}>
                {children}
            </div>
        </div>
    )
}
export default TrainersProfile;