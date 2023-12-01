// import logo from './logo.svg';
import './App.css';
// import CommmonBtn from './components/CommmonBtn';
import Mynavbar from './components/Mynavbar';
import Header from './components/Header';
import Sectionone from './components/Sectionone';
import Sectiontwo from './components/Sectiontwo';
import Sectionthird from './components/Sectionthird';
import Sectionfourth from './components/Sectionfourth';
import Sectionfive from './components/Sectionfive';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className='bg-header'>
        <Mynavbar />
        <Header />
      </div>
      <Sectionone />
      <Sectiontwo />
      <Sectionthird />
      <Sectionfourth />
      <Sectionfive />
      <Footer />
    </div>
  );
}

export default App;
