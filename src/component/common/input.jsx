import React from 'react'

const Input = ({name,onChange,lable,value}) => {
    return (
      <div className="form-group">
    <label htmlFor={name}>{lable}</label>
        <input
          name={name}
          onChange={onChange}
          value={value}
          id={name}
          type="text"
          className="form-control"
        />
      </div>
    );
}

export default Input
