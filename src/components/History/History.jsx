import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

import Paper from '@mui/material/Paper';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import AssignmentIcon from '@mui/icons-material/Assignment';
import InventoryIcon from '@mui/icons-material/Inventory';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import CottageIcon from '@mui/icons-material/Cottage';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';

function History() {

    useEffect(() => {
        fetchFeedback();
    }, []);

    const [ feedbackTableRows, setFeedbackTableRows ] = useState();

    const actions = [
        { icon: <Link to='/'><CottageIcon /></Link>, name: 'Home' },
        { icon: <Link to='/feeling'><AssignmentIcon /></Link>, name: 'New Feedback' },
        { icon: <Link to='/history'><InventoryIcon /></Link>, name: 'My History' },
        { icon: <Link to='/admin'><AdminPanelSettingsIcon /></Link>, name: 'Admin' },
    ];

    const fetchFeedback = () => {
        axios({
            method: 'GET',
            url: 'feedback'
        }).then((getRes) => {
            console.log('The GET /feedback was successful');
            console.log(getRes);
            setFeedbackTableRows(getRes);
        }).catch((getErr) => {
            console.log('The GET /feedback was unsuccessful:', getErr);
        });
    }

    //  NEED TO REPLACE TABLE DATA WITH GETRES

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];

    return(
        // <Paper elevation={13} style={{maxWidth:450, margin:"0 auto", padding:"20px 0px"}} >
        <TableContainer component={Paper} elevation={13} style={{maxWidth:800, margin:"0 auto", padding:"20px 0px"}}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Thoughts</TableCell>
                    <TableCell align="center">Date</TableCell>
                    <TableCell align="right">Feeling</TableCell>
                    <TableCell align="right">Understanding</TableCell>
                    <TableCell align="right">Support</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            <SpeedDial ariaLabel="SpeedDial basic example" direction="down" sx={{ position: 'absolute', top: 125, left: 10 }} icon={<SpeedDialIcon />}>
            {actions.map((action) => (
                <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name}/> ))}
            </SpeedDial>
        </TableContainer>   
    )
}

export default History;