import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import  Home  from './components/home';
import AddList from './components/addlist';



class App extends Component {
  render() {
    return (


      <BrowserRouter>

      <div className = "root">
     
        <Home />

        <Switch> 
          <Route path = {'/add'} component = {AddList} />
        </Switch>

     </div>

      </BrowserRouter>
    );
  }
}

export default App;
// this kind of comment is not accepeted in the render(){return()} of your JSX
//exact to prevent partial loading
//browserrouter must be the parent component 