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

function Comments() {

    const dispatch = useDispatch();
    const history = useHistory();
    const [comments, setComments] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        console.log('comments Rating:', comments);
        const action = {
            type: 'ADD_USER_INPUT',
            payload: { comments }
        };
        dispatch(action);
        nextPage();
    }

    const nextPage = () => {
        history.push('/review');
    }

    const backPage = () => {
        history.push('/supported');
    }

    return(
        <>
            <Typography gutterBottom variant="h5">Please write down any thoughts you may want to share:</Typography>
            <form onSubmit={handleSubmit}>
                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">Rating</FormLabel>
                    <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                        <FormControlLabel value="1" control={<Radio required/>} label="1" onChange={(event) => setComments(event.target.value)}/>
                        <FormControlLabel value="2" control={<Radio  />} label="2" onChange={(event) => setComments(event.target.value)}/>
                        <FormControlLabel value="3" control={<Radio  />} label="3" onChange={(event) => setComments(event.target.value)}/>
                        <FormControlLabel value="4" control={<Radio  />} label="4" onChange={(event) => setComments(event.target.value)}/>
                        <FormControlLabel value="5" control={<Radio  />} label="5" onChange={(event) => setComments(event.target.value)}/>
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

export default Comments;