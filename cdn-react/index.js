const heading1 = React.createElement("h1", {}, "heading one");
const heading2 = React.createElement(
  "h2",
  { id: "h2", name: "two heading" },
  "heading two"
);
const divContainer = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);
const rootId = document.getElementById("root");
const rootElement = ReactDOM.createRoot(rootId);
rootElement.render(divContainer);
