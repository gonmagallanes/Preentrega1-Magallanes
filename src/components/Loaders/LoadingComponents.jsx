import React from "react";
import "./LoadingComponents.css";



const LoadingComponents = () => {
  return (
    <div style={{display:'inline-block', top:'25vh'}} className="wrapper">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="shadow"></div>
      <div className="shadow"></div>
      <div className="shadow"></div>
    </div>
  );
};

export default LoadingComponents;
