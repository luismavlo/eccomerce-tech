
import React from 'react';

const Pagination = ({ nextPage, prevPage, currentPage, totalPost, postsPerPage, pagina }) => {

    const pageNumbers = [];

    for( let i = 1; i <= Math.ceil(totalPost / postsPerPage); i++ ) {
        pageNumbers.push(i)
    }

    return (
        <div className="Pagination">
            {
                currentPage === 1 ? ("") : (<button onClick={ prevPage }>Previous</button>)
            }
            {
                pageNumbers.map( number => (
                    <li key={number} onClick={ () => pagina(number) } className={ number === currentPage ? 'pagina_selected' : ""}>{ number }</li>
                ))
            }
            {
                currentPage > pageNumbers.length ? ("") : (<button onClick={ nextPage }>Next</button>)
            }
        </div>
    );
};

export default Pagination;