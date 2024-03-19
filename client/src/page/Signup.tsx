import React, { useState } from 'react';
import { Button, Container, TextField, Typography } from '@mui/material';
import { Link,useNavigate } from 'react-router-dom';
import { signUp } from '../services/auth';
import { useStore } from '../context/Context';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const {setUserToken, addAlert} = useStore()
  const navigate = useNavigate()
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { success, data, error } = await signUp(name,email, password)
    if (success) {
      addAlert('Account created successfully. Just login now.','success')
      setUserToken(data.token)
      navigate("/login")
    } else {
      addAlert(error, 'error')
    }
  };
  return (
    <Container className='container container-center'>
      <Typography variant="h4" noWrap component="div" >
        Create your account
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          type="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin="normal"
          fullWidth
          required
        />
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
          Signup
        </Button>
        <Typography sx={{marginTop:2}} variant="body1" color={"GrayText"} noWrap component="div" >
          Already have an account? <Link style={{color:'blue'}} to="/login">Login Here</Link>
        </Typography>
      </form>
    </Container>
  );
};

export default Signup;
