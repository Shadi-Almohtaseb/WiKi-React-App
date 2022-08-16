import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const CardsDetails = () => {
    let { id } = useParams();
    let [fetchedData, ubdatefetchedData] = useState([]);
    let { name, image, origin, location, gender, status, species, type } = fetchedData;

    let api = `https://rickandmortyapi.com/api/character/${id}`;

    useEffect(() => {
        (async function () {
            let Data = await fetch(api).then(res => res.json())
            ubdatefetchedData(Data);
        })()
    }, [api])


    return (
        <div className='container d-flex justify-content-center mt-5'>
            <div className='d-flex flex-column gap-3'>
                <h1 className='text-center'>
                    {name}
                </h1>

                <img src={image} alt={name} className='img-fluid ' />

                {(() => {
                    if (status === "Alive") {
                        return (<div className="badge bg-success fs-4">
                            {status}
                        </div>
                        )

                    }
                    else if (status === "Dead") {
                        return (<div className="badge bg-danger fs-4">
                            {status}
                        </div>
                        )
                    }
                    else {
                        return (<div className="badge bg-secondary fs-4">
                            {status}
                        </div>
                        )
                    }
                })()}

                <div className='content'>
                    <div className=''>
                        <span className='fw-bold'>
                            Gender : {gender}
                        </span>
                    </div>

                    <div className=''>
                        <span className='fw-bold'>
                        Species : {species}
                        </span>
                    </div>

                    <div className=''>
                        <span className='fw-bold'>
                        Type : {type === "" ? "Unkown" : type}
                        </span>
                    </div>

                    <div className=''>
                        <span className='fw-bold'>
                        Location : {location?.name}
                        </span>
                    </div>

                    <div className=''>
                        <span className='fw-bold'>
                        Origin : {origin?.name}
                        </span>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default CardsDetails
