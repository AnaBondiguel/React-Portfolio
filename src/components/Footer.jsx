import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#fce4ec", py: 6 }}>
      <Container maxWidth="lg">
        <Grid
          container
          columnSpacing={{ xs: 3, sm: 4, md: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h6" align="left" color="black" gutterBottom>
              {"© Created by Mingyang Wang "}
              {new Date().getFullYear()}
              {" All rights reserved."}
            </Typography>
          </Grid>

          <Grid item>
            <Link
              href="https://www.linkedin.com/in/ana-mingyang-wang/"
              sx={{ marginRight: 3 }}
            >
              <FontAwesomeIcon icon={faLinkedinIn} color="black" size="lg" />
            </Link>

            <Link
              href="https://github.com/AnaBondiguel"
              sx={{ marginRight: 3 }}
            >
              <FontAwesomeIcon icon={faGithub} color="black" size="lg" />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default Footer;
