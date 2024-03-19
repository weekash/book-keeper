import { Avatar,  Typography,  Box } from "@mui/material";

interface User {
    name: string;
    image: string; // URL for the user's avatar image
}

export const UserListItem = ({ user }: { user: User }) => {
    return (
      <Box gap={2} display="flex" alignItems="center" justifyContent="center">
      <Avatar sx={{ width:50, height:50, objectFit:"cover" }} alt={user.name} src={user.image} className="avatar" />
      <Box>
        <Typography variant="subtitle1" component="div">
          {user.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="div">
          Author
        </Typography>
      </Box>
    </Box>
    );
  };