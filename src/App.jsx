import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import './styles/_app.scss';
import Navbar from './components/Navbar.jsx';
import Homepage from './components/Homepage.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Portfolio from './components/Portfolio.jsx';
import WhatIDo from './components/WhatIDo.jsx';


const App = () => {
  return (
    <div className="App">
       <Router>
        <Navbar />
          <Switch>
            <Route path="/" exact component={Homepage}/>
            <Route path="/whatido" component={WhatIDo}/>
            <Route path="/about" component={About}/>
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="/contact" component={Contact}/>
          </Switch>
      </Router>
    </div>
  );
};

export default App;
