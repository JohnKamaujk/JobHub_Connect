import * as React from "react";
import { useNavigate } from "react-router-dom";
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
import WorkIcon from "@mui/icons-material/Work";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import { userLogoutAction } from "../redux/actions/userAction";
import { DarkMode, LightMode } from "@mui/icons-material";

const pages = ["Home", "Log In"];

const Navbar = () => {
  //show or hide button
  const { userInfo } = useSelector((state) => state.signIn);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { palette } = useTheme();
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

  const handleMenuItemClick = (url) => {
    navigate(url); // Navigate to the specified URL using React Router
    handleCloseUserMenu(); // Close the user menu
  };

  // log out user
  const logOutUser = () => {
    dispatch(userLogoutAction());
    window.location.reload(true);
    setTimeout(() => {
      window.location.href = "/";
    }, 500);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: palette.primary.main }}>
      <Container>
        {/* principal Menu */}
        <Toolbar disableGutters>
          <WorkIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            JOBHUB CONNECT
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <WorkIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            JOBHUB CONNECT
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {/* menu desktop */}

            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                Home
              </Link>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Link
                to="/register"
                style={{ color: "white", textDecoration: "none" }}
              >
                Register
              </Link>
            </Button>
          </Box>
          <IconButton sx={{ mr: 4 }}>
            {palette.mode === "dark" ? (
              <DarkMode sx={{ color: "#ffffff", fontSize: "25px" }} />
            ) : (
              <LightMode sx={{ color: "#ffffff", fontSize: "25px" }} />
            )}
          </IconButton>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  sx={{ color: palette.primary.white }}
                  alt="Remy Sharp"
                  src=""
                />
              </IconButton>
            </Tooltip>
            <Menu
              PaperProps={{
                sx: {
                  "& 	.MuiMenu-list": {
                    bgcolor: "primary.white",
                    color: "white",
                  },
                },
              }}
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
              <MenuItem onClick={() => handleMenuItemClick("/admin/dashboard")}>
                <Typography
                  textAlign="center"
                  style={{
                    textDecoration: "none",
                    color: palette.secondary.main,
                  }}
                >
                  Admin Dashboard
                </Typography>
              </MenuItem>
              <MenuItem onClick={() => handleMenuItemClick("/user/dashboard")}>
                <Typography
                  textAlign="center"
                  style={{
                    textDecoration: "none",
                    color: palette.secondary.main,
                  }}
                >
                  User Dashboard
                </Typography>
              </MenuItem>

              {!userInfo ? (
                <MenuItem onClick={() => handleMenuItemClick("/login")}>
                  <Typography
                    textAlign="center"
                    style={{
                      textDecoration: "none",
                      color: palette.secondary.main,
                    }}
                  >
                    Log In
                  </Typography>
                </MenuItem>
              ) : (
                <MenuItem onClick={logOutUser}>
                  <Typography
                    style={{
                      textDecoration: "none",
                      color: palette.secondary.main,
                    }}
                    textAlign="center"
                  >
                    Log Out
                  </Typography>
                </MenuItem>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
