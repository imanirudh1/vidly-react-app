import React from 'react'

const SearchBox = ( {value,onChange} ) => {
    return (
      <div>
        <input
                value={value}
                type='text'
                name='query'
                placeholder="Search ...."
            onChange={e => onChange(e.currentTarget.value)}
          className="form-control my-3"
        />
      </div>
    );
}

export default SearchBox
