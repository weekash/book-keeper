import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'; 
import { Rating } from '@mui/material';
import { Link } from 'react-router-dom';

const BookCard = ({data:{ image, bookId, name, description, rating }}:any) => {
  return (
    <Card component={Link} to={`/books/${bookId}`} raised sx={{ display: 'flex', height:'100%',maxHeight:250 }}>
      <CardMedia
        component="img"
        image={image}
        sx={{ width: 150, objectFit:'cover', padding:2 }}
        alt="Book cover"
      />
      <CardContent sx={{ flexGrow: 1}}>
        <Typography variant="h6" component="h3">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" >
          {description}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
          <Rating
           value={rating}
           precision={0.25}
           readOnly
          />
          <Typography variant="body2" ml={1}>
            ({rating}/5)
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BookCard;
