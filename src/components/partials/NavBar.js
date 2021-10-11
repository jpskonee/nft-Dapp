import React from "react";
// import NavbarModal from "./NavbarModal";
import { Link } from "react-router-dom";
import ColourTag from "../shared/ColourTag";

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
        display: "flex",
        alignItems: "center",
      }}
      id="header"
      className="d-flex align-items-center "
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
        class="container-fluid container-xxl d-flex align-items-center"
      >
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
          <ul
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <li>
              <Link to="/contact">
                <a href="#toContact">
                  <ColourTag text="Join Now" />
                </a>
              </Link>
            </li>
            <li>
              <a
                href="https://testnets.opensea.io/assets/0xc073081d0c277ee6c3880326d67f43a7a91e5b31/2"
                target={"_blank"}
                rel="noreferrer"
              >
                <ColourTag text="Buy On Opensea" />
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
        <Link
          style={{
            display: "flex",
            alignItems: "center",
          }}
          to="app"
        >
          <a className="scrollto" href="#toShop">
            <ColourTag
              color1="#131DF4"
              color2="#FF006A"
              text="Connect Wallet"
            />
          </a>
        </Link>
      </div>
    </header>
  );
}

export default NavBar;
