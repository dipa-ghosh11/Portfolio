import { Navbar } from './components/Navbar/Navbar';
import styles from './App.module.css';
import {Hero} from './components/Hero/Hero';
import {About} from './components/About/About';
import {Experience} from './components/Experience/Exerience'
import { Project } from './components/Projects/Project';
import { Contact } from './components/Contact/Contact';


function App() {
 

  return (<div className={styles.App}>
    <Navbar/>
    <Hero/>
    <About />
    <Experience />
    <Project />
    {/* <Achievements /> */}
    <Contact />
  </div>)
}

export default App
