import * as React from "react";
import "./nav.css";
import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import FoundationIcon from "@mui/icons-material/Foundation";
import { Link, useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import jwt_decode from "jwt-decode";

function ResponsiveAppBar() {
  const navigate = useNavigate();
  const [payloadData, setPayloadData] = useState({});
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // Percaktim i aksesimit te update dhe delete
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // per te percaktuar qe update dhe delete do te shfaqen kur user te jete i loguar
    const jwt = window.localStorage.getItem("token");

    if (jwt) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }

    if (jwt) {
      const decodedToken = jwt_decode(jwt);
      setPayloadData(decodedToken);
    }
  }, []);

  const userProfile = JSON.parse(JSON.stringify(payloadData));

  const handleLogout = () => {
    // heq jwt token nga local storage
    window.localStorage.clear();
    // shfaqet linket register login
    setLoggedIn(false);
    navigate("/");
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <FoundationIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 1, ml: 5 }}
            />
            <Typography
              style={{ color: "black" }}
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 1,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".5rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              ROYAL
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
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to={`/`}
                    >
                      Home
                    </Link>
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to={`/Agents`}
                    >
                      Agents
                    </Link>
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to={`/Properties`}
                    >
                      Properties
                    </Link>
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
            <FoundationIcon
              sx={{ display: { xs: "flex", md: "none" }, ml: 2 }}
            />
            <Typography
              style={{ color: "black" }}
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              ROYAL
            </Typography>
            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, ml: 30 }}
            >
              <Button
                disableRipple
                onClick={handleCloseNavMenu}
                sx={{ my: 1, color: "black", display: "block", mr: 2 }}
              >
                <Link
                  style={{
                    textDecoration: "none",
                    color: "black",
                    letterSpacing: "2px",
                  }}
                  to={"/"}
                >
                  Home
                </Link>
              </Button>
              <Button
                disableRipple
                onClick={handleCloseNavMenu}
                sx={{ my: 1, color: "black", display: "block", mr: 2 }}
              >
                <Link
                  style={{
                    textDecoration: "none",
                    color: "black",
                    letterSpacing: "2px",
                  }}
                  to={"/Agents"}
                >
                  Agents
                </Link>
              </Button>
              <Button
                disableRipple
                onClick={handleCloseNavMenu}
                sx={{ my: 1, color: "black", display: "block", mr: 2 }}
              >
                <Link
                  style={{
                    textDecoration: "none",
                    color: "black",
                    letterSpacing: "2px",
                  }}
                  to={"/Properties"}
                >
                  Properties
                </Link>
              </Button>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              {!loggedIn ? (
                <>
                  <Button
                    id="register__button"
                    disableRipple
                    variant="outlined"
                    sx={{ my: 2 }}
                  >
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "black",
                        letterSpacing: "2px",
                      }}
                      to={"/Signin"}
                    >
                      Log In
                    </Link>
                  </Button>
                  <Link
                    style={{
                      textDecoration: "none",
                    }}
                    to={"/Signin"}
                  >
                    <IconButton sx={{ p: 0 }}>
                      <AccountCircleOutlinedIcon
                        id="register__avatar"
                        alt="User Avatar"
                        sx={{ width: "38px", height: "38px", color: "black" }}
                      />
                    </IconButton>
                  </Link>
                </>
              ) : (
                <Box>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/2.jpg"
                        sx={{ width: "40px", height: "40px" }}
                      />
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
                    <MenuItem
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                      }}
                      onClick={handleCloseUserMenu}
                    >
                      <Typography
                        sx={{
                          textTransform: "capitalize",
                        }}
                      >
                        {userProfile.fullname}{" "}
                        <i className="bx bxs-user-account"></i>
                      </Typography>
                      <Link
                        to={"/MyProperties"}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <Typography>My Properties</Typography>
                      </Link>

                      <Typography onClick={handleLogout}>
                        Logout<i className="bx bx-exit"></i>
                      </Typography>
                    </MenuItem>
                  </Menu>
                </Box>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
export default ResponsiveAppBar;
