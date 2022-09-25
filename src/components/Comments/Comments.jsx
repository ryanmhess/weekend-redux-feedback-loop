import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

function Comments() {

    const dispatch = useDispatch();
    const history = useHistory();
    const [commentIn, setComments] = useState();

    const handleSubmit = event => {
        event.preventDefault();
        console.log('comments Rating:', commentIn);
        let comments = commentIn;
        if(!comments){
            comments = "No comment.";
        }
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
        history.push('/support');
    }

    return(
        <Paper elevation={13} style={{maxWidth:650, margin:"0 auto", padding:"20px 5px"}}>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid xs={12} item>
                    <Typography gutterBottom variant="h5">Please write down any thoughts you may want to share:</Typography>
                    </Grid>
                    <Grid xs={12} item>
                    <TextField sx={{ width: '50ch'}} id="outlined-multiline-flexible" label="Thoughts to share." multiline maxRows={5} value={commentIn} onChange={(event) => setComments(event.target.value)}/>
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

export default Comments;