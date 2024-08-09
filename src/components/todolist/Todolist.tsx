import React, { FC } from "react";
import { TaskType } from "../../types/Task";
import { Task } from "../task/Task";
import { Button } from "../../Button";
import { FilterType, TodolistProps } from "../../types/todolist";
import { TitleInput } from "../titleInput/TitleInput"
import styled from "styled-components";
import { SpanInputItem } from "../spanInputItem/SpanInputItem";

enum filterValue {
  all = "All",
  active = "Active",
  completed = "Completed",
}

export const Todolist: FC<TodolistProps> = ({
  id,
  title,
  tasks,
  date,
  filter,
  addTask,
  changeFilter,
  removeTask,
  changeStatus,
  changeTitleTask,
  removeTodolist,
  changeTitleTodolist,
}) => {
  switch (filter) {
    case (filterValue.active): {
      tasks = tasks.filter(el => !el.isDone);
      break;
    }
    case (filterValue.completed): {
      tasks = tasks.filter(el => el.isDone);
      break;
    }
    default:
  }

  /* lists for react render */
  const taskList = tasks.map((task: TaskType) => (
    <Task
      key={task.id}
      id={task.id}
      title={task.title}
      isDone={task.isDone}

      todolistId={id}

      removeTask={removeTask}
      changeStatus={changeStatus}
      changeTitleTask={changeTitleTask}
    />
  ));



  /* ----handlers----- */

  const onClickFilter = (id: string, filter: FilterType) => {
    changeFilter(id, filter)
  }
  const onAddTaskInput = (title: string) => {
    addTask(id, title)
  }

  const removeTodolistHandler = (todolistId: string) => {
    removeTodolist(id)
  }
  const changeTitleTodolistHandler = (title:string) => {
    changeTitleTodolist(id, title)
  }

  return (
    <div>
      <div>
        <SpanInputItem onClick={changeTitleTodolistHandler} title={title} ></SpanInputItem>
        <button onClick={removeTodolistHandler.bind({}, id)}>X</button>
      </div>

      <TitleInput onClick={onAddTaskInput} />
      {
        (taskList.length)
          ? <UnorderedList>{taskList}</UnorderedList>
          : "In this moment, you don't have task!"
      }
      {
        JSON.stringify(date)
      }
      <div>
        <Button
          onClick={() => onClickFilter(id, filterValue.all)}
          title={filterValue.all}
        />
        <Button
          onClick={() => onClickFilter(id, filterValue.active)}
          title={filterValue.active}
        />
        <Button
          onClick={() => onClickFilter(id, filterValue.completed)}
          title={filterValue.completed}
        />
      </div>
    </div>
  );
};



const UnorderedList = styled.ul`
  padding: 0;
`
