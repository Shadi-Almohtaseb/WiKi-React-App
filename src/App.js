import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./App.css";
import React, { useState, useEffect } from "react";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import Navbar from "./components/Navbar/Navbar";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Episode from "./Pages/Episode";
import Location from "./Pages/Location";
import CardsDetails from "./components/Cards/CardsDetails";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardsDetails />} />

        <Route path="/Episodes" element={<Episode />} />
        <Route path="/Episodes/:id" element={<CardsDetails />} />

        <Route path="/Location" element={<Location />} />
        <Route path="/Location/:id" element={<CardsDetails />} />
      </Routes>
    </Router>
  );
}

const Home = () => {

  let [pageNumber, setpageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  let [species, setSpecies] = useState("");

  let [fetchedData, ubdatefetchedData] = useState([]);
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
  let { info, results } = fetchedData;

  useEffect(() => {
    (async function () {
      let Data = await fetch(api).then(res => res.json())
      console.log(Data);
      ubdatefetchedData(Data);
    })()
  }, [api])

  return (
    <div className="App">

      <h1 className="text-center mb-3">Characaters</h1>

      <Search setpageNumber={setpageNumber} setSearch={setSearch} />

      <div className="container">
        <div className="row">
          <Filters setStatus={setStatus} setGender={setGender} setSpecies={setSpecies} setpageNumber={setpageNumber} />
          <div className="col-lg-9 col-12">
            <div className="row">
              <Cards page="/" results={results} />
            </div>
          </div>
        </div>
      </div>

      <Pagination info={info} setpageNumber={setpageNumber} pageNumber={pageNumber} />

    </div>
  );
}

export default App;
