import React from 'react'
import { Grid, TextField, MenuItem } from '@material-ui/core'
import { useForm, Form } from '../useForm'
import { FormControl, InputLabel, Select, useTheme } from '@material-ui/core'
import Controls from '../controls/Controls'

const initialFValues = {
    id: 0,
    task: '',
    length: 0,
    category: '',
    markComplete: '0%'
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

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

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}


export default function TableForm() {
    const [personName, setPersonName] = React.useState([]);
    const theme = useTheme();
    const validate = () => {
        let temp = {}
        temp.task = values.task ? "" : "This field is required"
        setErrors({
            ...temp
        })

        return Object.values(temp).every(x => x === "")
    }

    const handleChange = (event) => {
        setPersonName(event.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault()
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

                    <FormControl>
                        <InputLabel id="demo-mutiple-name-label">Category</InputLabel>
                        <Select
                            labelId="demo-mutiple-name-label"
                            id="demo-mutiple-name"
                            value={personName}
                            onChange={handleChange}
                            MenuProps={MenuProps}
                        >
                            {categories.map((category) => (
                                <MenuItem key={category} value={category} style={getStyles(category, personName, theme)}>
                                    {category}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

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
