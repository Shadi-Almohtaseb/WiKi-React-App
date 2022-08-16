import React from 'react'
import FilterBTN from '../FilterBTN';

const Gender = ({ setpageNumber, setGender }) => {
  let Gender = ["Male", "Female", "Genderless", "Unknown"];
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Gendger
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body d-flex flex-wrap gap-3">
          {Gender.map((items, index) => (
            <FilterBTN key={index} index={index} items={items} name="Gender" setpageNumber={setpageNumber} task={setGender} />
          ))}

        </div>
      </div>
    </div>
  )
}

export default Gender
