import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
     <h1>hello</h1>
     <button>Normal button</button>
     
     <Button as="a" variant="primary">
    Button as link
  </Button>
  <Button as="a" variant="success">
    Button as link
  </Button>
  <Button color='primary'> Primary </Button>
    </div>
  );
}

export default App;
