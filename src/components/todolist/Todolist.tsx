import React, { FC } from "react";
import { TaskType } from "../../types/Task";
import { RemoveButton, Task } from "../task/Task";
import { FilterType, TodolistProps } from "../../types/todolist";
import { TitleInput } from "../titleInput/TitleInput"
import styled from "styled-components";
import { SpanInputItem } from "../spanInputItem/SpanInputItem";
import { Button, Paper } from "@mui/material";
import FingerprintIcon from '@mui/icons-material/Fingerprint';

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

  const removeTodolistHandler = () => {
    removeTodolist(id)
  }
  const changeTitleTodolistHandler = (title: string) => {
    changeTitleTodolist(id, title)
  }

  return (
    <div>
      <DemoPaper >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{padding: "0 20px"}}>
            <SpanInputItem onClick={changeTitleTodolistHandler} title={title} ></SpanInputItem>
          </div>  
          <RemoveButton onClick={removeTodolistHandler} />
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
            disabled={filter === filterValue.all}
            color="warning"
            size="small"
            variant="contained"
            endIcon={<FingerprintIcon />}
            title={filterValue.all}
          >{filterValue.all}</Button>
          <Button
            onClick={() => onClickFilter(id, filterValue.active)}
            disabled={filter === filterValue.active}
            color="success"
            size="small"
            variant="contained"
            endIcon={<FingerprintIcon />}
          >{filterValue.active}</Button>
          <Button
            onClick={() => onClickFilter(id, filterValue.completed)}
            disabled={filter === filterValue.completed}
            color="info"
            size="small"
            variant="contained"
            endIcon={<FingerprintIcon />}
          >{filterValue.completed}</Button>
        </div>
      </DemoPaper>
    </div >
  );
};









const DemoPaper = styled(Paper)(({ theme }) => ({
  minWidth: 290,
  padding: 10,
  margin: 5,

  /*padding: theme.spacing(2),
  ...theme.typography.body2,#bdd3d59d
   backgroundColor: "#bdd0d5b5 !important",
  */
  textAlign: 'center',
  backgroundColor: "#bdd0d5e8 !important",
  borderRadius: "10px !important",
}));

const UnorderedList = styled.ul`
  padding: 0;
`
