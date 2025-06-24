import Box2 from './Box2';
import dramas from '../data2';

function create_Dramabox(drama){
  return(
    <Box2
    key={drama.key}
    name={drama.name}
    image={drama.image}
    video={drama.video}
    id={drama.id}
    descripsion={drama.descripsion}
    link={drama.link}
    alqakan={drama.alqakan}


     />
  )
}

function Video2() {
  return (
    
			// <!-- Features -->
    <div id="features-wrapper">
      <div className="container">
        <div className="row">
          <p>sponsored by Hadia*</p>

          {dramas.map(create_Dramabox)}
           
        </div>
      </div>
    </div>

  );
}

export default Video2;
