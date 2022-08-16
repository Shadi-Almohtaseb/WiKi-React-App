import React, { useState, useEffect } from 'react'
import Cards from '../components/Cards/Cards'
import InputGroup from '../components/Filters/Category/InputGroup';

const Episode = () => {
  let [id, setId] = useState(1);
  let [info, setEnfo] = useState([]);
  let { air_date, name } = info;
  let [results, setResults] = useState([]);

  let api = `https://rickandmortyapi.com/api/episode/${id}`

  useEffect(() => {
    (async function () {
      let Data = await fetch(api).then((res) => res.json());
      setEnfo(Data);

      let a = await Promise.all(
        Data.characters.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);

    })();
  }, [api])

  return (
    <div className='container'>
      <div className='row mb-4'>
        <h1 className='text-center mb-3'>
          Episode : <span className='text-primary'>{name === "" ? "Unknown" : name}</span>
        </h1>
        <h5 className='text-center'>
          Air Date : <span className='text-primary'>{air_date === "" ? "Unknown" : air_date}</span>
        </h5>
      </div>

      <div className='row'>
        <div className='col-lg-3 col-12'>
          <h4 className='mb-4 Pick-canter'>
            Pick Episodes
          </h4>
          <InputGroup setId={setId} name="Episodes" total={51} />
        </div>
        <div className='col-lg-9 col-12'>
          <div className='row'>
            <Cards page="/Episodes/" results={results} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Episode
