import React, { Component } from 'react';
import './App.css'
import Search from './Search'
import MovieCard from './MovieCard';
 
class App extends Component {


  render() {
    return (
      <div>
        
         <Search/>
         <MovieCard/>
 
 
       </div>
    );
  }
}

export default App;