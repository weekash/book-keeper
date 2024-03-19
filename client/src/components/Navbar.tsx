import { Home } from "@mui/icons-material";
import { AppBar, Avatar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useStore } from "../context/Context";
export const Navbar = () => {
    const { isAuthenticated, currentUser, logOut } = useStore()
    return <AppBar position="fixed" color="info">
        <Toolbar>
            <Home />
            <Typography variant="h6" noWrap component={Link} to="/" sx={{ textDecoration: 'none', flexGrow: 1, color: 'white' }}>
                Book-Keeper
            </Typography>
            {isAuthenticated && currentUser ?
                <>
                    <Box display={"flex"} gap={2}>
                        <Avatar src={currentUser.image} />
                        <Typography variant="h6" noWrap sx={{ flexGrow: 1, color: 'white' }}>
                            {currentUser.name}
                        </Typography>
                    </Box>
                    <Button sx={{ marginLeft: 2 }} onClick={logOut} variant="contained" color="secondary">
                        Logout
                    </Button>
                </>
                : <>
                    <Button sx={{ marginRight: 2 }} component={Link} to="/login" variant="contained" color="secondary">
                        Login
                    </Button>
                    <Button component={Link} to="/signup" variant="contained" color="secondary">
                        Signup
                    </Button>
                </>}
        </Toolbar>
    </AppBar>
}