import React from 'react'
import FilterBTN from '../FilterBTN'

const Species = ({setpageNumber,setSpecies}) => {
    let Species = ["Human","Alien","Humanoid","Poopybutthole","Mythological","Unknown","Animal","Disease","Robot","Cronenberg","planet"];
  return (
    <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Species
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body d-flex flex-wrap gap-3">
        {Species.map((items,index) => (
            <FilterBTN key={index} index={index} items={items} name="Species" setpageNumber={setpageNumber} task={setSpecies} />
        ))}
      </div>
    </div>
  </div>
  )
}

export default Species
