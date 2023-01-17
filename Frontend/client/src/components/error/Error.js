import React from "react";
import { useDispatch } from "react-redux";
import { getAllCountry, getActivity, setError } from "../../redux/actions/index";
 import styles from "../error/Error.module.css";

const Error = () => {

    const dispatch = useDispatch();

    const handleHome = (ev) => {
      ev.preventDefault();
      dispatch(setError(false));
      dispatch(getAllCountry());
      dispatch(getActivity());
    }

  return (
    <div className={styles.contError}>
    <h1>ESTE ES EL COMPONENTE ERROR </h1>
    <div className={styles.texto}>
      <div className={styles.text}>Oh no!</div>
      <div className={styles.parrafo}>Can't find what you're looking for</div>
    </div>
    <button onClick={(e) => handleHome(e)} className={styles.button}>
      Return to home
    </button>
  </div>
  )
}


export default Error