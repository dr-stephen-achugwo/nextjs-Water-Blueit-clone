import React from "react";

const Card = ({ title, desc }) => {
  console.log(title, desc);
  return (
    <div className="d-flex flex-wrap justify-content-center">
      <div className="card p-3" style={{ width: "18rem" }}>
        <h5 className="card-text text-center">{title}</h5>
        <div className="card-body">
          <p className="card-text">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
