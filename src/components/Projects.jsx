import React, { useState, useEffect } from "react";
import ListItem from "./ListItem";
import {Link} from "react-router-dom";

    const initialProjects = [
        "babyessentials",
        "ruby-flowershop-app",
        "React-Portfolio",
        "My-Portfolio",
    ]

    const Projects = () => {
        let initialData = {
          projects: initialProjects,
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
                    const projectNames = data.map((project) => project.name);
                    setData({
                      ...data,
                      projects: projectNames,
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
                return project.includes(data.userInput);
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
                            <ul>
                                {getFilteredProjects().map((project, index) => {
                                     return <li key={index}><Link to={project}>{project}</Link></li>;
                                })}
                            </ul>
                </div>
            )
        }
    

export default Projects


