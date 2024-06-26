import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Rating } from '@mui/material';
import { getBookById } from '../services/book';
import { useStore } from '../context/Context';
import { UserListItem } from '../components/UserListItem';
import { BookDetailsType } from '../interface/base.type';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import AddReviewModal from '../components/AddReviewModal';
import ReviewContainer from '../containers/ReviewContainer';
import Spinner from '../components/Spinner';
import { Container } from '@mui/system';


const BookDetails: React.FC = () => {
    const [data, setData] = useState<BookDetailsType | null>(null)
    const { bookId } = useParams<{ bookId: string }>();
    const [modalOpen, setModalOpen] = useState(false)
    const { isAuthenticated } = useStore()
    const [reviewKey, setReviewKey] = useState(1)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    function handleClose() {
        setModalOpen(false)
    }
    function handleOpen() {
        if (!isAuthenticated) {
            navigate("/login")
            return;
        }
        setModalOpen(true)
    }
    const { addAlert } = useStore()
    useEffect(() => {
        async function getBooks(bookId: string) {
            setLoading(true)
            const { data, error, success } = await getBookById(bookId)
            if (success) {
                setData(data)
                console.log(data)
            } else {
                addAlert(error, 'error')
            }
            setLoading(false)
        }
        if (bookId) {
            getBooks(bookId)
        }
    }, [bookId, reviewKey])

    if (!data) {
        return
    }
    const { name, publisher, description, image, rating, users } = data;
    return (
        <Container maxWidth="lg" sx={{marginTop:15}}>
          {loading && <Spinner/>}
            <Grid2 container spacing={4} >
                <Grid2 xs={12} lg={3} padding={4}>
                    <img
                        src={image}
                        alt="Book cover"
                        width={'100%'}
                    />
                </Grid2>
                <Grid2 xs={12} lg={9}>
                    <Box sx={{ flexGrow: 1, padding: 2 }}>
                        <Typography variant="h3" component="h2">
                            {name}
                        </Typography>
                        <Typography variant="h6" component="h2" color={"teal"}>
                            Published By: {publisher}
                        </Typography>
                        <Box margin={2} display={"flex"} gap={4} flexWrap={'wrap'}>
                            {users.map(({ name, image }) => <UserListItem user={{ name, image }} />)}
                        </Box>
                        <Typography variant="h6" color="textSecondary">
                            {description}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                            <Rating
                                size='large'
                                value={rating}
                                precision={0.25}
                                readOnly
                                style={{ fontSize: 50 }}
                            />
                            <Typography variant="h5" ml={1}>
                                ({rating}/5)
                            </Typography>
                            
                        </Box>
                        <Divider light variant="middle" sx={{ my: 2 }} />
                        <><Button onClick={handleOpen} size='large' sx={{ marginTop: 3 }} type="submit" variant="contained" color="primary">
                            {data.userReview ? "Update Review":"Add Review"}
                        </Button>
                            <AddReviewModal setReviewKey={setReviewKey} userReview={data.userReview} open={modalOpen} handleClose={handleClose} />
                        </>
                    </Box>
                </Grid2>
            </Grid2>
            <ReviewContainer reviewKey={reviewKey} />
        </Container>
    );
};

export default BookDetails;
