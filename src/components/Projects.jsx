import React from "react";
import ListItem from "./ListItem";

const Projects = () => (
    <section id="projects">
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
            </section>
)

export default Projects