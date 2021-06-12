import './App.css';
import { Button } from '@material-ui/core';
import Dishes from './components/Dishes'
import Album from './components/Album'

function App() {
  return (
    <div className="App">
        <Button color="primary">Hello World</Button>
        <Dishes></Dishes>
        <Album></Album>

    </div>
  );
}

export default App;
