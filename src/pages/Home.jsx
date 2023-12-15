import { GridLines } from "../components/Designs";
import {
  About,
  Experience,
  Landing,
  Skills,
  Education,
  Project,
  Contact,
} from "../components/Layout";
import { projects } from "../data/portfolioInfo";

import UserInfo from "../data/UserInfo";

const Home = () => {
  return (
    <div className="d-flex flex-column" style={{ gap: "1px" }}>
      <GridLines fix />
      <Landing UserInfo={UserInfo} />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Project intro projects={projects} />
      <Contact />
    </div>
  );
};

export default Home;
