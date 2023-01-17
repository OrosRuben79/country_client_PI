import React from 'react'
import styles from '../loader/Loader.module.css'
import img from '../loader/img/gifloading.gif'

const Loader = () => {
  return (
    <div>
      <h3>........Cargando</h3>
      <img className={styles.image} src={img} alt="img-country" />
    </div>
  )
}

export default Loader