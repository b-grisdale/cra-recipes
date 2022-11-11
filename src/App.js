import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import Popular from './components/Popular';
import Footer from './components/Footer';
import {BrowserRouter} from 'react-router-dom'
import Pages from './pages/Pages'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav></Nav>
        <Pages></Pages>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
