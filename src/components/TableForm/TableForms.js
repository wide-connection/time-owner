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
import Notification from "../Notification"
import ConfirmDialog from "../ConfirmDialog"
import TimerIcon from '@material-ui/icons/Timer';
import EventIcon from '@material-ui/icons/Event';
import { changeTileColor, time} from '../../components/calender/Calender'
import { relativeTimeRounding } from 'moment'
import { blue } from '@material-ui/core/colors';
import './TableForm.scss';

const useStyles = makeStyles(theme =>({
    pageContent: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
        
        
    },
    searchInput: {
        width: '550px',
        position: 'absolute',
        color:'red',
        display: 'flex',
        
    },
    
    newButton : {
        position: 'absoulte',
        left: 550,
        display: 'flex',
        height: '55px',
        width: '150px'
    },
}))

const headCells = [
    {id: 'task' , label:'Task Name'},
    {id: 'time' , label:'Total Allocated Time'},
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
    const [notify, setNotify] = useState({isOpen: false, message:'', type:''})
    const [confirmDialog, setConfirmDialog] = useState({isOpen:false, title:'', subTitle:''})

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
        if (task.id === 0) {
            calendarTask.insertNewTask(task)
        }
        else {
            calendarTask.updateTask(task)
            resetForm()
            setRecordForEdit(null)
            setOpenPopup(false)
            setRecords(calendarTask.getAllTasks())
            setNotify({
                isOpen: true,
                message: 'Submitted Successfully',
                type: 'success'
            })
        }
    }

    const openInPopup = item => {
        setRecordForEdit(item)
        setOpenPopup(true)
    }

    const addToCalendar = item => {
        changeTileColor(item.task, item.category);
        item.allocatedTime = `${time}m`;
        calendarTask.updateTask(item);
        setRecords(calendarTask.getAllTasks());

    }

    const onDelete = id => {
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false
        })
        calendarTask.deleteTask(id);
        setRecords(calendarTask.getAllTasks())
        setNotify({
            isOpen: true,
            message: 'Deleted Successfully',
            type: 'error'
        })
    }

    return (
        <div className= 'container'>
        <Paper className={classes.pageContent} >
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
                        text="Add New"
                        variant="outlined"
                        startIcon={<AddIcon />}
                        className={classes.newButton}
                        onClick={() => { setOpenPopup(true); setRecordForEdit(null); }}
                    />
                </Toolbar>
                <TblContainer>
                    <TblHead />
                    <TableBody>
                        {
                            recordsAfterPagingAndSorting().map(item =>
                            (<TableRow key={item.id}>
                                <TableCell>{item.task}</TableCell>
                                <TableCell>{item.allocatedTime}</TableCell>
                                <TableCell>{item.category}</TableCell>
                                <TableCell>{item.markComplete}</TableCell>
                                <TableCell>
                                    <Controls.ActionButton
                                        color="primary"
                                            
                                            onClick = {()=> {openInPopup(item)}}>
                                                <EditOutlinedIcon fontSize="small"/>
                                    </Controls.ActionButton>
                                    <Controls.ActionButton
                                        color="secondary"
                                        onClick={() => {
                                            setConfirmDialog({
                                                isOpen: true,
                                                        title:'Are you sure to delete this record?',
                                                subTitle: "You can't undo this operation",
                                                        onConfirm: () => {onDelete(item.id)}

                                            })
                                        }}>
                                                <CloseIcon fontSize="small"/>
                                    </Controls.ActionButton>

                                                    <br/> 

                                    <Controls.ActionButton
                                        color="tertiary"
                                                onClick = {()=> {openInPopup(item)}}>
                                                    <TimerIcon fontSize="small"/>                                    
                                    </Controls.ActionButton>

                                    <Controls.ActionButton
                                        color="tertiary"
                                                onClick = {()=> {addToCalendar(item)}}>
                                                    <EventIcon fontSize="small"/>                                    
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
            <Notification
                notify={notify}
                setNotify={setNotify}
            />
            <ConfirmDialog
                confirmDialog={confirmDialog}
                setConfirmDialog={setConfirmDialog}
            />
        </div>

    )
}