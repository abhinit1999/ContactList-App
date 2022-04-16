import React from "react";
import AddContact from "./AddContact";
import About from "./About";
import ContactUs from "./ContactUs";
import {BrowserRouter as Router, Route,Link } from 'react-router-dom';
function Header() {
  return (
    <>
      <div className="heading">

      <div className="txt">
          <ul>
          
          {/* <Router>
        
          <li>
              <a href="#">
                <Link to="/addcontact">AddContact</Link> 
              </a>
            </li>
          <li>
              <a href="#">
                <Link to="/about">About</Link> 
              </a>
            </li>
          <li>
              <a href="#">
                <Link to="/contactus">ContactUs</Link> 
              </a>
            </li>
    
    <Route path="/addcontact" component={AddContact} />
    <Route path="/about" component={About} />
    <Route path="/contactus" component={ContactUs} />



          </Router> */}



            <li>
              <a href="#">AddContact</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
        </div>


        <div className="icons">
          <i className="fa fa-home"></i>
          <i className="fa fa-linkedin"></i>
          <i className="fa fa-facebook"></i>
        </div>
      </div>
    </>
  );
}

export default Header;
