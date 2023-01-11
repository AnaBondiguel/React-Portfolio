import React from "react";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";

const About = () => (
  <section id="about">
    <div>
      <h2>About Me</h2>

      <h3>Welcome</h3>
      <p>
        I am a Junior Full-Stack Software Developer and love coding and have
        started on a learning journey that will last a lifetime. I learnt HTML,
        CSS, Ruby on Rails, React, and JavaScript and enjoyed solving problems
        and building applications. I am also a Researcher (Ph.D) in
        Entrepreneurship of the software industry and published articles in
        academic books and journals.
      </p>
      <h3>Personality</h3>
      <p>
        I am a curious person and open to new ideas. I like to try new
        technologies and learning new skills and knowledge. I am
        self-disciplined. When I meet with difficulties, I proactively seek out
        for solutions and cooperate with colleagues to complete tasks. I am
        sociable and often hang out with my colleagues outside of work, and love
        to catch up with friends on weekends.
      </p>
      <h3>Interests</h3>
      <p>
        I love traveling and understanding all different cultures and reading
        history books. I like kayaking, dancing flamenco, playing accordions and
        piano, cooking delicious food, and designing clothes. I also enjoy
        learning about new technologies, AIs, and aerospace.
      </p>
    </div>
    <Button variant="contained" color="secondary">
      <Link
        href="https://drive.google.com/file/d/1Xe_iaOeZ-b65n-6JNUVL48DLy9RnJYyW/view?usp=share_link"
        color="#FFFFFF"
      >
        DOWNLOAD MY CV
      </Link>
    </Button>
  </section>
);

export default About;
