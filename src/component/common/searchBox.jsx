import React from 'react'

const SearchBox = ( {onChange,value} ) => {
    return (
      <div>
        <input
                value={value}
                type='text'
                name={query}
                placeholder="Search ...."
          onChange={e => e.currentTarget.value}
          className="form-control my-3"
        />
      </div>
    );
}

export default SearchBox
