import { useState } from "react";
import { connect } from "react-redux";
import Todo from "../components/Todo";
import { ADD_TODO } from "../store";

function Home({ todos, addTodo }) {
  console.log(todos);
  const [text, setText] = useState("");

  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    addTodo(text);
    setText("");
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} type="text" value={text} placeholder="What are you doing?" />
        <button>Add</button>
      </form>
      <ul>
        {todos?.map((item, index) => {
          return <Todo key={item.id} {...item} />;
        })}
      </ul>
    </>
  );
}

function mapStateToProps(state) {
  return { todos: state };
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: (text) => dispatch(ADD_TODO(text)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
