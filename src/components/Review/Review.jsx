import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import axios from 'axios';

function Review() {

    const history = useHistory();
    const feedbackReview = useSelector(store=>store.userFeedback)

    const feedback = {
        feeling: feedbackReview[0].feeling,
        understanding: feedbackReview[1].understanding,
        support: feedbackReview[2].support,
        comments: feedbackReview[3].comments
    }

    const handleSubmit = event => {
        event.preventDefault();
        // feedbackPrep();
        console.log('This is what I am trying to post:', feedback);
        axios({
            method: 'POST',
            url: '/feedback',
            data: feedback
        }).then((postRes) => {
            nextPage();
        }).catch((postErr) => {
            console.log('POST route error:', postErr);
        });
    }

    const nextPage = () => {
        history.push('/complete');
    }

    const backPage = () => {
        history.push('/comments');
    }

    return(
        <Paper elevation={13} style={{maxWidth:650, margin:"0 auto", padding:"20px 5px"}}>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2} component="span" sx={{ display: 'flex', mx: '2px', transform: 'scale(0.8)' }}>
                    <Grid xs={12} item>
                    <Typography gutterBottom variant="h5">Please review your shared experience:</Typography>
                    </Grid>
                    <Grid xs={4} item>
                        <Card variant="outlined" sx={{ maxWidth: 200 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>Feeling:</Typography>
                                <Typography variant="body2">{feedback.feeling}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={4} item>
                        <Card variant="outlined" sx={{ maxWidth: 200 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>Understanding:</Typography>
                                <Typography variant="body2">{feedback.understanding}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={4} item>
                        <Card variant="outlined" sx={{ maxWidth: 200 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>Supported:</Typography>
                                <Typography variant="body2">{feedback.support}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={12} item>
                        <Card variant="outlined" sx={{ maxWidth: 640}}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>Thoughts:</Typography>
                                <Typography variant="body2">{feedback.comments}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={12} item>
                        <Button disabled onClick={backPage} variant="contained" startIcon={<ArrowBackIosRoundedIcon />}>
                            Back
                        </Button>
                        <Button type="submit" variant="contained" endIcon={<ArrowForwardIosRoundedIcon />}>
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    )
}

export default Review;