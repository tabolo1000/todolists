import { useRouteError } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../styled/theme";

export const ErrorPage = () => {
    const error = useRouteError() as RouteError;
    debugger
    return (
        <MainError id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </MainError>
    );
}


//----------------------Styled_components---------------------------

const MainError = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 400px;
  min-height: 300px;
  border-radius: 5%;
  line-height: 2;
  transform: translate(-50%, -50%);
  background-color: ${theme.backgroundItems};
  color: white;
`


//----------------------Type_Error----------------------------------

interface RouteError {
    status: number;
    statusText: string;
    message: string;
}

// Или если ожидается просто текст ошибки
type SimpleError = string;