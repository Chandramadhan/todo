import { Itask } from "@/types/tasks";
import React from "react";
import Task from "./Task";

interface TodoListProps{
    tasks: Itask[]
}


const TodoList: React.FC<TodoListProps> =({tasks}) =>{
    return <div className="overflow-x-auto">
    <table className="table">
      <thead>
        <tr className="bg-base-200">
          <th>Task</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task)=> (
        <Task key={task.id} task={task}/>
        
        ))}
       
       
      </tbody>
    </table>
  </div>
};
export default TodoList;