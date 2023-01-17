import {
    GET_ALL_COUNTRY,
    GET_NAME_COUNTRY,
    GET_DETAIL_COUNTRY,
    GET_ACTIVITY,
    POST_ACTIVITY,
    // POST_COUNTRY,
    // EDIT_COUNTRY,
    // EDIT_ACTIVITY,
    // DELETE_COUNTRY,
    // DELETE_ACTIVITY,

    CLEAR_HOME,
    CLEAN_FIND,
    CLEAR_DETAIL,
    RESET_COUNTRY,
    SET_ERROR,

    SEARCH_COUNTRY_FOR_ACTIVITY,
    CLEAN_ACTIVITY_SEARCHER,

} from "../actions";

const initialState = {  
    allCountries:[],
    pages:[],
    activity: [],
    activitySearch: [],
    country: [],
    detail: {},
    error: false,   
};


function rootReducer(state = initialState, action) {
    
    switch (action.type) {  
/////METODOS GET, POST, PUT, DELETE
        case GET_ALL_COUNTRY:
            return {
                ...state,
                allCountries: action.payload, 
            };
        case GET_NAME_COUNTRY:
            return {
                 ...state,
                country: action.payload,  
            };
        case GET_DETAIL_COUNTRY:
           return {
               ...state,
               detail: action.payload,
           };

        case GET_ACTIVITY:
            return {
                 ...state,
                activity: action.payload,
            };     
        case POST_ACTIVITY:
           
                return {
                    ...state, 
                };
                
    
 ///limpiadores
        case CLEAR_HOME:
            return {
                ...state,
                country: [],
            };
           
        case CLEAN_FIND:
            return {
                ...state,
                find: [],
            };
            
        case CLEAR_DETAIL:
            return {
                  ...state,
                  detail: {},
            };
    
        case RESET_COUNTRY:
            const allcountryes = [...state.allCountries];
            return {
                 ...state,
                 allCountries: allcountryes,
            };
  
        case SEARCH_COUNTRY_FOR_ACTIVITY:
            return {
                ...state,
                activitySearch: action.payload,
              };

        case CLEAN_ACTIVITY_SEARCHER:
            return {
                ...state,
                activtySearcher: [],
              };
        
        case SET_ERROR:
            return {
                ...state,
                 error: action.payload,
                };
        
        default:
            return { ...state };
    }
}

export default rootReducer;















// case FILTER_BY_CONTINENT:
            
//     const countryFiltrados = [...state.allCountries]

//     if (action.payload === "Asia") {
//        const otro = countryFiltrados.filter((p )=> p.continent === "Asia");  
  
//        return {
//             ...state,
//             filterCountry: otro,
//             error: false,
//         };   
//     };

//      if (action.payload === "Europe") {
//         const otro = countryFiltrados.filter((p )=> p.continent === "Europe");  
   
//         return {
//              ...state,
//              filterCountry: otro,
//              error: false,
//          };   
//      };

//      if (action.payload === "Oceania") {
//         const otro = countryFiltrados.filter((p )=> p.continent === "Oceania");  
   
//         return {
//              ...state,
//              filterCountry: otro,
//              error: false,
//          };   
//      };

//      if (action.payload === "Africa") {
//         const otro = countryFiltrados.filter((p )=> p.continent === "Africa");  
   
//         return {
//              ...state,
//              filterCountry: otro,
//              error: false,
//          };   
//      };
//      if (action.payload === "Antarctica") {
//         const otro = countryFiltrados.filter((p )=> p.continent === "Antarctica");  
   
//         return {
//              ...state,
//              filterCountry: otro,
//              error: false,
//          };   
//      };

//      if (action.payload === "North America") {
//         const otro = countryFiltrados.filter((p )=> p.continent === "North America");  
   
//         return {
//              ...state,
//              filterCountry: otro,
//              error: false,
//          };   
//      };

//      if (action.payload === "South America") {
//         const otro = countryFiltrados.filter((p )=> p.continent === "South America");  
   
//         return {
//              ...state,
//              filterCountry: otro,
//              error: false,
//          };   
//      };


//     break;
      
// case ORDER_BY_NAME:
//     const bind = [...state.filterCountry];
//     const sortedCountry =
//         action.payload === "asc"
//             ? bind.sort(function (a, b) {
//                 //ascendente
//                 if (a.name > b.name) return 1;
//                 if (b.name > a.name) return -1;
//                 return 0;
//             })
//             : bind.sort(function (a, b) {
//                 //descendente
//                 if (a.name > b.name) return -1;
//                 if (b.name > a.name) return 1;
//                 return 0;
//             });
//     return {
//         ...state,
//         filterCountry: sortedCountry,
//         currentPage: 1,
//         error: false,
//     };

// case ORDER_BY_POPULATION:
      
//     if(action.payload === "ascid"){
//         const allCout = [...state.filterCountry].sort(
//             (a, b) => a.population - b.population
//           );
//           return {
//             ...state,
//             filterCountry: allCout,
//             currentPage: 1,
//             error: false,
//           };   
//     }
//     if(action.payload === "descid"){
//         const allCout = [...state.filterCountry].sort(
//             (a, b) => b.population - a.population
//           );
//           return {
//             ...state,
//             filterCountry: allCout,
//             currentPage: 1,
//             error: false,
//           };   
//     }
//     break;
  

// /////PAGINADO Y ERROR
// case SET_CURRENT_PAGE:
//     return {
//         ...state,
//         currentPage: action.payload,
//     };
