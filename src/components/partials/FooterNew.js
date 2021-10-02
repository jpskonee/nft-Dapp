import React from "react";

const FooterNew = () => {

  const year = new Date().getFullYear();
  return (
    <footer class="footer-container footer-curve">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="pt-40 pb-20 d-flex flex-wrap justify-content-between footer-bottom-content">
              <p class="d-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-start order-2 order-sm-2 order-md-2 order-lg-1">
                Artifact.io (c) {year}
              </p>
              <ul class="d-flex flex-wrap order-1 order-sm-1 order-md-1 order-lg-2">
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Agho.dev</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterNew;
