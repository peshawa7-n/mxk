import Dramabox from "./buttonDown2";

function Box(props) {
  return (
          <div className="col-3-medium col-12-medium">
                          {/* <!-- Box --> */}
                          <section className="box feature">
                <a href={props.dramas} className="image featured"><img src={props.image} alt="" /></a>


                <div className="inner">
                  <header>
                    <h2 Style="padding-bottom: 30px;">{props.name} {props.id}</h2>
                    

                    <Dramabox
                    key={props.key}
                    link={props.link}
                    name={props.name}
                    descripsion={props.descripsion}
                    id={props.id}
                    alqakan={props.alqakan}

                    
                    />
                    <p>{props.descripsion}</p>
                  </header>
                </div>
              </section>

          </div>

  );
}

export default Box;
