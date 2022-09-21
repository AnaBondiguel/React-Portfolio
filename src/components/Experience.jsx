import React from "react";
import ListItem from "./ListItem";

const Experience = () => {
  const publication = [
    {title: 'Wang, M., and Gibb, J. 2020', description: ' Uncovering Opportunity: Expert vs Novice Entrepreneurs’ Use of Intuitive and Analytical Decision-Making. Handbook of Intuition Research as Practice. UK: Edward Elgar.'},
    {title: 'Wang, M., Gibb, J., and Sinha, P. 2018', description: ' Entrepreneurial Decision-Making Styles: Developing a Dynamic Intuitive-Analytic Capability. Proceedings of the 78th Annual Conference of the Academy of Management: Making Decisions in Organizations, Chicago.'},
    {title: 'Wang, M., Gibb, J., and Sinha, P. 2017', description: ' Using Intuition and Rational Analysis to Inform Entrepreneurial Opportunity Recognition. Proceedings of the 77th Annual Conference of the Academy of Management, Intuition in Organizations: Integration of Intuition and Analysis, Atlanta.'},
    {title: 'Sinha, P., Wang, M., Scott-Kennel, J., and Gibb, J. 2015', description: ' Paradoxes of Psychic Distance and Market Entry by Software INVs. European Business Review 27, 34-59.'},
]

const teaching = [
  {title: 'STMG524', description: ' Entrepreneurship, Theory and Practice'},
  {title: 'STMG321', description: ' Entrepreneurial Opportunity'},
  {title: 'MNGT501', description: ' Research Methods in Management Studies'}
]
  return(
  <section id="experience">
    <div>
      <h2>Experience 💼</h2>
      
      <h4>
        Research Fellow/Guest Lecturer, School of Management and Marketing,
        University of Waikato from 2017 until now
      </h4>
      <p>Major Publications related to the software industry:</p>
        <ul>
          {publication.map(({ title, description }, id) => (
              <ListItem key={id} title={title} description={description}></ListItem>
            ))}
        </ul>

      <p>Papers Taught:</p>
      <ul>
        {teaching.map(({ title, description }, id) => (
              <ListItem key={id} title={title} description={description}></ListItem>
            ))}
      </ul>

      <h4>
        Research Assistant, School of Management and Marketing, University of
        Waikato 2011-2012
      </h4>
        <ul>
          <ListItem title="Quantitative Data Analysis Paper" description={" Large Firm and Linkages in Small Economies"}></ListItem>
        </ul>

      <h4>
        Assistant Accountant, Business and Tax Centre Ltd Hamilton, New Zealand
        2009-2010
      </h4>
        <ul>
          <ListItem title="Support the senior accountant and finance team" description={" Preparing financial statements, budgets, invoices"}></ListItem>
        </ul>
    </div>
 
  </section>
)};
export default Experience;
