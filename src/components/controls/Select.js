import React from 'react'
import { FormControl, InputLabel, Select as MuiSelect, MenuItem, FormHelperText } from '@material-ui/core'
export default function Select(props) {

    const { name, label, value, error=null, onChange, options } = props;

    return (
        <FormControl variant="outlined"
        {...(error && { error: true})}>
            
            <InputLabel>{label}</InputLabel>
            <MuiSelect
                label={label}
                name={name}
                value={value}
                onChange={onChange}>
                <MenuItem value="">None</MenuItem>
                {
                    options.map(
                        item =>(<MenuItem key={item.category} value={item.category}>{item.category}</MenuItem>)
                    )
                }
            </MuiSelect>
            {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
    )
}