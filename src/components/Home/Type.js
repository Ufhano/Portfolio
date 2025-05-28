import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          
          "Full Stack Developer",
          "Freelancer Software Engineer",
          "Tech Enterpreneur",
          "Tutor & Mentor",
          "Creative Technologist",
          
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
