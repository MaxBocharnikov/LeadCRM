import React from 'react';
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

const getSourceTitle = (sources, id) => {
    if(!sources) return;
    return sources.filter(source => source.id === id)
        .map(source => source.title);
};

const getStatusTitle = (statuses, id) => {
    if(!statuses) return;
    return statuses.filter(status => status.id === id)
        .map(status => status.title);
};

const getWorkerFio = (workers, id) => {
    if(!workers) return;
    return workers.filter((worker) => worker.id === id)
        .map(worker => `${worker.surname} ${worker.name} ${worker.middlename}`)
};

const LeadTable = (props) => {
    const classes = useStyles();
    const {list, onLeadClick, sources, statuses, availableWorkers} = props;
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
                            <TableCell title={item.source} align="center">{getSourceTitle(sources, item.source)}</TableCell>
                            <TableCell title={item.status} align="center">{getStatusTitle(statuses, item.status)}</TableCell>
                            <TableCell title={getWorkerFio(availableWorkers, item.supervisor)} align="center">{getWorkerFio(availableWorkers, item.supervisor)}</TableCell>
                            <TableCell title={getWorkerFio(availableWorkers, item.responsible)} align="center">{getWorkerFio(availableWorkers, item.responsible)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
};

export default LeadTable;

