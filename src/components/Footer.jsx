import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import Link from '@mui/material/Link';


const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#fce4ec", py: 6}}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="left" color="black" gutterBottom>
          {"© Created by Mingyang Wang "}
          {new Date().getFullYear()}
          {" All rights reserved."} 
              <Link href="https://www.linkedin.com/in/ana-mingyang-wang/" sx={{ float: 'right', marginRight: 3 }}>
                <FontAwesomeIcon icon={faLinkedinIn} color="black" size="lg" />
              </Link>
              <Link href="https://github.com/AnaBondiguel"  sx={{ float: 'right', marginRight: 3}}>
                <FontAwesomeIcon icon={ faGithub } color="black" size="lg" />
              </Link>
        </Typography>
       
      </Container>
    </Box>
  );
};
export default Footer;


