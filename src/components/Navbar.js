import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


// function Home() {
//   const navigate = useNavigate();

function Navbar() {
  const navigate = useNavigate();

  // const handleHomeClick = () => {
  //   console.log("Home button clicked!");
  //   // Perform any additional action here
  //   navigate("/"); // Navigate to the Home page
  // };
  return (

    



			// <!-- Header -->
      <div id="header-wrapper">
      <header id="header" className="container">

        {/* <!-- Logo --> */}
          <div id="logo">

            <h1><a href="/">Gull</a></h1>
            <span>Hadia</span>
          </div>

        {/* <!-- Nav --!> */}
          <nav id="nav">
            <ul>
              <li className="current"><a onClick={() => navigate("#")}>Home</a></li>
              <li>
                <a href="/Dramas">Dramas</a>
                <ul>
                  <li><a href="#">Lorem ipsum dolor</a></li>
                  <li><a href="#">Magna phasellus</a></li>
                  <li>
                    <a href="#">Phasellus consequat</a>
                    <ul>
                      <li><a href="#">Lorem ipsum dolor</a></li>
                      <li><a href="#">Phasellus consequat</a></li>
                      <li><a href="#">Magna phasellus</a></li>
                      <li><a href="#">Etiam dolore nisl</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Veroeros feugiat</a></li>
                </ul>
              </li>
              <li><a href="/Hadia">Hadia</a></li>
              <li><a href="right-sidebar.html">arabic</a></li>
              <li><a href="no-sidebar.html">special</a></li>
            </ul>
          </nav>

      </header>
    </div>

  );
}

export default Navbar;
