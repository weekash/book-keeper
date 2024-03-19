import { Box, CircularProgress } from '@mui/material'

export default function Spinner() {
    return (
        <Box display={"flex"} justifyContent={"center"}>
            <CircularProgress size="3rem" />
        </Box>
    )
}
