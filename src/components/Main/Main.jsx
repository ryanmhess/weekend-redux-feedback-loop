import { useHistory, Link } from 'react-router-dom'

import Paper from '@mui/material/Paper';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import AssignmentIcon from '@mui/icons-material/Assignment';
import InventoryIcon from '@mui/icons-material/Inventory';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

function Main() {

    const history = useHistory();

    const actions = [
        { icon: <Link to='/feeling'><AssignmentIcon /></Link>, name: 'New Feedback' },
        { icon: <Link to='/history'><InventoryIcon /></Link>, name: 'My History' },
        { icon: <Link to='/admin'><AdminPanelSettingsIcon /></Link>, name: 'Admin' },
    ];

    const handleSubmit = event => {
        event.preventDefault();
        nextPage();
    }

    const nextPage = () => {
        history.push('/feeling');
    }

    return(
        <Paper elevation={13} style={{maxWidth:450, margin:"0 auto", padding:"20px 0px"}} >
            <SpeedDial ariaLabel="SpeedDial basic example" direction="down" sx={{ position: 'absolute', top: 125, left: 10 }} icon={<SpeedDialIcon />}>
                {actions.map((action) => (
                <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name}/> ))}
            </SpeedDial>      
            <div className="row">
                <div className="column">
                    <img src="./images/mb.webp"/>
                    <img src="./images/cl.webp"/>
                    <img src="./images/ds.webp"/>
                </div>
                <div className="column">
                    <img src="./images/bs.jpeg"/>
                    <a>
                        <img src="./images/goat_small.jpg"/>
                        <img src="./images/cb.webp"/>
                    </a>
                    
                    <img src="./images/mm.webp"/>
                </div>
                <div className="column">
                    <img src="./images/es.jpeg"/>
                    <img src="./images/es.webp"/>
                    <img src="./images/ks.webp"/>
                </div>
                <div className="column">
                    <img src="./images/lk.webp"/>
                    <img src="./images/bk.webp"/>
                    <img src="./images/mh.webp"/>
                </div>
            </div>
        </Paper>
    )
}

export default Main;
