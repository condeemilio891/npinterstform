
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import NavBar from './components/navBar/Navbar';
import Title from './components/Title/Title';
import Criterion from './components/Criterion/Criterion';
function App() {
  return (
<Router>
  <NavBar/>
  <Title/>
  <Criterion/>
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
