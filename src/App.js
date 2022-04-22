import React, { useEffect } from "react";
import './App.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

//components
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
    useEffect(() =>{
        Aos.init({ duration: 1500 });
        },
        []);
  return (
    <div>
        <Header />
        <Navbar  />
        <div data-aos={"fade-up"}><About /></div>
        <div data-aos={"fade-up"}><Skills /></div>
        <div data-aos={"fade-up"}><Work /></div>
        <div data-aos={"fade-up"}><Contact /></div>
        <div><Footer /></div>
    </div>
  );
}

export default App;
