import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "./components/Button";
import List from "./components/List";
import CountryInfo from "./components/CountryInfo";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [NewCountriesShow, setNewCountriesShow] = useState([]);
  const [filter, setFilter] = useState("");
  const [Show, setShow] = useState("");
  const [click, setClick] = useState(false);

  useEffect(() => {
    axios.get("http://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      setNewCountriesShow(
        countries.filter((country) =>
          country.name.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
      setClick(true);
    };

    filter
      ? setShow(
          countries
            .filter((country) =>
              country.name.toLowerCase().includes(filter.toLowerCase())
            )
            .map((country) => (
              <div key={country.numericCode}>
                {country.name}
                <Button handleClick={handleClick} value={country.name} />
              </div>
            ))
        )
      : setShow(<p></p>);
  }, [countries, filter]);

  const hkChange = (e) => {
    setFilter(e.target.value);
    setClick(false);
  };

  return (
    <div>
      <div>
        <br></br>&nbsp;&nbsp;find countries: <input onChange={hkChange} value={filter} />
      </div>
      <div>
        {click || Show.length === 1 ? (
          <CountryInfo
            countries={Show.length > 1 ? NewCountriesShow : countries}
            filter={filter}
          />
        ) : (
          <List Show={Show} filter={filter} />
        )}
      </div>
    </div>
  );
};

export default App;