import About from './components/About';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Footer from './components/Footer';


function App() {
  return (
    <div>

      <Navbar />
      <div className="header-grid">
        <Header fullName="Gashaw Fentaye" Job="Full Stack Developer" />
        <About />
      </div>
      <Skills />
      <Projects />
      <Contacts />
      <Footer copyRight="2023 Gashaw Fentaye. All rights reserved." />

    </div>
  );
}

export default App;
