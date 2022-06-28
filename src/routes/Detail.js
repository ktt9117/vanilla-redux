import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const todo = useSelector((state) => state.find((item) => item.id === parseInt(id)));

  return (
    <>
      <h1>{todo.text}</h1>
      <h4>Created at: {todo.id}</h4>
    </>
  );
}

export default Detail;
