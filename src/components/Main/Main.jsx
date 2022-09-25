import { useHistory } from 'react-router-dom'

import Button from '@mui/material/Button';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

function Main() {

    const history = useHistory();


    const handleSubmit = event => {
        event.preventDefault();
        nextPage();
    }

    const nextPage = () => {
        history.push('/feeling');
    }

    return(
        <Paper elevation={13} style={{maxWidth:650, margin:"0 auto", padding:"20px 5px"}}>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid xs={12} item>
                    <Typography gutterBottom variant="h5">This is the main page</Typography>
                    </Grid>
                    <Grid xs={12} item>
                        <Button type="submit" variant="contained" endIcon={<ArrowForwardIosRoundedIcon />}>
                            NEW
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    )
}

export default Main;