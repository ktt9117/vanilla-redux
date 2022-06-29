import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { DELETE_TODO } from "../store";

function Todo({ text, deleteTodo, id }) {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={deleteTodo}>DEL</button>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    deleteTodo: () => dispatch(DELETE_TODO(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(Todo);
