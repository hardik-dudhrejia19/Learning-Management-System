// Navbar code goes here
import React, { Component } from "react";
import "./NavHeader.css";
class NavHeader extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="/">
          Learning Management System
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/StudentChat">
                Chat
              </a>
            </li>

            <li class="nav-item active">
              <a class="nav-link" href="/machinelearning">
                Machine Learning
              </a>
            </li>

            <li class="nav-item active">
              <a class="nav-link" href="/dataprocessing">
                Data Processing
              </a>
            </li>

            <li class="nav-item active">
              <a class="nav-link" href="/systemchat">
                Talk to our chatbot
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavHeader;
