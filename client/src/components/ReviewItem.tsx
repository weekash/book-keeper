import { Avatar, Box, Grid, Rating, Typography } from '@mui/material';

interface Review {
  user: {
    name: string;
    image: string; 
  };
  rating: number;
  review: string;
}

const ReviewItem = ({ review }: { review: Review }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }} border={"2px solid #cbcbcb"} borderRadius={2} padding={2} marginTop={1}>
      <Grid container sx={{ py: 1 }}>

      <Box gap={2} display="flex" alignItems="center" justifyContent="center">
      <Avatar sx={{ width:50, height:50, objectFit:"cover" }} alt={review.user.name} src={review.user.image} className="avatar" />
      <Box>
        <Typography variant="subtitle1" component="div">
          {review.user.name}
        </Typography>
        <Rating  precision={0.25} name="read-only" value={review.rating} readOnly />
      </Box>
    </Box>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="subtitle1" color="textSecondary">
            {review.review}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ReviewItem;
