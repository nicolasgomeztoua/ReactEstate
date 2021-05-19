import React from "react";
import { Link } from "gatsby";
const HomeCard = ({ title, subtitle, paragraph, img, label, to }) => {
  return (
    <div
      className="blog-card spring-fever"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="title-content">
        <h3>
          <Link to={to}>{title}</Link>
        </h3>
        <div className="intro">
          {" "}
          <Link to={to}>{subtitle}$</Link>{" "}
        </div>
      </div>
      <div className="card-info">
        {paragraph}
        <Link to={to}>
          {label}
          <span className="licon icon-arr icon-black"></span>
        </Link>
      </div>

      <div className="gradient-overlay"></div>
      <div className="color-overlay"></div>
    </div>
  );
};

export default HomeCard;
