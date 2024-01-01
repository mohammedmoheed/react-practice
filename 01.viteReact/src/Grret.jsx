// component name should be capital
// component recieve props as passed through component as object
//we can destructure direcly
const Greet = ({ name }) => {
  return <h2>hello {name} !</h2>;
};
// or we can collect as a object and then can access value
const Add = (props) => {
  return <h2> Addition is {props.a + props.b}</h2>;
};

export { Greet, Add };
