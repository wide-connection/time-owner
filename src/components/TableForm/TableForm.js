import React, {useState, useEffect} from 'react'
import {Grid, TextField} from '@material-ui/core'

const initialFValues = {
    task: '',
    length: 0,
    allocatedTime: 0,
    category: '',
    markComplete: ''
}
export default function TableForm() {
    const [values, setValues] = useState(initialFValues);

    return (
        <form>
            <Grid container>
                <Grid item xs={6}>
                    <TextField
                    variant="outlined"
                    label="Task Name"
                    value={values.task}
                    />
                    <TextField
                    variant="outlined"
                    label="Length"
                    value={values.task}
                    />
                     <TextField
                    variant="outlined"
                    label="Allocated Time"
                    value={values.task}
                    />
                     <TextField
                    variant="outlined"
                    label="Category"
                    value={values.task}
                    />
                     <TextField
                    variant="outlined"
                    label="Mark Complete"
                    value={values.task}
                    />
                </Grid>
                <Grid item></Grid>
            </Grid>
        </form>
    )
}