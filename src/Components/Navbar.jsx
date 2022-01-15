import React from "react";
import AppContext from "../Context/AppContext";
import LoginRegister from "./LoginRegister";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import mee6 from "../img/mee6.png";
import battleship from "../img/battleship.svg";
import MenuIcon from "@mui/icons-material/Menu";

const customTheme = createTheme({
  palette: {
    secondary: {
      main: "#9F00C5 ",
      contrastText: "#fff ",
    },
    error: {
      main: "#F2003C",
      contrastText: "#fff",
    },
    success: {
      main: "#009966",
      contrastText: "#fff",
    },
  },
});

const pages = [
  {
    url: "",
    label: "Home",
  },
  {
    url: "play",
    label: "Play",
  },
];
const settings = [
  { url: "profile", label: "Profile" },
  { url: "", label: "Logout" },
];

const Navbar = () => {
  const appContext = React.useContext(AppContext);
  const { userId, logout } = appContext;
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const divRef = React.useRef();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = () => {
    if (userId) {
      setAnchorElUser(divRef.current);
    }
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  React.useEffect(() => {
    setAnchorElUser(divRef.current);
  }, [divRef]);

  return (
    <ThemeProvider theme={customTheme}>
      <AppBar position="static" color="secondary">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              <img alt="Kaboom" src={battleship} className="navbar-logo" />
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <Link to="about" style={{ textDecoration: "none" }}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">About Battleship</Typography>
                  </MenuItem>
                </Link>
                {userId
                  ? pages.map((page) => (
                      <Link
                        to={page.url}
                        style={{ textDecoration: "none" }}
                        key={page.url}
                      >
                        <MenuItem onClick={handleCloseNavMenu}>
                          <Typography textAlign="center">
                            {page.label}
                          </Typography>
                        </MenuItem>
                      </Link>
                    ))
                  : null}
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              <img alt="Kaboom" src={battleship} className="navbar-logo" />
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Link to="about" style={{ textDecoration: "none" }}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  About Battleship
                </Button>
              </Link>
              {userId
                ? pages.map((page) => (
                    <Link
                      to={page.url}
                      style={{ textDecoration: "none" }}
                      key={page.url}
                    >
                      <Button
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: "white", display: "block" }}
                      >
                        {page.label}
                      </Button>
                    </Link>
                  ))
                : null}
            </Box>
            <Box ref={divRef}>
              {userId ? (
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar alt="Homer Simpson" src={mee6} />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((setting) => (
                      <Link
                        to={setting.url}
                        style={{ textDecoration: "none" }}
                        key={setting.label}
                      >
                        <MenuItem
                          onClick={
                            setting.label === "Logout"
                              ? logout
                              : handleCloseUserMenu
                          }
                        >
                          <Typography textAlign="center">
                            {setting.label}
                          </Typography>
                        </MenuItem>
                      </Link>
                    ))}
                  </Menu>
                </Box>
              ) : (
                <LoginRegister />
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
export default Navbar;
