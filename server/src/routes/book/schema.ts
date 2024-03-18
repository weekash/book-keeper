import * as yup from "yup"
export const reviewSchema = yup.object().shape({
    rating: yup.number().min(0,"Invalid value").max(5,"Invalid value").required("Rating is required"),
    review: yup.string().min(10, "Atleast 10 characters").required("Review is required")
});

