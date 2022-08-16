import React, { useState, useEffect } from 'react'
import Cards from '../components/Cards/Cards'
import InputGroup from '../components/Filters/Category/InputGroup';

const Location = () => {
  let [id, setId] = useState(1);
  let [info, setEnfo] = useState([]);
  let { name, type, dimension } = info;
  let [results, setResults] = useState([]);

  let api = `https://rickandmortyapi.com/api/location/${id}`

  useEffect(() => {
    (async function () {
      let Data = await fetch(api).then((res) => res.json());
      setEnfo(Data);

      let a = await Promise.all(
        Data.residents.map((x) => {
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
          Location : <span className='text-primary'>{name === "" ? "Unknown" : name}</span>
        </h1>
        <h5 className='text-center'>
          Type : <span className='text-primary'>{ type === "" ? "Unknown" : type }</span>
        </h5>

        <h6 className='text-center'>
          Dimension : <span className='text-primary'>{ dimension === "" ? "Unknown" : dimension }</span>
        </h6>

      </div>

      <div className='row'>
        <div className='col-lg-3 col-12'>
          <h4 className='mb-4 Pick-canter'>
            Pick Location
          </h4>
          <InputGroup setId={setId} name="Location" total={126} />
        </div>
        <div className='col-lg-9 col-12'>
          <div className='row'>
            <Cards page="/Location/" results={results} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Location
