import React from 'react'
import { Link } from "react-router-dom";
import styles from "../cardCountry/CardCountry.module.css";

const CardCountry = ({ id, name, flag, continent, population }) => {
  return (
    <>

      <div className={styles.cards}>
        <div className="col-sm-4 col-md-4 col-lg-4">
          <div className={styles.cardbody }>
            <Link to={`/countries/${id}`} >
              <div className={styles.image}>
                <img className={styles.flagCard} src={flag} alt="img-country" />
              </div>
            </Link>
            <h3>{name}</h3>
            <div><span>Continent: {continent}</span></div>
            <div><span>Population: {population}</span></div>
          </div>
          <div  className={styles.cardbutton}>
            <Link to={`/countries/${id}`}>
              <button
                type="submit"
                className={styles.button}
              > go to detail</button>
            </Link>
              <Link to="/formulario">
                <button
                  type="submit"
                  className={styles.button}
                > go to activity</button>
              </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardCountry
