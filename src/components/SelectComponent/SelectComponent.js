import React from 'react'
import Select from 'react-select'

const SelectComponent = ({options, sortBy, handleChange}) => {
    return (
        <Select 
        options={options}
        onChange={(e) => handleChange(e.value)}/>
    )
}

export default SelectComponent
