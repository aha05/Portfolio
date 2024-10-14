import About from './components/About';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Footer from './components/Footer';


function App() {
  return (
    <div>

      <Navbar />
      <About fullName="Gashaw Fentaye" />
      <Skills />
      <Projects />
      <Contacts />
      <Footer copyRight="2023 Gashaw Fentaye. All rights reserved." />

    </div>
  );
}

export default App;
