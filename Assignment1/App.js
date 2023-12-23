// const heading = React.createElement(
//   "h1",
//   { id: "heading", className: "head " },
//   "Hello World from React"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

{
  /* <div id="parent">
    <div id="child">
        <h1>
            Hello I am HI
        </h1>
         <h2>
            Hello I am H2
        </h2>
    </div>
    </div> */
}

const parent = React.createElement(
  "div",
  { id: "parent" },
 [
    React.createElement(
        "div",
        { id: "child" },
        [React.createElement("h1", {}, "Hello iam h1"),React.createElement("h2", {}, "Hello iam h2")]
      ),
      React.createElement(
        "div",
        { id: "child2" },
        [React.createElement("h1", {}, "Hello iam h1"),React.createElement("h2", {}, "Hello iam h2")]
      )
 ]
);
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent);
