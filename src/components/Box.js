import Dramabox from "./buttonDown";

function Box(props) {
  return (
          <div className="col-3-medium col-12-medium">
                          {/* <!-- Box --> */}
                          <section className="box feature">
                <a href={props.dramas} className="image featured"><img src={props.image} alt="" /></a>


                <div className="inner">
                  <header>
                    <h2>{props.id}</h2>
                    <p>{props.name}</p>
                    <Dramabox
                    key={props.key}
                    link={props.link}
                    name={props.name}
                    drama={props.link}

                    
                    />
                  </header>
                </div>
              </section>

          </div>

  );
}

export default Box;
