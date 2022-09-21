import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#fce4ec", py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="left" color="black" gutterBottom>
          {"© Created by Mingyang Wang "}
          {new Date().getFullYear()}
          {" All rights reserved."}
        </Typography>
      </Container>
    </Box>
  );
};
export default Footer;
