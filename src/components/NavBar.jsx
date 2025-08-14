
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
 import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import "../App.css";
import logo from "../assets/glenncocologo.jpg"; // Adjust the path as necessary
import "../assets/glenncocologo.jpg"; // Adjust the path as necessary




const NavBar = () => {
  return (
    <nav className="sticky top-0 z-50 p-4 shadow-md fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div id="logo" className="flex items-center">
        <img src="./public/glenncocologo.jpg" alt="glenncocologo" />
        </div>
        <ul className="flex space-x-4">
          <li><a href="/" className="text-white hover:text-green-300">Home</a></li>
          <li><a href="/reels" className="text-white hover:text-gray-300">Reels</a></li>
          <li><a href="/services" className="text-white hover:text-gray-300">Services</a></li>
          <li><a href="/about" className="text-white hover:text-gray-300">About</a></li>
          <li><a href="/booking" className="text-white hover:text-gray-300">Booking</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;