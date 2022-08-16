import React from 'react'

const FilterBTN = ({ name, index, items, setpageNumber, task }) => {
    return (
        <div>
            <style jsx>
                {`
                .myInput:checked + label {
                    background-color: #0b5ed7;
                    color:#fff;
                }

                input[type="radio"]{
                    display:none;
                }
            `}
            </style>
            <div className="form-check">
                <input
                    onClick={() => {
                        setpageNumber(1);
                        task(items);
                    }}
                    className="form-check-input myInput"
                    type="radio"
                    name={name}
                    id={`${name}-${index}`}
                />
                <label
                    className="btn btn-outline-primary"
                    for={`${name}-${index}`}
                >
                    {items}
                </label>
            </div>
        </div>
    )
}

export default FilterBTN
