import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'

import Button from '@mui/material/Button';
import Diversity2TwoToneIcon from '@mui/icons-material/Diversity2TwoTone';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

function Complete() {

    const dispatch = useDispatch();
    const history = useHistory();


    const handleSubmit = event => {
        event.preventDefault();
        const action = {
            type: 'CLEAR_DATA',
        };
        dispatch(action);
        nextPage();
    }

    const nextPage = () => {
        history.push('/');
    }

    return(
        <Paper elevation={13} style={{maxWidth:650, margin:"0 auto", padding:"20px 5px"}}>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid xs={12} item>
                    <Typography gutterBottom variant="h5">Thank you for sharing your experience and trusting in us during this journey!</Typography>
                    </Grid>
                    <Grid xs={12} item>
                        <Button type="submit" variant="contained" color="success" endIcon={<Diversity2TwoToneIcon />}>
                            Complete
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    )
}

export default Complete;