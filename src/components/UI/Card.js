//This is an example of a compositon component that wraps other elements in a thing(subs. of a div)
//We then are able to use this component in other components that may also use this same code
import "./Card.css";
function Card(props) {
  //we are able to access className, because when we pass props in,the className comes with it
  const accessableClasses = "Card " + props.className;
  //props.children allows us to access the content between the opening and closing tags of the component(in this case, stuff in
  // between Card in the ExpenseItem component)
  return <div className={accessableClasses}> {props.children}</div>;
}
export default Card;
