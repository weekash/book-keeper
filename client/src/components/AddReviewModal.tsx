import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, TextField, Rating, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Dispatch, SetStateAction, useState } from 'react';
import { addReviewForBook, updateReviewForBook } from '../services/review';
import { useStore } from '../context/Context';
import { useParams } from 'react-router-dom';
import {  Review } from '../interface/base.type';

interface ModalProps {
  open: boolean;
  handleClose: () => void;
  userReview: Review | null;
  setReviewKey: Dispatch<SetStateAction<number>>
}
const AddReviewModal = (props: ModalProps) => {
  const { open, handleClose, userReview, setReviewKey } = props
  const [rating, setRating] = useState(userReview?.rating ?? 1.5)
  const [review, setReview] = useState(userReview?.review ?? '')
  const { bookId } = useParams<{ bookId: string }>();
  const { addAlert } = useStore()
  const [loading, setLoading] = useState(false)
  if (!open) {
    return null;
  }

  async function addReview() {
    if (!bookId) {
      return
    }
    setLoading(true)
    const {success, error } = await addReviewForBook(bookId, rating, review)
    if (success) {
      addAlert('Added review successfully', 'success')
      setReviewKey((val) => val + 1)
      handleClose()
    } else {
      addAlert(error, 'error')
    }
    setLoading(false)
  }

  async function updateReview() {
    if (!bookId || !userReview) {
      return
    }
    setLoading(true)
    const {success, error } = await updateReviewForBook(userReview.reviewId, bookId, rating, review)
    if (success) {
      addAlert('Updated review successfully', 'success')
      setReviewKey((val) => val + 1)
      handleClose()
    } else {
      addAlert(error, 'error')
    }
    setLoading(false)
  }

  function submitForm() {
    if (userReview) {
      updateReview()
    } else {
      addReview()
    }
  }
  return (
    <>
      <Dialog maxWidth="lg" open={open} onClose={handleClose}>
        <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography fontWeight={'bold'} variant="h5">
            {userReview ? "Update Review" : "Add Review"}
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ textAlign: 'center' }}>
          <DialogContentText variant="h6">
            Would you recommend reading this book?
          </DialogContentText>
          <Rating value={rating} onChange={(_, value) => value && setRating(value)} precision={0.5} size='large' sx={{ fontSize: 50 }} name="rating" defaultValue={0} />
          <TextField
            autoFocus
            margin="dense"
            id="feedback"
            label="Feedback"
            fullWidth
            multiline
            minRows={4}
            variant="standard"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
          <Button disabled={loading} variant="contained" color="primary" onClick={submitForm}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddReviewModal;
