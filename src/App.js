import './App.css';
import Shop from './About';
import About from './Shop';
import Nav from './Nav';
import  {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
      <Nav />
      <Switch>
      <Route path="/" exact component = {Home}/>
      <Route path ="/shop" component={About} />
      < Route path="/about" component={Shop} />
    
      
      </Switch>
      
    </div>
    </Router>
  );
}
//defining another component for home
const Home = () => (
<div>
  <h1>Home Page</h1>
</div>

);


export default App;
