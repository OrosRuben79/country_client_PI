import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailCountry } from "../../redux/actions/index";
import CardActivity from "../cardActivity/CardActivity";
import styles from "../detailCountry/DetailCountry.module.css";
import paiss from "../detailCountry/img/imagen2.png";
import izq from "../detailCountry/img/chevron-left2.png";

const DetailCountry = ({ match }) => {
    const id = match.params.id
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getDetailCountry(id));
        return () => {
        };

    }, [dispatch, id]);


    const countries = useSelector((state) => state.detail);

    return (
        <div>
            <div>
                <div className={styles.navBar}>
                    <img src={izq} alt="izq"></img>
                    {/* <Link to="/home">
                        <button className={styles.buttonHome}>Back Home...</button>
                    </Link> */}
                    <nav>
                        <ul className={styles.links}>
                            <Link to="/home">
                                <li>HOME</li>
                            </Link>
                            <Link to="/formulario">
                                <li>ACTIVITY</li>
                            </Link>
                        </ul>
                    </nav>


                </div>
                <div className={styles.contGral}>
                    <div className={styles.cardCreate}>
                        {/* <img src={paiss} alt="paiss" className={styles.paiss} /> */}
                        <div className={styles.cardTitle}>
                            <img src={paiss} alt="country" className={styles.countryNav}></img>
                            <div className={styles.titleNav}>Detail of the selected country</div>
                        </div>

                        <div className={styles.form}>
                            <div className={styles.izq}>

                                <div className="col-sm-4 col-md-4 col-lg-4">
                                    <img src={countries.flag} alt="img-country" className={styles.images} />
                                    <div className={styles.cardflag}>
                                        <div className={styles.image}>
                                        </div>
                                        <div>
                                            <h3> Country detail  {countries.name}</h3>
                                        </div>
                                        <div className={styles.cardDetails}>
                                            <div><span>Id: {countries.id}</span></div>
                                            <div><span>Continet: {countries.continent}</span></div>
                                            <div> <span>Capital: {countries.capital}</span></div>
                                            <div> <span>Subregion: {countries.subregion}</span></div>
                                            <div><span>Area: {countries.area}</span></div>
                                            <div><span>Population: {countries.population}</span></div>
                                        <hr/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.der}>
                                <div className={styles.tituloActivity}>
                                    <div><h3>Activities {countries.name}</h3></div>
                                </div>
                                  
                                {
                                    
                                    countries.Activities && countries.Activities.length !== 0 &&
                                    countries.Activities.map((a) => (
                                        <CardActivity
                                            key={a.name}
                                            name={a.name}
                                            difficulty={a.difficulty}
                                            season={a.season}
                                            duration={a.duration}
                                        />
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DetailCountry
