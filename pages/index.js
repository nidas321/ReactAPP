import axios from "axios";
import { useState } from "react";
import Header from "../components/organisms/Header/Header";
import Products from "../components/organisms/Products/Products";
import Footer from "../components/organisms/Footer/Footer";

const Main = () => {
  <>
    <Footer />
    <Products />
    <Header />
  </>;
};

export default Main;
