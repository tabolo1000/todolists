import styled from 'styled-components';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useCallback } from 'react';
import { useAppDispatch } from '../../store/store';
import { logoutAuthTC } from '../../components/auth/authReducer';





export const Header = () => {
    const dispatch = useAppDispatch()
    const logoutHandler = useCallback(()=>{
        dispatch(logoutAuthTC())
    },[])
    return (
        <>
            <HeaderMain
                position="fixed" >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <Button
                        onClick={logoutHandler}
                        color="inherit">
                        Logout
                    </Button>
                </Toolbar>
            </HeaderMain>
        </>
    )
}

//-----------------Styled_App---------------------------------------

const HeaderMain = styled(AppBar)({
    backgroundColor: "#bdd3d59d !important",
    borderRadius: "0 0 10px 10px"
})



