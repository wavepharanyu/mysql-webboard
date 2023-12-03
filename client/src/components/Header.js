import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar component="nav">
       <Container maxWidth="xl">
      <Toolbar sx={{height: "90px", display: "flex", justifyContent:"space-between",alignItems: "center",}}>
        <Link to="/" style={{display: "flex", textDecoration: "none", color: "white"}}>
          <ForumIcon fontSize="large" color="inherit"/>
          <Typography
            variant="h4"
            component="div"
            sx={{ ml: 2.5, flexGrow: 1, display: { xs: 'none', sm: 'block' }, fontWeight: 700, }}
          >
            My Webboard
          </Typography>
        </Link>
        <Box sx={{ display: { sm: 'block' } }}>
          <Link to="/p/new" style={{textDecoration: "none", color: "white"}}>
              <Button variant="outlined" color='inherit'>
                Create New Post
              </Button>
          </Link>
        </Box>
      </Toolbar>
      </Container>
    </AppBar>

  )
}

export default Header