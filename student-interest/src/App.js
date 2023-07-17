
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import NavBar from './components/navBar/Navbar';
import Title from './components/Title/Title';
import Criterion from './components/Criterion/Criterion';
import NPForm from './components/Form/NPForm';
import Header from './components/Header/Headers'; 



function App() {
  return (
<Router>
  <Header/>
  <NavBar/>
  <Title/>
  <Criterion/>
  <NPForm/>
  <Routes>
    <Route path="/" />
    <Route path="/portfolio" />
    <Route path="/contact"/>
    <Route path="/about"/>
  </Routes>
</Router> 


  );
}

export default App;
