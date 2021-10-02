import React from "react";
// import NavbarModal from "./NavbarModal";
import { Link } from "react-router-dom";

function NavBar() {
  // const [mobi, setMobil] = useState(false);

  // const mobileFunc = () => {
  //   setMobil(!mobi);
  // };

  console.log("here");
  return (
    <header
      style={{
        background: "#0f0e22",
        position: "fixed",
      }}
      id="header"
      className="d-flex align-items-center "
    >
      <div class="container-fluid container-xxl d-flex align-items-center">
        <div id="logo" className="me-auto">
          <a href="/" className="scrollto">
            <img
              src="assets/img/artfact-logo.PNG"
              alt="artfact-logo"
              title="artfact-logo"
              style={{ borderRadius: "10rem" }}
            />
          </a>
        </div>

        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li>
              <a class="nav-link scrollto active" href="/">
                Home
              </a>
            </li>
            <li>
              <Link  to="roadmap">
              <a class="nav-link scrollto" href="#toSchedule">
                RoadMap
              </a>
              </Link>
            </li>
            <li>
              <Link to="/contact">
              <a class="nav-link scrollto" href="#toContact">
               Join Now
              </a>
              </Link>
            </li>
            <li>
              <a
                class="nav-link scrollto"
                href="https://testnets.opensea.io/assets/0xc073081d0c277ee6c3880326d67f43a7a91e5b31/2"
                target={"_blank"}
                rel="noreferrer"
              >
                Buy On Opensea
              </a>
            </li>

            {/* <li class="dropdown">
              <a href="#">
                <span>Drop Down</span> <i class="bi bi-chevron-down"></i>
              </a>
              <ul>
                <li>
                  <a href="#">Drop Down 1</a>
                </li>
                <li class="dropdown">
                  <a href="#">
                    <span>Deep Drop Down</span>{" "}
                    <i class="bi bi-chevron-right"></i>
                  </a>
                  <ul>
                    <li>
                      <a href="#">Deep Drop Down 1</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 2</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 3</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 4</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 5</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Drop Down 2</a>
                </li>
                <li>
                  <a href="#">Drop Down 3</a>
                </li>
                <li>
                  <a href="#">Drop Down 4</a>
                </li>
              </ul>
            </li> */}
          </ul>
          {/* <div onClick={mobileFunc}>
            {" "}
            <i class="bi bi-list mobile-nav-toggle"></i>
          </div> */}
        </nav>

        {/* {mobi && <NavbarModal />} */}
        <Link to="app">
          <a class="buy-tickets scrollto" href="#toShop">
            CONNECT WALLET
          </a>
        </Link>
      </div>
    </header>
  );
}

export default NavBar;
