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

function Understanding() {

    const dispatch = useDispatch();
    const history = useHistory();
    const [understanding, setUnderstanding] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        console.log('Understanding Rating:', understanding);
        const action = {
            type: 'ADD_USER_INPUT',
            payload: { understanding }
        };
        dispatch(action);
        nextPage();
    }

    const nextPage = () => {
        history.push('/supported');
    }

    const backPage = () => {
        history.push('/feeling');
    }

    return(
        <>
            <Typography gutterBottom variant="h5">Please share how well you understanding the content:</Typography>
            <Typography gutterBottom color="textSecondary" variant="body2" component="p">(Rating from 1 to 5 with 5 being the best)</Typography>
            <form onSubmit={handleSubmit}>
                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">Rating</FormLabel>
                    <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                        <FormControlLabel value="1" control={<Radio required/>} label="1" onChange={(event) => setUnderstanding(event.target.value)}/>
                        <FormControlLabel value="2" control={<Radio  />} label="2" onChange={(event) => setUnderstanding(event.target.value)}/>
                        <FormControlLabel value="3" control={<Radio  />} label="3" onChange={(event) => setUnderstanding(event.target.value)}/>
                        <FormControlLabel value="4" control={<Radio  />} label="4" onChange={(event) => setUnderstanding(event.target.value)}/>
                        <FormControlLabel value="5" control={<Radio  />} label="5" onChange={(event) => setUnderstanding(event.target.value)}/>
                    </RadioGroup>
                </FormControl>
                <Button disabled onClick={backPage} variant="contained" startIcon={<ArrowBackIosRoundedIcon />}>
                    Back
                </Button>
                <Button type="submit" variant="contained" endIcon={<ArrowForwardIosRoundedIcon />}>
                    Next
                </Button>
            </form>
        </>
    )
}

export default Understanding;