import { useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import LoginIcon from "@mui/icons-material/Login";
import { Logout } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import { useAuth } from "../../hooks/useAuth";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export const BadgeButtonUser = () => {
  
  const { token, logout } = useAuth();

  const navigate = useNavigate();

  return (
    <>
      {token ? (
        <IconButton aria-label="login" color="orange" data-bs-toggle="tooltip" data-bs-placement="top" title="Cerrar Sesión">
          <StyledBadge color="secondary">
            <Logout
              color="orange"
              onClick={() => {
                logout();
              }}
            />
          </StyledBadge>
        </IconButton>
      ) : (
        <IconButton aria-label="login" data-bs-toggle="tooltip" data-bs-placement="top" title="Iniciar Sesión">
          <StyledBadge color="secondary">
            <LoginIcon
              color="action"
              onClick={() => {
                navigate(`/login`);
              }}
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Iniciar Sesión"
            />
          </StyledBadge>
        </IconButton>
      )}
    </>
  );
};
