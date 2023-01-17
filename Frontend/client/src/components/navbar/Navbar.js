import React from 'react'
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
    getAllCountry,
    setError,
} from "../../redux/actions/index";
import SearchBar from "../searchbar/Search";
import styles from "../navbar/Navbar.module.css";
import logo from "../home/img/CountryNew.png";
import plus from "../home/img/plus.png";
import recargar from "../home/img/refresh.png"

const Navbar = () => {
    const dispatch = useDispatch();

   
    // **************
    // useEffect((name) => {
    //     dispatch(orderByName(name))
    // }, [dispatch])

    function handleClick(e) {
        e.preventDefault();
        dispatch(setError(false));
        dispatch(getAllCountry());
    }
    // function handleFilterS(e) {
    //     const todos = e.target.value
    //     if (todos === "Asia" ||
    //         todos === "Africa" ||
    //         todos === "Oceania" ||
    //         todos === "Europe" ||
    //         todos === "Antarctica" ||
    //         todos === "South America" ||
    //         todos === "North America") {
    //         e.preventDefault();
    //         dispatch(resetCountry())
    //         return dispatch(filterByContinent(todos));
    //     }
    //     if (todos === "all") {
    //         e.preventDefault();
    //         dispatch(getAllCountry());
    //     }
    // }

    // function handleOrder(ev) {
    //     if (ev.target.value === "asc" || ev.target.value === "desc") {
    //         ev.preventDefault();
    //         dispatch(orderByName(ev.target.value));
    //     }
    //     if (ev.target.value === "ascid" || ev.target.value === "descid") {
    //         ev.preventDefault();
    //         dispatch(orderByPopulation(ev.target.value));
    //     }

    //     if (ev.target.value === "default") {
    //         ev.preventDefault();
    //         dispatch(getAllCountry());
    //     }
    // }

    return (
        <>
            <div className={styles.contHome}>
                <div>
                    <div className={styles.navBar}>
                        <div className={styles.navIzq}>
                            <Link to="/">
                                <img src={logo} alt="logo" className={styles.logo}></img>
                            </Link>
                        </div>
                        <nav>
                            <ul className={styles.links}>
                                <Link to="/home" className={styles.active}>
                                    <li ><span>HOME</span></li>
                                </Link>
                                <Link to="/formulario" className={styles.active}>
                                    <li ><span>ACTIVITY</span></li>
                                </Link>
                            </ul>
                        </nav>
                        <SearchBar />
                        <div className={styles.navDer}>
                            <Link to="/formulario2">
                                <img src={plus} alt="plus" className={styles.plus}></img>
                            </Link>
                            <button
                                onClick={handleClick}
                                className={styles.buttonRec}
                            >
                                <img
                                    src={recargar}
                                    alt="recargar"
                                    className={styles.recargar}
                                ></img>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar