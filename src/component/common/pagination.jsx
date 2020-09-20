import React from 'react';
import _ from 'lodash';
import PropType from 'prop-types'
const Pagination = (props) => {
    const {itemCount,pageSize,currentPage,onPageChange}=props;
    const pagesCount=Math.ceil(itemCount/pageSize )
    if (pagesCount ===1 ) return null;
    const pages=_.range(1,pagesCount+1)
    return ( 
        <nav>
            <ul className="pagination">
                {pages.map(page=>(
                    <li key={page} className={page === currentPage ? "page-item active" : "page-item" } >
                    <a onClick={()=>onPageChange(page)} className="page-link">
                        {page}
                     </a>
                     </li>
                ))}
                
            </ul>
        </nav>
     );
}
 
Pagination.propTypes={
    itemCount:PropType.number.isRequired,
    pageSize:PropType.number.isRequired,
    currentPage:PropType.number.isRequired,
     onPageChange:PropType.func.isRequired
}
export default Pagination;