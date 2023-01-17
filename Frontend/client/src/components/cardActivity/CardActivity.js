import React from 'react';
import styles from '../cardActivity/CardActivity.module.css';

const CardActivity = (props) => {

  return (
    <>

      <div className={styles.cardDetails}>
        <div><span>Name: {props.name}</span></div>
        <div><span>Difficulty: {props.difficulty}</span></div>
        <div><span>Season: {props.season}</span></div>
        <div><span>Duration: {props.duration}</span></div>
        <hr/>
      </div>



    </>
  );
}

export default CardActivity

