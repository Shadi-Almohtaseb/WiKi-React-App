import React from 'react'
import Gender from './Category/Gender'
import Species from './Category/Species'
import Status from './Category/Status'

const Filters = ({setpageNumber,setStatus,setGender,setSpecies}) => {
      let clear = () =>{
      setpageNumber("");
      setStatus("");
      setGender("");
      setSpecies("");
      window.location.reload(false);
    }
  return (

    <div className='col-lg-3 col-12 mb-5'>
      <div className='text-center fs-4 fw-bold mb-3 Pick-canter'>
        Filter
      </div>

      <div 
      style={{ cursor: "pointer", border: "1px solid" }} 
      className='text-center text-primary rounded mb-5'
      onClick={clear}>
        Clear Filters
      </div>

      <div className="accordion" id="accordionExample">
            <Gender setpageNumber={setpageNumber} setGender={setGender}/>
            <Species setpageNumber={setpageNumber} setSpecies={setSpecies}/>
            <Status setpageNumber={setpageNumber} setStatus={setStatus} />
      </div>

    </div>
  )
}

export default Filters
