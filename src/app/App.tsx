import styled from 'styled-components';
import fone from '../assets/image/image.webp'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Todolists } from '../components/todolist/Todolists';

import { useApp } from './useApp';
import { Auth} from '../components/auth/auth';
import { Header } from '../layers/header/header';






export const App = () => {
    const { isAuth } = useApp();
    debugger
    return (
        <MainApp>
            {
                (isAuth)
                    ? (<>
                        <Header />
                        <Todolists />
                    </>)
                    : <Auth/>
            }
        </MainApp>
    )
}




//-----------------Styled_App---------------------------------------

const AppBarStyled = styled(AppBar)({
    backgroundColor: "#bdd3d59d !important",
    borderRadius: "0 0 10px 10px"
})



const MainApp = styled.div`
    background-image: url(${fone});
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover ;
    object-fit: cover;
    min-height: 100vh;
`







