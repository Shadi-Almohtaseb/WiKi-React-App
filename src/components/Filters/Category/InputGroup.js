import React from 'react'

const InputGroup = ({ total, name, setId }) => {
    return (
        <div className="input-group mb-3 bg-primary">
            <select
                className="form-select Epi-input"
                id={name}
                onChange={(e) => setId(e.target.value)}
            >
                <option selected>Choose...</option>

                {[...Array(total).keys()].map(x => {
                    return <option value={x + 1}>{name} - {x + 1}</option>
                })}
            </select>
        </div>
    )
}

export default InputGroup
