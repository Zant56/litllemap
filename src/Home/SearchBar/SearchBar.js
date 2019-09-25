import React from 'react';
import './SearchBar.css';
import {Navbar,NavItem} from 'react-materialize';

function SearchBar() {
  return (
    <Navbar 
      className="SearchBar"
      brand={
        <a />   
      } 
      alignLinks="right" 
      search
     >
       <NavItem href="components.html">
         Item1
       </NavItem>
    </Navbar>
    
  );
}

export default SearchBar;
