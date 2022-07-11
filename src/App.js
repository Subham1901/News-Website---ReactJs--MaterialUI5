
import './App.css';
import Menu from './components/Menu';
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Feed from './pages/Feed';
import Business from './pages/Business';
import Header from './components/Header';
import Health from './pages/Health';
import Sports from './pages/Sports';
import Entertainment from './pages/Entertainment';
import Technology from './pages/Technology';
import Headlines from './pages/Headlines';
import Tabone from './components/Tabone'

function App() {
  return (
    <div className="App">
<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        
        <Grid item xs={2}>
        <Menu/>
        </Grid>
        <Grid item xs={9}>
       <Header/>
        <Router>
      <Switch>
         <Route path="/Home" component = {Home} exact></Route>
         <Route path="/Feed" component = {Feed}></Route> 
         <Route path="/Business" component={Business}/>
         <Route path="/Health" component = {Health}></Route>
         <Route path="/Sports" component = {Sports}></Route> 
         <Route path="/Entertainment" component={Entertainment}/>
         <Route path="/Technology" component={Technology}/>
         <Route path="/Headlines" component={Headlines}/>
      </Switch>
    </Router>
        </Grid>
      </Grid>
    </Box>
      
    </div>
  );
}

export default App;
