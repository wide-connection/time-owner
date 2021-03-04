import React from 'react'
import { Grid, TextField } from '@material-ui/core'
import { useForm, Form } from '../useForm'
import Controls from '../controls/Controls'
import * as calendarCategory from '../../categories/calendarCategory'
const initialFValues = {
    id: 0,
    task: '',
    length: 0,
    category: '',
    markComplete: '0%'
}

const categories = [
    'Work',
    'Health',
    'Hobby',
    'Family',
    'Routine',
    'Friends',
    'Education',
    'Entertainment'
];

export default function TableForm() {

    const validate = () => {
        let temp = {}
        temp.task = values.task ? "" : "This field is required"
        setErrors({
            ...temp
        })

        return Object.values(temp).every(x => x === "")
    }



    const handleSubmit = e => {
        e.preventDefault();
        if (validate())
            window.alert("testing...")
    }

    const {
        values,
        errors,
        setErrors,
        handleInputChange
    } = useForm(initialFValues);


    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                        name="task"
                        label="Task"
                        value={values.task}
                        onChange={handleInputChange}
                        error={errors.task}
                    />
                    <form noValidate>
                        <TextField
                            variant="outlined"
                            id="datetime-local"
                            label="Due date (time)"
                            type="datetime-local"
                            defaultValue="2021-02-24T10:30"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </form>

                </Grid>
                <Grid item xs={6}>
                    <Controls.Select
                        name="category"
                        label="Category"
                        values={values.category}
                        onChange={handleInputChange}
                        options={calendarCategory.getCategoryCollection()}
                    />

                    <br /><br />

                    <div>
                        <Controls.Button
                            type="submit"
                            text="Add" />
                        <Controls.Button
                            text="Reset"
                            color="default" />
                    </div>

                </Grid>
            </Grid>
        </Form>
    )
}
