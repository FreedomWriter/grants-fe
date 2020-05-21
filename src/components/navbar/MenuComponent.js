import React from "react";
import { useHistory } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { useSelector, useDispatch } from "react-redux";

import { logout } from "../../store/actions/LoginActions";

export default function MenuComponent({
  anchorEl,
  menuId,
  isMenuOpen,
  handleMenuClose,
}) {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem
          onClick={() => {
            handleMenuClose();
            return history.push("/Homepage");
          }}
        >
          Home
        </MenuItem>
        <MenuItem
          onClick={async () => {
            await handleMenuClose();
            return history.push("/profile");
          }}
        >
          Profile
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleMenuClose();
            return history.push("/Grants");
          }}
        >
          Grants
        </MenuItem>{" "}
        <MenuItem
          onClick={() => {
            dispatch(logout());
          }}
        >
          Log Out
        </MenuItem>
      </Menu>
    </>
  );
}
