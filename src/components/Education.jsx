import React from "react";
import Card from "./Card";

const Education = () => {
  const edu = [
    {
      heading: "Diploma of Information Technology, Coder Academy",
      date: "2022",
      major: "Full-Stack Software Engineering",
      description: "Grade: A-level",
    },
    {
      heading: "Doctor of Philosophy, University of Waikato",
      date: "2012-2017",
      major: "Strategic Management",
      title:
        "Thesis Title: The Role of Intuitive and Analytical Decision-Making in Entrepreneurial Opportunity Recognition",
      description:
        "The purpose of this thesis was to examine how entrepreneurial firms combine the use of intuitive and analytical decision-making to recognize opportunities. It was a multiple-case study using an interpretive paradigm. Forty-eight interviews were conducted in eight software companies, and analysed by comparing founders’ and managers’ decision-making processes. The grounded theoretical model of dynamic intuitive-analytic capabilities extends the literatures of dynamic capabilities, intuition, dual process theory, product innovation, an entrepreneurial opportunity, and helps to answer one of the most commonly asked questions in the field of entrepreneurship: why some entrepreneurial companies are more successful than others.",
    },
    {
      heading: "Master's Degree, University of Waikato",
      date: "2010-2011",
      major: "International Management, First Class Honours",
      title:
      "Thesis Title: Internationalization Process of New Zealand’s Software Born-Global Companies",
      description:
        "The thesis focuses on how New Zealand’s software firms engage in overseas export activities, and what exporting strategies they use to be successful. The study develops a theoretical model of New Zealand’s software born-global companies’ internationalization process. The model makes contributions to the theoretical concepts – born-global, psychic distance, and global mindset and also recommendations to New Zealand’s government policies.",
    },
    {
      heading: "Bachelor Degree, University of Otago",
      date: "2004-2006",
      major: "Accounting and Economics",
    },
  ];

  return (
    <section id="education">
      <div>
        <h2>Education 🎓</h2>
        
        {edu.map(({ heading, date, major, title, description }, id) => (
          <Card
            key={id}
            heading={heading}
            date={date}
            major={major}
            title={title}
            description={description}
          ></Card>
        ))}
      </div>
    </section>
  );
};
export default Education;
