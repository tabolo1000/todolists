import React, { FC } from "react";
import { TaskType } from "../../types/Task";
import { Task } from "../task/Task";
import { Button } from "../../Button";
import { FilterType, TodolistProps } from "../../types/todolist";

enum filterValue {
  all = "All",
  active = "Active",
  completed = "Completed",
}

export const Todolist: FC<TodolistProps> = ({changeFilter,id, title, tasks, date, filter }) => {
  
  
  switch (filter){
    case (filterValue.active):{
      tasks = tasks.filter(el => !el.isDone);
      break;
    }
    case(filterValue.completed):{
      tasks = tasks.filter(el => el.isDone);
      break;
    }
    default: 
  }

  const taskList = tasks.map((task: TaskType) => (
    <Task key={task.id} id={1} title={task.title} isDone={task.isDone} />
  ));


  const onClickFilter = (filter:FilterType) => {
    changeFilter(id, filter)
  }

  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input type="text" />
        <button>+</button>
      </div>
      <ul>{taskList}</ul>
      {JSON.stringify(date)}
      <div>
        <Button onClick = {onClickFilter} title={filterValue.all} />
        <Button onClick = {onClickFilter} title={filterValue.active} />
        <Button onClick = {onClickFilter} title={filterValue.completed} />
      </div>
    </div>
  );
};
