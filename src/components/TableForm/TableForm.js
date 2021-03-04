import React, { useState, useEffect } from 'react'
import { Grid, TextField, makeStyles } from '@material-ui/core'
import { KeyboardTimePicker } from '@material-ui/pickers'

const useStyles = makeStyles(theme =>({
    root: {
        '& .MuiFormControl-root': {
          width: '80%',
          margin: theme.spacing(1)

        }
    }
}))

const initialFValues = {
    task: '',
    length: 0,
    category: '',
    markComplete: ''
}

export default function Form() {

    const [values, setValues] = useState(initialFValues);
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    
    const handleInputChange = e=> {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]:value
        })
    }

    return (
        <form className={classes.root}>
            <Grid container>
                <Grid item xs={6}>
                    <TextField
                    variant="outlined"
                    label="Task"
                    name="task"
                    value={values.task}
                    onChange = {handleInputChange}
                    />   
                   <KeyboardTimePicker
                    margin="normal"
                    id="time-picker"
                    label="Time picker"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change time',
                    }}
                    />                       
                </Grid>
                <Grid item xs={6}></Grid>
            </Grid>
        </form>
    )
}
