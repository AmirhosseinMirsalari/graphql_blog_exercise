import React from "react";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import BookIcon from "@mui/icons-material/Book";
import { Link } from "react-router-dom";

function Header() {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar sx={{ flexDirection: 'row', justifyContent: 'space-between'}}>
          <Typography component="h1" variant="h5" fontWeight="700" >
            <Link to="/" style={{textDecoration:"none", color: "#fff"}}>بلاگـــ کده</Link>
          </Typography>
          <Link to="/" style={{color:"#fff"}}>
            <BookIcon />
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
