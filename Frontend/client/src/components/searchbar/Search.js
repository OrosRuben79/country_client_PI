import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { getNameCountry, cleanFind } from "../../redux/actions/index";
import styles from "../searchbar/Search.module.css";
import buscar from "../searchbar/img/search.png";

function SearchBar() {

  const dispatch = useDispatch();

  const [input, setInput] = useState({ count: "" });

  useEffect(() => {
    
    if (input.count !== "") dispatch(getNameCountry(input.count))
    if (input.count === "") dispatch(cleanFind())

  }, [dispatch, input.count])

  const find = useSelector((state) => state.country)


  const handleSearch = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };

  const idcount = find[0] && find[0].id

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Find your Country..."
        onChange={handleSearch}
        name="count"
        className={styles.input}
      />
      <Link to={'/countries/' + idcount}>
        <button
          type="submit"
          className={styles.searchButton}
        >
          <img src={buscar} alt="buscar" className={styles.buscar} />
        </button>
      </Link>
    </div>
  );
}

export default SearchBar;
