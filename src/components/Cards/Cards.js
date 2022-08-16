import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Cards.module.css';

const Cards = ({ results , page }) => {

    let display;
    if (results) {
        display = results.map((x) => {
            let { id, name, image, location, status } = x;
            return (
                <Link to={`${page}${id}`} key={id} className='col-lg-4 col-md-6 col-12 text-dark mb-4 ' style={{textDecoration: "none" }}>

                    
                    <div className={`position-relative ${styles.cards}`}>
                        <img src={image} alt={name} className={`img-fluid w-100 ${styles.image}`}></img>
                        <div className='content p-3'>
                            <div className='fs-4 fw-bold mb-4'>
                                {name}
                            </div>
                            <div className=''>
                                <div className='fs-6'>
                                    Last Location:
                                </div>
                                <div className='fs-4'>{location.name}</div>
                            </div>
                            {(() =>{
                                 if ( status  === "Alive") {
                                    return(<div className={`${styles.badge} position-absolute badge bg-success`}>
                                                 {status}
                                           </div>
                                         )

                                    }
                                else if (status  === "Dead") {
                                    return(<div className={`${styles.badge} position-absolute badge bg-danger`}>
                                                 {status}
                                           </div>
                                         )
                                    }
                                else {
                                    return(<div className={`${styles.badge} position-absolute badge bg-secondary`}>
                                                 {status}
                                           </div>
                                         )
                                    }
                            })()}

                        </div>
                    </div>
                </Link>
            );
        });
    }
    else {
        display = "No Characaters Found! :/";
    }

    return (
        <>{display}</>
    )
}

export default Cards
