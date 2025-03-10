import './App.css';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Service from '../Service/Service';
import Price from '../Price/Price';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Service />
      <Price />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
