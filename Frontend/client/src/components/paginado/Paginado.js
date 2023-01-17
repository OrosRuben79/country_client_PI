import React, { useState, useEffect } from "react";
import styles from "../paginado/Paginado.module.css";
import CardCountry from "../cardCountry/CardCountry";
import izq from "../paginado/img/chevron-left.png";
import der from "../paginado/img/chevron-right.png";
import Error from "../error/Error";
import Loader from "../loader/Loader";



const functionPages = (arr) => {
  //                     0             1
  //ArrPages =  [ [c1,c2,c3...c9],[c10,c11... c19] , ]
  const ArrPages = [];
  let aux = [];
  const nine = [...arr].splice(0, 9);
  ArrPages.push(nine);
  const rest = [...arr].splice(9, arr.length - 1);
 //
  rest.forEach((c, i) => {
    aux.push(c);
 // 
    if ((i + 1) % 10 === 0) {
    //
      ArrPages.push(aux);
      aux = [];
    }
    if (rest.length - 1 === i) ArrPages.push(aux);
  });
 //
  return ArrPages;
};

const Paginado = ({ filterOutPut, resetPage }) => {

  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [options, setOptions] = useState({
    page: 0,
    pages: [1, 2, 3, 4, 5],
    next: false,
    back: true,
  });
  
  useEffect(() => {
    
    setLoading(true)
    setOptions(resetPage);
    setLoading(false)
    setError() 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetPage]);
  
  const pages = functionPages(filterOutPut);

  const handlePreview = () => {
    options.page < 1 && setOptions({ ...options, back: true });

    if (options.pages[0] > 1) {
      return setOptions({
        ...options,
        page: options.page - 1,
        pages: options.pages.map((e) => e - 1),
        next: false,
      });
    }

    if (options.page + 1 > 1) {
      return setOptions({
        ...options,
        page: options.page - 1,
        next: false,
      });
    }
  };

  const handleNext = () => {
    options.page < pages.length && setOptions({ ...options, next: true });

    if (options.pages[4] < pages.length)
      return setOptions({
        ...options,
        page: options.page + 1,
        pages: options.pages.map((e) => e + 1),
        back: false,
      });
    if (options.page < pages.length - 1)
      return setOptions({
        ...options,
        page: options.page + 1,
        back: false,
      });
    };
    
    const handeClick = (e) => {
      setOptions({
        ...options,
        page: parseInt(e.target.textContent) - 1,
      });
    };
    
    return (
      <>
         { error ? <Error/> : loading && <Loader/>}
      <div className={styles.card}>
        <div className={styles.cards}>
          {pages[options.page] &&
            pages[options.page].map((c) => (
              <CardCountry
                key={c.id}
                id={c.id}
                flag={c.flag}
                name={c.name}
                continent={c.continent}
                population={c.population}
              />
            ))}
        </div>
        <br />

        <div className={styles.buttons}>
          {pages.length > 0 && (
            <button
              disabled={options.back}
              onClick={handlePreview}
              className={styles.buttones}
            >
              <img src={izq} alt="izq" className={styles.izq} onClick={handlePreview} />
            </button>
          )}

          {

            /* {options.pages && options.pages.map((p,i) => {
              let camPage = "";
              if(p === options.page + 1){
                camPage = styles.active;
              }
              return ( pages.length > i && (
                <button
                key={p}
                className={styles.camPage}
                onClick={handeClick}
              >{options.pages[i]}{""}
              </button>
              ))
            })
            } */}

          {pages.length > 0 && (
            <button
              onClick={handeClick}
              className={styles.buttones}
            >{options.pages[0]}
            </button>
          )}
          {pages.length > 1 && (
            <button
              onClick={handeClick}
              className={styles.buttones}
            >{options.pages[1]}
            </button>
          )}
          {pages.length > 2 && (
            <button
              onClick={handeClick}
              className={styles.buttones}
            >{options.pages[2]}
            </button>
          )}
          {pages.length > 3 && (
            <button
              onClick={handeClick}
              className={styles.buttones}
            >{options.pages[3]}
            </button>
          )}
          {pages.length > 4 && (
            <button
              onClick={handeClick}
              className={styles.buttones}
            >{options.pages[4]}
            </button>
          )}

          {pages.length > 0 && (
            <button
              disabled={options.next}
              onClick={handleNext}
              className={styles.buttones}
            >
              <img src={der} alt="izq" className={styles.izq} onClick={handlePreview} />
            </button>
          )}
        </div>
        <br />
        <div>
          <label>{options.page + 1} actual </label>
        </div>
        <br />
        <br />
        <br />
       
      </div>
    </>
  );
}

export default Paginado;