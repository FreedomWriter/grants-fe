import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";

import { useStyles } from "./Navbar.styles";
import MobileMenu from "./MobileMenu";
import MenuComponent from "./MenuComponent";

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");

  // should ultimately come from global state
  const [notifications, setNotifications] = useState(15);
  const [messages, setMessages] = useState(5);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = () => {
    console.log({ searchTerm });
    setSearchTerm("");
  };

  const menuId = "primary-search-account-menu";

  const mobileMenuId = "primary-search-account-menu-mobile";

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Button component={Link} to="/Homepage" className={classes.title}>
            Granted
          </Button>

          {/* searchbar was originally here */}
          <div className={classes.grow} />
          <div className={classes.search} onClick={handleSubmit}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              data-testid="search"
              placeholder="Search…"
              value={searchTerm}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              onChange={(e) => handleChange(e)}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className={classes.sectionDesktop}>
            <IconButton
              aria-label={`show ${messages} new mails`}
              color="inherit"
            >
              <Badge
                data-testid="messageBadge"
                badgeContent={messages}
                color="secondary"
              >
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              aria-label={`show ${notifications} new notifications`}
              color="inherit"
            >
              <Badge
                badgeContent={notifications}
                color="secondary"
                data-testid="notificationBadge"
              >
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <MobileMenu
        mobileMoreAnchorEl={mobileMoreAnchorEl}
        mobileMenuId={mobileMenuId}
        handleMobileMenuClose={handleMobileMenuClose}
        handleProfileMenuOpen={handleProfileMenuOpen}
        messages={messages}
        notifications={notifications}
      />
      <MenuComponent
        anchorEl={anchorEl}
        menuId={menuId}
        isMenuOpen={isMenuOpen}
        handleMenuClose={handleMenuClose}
      />
    </div>
  );
}
