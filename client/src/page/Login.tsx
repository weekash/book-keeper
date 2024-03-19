import { Button, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { login } from '../services/auth';
import { Link, useNavigate } from 'react-router-dom';
import { useStore } from '../context/Context';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {setUserToken, addAlert} = useStore()
  const navigate = useNavigate()
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { success, data, error } = await login(email, password)
    if (success) {
      addAlert('Logged In successfully','success')
      setUserToken(data.token)
      navigate("/")
    } else {
      addAlert(error, 'error')
    }
  };

  return (
    <Container className='container container-center'>
      <Typography variant="h4" noWrap component="div" >
        Login to your account
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
          fullWidth
          required
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
          fullWidth
          required
        />
        <Button size='large' fullWidth type="submit" variant="contained" color="primary">
          Login
        </Button>
        <Typography sx={{ marginTop: 2 }} variant="body1" color={"GrayText"} noWrap component="div" >
          Dont have an account? <Link style={{ color: 'blue' }} to="/signup">Signup Here</Link>
        </Typography>
      </form>
    </Container>
  );
};

export default Login;
