import { useRef, useState } from "react";
import React from "react";
import Navbar from "./component/Navbar";
import Card from "./component/Card";
import { FaSadTear } from "react-icons/fa";
function App() {
  const [task, setTask] = useState("");
  const [data, setData] = useState([]);
  const [compltedTask, setCompltedTask] = useState([])
  const [editingId, setEditingId] = useState(null)
const colors = [
  "#FFEB3B",
  "#FFCDD2",
  "#C8E6C9",
  "#BBDEFB",
  "#E1BEE7",
  "#FFE0B2",
];
let count = useRef(0);
const handleAdd = () => {
  //Edit Mode
  if(editingId != null) {
    if(!task) {alert("Task Cannott be empty!!!")
      return;
    }
    const updatedTodo = data.map(todo => 
      todo.id === editingId ? {...todo , text: task} : todo)
    setData(updatedTodo);
setEditingId(null);
setTask("");
return;

  }

  //Create Mode
  if (!task.trim()) {
    alert("Task Cannot be empty");
    return;
  }
  const newTask = {
    id:count.current,
    text: task,
    isCompleted: false,
    color: colors[Math.floor(Math.random() * colors.length)],
    rotate: Math.floor(Math.random() * 6) - 3,
    isEditing: false
  };
  count.current++;
setData([newTask, ...data])
  setTask("");
};

  const handleComplete = (i) => {
    const newData = data.map((task) => 
      task.id === i ? {...task , isCompleted: !task.isCompleted } : task
    )
      setData(newData)
    }

    const  handleDelete = (id) => {
      const updatedTodo = data.filter(todo => todo.id !== id)
      setData(updatedTodo)
      console.log();
      
    }

const handleEdit = (id) => {
  const todo = data.find(t => t.id === id);
  setTask(todo.text);
  setEditingId(id);
};

  return (
    <>
      <Navbar />
      <div className="flex h-auto items-center p-5 flex-col">
        <div className="input-cnotainer">
          <input
            type="text"
            className="border rounded-l-full p-3"
            placeholder="Enter Task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button
            className="bg-black text-white rounded-r-full border-black h-full p-3"
            onClick={handleAdd}
          >
            {editingId != null ? "Edit Task":"ADD Task"}
          </button>
        </div>

        <div className="flex flex-wrap gap-6 p-4 justify-center border mt-10 w-full min-h-[60vh] rounded-2xl ">
          {data.length > 0? (
            data.map((post , i) => <Card key={post.id} data={post} id={post.id} onComplete={() => {handleComplete(post.id)}} onDelete={() => {handleDelete(post.id)}} onEdit={() => handleEdit(post.id)}/>)
          ) :( <div className="noTask h-full w-full flex flex-col items-center justify-center text-[#606060] text-6xl mt-40">
              <FaSadTear />
              <p>No Task</p>
            </div>)
          }
        </div>
      </div>
    </>
  );
}

export default App;
