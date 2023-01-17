import React from 'react'
import img from '../landindPage/img/worldglobe.gif'
import styles from '../landindPage/LandingPage.module.css'
import { Link } from 'react-router-dom'
import linkedin from '../landindPage/img/linkedin.png'
import github from '../landindPage/img/github.png'


export const LandingPage = () => {
  return (
    <>
      <div className={styles.background}>
        <div className={styles.contTile}>
          <div className={styles.CardTitle}>
            <div className={styles.Title}>Welcome to your web Countries!</div>
            <div className={styles.parrafo}>
              Here you can find all the information of your favorite countries. You can also have fun creating a new country and its tourist activities! Hope you like it and have fun!!!! To enjoy
            </div>
            <Link to="/home">
              <button className={styles.button}>Let's go !</button>
            </Link>
          </div>
          <div className={styles.links}>
            <a
              href="https://www.linkedin.com/in/ruben-oros-02616121a/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img src={linkedin} alt="linkedin" className={styles.linkedin} />
            </a>
            <a
              href="https://github.com/OrosRuben79"
              target="_blank" rel="noreferrer"
            >
              {" "}
              <img src={github} alt="github" className={styles.github} />
            </a>
          </div>
        </div>
        <div className={styles.contGlobo}>
          <img src={img} alt="LandingPage" />
        </div>
      </div>
    </>
  )
}
