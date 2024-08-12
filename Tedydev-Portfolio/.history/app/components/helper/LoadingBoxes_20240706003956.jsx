import React from 'react';
import 'animate.css';
import "../../css/globals.scss";

document.addEventListener('DOMContentLoaded', function() {
  function adjustZoom() {
    if (window.screen.width >= 2560) {
      document.body.style.zoom = "150%";
    } else {
      document.body.style.zoom = "100%";
    }
  }

  adjustZoom();
  window.addEventListener('resize', adjustZoom);
});

const LoadingBoxes = () => {
  return (
    <div className="">
      <div className="box1 loading animate__animated animate__backOutLeft">
        T
      </div>
      <div className="box2 loading animate__animated animate__backOutLeft">
        E
      </div>
      <div className="box3 loading animate__animated animate__backOutLeft">
        D
      </div>
      <div className="box4 loading animate__animated animate__backOutLeft">
        Y
      </div>
      </div>
  );
};

export default LoadingBoxes;