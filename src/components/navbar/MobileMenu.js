import React from "react";
import { useHistory } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import ChatIcon from "@material-ui/icons/Chat";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

export default function MobileMenu({
  mobileMoreAnchorEl,
  mobileMenuId,
  handleMobileMenuClose,
  handleProfileMenuOpen,
  chats,
  favorites,
}) {
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const history = useHistory();
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
          <IconButton aria-label={`show ${chats} new chats`} color="inherit">
            <Badge badgeContent={chats} color="secondary">
              <ChatIcon />
            </Badge>
          </IconButton>
          <p>chats</p>
        </MenuItem>
        <MenuItem>
          <IconButton
            aria-label={`show ${favorites} new favorites`}
            color="inherit"
          >
            <Badge badgeContent={favorites} color="secondary">
              {/* if user has favorited a grant, the icon renders as a filled in heart with the number of favorties, if the user has not faved agrant, the icon is a heart border  */}
              {favorites === 0 ? (
                <FavoriteBorderIcon />
              ) : (
                <FavoriteIcon
                  onClick={() => {
                    handleMobileMenuClose();
                    history.push("/writer-favorites");
                  }}
                />
              )}
            </Badge>
          </IconButton>
          <p>Favorites</p>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          ></IconButton>
          <p>More Options</p>
        </MenuItem>
      </Menu>
    </>
  );
}
