import React, { useState, useEffect } from "react";
import ListItem from "./ListItem";
// import {Link} from "react-router-dom";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

    // const initialProjects = [
    //     "babyessentials",
    //     "ruby-flowershop-app",
    //     "React-Portfolio",
    //     "My-Portfolio",
    // ]

    const Projects = () => {
        let initialData = {
          projects: [],
          userInput: "",
        };

        const [data, setData] = useState(initialData);

        useEffect(
            () => {
              function fetchProjects() {
                const url = "https://api.github.com/users/AnaBondiguel/repos";
        
                fetch(url)
                  .then((result) => {
                    return result.json();
                  })
                  .then((data) => {
                    const projects = data // array
                      .filter((project) => !project.private) // array
                      .map((project) => ({
                        name: project.name,
                        htmlUrl: project.html_url,
                        language: project.language
                      }));
                    setData({
                      ...data,
                      projects: projects,
                    });
                  })
                  .catch((error) => {
                    console.log("Error!", error);
                  })
                  .finally(() => {
                    console.log("Fetch completed.");
                  });
              }
        
              fetchProjects();
            },
            // only run on component did mount
            []
          );
 
      
          function handleOnChange(event) {
            setData({
              ...data,
              userInput: event.target.value,
            });
          }
        
          function getFilteredProjects() {
            if(!data.userInput) {
                return data.projects;
            }
            let filteredProjects = data.projects.filter((project) => {
                return project.name.includes(data.userInput);
            });
            return filteredProjects;
          }

    
            return (
                <div id="projects">
                    <div>
                         <h2>Projects 🖥</h2>
                            <ul>
                                <ListItem title="Two-sided Marketplace Application" description={" helping parents to sell and buy second-hand baby essentials"}></ListItem>
                                 <a href="https://github.com/AnaBondiguel/babyessentials.git">Baby Essentail Application Github</a>
                               <ListItem title="Terminal Application" description={" building an application for a flower shop to sell and deliver fresh flowers to customers"}></ListItem>
                                 <a href="https://github.com/AnaBondiguel/babyessentials.git">Bloom House Application Github</a>
                               <ListItem title="Portfolio Website" description={" developing my personal website for potential employees and demonstrating my learning process of how I transformed my portfolio from HTML/CSS to React"}></ListItem>
                                 <a href="https://github.com/AnaBondiguel/React-Portfolio.git">My React Portfolio Github</a> <br></br>
                                 <a href="https://github.com/AnaBondiguel/My-Portfolio.git">My HTML/CSS Portfolio Github</a>
                            </ul>
                    </div>
                         <br></br>
                        

    
                    <label>Search Projects: </label>
                            <input type="text" onChange={handleOnChange}></input>
                            <Box sx={{ minWidth: 500  }}>
                                {getFilteredProjects().map((project, index) => {
                                    console.log(project);
                                     return <Card variant="outlined" sx={{ width: 200, height: 100, display: 'inline-block', backgroundColor: "#ffd7db", margin: 5 }} key={index}><a href={project.htmlUrl} target="_blank">{project.name}</a>
                                              <CardContent>language: {project.language}</CardContent>
                                           </Card>;
                                })}

                            </Box>
                           
                </div>
            )
        }
    

export default Projects


