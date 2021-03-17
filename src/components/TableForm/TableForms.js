import React, {useState} from 'react'
import TableForm from './TableForm'
import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core'
import useTable from "../../components/useTable"
import * as calendarTask from '../../categories/calendarTask'
import Controls from "../../components/controls/Controls"
import { Search } from "@material-ui/icons"
import AddIcon from '@material-ui/icons/Add'
import Popup from '../Popup';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined'
import CloseIcon from '@material-ui/icons/Close'
 
const useStyles = makeStyles(theme =>({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    searchInput: {
        width: '75%'
    },
    newButton : {
        position: 'absoulte', 
        left: '70px'
    }
}))

const headCells = [
    {id: 'task' , label:'Task Name'},
    {id: 'time' , label:'Allocated Time'},
    {id: 'category' , label:'Category'},
    {id: 'complete', label:"Mark Complete"},
    {id: 'actions', label:'Actions', disableSorting: true}
]

export default function TableForms() {

    const classes = useStyles();
    const [recordForEdit, setRecordForEdit] = useState(null); 
    const [records, setRecords] = useState(calendarTask.getAllTasks()); 
    const [filterFn, setFilterFn] = useState({fn:items => {return items;}})
    const [openPopup, setOpenPopup] = useState(false); 

    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    }=useTable(records, headCells, filterFn);

    const handleSearch = e => {
        let target = e.target;
        setFilterFn({
            fn:items => {
                if(target.value === "")
                    return items; 
                    else 
                    return items.filter(x => x.task.toLowerCase().includes(target.value))
            }
        })
    }

    const addOrEdit = (task, resetForm) => {
        calendarTask.insertNewTask(task)
        resetForm()
        setOpenPopup(false)
        setRecords(calendarTask.getAllTasks())
    }

    const openInPopup = item => {
        setRecordForEdit(item)
        setOpenPopup(true)
    }

    return (
        <>
        <Paper className={classes.pageContent}>
            <Toolbar>
        <Controls.Input
            label="Search Task"
            className = {classes.searchInput}
                InputProps={{
                    startAdornment:(<InputAdornment position="start">
                        <Search/> 
                    </InputAdornment>)
                }}
                onChange={handleSearch}
            />
            <Controls.Button
            text = "Add New"
            variant = "outlined"
            startIcon = {<AddIcon/>}
            className = {classes.newButton}
            onClick = {() => setOpenPopup(true)}
            />
            </Toolbar>
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
                                <TableCell>
                                    <Controls.ActionButton
                                    color="primary"
                                    onClick = {()=> {openInPopup(item)}}>
                                        <EditOutlinedIcon fontSize="small"/>
                                    </Controls.ActionButton>                                
                                    <Controls.ActionButton
                                    color="secondary">
                                        <CloseIcon fontSize="small"/>
                                    </Controls.ActionButton> 
                                </TableCell>
                            </TableRow>))                            
                    }
                </TableBody>
            </TblContainer>
            <TblPagination/>            
        </Paper>
        <Popup
            title = "Task Form"
            openPopup = {openPopup}
            setOpenPopup = {setOpenPopup}
        >
            <TableForm
            recordForEdit = {recordForEdit}
            addOrEdit={addOrEdit}/>
        </Popup>
       </>
        
    )
}