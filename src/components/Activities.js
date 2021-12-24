import React from "react";
import "./style.css";

function Activities() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <h2>Discover Airbnb Experiences</h2>
          <div className="col-md-6 text-left">
            <div className="activity_img">
              <h3 className=" text-white">Things to do on your trip</h3>
              <button className="btn btn-primary">
                <span className="btn-gradient"> Experiences</span>
              </button>
            </div>
          </div>

          <div className="col-md-6 text-left">
            <div className="home_activity_img">
              <h3 className=" text-white">Things to do from home</h3>
              <button className="btn btn-primary">
                <span className="btn-gradient">Online Experiences</span>
              </button>
            </div>
          </div>
        </div>

      </div>
      <div className="container-fluid">
      <div className="activity_img3">
              <h3 className=" text-white">Questions
about 
hosting?</h3>
              <button className="btn btn-primary">
                <span className="btn-gradient">Ask a Superhost</span>
              </button>
            </div>

      </div>
    </div>
  );
}

export default Activities;
