import React from 'react'
import ReactPaginate from 'react-paginate';

const pagination = ({info,setpageNumber,pageNumber}) => {


  return (
      <ReactPaginate
      className='pagination justify-content-center gap-lg-4 gap-md-3 gap-sm-1 my-4'
      nextLabel='Next'
      previousLabel='Previous'
      nextLinkClassName='btn btn-primary'
      previousLinkClassName='btn btn-primary'
      pageClassName='page-item'
      pageLinkClassName='page-link'
      onPageChange={(data) => {
        setpageNumber(data.selected + 1)
      }}
      activeClassName='active'
      forcePage={pageNumber === 1 ? 0: pageNumber - 1}
      pageCount={info?.pages} />
  )
}

export default pagination


/* Befor Ubdate The pagination
**************************************
import React from 'react'
import ReactPaginate from 'react-paginate';

const pagination = ({setpageNumber,pageNumber}) => {
    let next = () => {
        setpageNumber((x) => x + 1);
    }
    let prev = () => {
            if(pageNumber > 1){
                return(
                    setpageNumber((x) => x - 1)
                )
            }  
    }
  return (
    <div className='container d-flex justify-content-center gap-5 my-5'>
      <button onClick={prev} className='btn btn-primary'>Prev</button>
      <button onClick={next} className='btn btn-primary'>Next</button>
    </div>
  )
}

export default pagination

*/
