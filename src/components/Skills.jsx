import React from "react";
import ListItem from "./ListItem";

const Skills = () => {
  const arr = [
    {
      title: "Coding languages",
      description: " HTML, CSS, JavaScript, Ruby on Rails, React",
    },
    { title: "Database", description: " PostgreSQL, MongoDB" },
    { title: "Source control", description: " Git" },
    { title: "Testing", description: " TDD" },
    { title: "Debugging knowledge", description: " Chrome Dev Tools" },
    {
      title: "Cloud platform",
      description: " Amazon Web Services, Heroku deployment, Netlify",
    },
    {
      title: "Mathematics, algorithms, statistic and econometrics",
      description: " With tertiary-level education certificates",
    },
    { title: "Project management", description: " Trello" },
    {
      title: "Critical thinking",
      description:
        " As a researcher, critical thinking skill is essential as we often receive criticisms for our research papers. I need to know what types of criticisms are useful for the future directions of our research, and how to use those criticisms to improve the research papers.",
    },
    {
      title: "Problem-solving",
      description:
        " As a leading author, I have to carry the majority of the work when we received comments from reviewers. Sometime their comments can be overwhelming and I have to stay calm and show positive energy to other authors. At the same time, I'm looking for solutions through discussions and trying different strategies. I often break down the problems and try to solve them piece by piece.",
    },
    {
      title: "Communication skills",
      description:
        " Research work is about exchanging opinions between authors. My colleagues and I always stay in touch over Zoom, Skype, and emails. An agreement between authors for the future research direction requires a clear explanation of both theoretical and empirical reasons. We often demonstrate our reasons and ideas by drawing diagrams and writing notes to keep things simple. I also often present our work at conferences and discuss topics with other experts in the field.",
    },
    {
      title: "Research and data analysis skills",
      description:
        "  Reading a large amount of literature and information online; collecting data by using survey and interviewing the top leaders and managers to identify common themes and making them connects with theories; being able to use software (Altas.ti & SAS/STAT) to analysis huge amount of data and produce data analysis reports. During this process, my communication and critical thinking skills are very important.",
    },
    {
      title: "Publishing skills",
      description:
        " Ability to construct a research paper with novel ideas or contributions to literature and strong arguments based on theoretical concepts and data results, good communications with editors of journals or books; ability to polish articles into a precise way that there is no gap between theories and empirical results; being able to revise research papers with editors/reviewers' comments from journals or books; retaining a positive attitude and being resilient when the papers get rejected.",
    },
    {
      title: "Teaching skills",
      description:
        " Designing courses and learning materials; preparing my speech for the classes in order to deliver knowledge in a simple, clear, and interesting way (e.g. I always share my learning experience by drawing pictures or using stories to describe key concepts); getting feedback from students' questions and assignments, and making improvements for future classes.",
    },
    {
      title: "Software skills",
      description:
        " Trello, TLAS.ti, SAS/STAT, Word, Excel, PowerPoint, Canvas, MYOB, QuickBook, etc.",
    },
    {
      title: "Accounting skills",
      description:
        " Preparing financial statements, budgets, invoices to support the senior accountant and finance team",
    },
    { title: "Languages", description: " English and Chinese Mandarin" },
  ];
  return (
    <section id="skills">
      <h2>Skills</h2>

      <article>
        <ul>
          {arr.map(({ title, description }, id) => (
            <ListItem
              key={id}
              title={title}
              description={description}
            ></ListItem>
          ))}
        </ul>
      </article>
    </section>
  );
};
export default Skills;
