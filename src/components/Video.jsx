import Box from './Box';
import Videos from '../Data';

function create_VideoBox(video){
  return(
    <Box
    key={video.id}
    link={video.drama_link}
    name={video.name}
    image={video.image}
    video={video.videoURL}


     />
  )
}

function Video() {
  return (
    
			// <!-- Features -->
    <div id="features-wrapper">
      <div className="container">
        <div className="row">

          {Videos.map(create_VideoBox)}
           
        </div>
      </div>
    </div>

  );
}

export default Video;
