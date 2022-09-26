import { Link } from 'react-router-dom'

import Paper from '@mui/material/Paper';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import AssignmentIcon from '@mui/icons-material/Assignment';
import InventoryIcon from '@mui/icons-material/Inventory';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import CottageIcon from '@mui/icons-material/Cottage';

function Admin() {

    const actions = [
        { icon: <Link to='/'><CottageIcon /></Link>, name: 'Home' },
        { icon: <Link to='/feeling'><AssignmentIcon /></Link>, name: 'New Feedback' },
        { icon: <Link to='/history'><InventoryIcon /></Link>, name: 'My History' },
        { icon: <Link to='/admin'><AdminPanelSettingsIcon /></Link>, name: 'Admin' },
    ];

    return(
        <Paper elevation={13} style={{maxWidth:450, margin:"0 auto", padding:"20px 0px"}} >
            <SpeedDial ariaLabel="SpeedDial basic example" direction="down" sx={{ position: 'absolute', top: 125, left: 10 }} icon={<SpeedDialIcon />}>
                {actions.map((action) => (
                <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name}/> ))}
            </SpeedDial>
            <h1>ADMIN</h1>
            <h2>Under Construction.</h2>    
        </Paper>
    )
}

export default Admin;