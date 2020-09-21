import React from 'react'

const listGroup = (props) => {
const {onItemSelect,valueProperty,textProperty,items,selecteditem}=props
    return (
        <ul className="list-group">
           
            {items.map(item=>(
                <li onClick={()=>onItemSelect(item)} key={item[valueProperty]} className={item === selecteditem ?"list-group-item active" : "list-group-item"} >
                    {item[textProperty]}
                </li>
            ))}
        </ul>
    )
}
listGroup.defaultProps={
    textProperty:'name',
    valueProperty:'_id'
}

export default listGroup

