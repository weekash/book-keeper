import { useEffect, useState } from 'react'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import {  Container, Typography } from '@mui/material'
import { useStore } from '../context/Context'
import ReviewItem from '../components/ReviewItem'
import { getAllReviewsForBook } from '../services/review'
import { useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'
import { Review } from '../interface/base.type'

export default function ReviewContainer({ reviewKey }: { reviewKey: number }) {
    const [reviews, setReviews] = useState<Review[]>([])
    const { addAlert } = useStore();
    const { bookId } = useParams<{ bookId: string }>();
    const [loading, setLoading] = useState(false)
    const limit = 6
    useEffect(() => {
        async function getReviews(bookId: string) {
            setLoading(true)
            const { success, data, error } = await getAllReviewsForBook(bookId, 1, limit)
            if (success) {
                console.log({ data })
                setReviews(data)
            } else {
                addAlert(error, 'error')
            }
            setLoading(false)
        }
        bookId && getReviews(bookId)
    }, [reviewKey])
    return (
        <Container sx={{ py: 2 }} maxWidth="xl">
            <Typography variant="h5" color="textSecondary">
                See what others are saying about this book
            </Typography>
            {loading ? <Spinner /> : <>
                {reviews.length == 0 ? <Typography textAlign={"center"} variant="h5" color="textSecondary">
                    No Reviews Found
                </Typography> :
                    <Grid2 container spacing={4} >
                        {reviews.map((item) => <Grid2 xs={12} >
                            <ReviewItem review={item} />
                        </Grid2>)}
                    </Grid2>}
            </>}
        </Container>
    )
}
