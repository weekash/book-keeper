import { ArrowDownward } from '@mui/icons-material'
import { Container, Typography } from '@mui/material'
import BookContainer from '../containers/BookContainer'

export default function Home() {
  return (
    <>
      <Container className='container-center container' maxWidth="lg">
        <Typography align="center" variant="h2" component="h2">
          Top rated Books in the market
        </Typography>
        <Typography color={"GrayText"} align="center" variant="body1" component="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi rerum deleniti eligendi commodi ducimus, totam reprehenderit eveniet saepe quis accusantium eum adipisci architecto obcaecati tempora natus id necessitatibus impedit hic voluptas praesentium modi minus repellat itaque. Nam reprehenderit exercitationem, quidem et temporibus doloribus ipsa consectetur molestias voluptas. Ex, laborum hic?
        </Typography>
        <ArrowDownward sx={{ marginTop: '3rem' }} />
      </Container>
      <BookContainer />
    </>
  )
}
