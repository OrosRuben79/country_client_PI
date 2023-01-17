import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../home/Home.module.css"
import { getAllCountry, getActivity } from "../../redux/actions/index";
import Navbar from "../navbar/Navbar";
import Paginado from "../paginado/Paginado";
import Error from "../error/Error";
import Loader from "../loader/Loader";


const functionContinetFilter = (arr, continet) => {
  if (continet === "default") return arr;
  return [...arr].filter(
    (c) => c.continent === continet // 'nort america', 'afica'
  );
};

const sort = (arr, filterby) => {
  if (filterby === "default") return arr;
  if (filterby === "asc") return [...arr].sort((a, b) => a.name.localeCompare(b.name));
  if (filterby === "desc") return [...arr].sort((b, a) => a.name.localeCompare(b.name));
  if (filterby === "ascid") return [...arr].sort((b, a) => a.population - b.population);
  if (filterby === "descid") return [...arr].sort((a, b) => a.population - b.population);
};



const Home = () => {

  // Local STATES
  const [fillter, setFilter] = useState({
    filterOutPut: [],
    continents: "default",
    filterBy: "default",
  });

  const [options, setOptions] = useState({
    page: 0,
    pages: [1, 2, 3, 4, 5],
    next: false,
    back: true,
  });
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)


  const dispatch = useDispatch();
  const countries = useSelector((state) => state.allCountries);
  const active = useSelector((state) => state.activity)
console.log(active)

  useEffect(() => {
    setLoading(true)
   
    dispatch(getAllCountry());
    dispatch(getActivity())

    setLoading(false);
    setError(error)
  }, [dispatch, error]);


  useEffect(() => {
    setFilter({
      ...fillter,
      filterOutPut: [...countries],
    });
    // eslint-disable-next-line 
  }, [countries]);

  // Select Contient Input
  const handleContinent = (e) => {
    setOptions({
      ...options,
      page: 0,
      pages: [1, 2, 3, 4, 5],
      next: false,
      back: true,
    });
    const filter = functionContinetFilter([...countries], e.target.value);
    setFilter({
      ...fillter,
      filterOutPut: sort(filter, fillter.filterBy),
      continents: e.target.value,
    });
  };

  // Select FilterBy Input
  const handleFillter = (e) => {
    const filter = functionContinetFilter(
      [...countries],
      fillter.continents
    );
    setFilter({
      ...fillter,
      filterOutPut: sort(filter, e.target.value),
      filterBy: e.target.value,
    });
  };



//   const filterActivity = () {
// const filact = active.map(e =)
//   }

  return (
    <>
    <Navbar />
      <div className={styles.home}>
        <div className={styles.filters}>
          <select name="sort" onChange={handleFillter} className={styles.filterOrder}>
            <option value="default">Order Countries</option>
            <option value="asc">Sort A-Z</option>
            <option value="desc">Sort Z-A</option>
            <option value="ascid">Population-asc </option>
            <option value="descid">Population-desc</option>
          </select>

          <select onChange={handleContinent} name="continent" className={styles.filterContinent}>
            <option value="default">Filter Continets</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="Oceania">Oceanía</option>
            <option value="Europe">Europe</option>
            <option value="Antarctica">Antarctica</option>
            <option value="South America">South América</option>
            <option value="North America">North América</option>
          </select>

          <select  name="active" >
          
          {
             active.map((a) => (
            <option key={a.id} value={a.name}>{a.name}</option>

          ))
            }
          </select>
        </div>
      </div>
      <div>
      </div>
      { error ? <Error/> : loading && <Loader/>}
        <Paginado filterOutPut={fillter.filterOutPut} resetPage={options} />
    </>
  )
}

export default Home;
