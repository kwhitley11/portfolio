import './App.css';
import Navbar from './navbar/Navbar.jsx';
import Header from './header/Header.jsx';
import Experience from './experience/Experience.jsx'
import Portfolio from './portfolio/Portfolio.jsx';
import Contact from './contact/Contact.jsx';
import Footer from './footer/Footer.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
