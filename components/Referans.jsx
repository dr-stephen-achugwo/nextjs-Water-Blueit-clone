import React from "react";
import style from "../styles/index.module.css"

const Referans = ({ src, desc }) => {
  console.log(src, desc);
  return (
    <div className={style.shadow}>
      <div className="card p-3" style={{ width: "18rem" , height : "300px" }}>
        <div className="text-center">
        <img src={src} className="text-center" alt="..." width={"100px"}/>

        </div>
        <div className="card-body">
          <p className="card-text">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Referans;
