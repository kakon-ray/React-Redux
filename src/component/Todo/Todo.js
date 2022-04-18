import React, { useRef, useState } from "react";
import { AiOutlineFileAdd } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { AiOutlineFolderView } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import "./Todo.css";
import { addTodo, deleteTodo, removeTodo } from "../Redux/actions/index";

const Todo = () => {
  const [inputdata, setInputdata] = useState("");
  const [viewItem, setViewItem] = useState([]);

  const list = useSelector((state) => state.todoRiducer.list);
  const dispatch = useDispatch();
  console.log(Array.isArray(list));

  const viewTodo = (id) => {
    let viewItem = list.filter((item) => item.id === id);
    setViewItem(viewItem);
  };
  console.log(viewItem);

  return (
    <div className="main-dev">
      <div className="fixd-top">
        <h5>{viewItem[0].data}</h5>
        <p>{viewItem[0].id}</p>
      </div>
      <div className="Header-div">
        <h1>Add Your List Here</h1>
      </div>

      <div>
        <div className="add-items ">
          <input
            type="text"
            placeholder="Add Item"
            value={inputdata}
            onChange={(e) => setInputdata(e.target.value)}
          />
          <AiOutlineFileAdd
            style={{ fontSize: "20px" }}
            onClick={() => dispatch(addTodo(inputdata), setInputdata(""))}
          />
        </div>

        <div>
          {list.map((item) => {
            return (
              <div className="item" key={item.id}>
                <h3>{item.data}</h3>
                <div className="item-list">
                  <span
                    className="icon view"
                    style={{ marginRight: "100px", cursor: "pointer" }}
                  >
                    <AiOutlineFolderView
                      style={{ fontSize: "20px" }}
                      onClick={() => viewTodo(item.id)}
                    />
                  </span>
                  <span className="icon">
                    <AiFillDelete
                      style={{ fontSize: "20px" }}
                      onClick={() => dispatch(deleteTodo(item.id))}
                    />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <div style={{ marginTop: "20px" }}>
          <button onClick={() => dispatch(removeTodo())}>CheckList</button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
