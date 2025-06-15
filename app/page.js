"use client";

import React, { useEffect, useState } from 'react'
import Navbar from './components/navbar'
import Header from './components/header'
import About from './components/about'
import Services from './components/services'
import Work from './components/work'
import Contect from './components/contect'
import Footer from './components/footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Work />
      <Contect />
      <Footer />
    </>
  )
}

export default Home
