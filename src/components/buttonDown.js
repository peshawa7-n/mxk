import { useState } from 'react';

function Dramabox(props) {
  const [showVideo, setShowVideo] = useState(false);

  const handleClick = () => {
    setShowVideo(true); // or toggle: setShowVideo(!showVideo)
  };

  return (
    <div className="p-4">

      {/* 🔗 Link that shows the video */}
      {!showVideo && (
        <button onClick={handleClick} class="text-gray-900 dark:text-white bg-transparent border-2 border-gray-800 dark:border-white hover:bg-gray-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-6 py-3 text-center transition-all duration-300 ease-in-out transform hover:scale-105">
          ▶ serchawa 
        </button>

        
      )}

      {/* 🎬 Video appears below when clicked */}
      {showVideo && (
        <div className="mt-4">
          {/* <iframe
            width="560"
            height="315"
            src={props.link}
            title={props.name}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe> */}
          <a href={props.link} className="text-blue-600 underline">alqakan</a>
        </div>
      )}
    </div>
  );
}

export default Dramabox;
