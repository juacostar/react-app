import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap'
import Menu from './components/MenuComponent';
import './App.css';

// jsx -> extensiones e javascript para react
// se está creando el componente app para renderizarlo en index.js
// imortar reactstrap, react-popper y bootstrap

function App() {
  return (
    <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu /> 
    </div>
  );
}

export default App;
