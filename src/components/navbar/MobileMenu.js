import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";

export default function MobileMenu({
  mobileMoreAnchorEl,
  mobileMenuId,
  handleMobileMenuClose,
  handleProfileMenuOpen,
  messages,
  notifications,
}) {
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  return (
    <>
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <MenuItem>
          <IconButton
            aria-label={`show ${messages} new messages`}
            color="inherit"
          >
            <Badge badgeContent={messages} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem>
          <IconButton
            aria-label={`show ${notifications} new notifications`}
            color="inherit"
          >
            <Badge badgeContent={notifications} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            {/* <AccountCircle /> */}
          </IconButton>
          <p>More Options</p>
        </MenuItem>
      </Menu>
    </>
  );
}
