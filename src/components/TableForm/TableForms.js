import React from 'react'
import TableForm from './TableForm'
import { Paper, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme =>({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))

export default function TableForms() {

    const classes = useStyles();

    return (
        <Paper className={classes.pageContent}>
            <TableForm/>
        </Paper>
        
    )
}