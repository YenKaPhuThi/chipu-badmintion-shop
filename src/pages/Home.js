import React, { Component } from "react";

// Components
import Header from "./../components/Header";
import Navbar from "./../components/Navbar";
import Menu from "./../components/Menu";
import Carousel from "./../components/Carousel";
import ProductList from "./../components/ProductList";
import About from "./../components/About";
import Footer from "./../components/Footer";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navbar />
        <Menu />
        <Carousel />
        <ProductList />
        <About />
        <Footer />
      </div>
    );
  }
}
