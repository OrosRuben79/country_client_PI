import axios from "axios";
//----------------------------------------------------------------
export const GET_ALL_COUNTRY = "GET_ALL_COUNTRY";//consulta todos los countries
export const GET_NAME_COUNTRY = "GET_NAME_COUNTRY";//consulta de country por name (query)
export const GET_DETAIL_COUNTRY = "GET_DETAIL_COUNTRY";

export const GET_ACTIVITY = "GET_ACTIVITY";// consulta todas las actividades
export const POST_ACTIVITY = "POST_ACTIVITY";//envia datos de un nuevo countri a la base

// export const POST_COUNTRY = "POST_COUNTRY";//envia datos de un nuevo countri a la base
// export const EDIT_COUNTRY = "EDIT_COUNTRY";//modifica un country creado
// export const EDIT_ACTIVITY = "EDIT_ACTIVITY";//modifica un country creado
// export const DELETE_COUNTRY = "DELETE_COUNTRY";// ELIMINA UN COUNTRY CREADO
// export const DELETE_ACTIVITY = "DELETE_ACTIVITY";//elimina una actividad


// export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";// filtra los ciountry pot su name
// export const ORDER_BY_NAME = "ORDER_BY_NAME";// ordenamiento de forma ascendente/descendente por EL name
// export const ORDER_BY_POPULATION = "ORDER_BY_POPULATION";// ordenamiento de forma descendente//ascendente por el ID


export const SET_ERROR = "SET_ERROR";// //captura el error

export const RESET_COUNTRY = "RESET_COUNTRY";// limpia el array de country
export const CLEAR_HOME = "CLEAR_HOME";//limpia el home
export const CLEAR_DETAIL = "CLEAR_DETAIL";//limpia el detalle
export const CLEAN_FIND = "CLEAN_FIND";//

export const SEARCH_COUNTRY_FOR_ACTIVITY = " SEARCH_COUNTRY_FOR_ACTIVITY"//buscador de paises para agregar a la actividad creada
export const CLEAN_ACTIVITY_SEARCHER = "CLEAN_ACTIVITY_SEARCHER "//limpiador del buscador de paises


const URL_SERVER = process.env.URL_SERVER || "http://localhost:3001/countries"

//----------------------------------------------------------------
export function getAllCountry() {
    return async function (dispatch) {
        try {
            const res = await axios.get(`${URL_SERVER}/countries`)
            return dispatch({ type: "GET_ALL_COUNTRY", payload: res.data })
        } catch (error) {
            return dispatch({ type: SET_ERROR, payload: true, })
        }
    }
};
export function getNameCountry(name) {
    return async function (dispatch) {
        try {
            const res = await axios.get(`${URL_SERVER}/countries?name=${name}`)
      
            return dispatch({ type: "GET_NAME_COUNTRY", payload: res.data })

        } catch (error) {
            return dispatch({ type: SET_ERROR, payload: true });
        }
    };
};
export function getDetailCountry(id) {
    return async function (dispatch) {
        try {
            const res = await axios.get(`${URL_SERVER}/countries?name=${id}`)
            dispatch({ type: "GET_DETAIL_COUNTRY", payload: res.data[0] })
        } catch (error) {
            return dispatch({ type: SET_ERROR, payload: true });
        }    
    }
};
export function getActivity() {
    return async function (dispatch) {
        try {
            const json = await axios.get(`${URL_SERVER}/activities`);
            return dispatch({ type: "GET_ACTIVITY", payload: json.data });
        } catch (error) {
            return dispatch({ type: SET_ERROR, payload: true });
        }
    }
};
// export function postCountry(dataCountry) {
//     return async function (dispatch) {
//         try {
//             const json = await axios.post("http://localhost:3001/countries", dataCountry);
//             return dispatch({ type: POST_COUNTRY, payload: json.data });   
//         } catch (error) {
//             return dispatch({ type: SET_ERROR, payload: true });
//         }
       
//     };
// };
export function postActivity(data) {
    // console.log(data)
    return async function (dispatch) {
        try {
            const json = await axios.post(`${URL_SERVER}/activities`, data);
             return json
        } catch (error) {
            console.log(error)
            // return dispatch ({ type: SET_ERROR, payload: true });
        }    
    };
};
// export function putCountry(countryId, countryEditado) {
//     return async function (dispatch) {
//         try {
//             const json = await axios.put(`http://localhost:3001/countries/edit/${countryId}`, countryEditado);
//             return dispatch({type: EDIT_COUNTRY, payload: json.data });
//         } catch (error) {
//             console.log("No puede modificar el Country seleccionado", error);
//         }
//     };
// };
// export function putActivity(name, activityEditado) {
//     return async function (dispatch) {
//         try {
//             const json = await axios.put(`http://localhost:3001/activities/edit/${name}`, activityEditado);
//             return dispatch({type: EDIT_COUNTRY, payload: json.data });
//         } catch (error) {
//             console.log("No puede modificar la actividad seleccionada", error);
//         }
//     };
// };
// export function deleteCountry(countryId) {
//     return async function (dispatch) {
//         try {
//             await axios.delete(`http://localhost:3001/countries/delete/${countryId}`);
//             return dispatch({  type: DELETE_COUNTRY });
//         } catch (error) {
//             console.log("No se puedo eliminar el country seleccionado", error);
//         }
//     };
// };
// export function deleteActivity(activityname) {
//     return async function (dispatch) {
//         try {
//             await axios.delete(`http://localhost:3001/activities/delete/${activityname}`);
//             return dispatch({ type: DELETE_ACTIVITY });
//         } catch (error) {
//             console.log("No se puedo eliminar la actividad seleccionado", error);
//         }
//     };
// };



export function setError(payload) {
    return {
        type: SET_ERROR,
        payload,
    };
};

export function clearDetail() {
    return {
      type: CLEAR_DETAIL,
    };
};
export function clearHome() {
    return {
        type: CLEAR_HOME,
    };
};
export function resetCountry(){
    return {
        type: RESET_COUNTRY,
      }; 
};
export const cleanFind = () => {
    return { type: CLEAN_FIND };
  };



  export const searchCountryForActivity = (name) => {
    return async (dispatch) => {
      try {
        const data = await axios.get(
            `${URL_SERVER}/countries?name=${name}`
        );
        console.log(data)
        return dispatch({
          type: SEARCH_COUNTRY_FOR_ACTIVITY,
          payload: data.data,
        });
      } catch (error) {
        return dispatch({
          type: SET_ERROR,
          payload: true,
        });
      }
    };
  };
 export const cleanActiviySearcher = () => {
    return { type: CLEAN_ACTIVITY_SEARCHER };
  };




