export interface GetReviewOptions {
    userId?: string;
    bookId?: string;
    reviewId?:string;
}

export interface AddReviewOptions {
    bookId: string;
    review: string;
    rating: number;
    userId: string;
    reviewId?: string;
}


export interface UpdateReviewOptions {
    review: string;
    rating: number;
}