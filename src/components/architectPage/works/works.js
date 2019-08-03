import React from 'react';
import { Container, Typography, Table, TableBody, TableHead, TableCell, TableRow } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { withI18n } from '@lingui/react';

const useStyles = makeStyles(theme => ({
    container: {
        padding: '0'
    },
    title: {
        textAlign: 'center',
        margin: '20px 0',
        color: '#4A90E2',
        fontWeight: 'bold'
    },
    table: {
        margin: '30px auto',
        boxShadow: '4px 4px 10px #000000'
    },
    tHead: {
        backgroundColor: '#4A90E2',
    },
    tableTitle: {
        fontWeight: 'bold',
        fontSize: '1.5rem',
        color: '#ffffff',
        border: '1px solid #E0E0E0'
    },
    cell: {
        fontSize: '1rem',
        border: '1px solid #E0E0E0',
        padding: '0.5rem 0.75rem',
        borderCollapse: 'collapse',
    }
}));

const Works = (props) => {
    const { works, i18n } = props;
    const classes = useStyles();
    const masterpieces = works.map((work, index) => {
        const { title, date } = work;
        const style = index % 2 ? '#cccccc' : '#ffffff';
        return ( 
            <TableRow key={index}>
                <TableCell className={classes.cell} style={{background: style}}>{title}</TableCell>
                <TableCell className={classes.cell} style={{background: style}}>{date}</TableCell>
            </TableRow>
        )
    });
    return (
        <Container className={classes.container}>
            <Typography variant="h3" className={classes.title}> 
                {i18n.t`USER__MASTERPRICE`}
            </ Typography>
            <Table className={classes.table}>
                <TableHead className={classes.tHead}>
                    <TableRow>
                        <TableCell className={classes.tableTitle}>{i18n.t`USER__MASTERPRICE--PRODUCT`}</TableCell>
                        <TableCell className={classes.tableTitle}>{i18n.t`USER__MASTERPRICE--CREATE-DATE`}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {masterpieces}
                </TableBody>
            </Table>
        </Container>
    )
}

export default withI18n()(Works);