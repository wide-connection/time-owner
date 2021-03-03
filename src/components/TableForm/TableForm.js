import React, {useState, useEffect} from 'react'
import Grid from '@material-ui/core'

const initialFValues = {
    task: '',
    length: 0,
    allocatedTime: 0,
    category: '',
    markComplete: ''
}
export default function TableForm() {
    const [values, setValues] = useState();

    return (
        <form>
            <Grid container>
                <Grid item></Grid>
                <Grid item></Grid>
            </Grid>
        </form>
    )
}