import React from "react";

const Headers = () => {
  return (
    <div
      class="container-fluid bg-primary d-flex align-items-center mb-5 py-5"
      id="home"
      style="min-height: 100vh"
    >
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-5 px-5 pl-lg-0 pb-5 pb-lg-0">
            <img
              class="img-fluid w-100 rounded-circle shadow-sm"
              src="img/profile.jpg"
              alt=""
            />
          </div>
          <div class="col-lg-7 text-center text-lg-left">
            <h3 class="text-white font-weight-normal mb-3">I'm</h3>
            <h1
              class="display-3 text-uppercase text-primary mb-2"
              style="-webkit-text-stroke: 2px #ffffff"
            >
              Kharis Neville Awuy
            </h1>
            <h1 class="typed-text-output d-inline font-weight-lighter text-white"></h1>
            <div class="typed-text d-none">
              Web Designer, Dekstop Application Development
            </div>
            <div class="d-flex align-items-center justify-content-center justify-content-lg-start pt-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headers;
