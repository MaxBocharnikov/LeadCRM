import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import './LeadTable.scss';
import {formatDate} from "../../../utils/timeUtils";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto'

    },
    table: {
        minWidth: 650,
        whiteSpace: 'nowrap'
    },
}));

const LeadTable = (props) => {
    const classes = useStyles();
    const {list, onLeadClick} = props;
    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="center">Дата</TableCell>
                        <TableCell align="center">ФИО</TableCell>
                        <TableCell align="center">Телефон</TableCell>
                        <TableCell align="center">Источник</TableCell>
                        <TableCell align="center">Статус</TableCell>
                        <TableCell align="center">Супервайзер</TableCell>
                        <TableCell align="center">Ответственный</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {list.map(item => (
                        <TableRow key={item.id} onDoubleClick={(id) => onLeadClick(item.id)}>
                            <TableCell component="th" scope="row">
                                {item.id}
                            </TableCell>
                            <TableCell title={item.date} align="center">{formatDate(item.date, 'shortDate')}</TableCell>
                            <TableCell title={item.fio} align="center">{item.fio}</TableCell>
                            <TableCell title={item.phone} align="center">{item.phone}</TableCell>
                            <TableCell title={item.source} align="center">{item.source}</TableCell>
                            <TableCell title={item.status} align="center">{item.status}</TableCell>
                            <TableCell title={item.supervisor} align="center">{item.supervisor}</TableCell>
                            <TableCell title={item.responsible} align="center">{item.responsible}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
};

export default LeadTable;

