import React from "react";
import ListItem from "./ListItem";
import Grid from '@mui/material/Grid';

const Awards = () => {
  const awards = [
    {
      title: "Doctoral Merit Award",
      description: " University of Waikato 2012",
    },
    {
      title: "Membership of Golden Key International Honour Society 2012",
      description:
        " Certified as the top 15% of their peers, based on academic achievement",
    },
  ];
  
  const certifications = [
    { title: "AOM Membership", description: " Academy of Management 2017" },
    {
      title: "ANZAM Membership",
      description: " Australian & New Zealand Academy of Management 2015",
    },
    {
      title:
        "Provisional Associated Chartered Accountant Membership of New Zealand ",
      description: " The New Zealand Institute of Chartered Accountants 2008",
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
