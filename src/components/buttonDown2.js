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

        <button onClick={handleClick} className="text-blue-600 underline cursor-pointer">
          ▶ krdnawa 
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
          <a href={props.link} className="text-blue-600 underline">serkrdn</a>
          <h1>{props.alqakan}</h1>
        </div>
      )}
    </div>
  );
}

export default Dramabox;
