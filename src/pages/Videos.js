import React from 'react';
import Navbar from '../components/Navbar';
import Video from '../components/Video';


function Videos() {
    return (
      <div className="App" id="banner-wrapper">
        <Navbar />
        {/* You can add more content or components related to videos here */}

        <Video />
      </div>
    );
  }



export default Videos;