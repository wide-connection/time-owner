import React, { useEffect } from 'react'
import { Grid, TextField } from '@material-ui/core'
import { useForm, Form } from '../useForm'
import Controls from '../controls/Controls'
import * as calendarTask from '../../categories/calendarTask'

const initialFValues = {
    id: 0,
    task: '',
    length: '',
    category: '',
    markComplete: '0%'
}

export default function TableForm(props) {
    const {addOrEdit, recordForEdit} = props

    const validate = (fieldValues = values) => {
        let temp = {...errors}
        if('task' in fieldValues)
        temp.task = fieldValues.task ? "" : "This field is required"      
        if('category' in fieldValues)  
        temp.category =  fieldValues.category.length !== 0 ? "" : "This field is required."
        setErrors({
            ...temp
        })

        if(fieldValues === values)
            return Object.values(temp).every(x => x === "")
    }


    const handleSubmit = e => {
        e.preventDefault();
        if (validate()) {
            addOrEdit(values, resetForm);
        }

    }

    useEffect(()=>{ 
        if(recordForEdit !== null)
            setValues({
                ...recordForEdit
            })
    }, [recordForEdit])

    const {
        values,
        setValues,
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
                        <TextField
                            variant="outlined"
                            name="length"
                            label="Due date (time)"
                            type="datetime-local"                            
                            defaultValue="2021-02-24T10:30"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                </Grid>
                <Grid item xs={6}>
                    <Controls.Select
                        name="category"
                        label="Category"
                        values={values.category}
                        onChange={handleInputChange}
                        options={calendarTask.getCategoryCollection()}
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
