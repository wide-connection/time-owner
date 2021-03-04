import React from 'react'
import { Grid, TextField, MenuItem } from '@material-ui/core'
import { useForm, Form } from '../useForm'
import { FormControl, InputLabel, Select, Input, useTheme, Button } from '@material-ui/core'


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

    const handleChange = (event) => {
        setPersonName(event.target.value);
    };

    const {
        values,
        handleInputChange
     } = useForm(initialFValues); 


    return (
            <Form>
                <Grid container>
                    <Grid item xs={6}>
                        <TextField
                        variant="outlined"
                        label="Task"
                        name="task"
                        value={values.task}
                        onChange = {handleInputChange}
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
                    input={<Input />}
                    MenuProps={MenuProps}
                    >
                    {categories.map((category) => (
                        <MenuItem key={category} value={category} style={getStyles(category, personName, theme)}>
                        {category}
                        </MenuItem>
                    ))}
                    </Select>
                    </FormControl>

                    <br/><br/>    

                    <div>
                    <Controls.Button
                    variant="contained"
                    color="primary"
                    size="large"
                    text="Submit"/>
                    </div>

                    </Grid>
                </Grid>
            </Form>    
    )
}
