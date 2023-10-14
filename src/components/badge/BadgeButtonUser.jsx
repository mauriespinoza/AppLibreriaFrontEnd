import { useNavigate } from "react-router-dom";
import Badge from '@mui/material/Badge';
import LoginIcon from '@mui/icons-material/Login';
import { Logout } from "@mui/icons-material";
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import { useAuth } from "../../hooks/useAuth";


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

export const BadgeButtonUser = () => {

  const { token ,logout} = useAuth();

    const navigate = useNavigate();

  return (
    <IconButton aria-label="login">
      <StyledBadge  color="secondary">
        {
          token ? <Logout color="action" onClick={() => {logout()}} data-bs-toggle="tooltip" data-bs-placement="top" title="Cerrar Sesión"/> 
          : 
          <LoginIcon color="action" onClick={()=> {navigate(`/login`)}} data-bs-toggle="tooltip" data-bs-placement="top" title="Iniciar Sesión"/>
        }
      </StyledBadge>
    </IconButton>
  )
}
