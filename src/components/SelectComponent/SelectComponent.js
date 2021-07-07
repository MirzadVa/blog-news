import React from 'react'
import Select from 'react-select'

const SelectComponent = ({options, sortBy, handleChange}) => {
    const [open, setOpen] = React.useState(false);
    return (
        <Select 
        options={options}
        onChange={(e) => handleChange(e.value)}/>
    )
}

export default SelectComponent
