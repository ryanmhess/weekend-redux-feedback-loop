import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

function Supported() {

    const dispatch = useDispatch();
    const history = useHistory();
    const [supported, setSupported] = useState();

    const handleSubmit = event => {
        event.preventDefault();
        console.log('supported Rating:', supported);
        const action = {
            type: 'ADD_USER_INPUT',
            payload: { supported }
        };
        dispatch(action);
        nextPage();
    }

    const nextPage = () => {
        history.push('/comments');
    }

    const backPage = () => {
        history.push('/understanding');
    }

    return(
        <Paper elevation={13} style={{maxWidth:650, margin:"0 auto", padding:"20px 5px"}}>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid xs={12} item>
                        <Typography gutterBottom variant="h5">Please share how well you feel you are being supported:</Typography>
                    </Grid>
                    <Grid xs={12} item>
                        <Typography gutterBottom color="textSecondary" variant="body2" component="p">(Rating from 1 to 5 with 5 being highly satisfied and 1 being the highly dissatisfied)</Typography>
                    </Grid>
                    <Grid xs={12} item>
                        <FormControl>
                            <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
                            <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                                <FormControlLabel value="Highly Dissatisfied" control={<Radio required/>} label="1" labelPlacement="bottom" onChange={(event) => setSupported(event.target.value)}/>
                                <FormControlLabel value="Dissatisfied" control={<Radio  />} label="2" labelPlacement="bottom" onChange={(event) => setSupported(event.target.value)}/>
                                <FormControlLabel value="Neutral" control={<Radio  />} label="3" labelPlacement="bottom" onChange={(event) => setSupported(event.target.value)}/>
                                <FormControlLabel value="Satisfied" control={<Radio  />} label="4" labelPlacement="bottom" onChange={(event) => setSupported(event.target.value)}/>
                                <FormControlLabel value="Highly Satisfied" control={<Radio  />} label="5" labelPlacement="bottom" onChange={(event) => setSupported(event.target.value)}/>
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid xs={12} item>
                        <Button disabled onClick={backPage} variant="contained" startIcon={<ArrowBackIosRoundedIcon />}>
                            Back
                        </Button>
                        <Button type="submit" variant="contained" endIcon={<ArrowForwardIosRoundedIcon />}>
                            Next
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    )
}

export default Supported;