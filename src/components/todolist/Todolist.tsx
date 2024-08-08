import React, { FC } from "react";
import { TaskType } from "../../types/Task";
import { Task } from "../task/Task";
import { Button } from "../../Button";
import { FilterType, TodolistProps } from "../../types/todolist";
import { TitleInput } from "../titleInput/TitleInput"
import styled from "styled-components";

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
  changeTitleTask
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

  const onClickFilter = (filter: FilterType) => {
    changeFilter(id, filter)
  }
  const onAddTaskInput = (title: string) => {
    addTask(id, title)
  }

  return (
    <div>
      <h3>{title}</h3>
      <TitleInput onAddTaskInput={onAddTaskInput} />
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
          onClick={onClickFilter}
          title={filterValue.all}
        />
        <Button
          onClick={onClickFilter}
          title={filterValue.active}
        />
        <Button
          onClick={onClickFilter}
          title={filterValue.completed}
        />
      </div>
    </div>
  );
};



const UnorderedList = styled.ul`
  padding: 0;
`
