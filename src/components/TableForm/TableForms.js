import React, {useState} from 'react'
import TableForm from './TableForm'
import { Paper, makeStyles, TableBody, TableRow, TableCell } from '@material-ui/core'
import useTable from "../../components/useTable"
import * as calendarTask from '../../categories/calendarTask'

const useStyles = makeStyles(theme =>({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))

export default function TableForms() {

    const classes = useStyles();
    const [records, setRecords] = useState(calendarTask.getAllTasks()); 

    const {
        TblContainer
    }=useTable();

    return (
        <Paper className={classes.pageContent}>
            <TableForm/>
            <TblContainer>
                <TableBody>
                    {
                        records.map(item =>
                            (<TableRow key={item.id}>
                                <TableCell>{item.task}</TableCell>
                                <TableCell>{item.length}</TableCell>
                                <TableCell>{item.category}</TableCell>
                                <TableCell>{item.markComplete}</TableCell>
                            </TableRow>))                            
                    }
                </TableBody>
            </TblContainer>
        </Paper>
        
    )
}