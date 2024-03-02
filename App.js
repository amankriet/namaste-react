import React from "react";
import ReactDOM from "react-dom/client";

// JSX => React.createElement => ReactElement-JS Object => HTMLElement(render)

const Description = () => (
  <p className="description">I am now learning React</p>
);

const course = <p>Course Name: Namaste React</p>;

let episodeNumber = 2;

const Heading = () => {
  return (
    <div className="container">
      <h1 id="heading">Namaste React</h1>
      <Description />
      {course}
      {`Episode = ${episodeNumber}`}
    </div>
  );
};

// console.log(Heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);
