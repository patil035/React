import React from "react";
import ReactDOM from "react-dom";

const title = <h2 id="title">Title of the component</h2>;

const Heading = () => (
  <div>
    {title}
    <h1>Heading of the component</h1>
  </div>
);

const Footer = () => <div>Footer of the component</div>;

const InitialComponent = () => (
  <React.Fragment>
    <Heading></Heading>
    <div>Content of the component</div>
    <Footer></Footer>
  </React.Fragment>
);

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));

reactRoot.render(<InitialComponent></InitialComponent>);
