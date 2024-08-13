import { FC, memo, useCallback } from "react";
import { RemoveButton } from "../task/Task";
import { FilterType, TodolistProps } from "../../types/todolist";
import styled from "styled-components";
import { SpanInputItem } from "../spanInputItem/SpanInputItem";
import { Button, Paper } from "@mui/material";
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import { Tasks } from "../task/Tasks";

export enum filterValue {
  all = "All",
  active = "Active",
  completed = "Completed",
}

export const Todolist: FC<TodolistProps> = memo(({
  id,
  title,
  date,
  filter,

  changeFilter,
  removeTodolist,
  changeTitleTodolist,
}) => {

  console.log("Todolist")

  const onClickFilter = useCallback(
    (id: string, filter: FilterType) =>
      () => changeFilter(id, filter)
    , [changeFilter])
  const removeTodolistHandler = useCallback(
    () => {
      removeTodolist(id)
    }, [])
  const changeTitleTodolistHandler = useCallback(
    (title: string) => {
      changeTitleTodolist(id, title)
    }, [])

  return (
    <div>
      <DemoPaper >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ padding: "0 20px" }}>
            <SpanInputItem onClick={changeTitleTodolistHandler} title={title} />
          </div>
          <RemoveButton onClick={removeTodolistHandler} />
        </div>


        <Tasks todolistId={id} todolistFilter={filter} />
        {
          JSON.stringify(date)
        }
        <div>
          <Button
            onClick={onClickFilter(id, filterValue.all)}
            disabled={filter === filterValue.all}
            color="warning"
            size="small"
            variant="contained"
            endIcon={<FingerprintIcon />}
            title={filterValue.all}
          >{filterValue.all}</Button>
          <Button
            onClick={onClickFilter(id, filterValue.active)}
            disabled={filter === filterValue.active}
            color="success"
            size="small"
            variant="contained"
            endIcon={<FingerprintIcon />}
          >{filterValue.active}</Button>
          <Button
            onClick={onClickFilter(id, filterValue.completed)}
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
})









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


