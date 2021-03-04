import React from 'react'
import { FormControl, InputLabel, Select as MuiSelect } from '@material-ui/core'
import { MenuItem } from '@material-ui/core'
export default function Select(props) {

    const { name, label, value, onChange, options } = props;

    return (
        <FormControl
            variant="outlined">
            <InputLabel>{label}</InputLabel>
            <MuiSelect
                label={label}
                name={name}
                value={value}
                onChange={onChange}>
                {options.map((category) => (
                    <MenuItem key={category} value={category}>
                        {category}
                    </MenuItem>
                ))}
            </MuiSelect>
        </FormControl>
    )
}