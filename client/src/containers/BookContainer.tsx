import { useEffect, useState } from 'react'
import BookCard from '../components/BookItem'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { Container, Pagination, Typography } from '@mui/material'
import { getAllBooks } from '../services/book'
import { useStore } from '../context/Context'
import { BookItem } from '../interface/base.type'
import Spinner from '../components/Spinner'

export default function BookContainer() {
    const [books, setBooks] = useState<BookItem[]>([])
    const [page, setPage] = useState(1)
    const [count, setCount] = useState(1)
    const [loading, setLoading] = useState(false)
    const { addAlert } = useStore();

    const limit = 6
    useEffect(() => {
        async function getBooks() {
            setLoading(true)
            const { success, data, error } = await getAllBooks(page, limit)
            if (success) {
                setBooks(data.rows)
                setCount(data.count)
            } else {
                addAlert(error, 'error')
            }
            setLoading(false)
        }
        page >= 1 && getBooks()
    }, [page])
    return (
        <Container>
            {loading ? <Spinner /> : <>
                {books.length == 0 ? <Typography textAlign={"center"} variant="h5" color="textSecondary">
                    No Reviews Found
                </Typography> :
                    <Grid2 container spacing={4}  >
                        {books.map((item) => <Grid2 xs={12} lg={6} >
                            <BookCard data={{ ...item, image: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781847398819/random-9781847398819_hr.jpg" }} />
                        </Grid2>)}
                    </Grid2>}

                <Pagination sx={{ margin: 2 }} color='primary' count={Math.ceil(count / limit)} page={page} onChange={(_, page) => setPage(page)} />
            </>}
        </Container>
    )
}
