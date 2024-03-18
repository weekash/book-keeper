import * as yup from "yup"
export const signupSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email().required("Email is required"),
    password: yup.string().min(6, "Password should have min 6 characters").required("Password is required")
});

export const signInSchema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup.string().min(6, "Password should have min 6 characters").required("Password is required")
});

