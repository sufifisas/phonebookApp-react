import { BrowserRouter as Router, Switch , Route } from 'react-router-dom'
import Home from './Home'
import PhoneBook from './PhoneBook'
import CreatePhoneBook from './CreatePhoneBook'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/PhoneBook" exact component={PhoneBook} />
          <Route path="/CreatePhoneBook" exact component={CreatePhoneBook} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
