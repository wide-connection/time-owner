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

export default function TableForm() {

    const validate = (fieldValues = values) => {
        let temp = {...errors}
        if('task' in fieldValues)
        temp.task = values.task ? "" : "This field is required"      
        if('category' in fieldValues)  
        temp.category = values.category.length !== 0 ? "" : "This field is required."
        setErrors({
            ...temp
        })

        if(fieldValues === values)
            return Object.values(temp).every(x => x === "")
    }


    const handleSubmit = e => {
        e.preventDefault();
        if (validate())
            window.alert("Form successfully submitted")
    }

    const {
        values,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);


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
                        error={errors.category}
                    />

                    <br /><br />

                    <div>
                        <Controls.Button
                            type="submit"
                            text="Add" />
                        <Controls.Button
                            text="Reset"
                            color="default"
                            onClick={resetForm} />
                    </div>

                </Grid>
            </Grid>
        </Form>
    )
}
