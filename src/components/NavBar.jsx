import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "@mui/material";
// import Link from '@mui/material/Link';
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';

function NavBar(props) {
  const { title, sections } = props;
  return (
   
    <>
     
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
           <Link to="/">{title}</Link>
        </Typography>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "space-between", overflowX: "auto" }}
      >
       <Grid container columnSpacing={{ xs: 3, sm: 4, md: 5 }} justifyContent="center" alignItems="center">
        {sections.map((section) => (
          <Grid item><Link key={section.title} to={section.url}>{section.title}</Link></Grid> 
           // <Link 
            // href={section.url}
            // color="inherit"
            // noWrap
            // key={section.title}
            // variant="body2"
            // sx={{ p: 1, flexShrink: 0 }}
            // >
            //     {section.title}
            // </Link>
        ))}
       </Grid>
      </Toolbar>
      
    </>
    
  );
}

export default NavBar;
