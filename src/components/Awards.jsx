import React from "react";
import ListItem from "./ListItem";
import Grid from '@mui/material/Grid';

const Awards = () => {
  const awards = [
    {
      title: "Doctoral Merit Award 2012",
      description: " University of Waikato",
    },
    {
      title: "Membership of Golden Key International Honour Society 2012",
      description:
        " Certified as the top 15% of their peers, based on academic achievement",
    },
  ];
  
  const certifications = [
    { 
      title: " HTML & CSS Certificates 2022", 
      description: " Codeacademy", 
    },
    { 
      title: "AOM Membership 2017", 
      description: " Academy of Management ", 
    },
    {
      title: "ANZAM Membership 2015",
      description: " Australian & New Zealand Academy of Management ",
    },
    {
      title:
        "Provisional Associated Chartered Accountant Membership of New Zealand 2008",
      description: " The New Zealand Institute of Chartered Accountants ",
    },
  ];
  return (
    <section id="awards">
      <div>
        <h2>Certifications and Awards </h2>

        <Grid container spacing={2} columns={16} >
          <Grid item xs={8} >
            <h4>Certifications 🏅</h4>
            <ul>
              {certifications.map(({ title, description }, id) => (
                <ListItem
                  key={id}
                  title={title}
                  description={description}
                ></ListItem>
              ))}
            </ul>
            </Grid>

            <Grid item xs={8} >
            <h4>Honours and Awards 🏆</h4>
            <ul>
              {awards.map(({ title, description }, id) => (
                <ListItem
                  key={id}
                  title={title}
                  description={description}
                ></ListItem>
              ))}
            </ul>
            </Grid>
          </Grid>
      </div>
    
    </section>
  );
};
export default Awards;
