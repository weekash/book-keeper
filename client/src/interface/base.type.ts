export interface AxiosResponseType<T> {
    success: boolean;
    data: T;
    error: string[];
}

export interface AlertItem {
    id: number;
    text: string;
    type: 'success' | 'info' | 'warning' | 'error';
}

export interface BookItem {
    bookId: string;
    image: string;
    description: string;
    name: string;
    publisher: string;
    rating: number;
}
export interface User {
    userId: string;
    name: string;
    image: string;
}

export interface Review {
    reviewId: string;
    bookId: string;
    userId: string;
    review: string;
    rating: number;
    createdAt: string;
    updatedAt: string;
    user: User;
}
export interface BookDetailsType extends BookItem {
    users: Array<User>;
    userReview: Review | null
}