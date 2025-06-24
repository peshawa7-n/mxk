import React from 'react';
import Videos from '../Data';
import Banner from '../components/Banner';
import Box from '../components/Box';
import Video from '../components/Video';
import Footer from '../components/Footer';
import Main from '../components/Main';
import Navbar from '../components/Navbar';

function Home() {
    return (
    <div className="App" id="banner-wrapper">
      <Navbar />

      <Banner />

      <Video />

      <Main />
      <Footer />



    </div>
    );

  }



export default Home;