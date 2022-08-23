import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { HeroeCard } from '../components'
import queryString from 'query-string'
import { getHeroesByName } from "../helpers";

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = ''} = queryString.parse(location.search);

  const heroes = getHeroesByName(q);

  const showSearch = (q.length === 0) ;
  const showError = (q.length > 0) && heroes.length===0 ;



  const { searchText, onInputChange } = useForm({
    searchText:q,
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if(searchText.trim().length <= 1 ) return;

    navigate("?q=" + searchText.toLowerCase().trim())

  }
  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              className="form-control"
              placeholder="Search field"
              type="text"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <hr />
            <button className="btn btn-primary">Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <div className="alert alert-primary" style={{display: showSearch ? '' : 'none'}}>
            SearchHero
          </div>

          <div className="alert alert-danger" style={{display: showError ? '' : 'none'}}>
            No hero with <b>{q}</b>
          </div>

          {
            heroes.map(heroe => (
              <HeroeCard heroe={heroe} />
            ))
          }
        </div>
      </div>
    </>
  );
};
