// import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
// import Header from "./Header";
import Footer from "./Footer";
import Awards from "./Awards";
import Contact from "./Contact";
import {React, useState, useEffect} from 'react';
import Container from '@mui/material/Container';
import NavBar from "./NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import ThankYouPage from "./ThankYouPage";

const sections = [
  {
    title: "About", url:"about"
  },
  {
    title: "Experience", url:"experience"
  },
  {
    title: "Education", url:"education"
  },
  {
    title: "Skills", url:"skills"
  },
  {
    title: "Projects", url:"projects"
  },
  {
    title: "Certifications and Awards", url:"Awards"
  },
  {
    title: "Contact", url:"contact"
  },
]
  function LoadingPage() {
    return (<h1>Loading... 🔮</h1>);
  }
  
  function MainPage() {
    return (
      <div className="App">
        <Container maxWidth='lg'>
            <NavBar title="Dr. Ana Mingyang Wang's Portfolio" sections={sections}></NavBar>
        </Container>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="experience" element={<Experience />} />
          <Route path="education" element={<Education />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="awards" element={<Awards />} />
          <Route path="contact" element={<Contact />} />
          <Route path="thanks" element={<ThankYouPage />} />
          <Route path="*" element={<NotFound />} />
      </Routes>

          <Footer />

       </div>
    );
 }

 function App() {
  //Implement a timer
  // useState to create isLoading state
  const [isLoading, setIsLoading] = useState(true);

  // useEffect Hook is like componentDidMount, componentDidUpdate 
  // we use it so that when page is updated we can load for 2 secs 
  useEffect(() => {
    if(isLoading) {
      // setTimeout for about 2 seconds then let isLoading to false
      setTimeout(() => {
        setIsLoading(false)
      }, 2000);
    }
  })

  return (isLoading ? <LoadingPage /> : <MainPage />)
}
export default App;
