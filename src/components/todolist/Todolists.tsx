import { Container, Grid, Paper, styled } from "@mui/material";
import { TitleInput } from "../titleInput/TitleInput";
import { memo } from "react";
import { useTodolists } from "./useTodolists";




export const Todolists = memo(() => {

    const { onClickSetTitle, listTodolists } = useTodolists()


    return (
        <ContainerApp fixed>
            <Grid
                p={"5px 0 20px"}
                container>
                <Grid item >
                    <TitleInputArea>
                        <TitleInput onClick={onClickSetTitle}></TitleInput>
                    </TitleInputArea>
                </Grid>
            </Grid>
            <Grid container
                wrap='wrap'
                padding={1}
                justifyContent="center"
                alignItems="flex-start"
                spacing={1}
                minHeight={"50vh"}
            >
                {(listTodolists.length) ? listTodolists : <span style={{ textShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)", color: "white", fontWeight: 800, fontSize: "50px" }}>Pin your first todolist!</span>}
            </Grid>
        </ContainerApp>
    )
})




const TitleInputArea = styled(Paper)({
    backgroundColor: "#bdd3d59d !important",
    width: 300,
    padding: 10,
    margin: "70px 0 0",
})

const ContainerApp = styled(Container)({
    padding: "20px 0",
    border: "2px solid #0000005a",
    backgroundColor: "#0000005a",
    minHeight: "100vh",
})