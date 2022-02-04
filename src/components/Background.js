import React from 'react';

import "../App.css";

export default function Background() {
  return (
  <div>
    <video autoPlay loop muted id="video">
    <source src="../img/back.mp4" type='video/mp4' />
    </video>
  </div>
  );
}

