
import React, { useEffect, useState } from "react";
import {
  getActivity,
  postActivity,
  getAllCountry,
  // setError
} from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import styles from "../formActivity/FormActivity.module.css";
import paiss from "../formActivity/img/imagen2.png";
import izq from "../formActivity/img/chevron-left2.png";

const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]/;

function validateForm(input) {
  const error = {};
  if (!input.name.trim() || input.name.length < 3) {
    error.name = "The name is required and must be greater than 3 letters";
  }else if (!regexName.test(input.name.trim() )){
    error.name = "no puede"
  }
  
  if (input.difficulty === "" || input.difficulty === "0") {
    error.difficulty  = "The field must contain a valid value";
  }

  if (input.season === "" ||  input.season === "vacio") {
    error.season = "The field must contain a valid value";
  }

  if (!input.inicio.trim() ){
    error.inicio = "The date cannot be less than the current date";
  }
  if (Date.parse(input.inicio) < Date.now()){
    error.inicio = "The date cannot be earlier than the current one";
  }
  if (!input.fin.trim() ){
    error.fin  = "You must enter a valid end date";
  }
  if (Date.parse(input.fin) <= Date.parse(input.inicio)){
    error.fin = "The date cannot be less than or equal to the start date";
  }
  if (input.countries === "") {
    error.countries = "You must assign a country to the activity";
  }

  return error;
};

//  const ExpresionesRegulares =  () => {
   
//     regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/,
//     regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/,
//     regexComments = /^.{1,255}$/,
//  };

const FormActivity = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const [input, setInput] = useState({
    "name": "",
    "difficulty": "",
    "season": "",
    "inicio": "",
    "fin": "",
    "countries": "",
  });

  const [error, setError] = useState({});

  useEffect(() => {
    
    dispatch(getActivity());
    dispatch(getAllCountry())
 
  }, [dispatch]);

 

  const actyCountry = useSelector((state) => state.allCountries);
  

  const handleChange = (ev) => {
    setInput({
      ...input,
      [ev.target.name]: ev.target.value,
    });
 
  };

  const handleBlur = (ev) => {
    handleChange(ev);
    setError(validateForm(input))
  }

  let btnDisabled = 
  !(input.name.length &&
    input.difficulty &&
    input.season.length &&
    input.inicio &&
    input.fin &&
    input.countries.length &&
    !error.input
    )

  const handleSubmit = (ev) => {
    ev.preventDefault();
    dispatch(postActivity(input));
    alert("Activity created successfully", input);
    history.push("/home");

  };


  return (
    <div>
      
      <div>
        <div className={styles.navBar}>
          <Link to="/home">
            <img src={izq} alt="izq"></img>
            {/* <button className={styles.buttonHome}>Return Home</button> */}
          </Link>

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
            <img src={paiss} alt="paiss" className={styles.paiss} />
            <div className={styles.redTitle}>
              <img src={paiss} alt="count" className={styles.countNav}></img>
              <div className={styles.title}>Create your Activity</div>
            </div>

            <div className={styles.form}>
              <form onSubmit={handleSubmit}>
                <div className={styles.izq}>
                  <div>
                    <div><strong>Name:</strong></div>
                    <input
                      type="text"
                      name="name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Name"
                      className={styles.inputs}
                    />
                    {error.name && (
                      <span className={styles.error}>{error.name}</span>
                    )}
                  </div>

                  <div>
                    <div>Difficulty:</div>
                    <select name="difficulty" onChange={handleChange} onBlur={handleBlur} className={styles.inputs}>
                      <option value={0}>Default</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                    </select>
                    {error.difficulty && (
                      <div className={styles.error}>{error.difficulty}</div>
                    )}

                  </div>

                  <div>
                    <div>Season:</div>
                    <select name="season" onChange={handleChange} onBlur={handleBlur} className={styles.inputs}>
                      <option value={"vacio"}>Default</option>
                      <option value={"Spring"}>Spring</option>
                      <option value={"Summer"}>Summer</option>
                      <option value={"Autumm"}>Autumm</option>
                      <option value={"Winter"}>Winter</option>
                    </select>
                    {error.season && (
                      <div className={styles.error}>{error.season}</div>
                    )}
                  </div>

                  <div>
                    <div><strong>Duration:</strong></div>
                    <br />
                    <div>
                      <div>Start date:</div>
                      <input
                        type="date"
                        name="inicio"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="inicio"
                        className={styles.inputs}
                      />
                       {error.inicio && (
                      <div className={styles.error}>{error.inicio}</div>
                    )}
                      <br />
                      <div>Ending date :</div>
                      <input
                        type="date"
                        name="fin"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="fin"
                        className={styles.inputs}
                      />
                        {error.fin && (
                      <div className={styles.error}>{error.fin}</div>
                    )}
                    </div>
                  </div>
                  <div>
                    <div><strong>Select Country:</strong></div>
                    <select name="countries" className={styles.inputs} onChange={handleChange} onBlur={handleBlur} >
                      {
                        actyCountry.map((c) => (
                          <option key={c.id} value={c.id}>{c.name}</option>

                        ))
                      }
                    </select>
                    {error.countries && (
                      <div className={styles.error}>{error.countries}</div>
                    )}
                  </div>
                  <div>
                    <button
                      type="submit"
                      disabled={btnDisabled}
                      className={styles.button}
                    >
                      Create
                    </button>
                  </div>
                </div>
              </form>
              <div className={styles.der}>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default FormActivity

