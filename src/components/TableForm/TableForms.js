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

const headCells = [
    {id: 'task' , label:'Task Name'},
    {id: 'time' , label:'Allocated Time'},
    {id: 'category' , label:'Category'},
    {id: 'complete', label:"Mark Complete"}
]

export default function TableForms() {

    const classes = useStyles();
    const [records, setRecords] = useState(calendarTask.getAllTasks()); 

    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    }=useTable(records, headCells);

    return (
        <Paper className={classes.pageContent}>
            <TableForm/>
            <TblContainer>
                <TblHead/>
                <TableBody>
                    {
                        recordsAfterPagingAndSorting().map(item =>
                            (<TableRow key={item.id}>
                                <TableCell>{item.task}</TableCell>
                                <TableCell>{item.length}</TableCell>
                                <TableCell>{item.category}</TableCell>
                                <TableCell>{item.markComplete}</TableCell>
                            </TableRow>))                            
                    }
                </TableBody>
            </TblContainer>
            <TblPagination/>
        </Paper>
        
    )
}