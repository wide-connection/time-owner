import React, { useEffect } from 'react'
import { Grid, TextField } from '@material-ui/core'
import { useForm, Form } from '../useForm'
import Controls from '../controls/Controls'
import * as calendarTask from '../../categories/calendarTask'
import { format } from 'date-fns'
import moment from 'moment'
import { CollectionsOutlined } from '@material-ui/icons'

const initialFValues = {
    id: 0,
    task: '',
    startDate: '',
    endDate: '',
    allocatedTime: 0,
    category: '',
    markComplete: '0%'
}

export default function TableForm(props) {
    const {addOrEdit, recordForEdit} = props    
    let currTime = new Date();     
    let currTimePlus30Min = moment(currTime).add(30, 'm').toDate();
    let currTimeWithFormat = format(currTime, "yyyy-MM-dd'T'HH:mm"); 
    let currTimeWithFormatPlus30Min = format(currTimePlus30Min, "yyyy-MM-dd'T'HH:mm"); 


 
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
            let startDateMin = (values.startDate).substring(14, 16);
            let endDateMin = (values.endDate).substring(14, 16); 
            let result = endDateMin - startDateMin; 
            values.allocatedTime = `${Math.abs(result)}m`;
            addOrEdit(values, resetForm);
        }

    }
    const onStartDateChange = e => {
        values.startDate = e.target.value; 
    }

    const onEndDateChange = e => { 
        values.endDate = e.target.value;     
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
                            name="startDate"
                            label="Start date"
                            type="datetime-local"                                     
                            defaultValue={currTimeWithFormat}     
                            onChange={onStartDateChange}  
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
 
                </Grid>
                <Grid item xs={6}>
                    <Controls.Select
                        name="category"
                        label="Category"
                        value={values.category}
                        onChange={handleInputChange}
                        options={calendarTask.getCategoryCollection()}
                        error={errors.category}                        
                    />
                        <TextField
                            variant="outlined"
                            name="endDate"
                            label="End date"                    
                            type="datetime-local"       
                            onChange={onEndDateChange}                     
                            defaultValue={currTimeWithFormatPlus30Min}
                            InputLabelProps={{
                                shrink: true,
                            }}
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
