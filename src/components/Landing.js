import React from "react";
import landingImage from "../images/undraw_dashboard_nklg.svg";
export default function Landing() {
  return (
    <div className="Landing container">
      <div className="landing-left">
        <h1 className="hero-text">Free, Modern Desktop Accounting</h1>
        <p className="hero-sub-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          iste asperiores libero laudantium sunt nemo, alias aperiam ducimus
          vitae non.
        </p>
        <div className="landing-btns">
          <button className="btn btn-primary primary-bg"> Download </button>
          <button className="btn btn-secondary secondary-bg"> Github </button>
        </div>
      </div>
      <div className="landing-right">
        <img src={landingImage} alt="image" />
      </div>
    </div>
  );
}
