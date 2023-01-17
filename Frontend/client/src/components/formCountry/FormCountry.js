// import React, { useEffect, useState } from "react";
// import * as actions from "../../redux/actions/index";
// import { useDispatch } from "react-redux";
// import { Link, useHistory } from "react-router-dom"
// import styles from "../formCountry/FormCountry.module.css";
// import paiss from "../formCountry/img/imagen2.png";
// import izq from "../formCountry/img/chevron-left2.png";


// function validate(input) {
//     const errors = {};
//     if (!input.name || input.name.length < 3) {
//         errors.name = "Debe tener un nombre de mas de tres letras";
//     }

//     if (!input.hp || input.hp < 0 || input.hp > 150) {
//         errors.hp = "Debe tener hp entre 1 - 150";
//     }

//     if (!input.attack || input.attack < 0 || input.attack > 150) {
//         errors.attack = "Debe tener ataque entre 1 - 150";
//     }

//     if (!input.defense || input.defense < 0 || input.defense > 150) {
//         errors.defense = "Debe tener defensa entre 1 - 150";
//     }

//     if (!input.speed || input.speed < 0 || input.speed > 150) {
//         errors.speed = "Debe tener velocidad entre 1 - 150";
//     }

//     if (input.types.length === 0) {
//         errors.types = "Debe tener por lo menos un tipo";
//     }

//     return errors;
// }


// export const FormCountry = () => {

//     const dispatch = useDispatch();

//     const [errors, setErrors] = useState({});

//     const history = useHistory();

//     const [input, setInput] = useState({
//         name: "",
//         continent: "",
//         capital: "",
//         subregion: "",
//         area: "",
//         population: "",
//         image: "",
//         types: [],
//     });


//     useEffect(() => {
//         dispatch(actions.getAllCountry());
//     }, [dispatch]);

//     useEffect(() => {
//         setErrors(
//             validate({
//                 ...input,
//             })
//         );
//     }, [input]);

//     const handleChange = (ev) => {
//         setInput({
//             ...input,
//             [ev.target.name]: ev.target.value,
//         });

//         setErrors(
//             validate({
//                 ...input,
//                 [ev.target.name]: ev.target.value,
//             })
//         );
//     };

//     const handleSubmit = (ev) => {
//         ev.preventDefault();
//         dispatch(actions.postCountry(input));
//         alert("Country creado con éxito");
//         setInput({
//         name: "",
//         continent: "",
//         capital: "",
//         subregion: "",
//         area: "",
//         population: "",
//         image: "",
//         });
//         history.push("/home");
//         dispatch(actions.getAllCountry());
//     };


//     return (
//         <div>
//             <div>
//                 <div className={styles.navBar}>
//                     <img src={izq} alt="izq"></img>
//                     <Link to="/home">
//                         <button className={styles.buttonHome}>Return Home</button>
//                     </Link>
//                 </div>
//                 <div className={styles.contGral}>
//                     <div className={styles.cardCreate}>
//                         <img src={paiss} alt="paiss" className={styles.paiss} />
//                         <div className={styles.redTitle}>
//                             <img src={paiss} alt="poke" className={styles.poke}></img>
//                             <div className={styles.title}>Create your Country</div>
//                         </div>

//                         <form onSubmit={(e) => handleSubmit(e)}>
//                             <div className={styles.form}>
//                                 <div className={styles.izq}>
//                                     <div>
//                                         <div><strong>Name:</strong></div>
//                                         <input
//                                             type="text"
//                                             value={input.name}
//                                             name="name"
//                                             onChange={(e) => handleChange(e)}
//                                             placeholder="Name"
//                                             className={styles.inputs}
//                                         />
//                                         {/* {errors.name && (
//                                             <div className={styles.error}>{errors.name}</div>
//                                         )} */}
//                                     </div>

//                                     <div>
//                                         <div>Continent:</div>
//                                         <input
//                                             type="text"
//                                             value={input.name}
//                                             name="continent"
//                                             onChange={(e) => handleChange(e)}
//                                             placeholder="Continent"
//                                             className={styles.inputs}
//                                         />
//                                         {/* {errors.hp && <div className={styles.error}>{errors.hp}</div>} */}
//                                     </div>

//                                     <div>
//                                         <div>Capital:</div>
//                                         <input
//                                             type="text"
//                                             value={input.name}
//                                             name="capital"
//                                             onChange={(e) => handleChange(e)}
//                                             placeholder="Capital"
//                                             className={styles.inputs}
//                                         />
//                                         {/* {errors.defense && (
//                                             <div className={styles.error}>{errors.defense}</div>
//                                         )} */}
//                                     </div>
//                                     <div>
//                                         <div>Subregion:</div>
//                                         <input
//                                             type="text"
//                                             value={input.name}
//                                             name="subregion"
//                                             onChange={(e) => handleChange(e)}
//                                             placeholder="subregion"
//                                             className={styles.inputs}
//                                         />
//                                         {/* {errors.defense && (
//                                             <div className={styles.error}>{errors.defense}</div>
//                                         )} */}
//                                     </div>
//                                 </div>

//                                 <div className={styles.der}>

//                                     <div>
//                                         <div>
//                                             Area <small>(km)</small>:
//                                         </div>
//                                         <input
//                                             type="number"
//                                             value={input.height}
//                                             name="area"
//                                             onChange={(e) => handleChange(e)}
//                                             placeholder="area"
//                                             className={styles.inputs}
//                                         />
//                                     </div>

//                                     <div>
//                                         <div>
//                                             Population <small>(hb)</small>:
//                                         </div>
//                                         <input
//                                             type="number"
//                                             value={input.weight}
//                                             name="population"
//                                             onChange={(e) => handleChange(e)}
//                                             placeholder="population"
//                                             className={styles.inputs}
//                                         />
//                                     </div>

//                                     <div>
//                                         <div>Flag:</div>
//                                         <input
//                                             type="url"
//                                             value={input.image}
//                                             name="image"
//                                             onChange={(e) => handleChange(e)}
//                                             className={styles.inputs}
//                                             placeholder="URL"
//                                         />
//                                         {/* {errors.image && (
//                                             <div className={styles.error}>{errors.image}</div>
//                                         )} */}
//                                     </div>

//                                     <button
//                                         type="submit"
//                                         // disabled={btnDisabled}
//                                         className={styles.button}
//                                     >
//                                         Create
//                                     </button>
//                                 </div>
//                             </div>
//                         </form>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     )
// }
